import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Hospede} from '../hospede.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {v4 as uuid} from 'uuid';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-cadastro-hospede',
    templateUrl: './hospede-cadastro.component.html'
})
export class HospedeCadastroComponent implements OnInit {

    hospedeForm: FormGroup;
    hospedes: Hospede[] = [];

    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit(): void {
        this.hospedeForm = this.formBuilder.group({
            id: this.formBuilder.control(''),
            name: this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
            lastName: this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
            birthday: this.formBuilder.control('', [Validators.required]),
            document: this.formBuilder.control('', []),
            credcard: this.formBuilder.control(''),
            telefone: this.formBuilder.control('', []),
            checkin: this.formBuilder.control('', [])
        });
        this.hospedes = JSON.parse(this.storage.get('hospedes'));
        if (!this.hospedes) {
            this.hospedes = [];
        }
        this.route.params.subscribe(params => {
            if (params['id']) {
                const hospedeEdit = this.hospedes.find(hospede => hospede.id === params['id']);
                console.log(hospedeEdit);
                this.hospedeForm.setValue(hospedeEdit);
            }
        });
    }

    salvaHospede(hospede: Hospede) {
        if (!hospede.id) {
            hospede.id = uuid();
            this.hospedes.push(hospede);
        } else {
            const hospedefound = this.hospedes.find(h => hospede.id === h.id);
            this.hospedes[this.hospedes.indexOf(hospedefound)] = hospede;
        }
        this.storage.set('hospedes', JSON.stringify(this.hospedes));
        this.router.navigate(['/consulta-hospede'])
    }
}
