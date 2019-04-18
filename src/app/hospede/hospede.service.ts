import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Hospede} from './hospede.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HospedeService {
    private urlFicticio = 'https://rest.hospedes.api/';

    constructor(private http: HttpClient) {
    }

    exportar(hospedes: Hospede[]): Observable<HttpResponse<Hospede>> {
        return this.http.post<Hospede>(this.urlFicticio, hospedes, {observe: 'response'});
    }
}
