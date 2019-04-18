import {Component, Inject, OnInit} from '@angular/core';
import {Hospede} from '../hospede.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {HospedeService} from '../hospede.service';

@Component({
    selector: 'app-consulta-hospede',
    templateUrl: './hospede-consulta.component.html',
    styleUrls: ['./hospede-consulta.component.scss']
})
export class HospedeConsultaComponent implements OnInit {

    hospedes: Hospede[] = [];

    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
                private hospedeService: HospedeService) {
    }

    ngOnInit(): void {
        const array = JSON.parse(this.storage.get('hospedes'));
        this.hospedes = array;
    }

    removerHospede(hospede: Hospede) {
        this.hospedes.splice(this.hospedes.indexOf(hospede), 1);
        this.storage.set('hospedes', this.hospedes);
    }

    exportar() {
        this.hospedeService.exportar(this.hospedes)
            .subscribe(
                response => {
                    console.log('Lista de hospedes exportada com sucesso!');
                }, response => {
                    console.log('Houve um erro ao exportar hospedes', response.error);
                }
            );
    }
}
