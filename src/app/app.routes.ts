import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HospedeCadastroComponent} from './hospede/cadastro/hospede-cadastro.component';
import {HospedeConsultaComponent} from './hospede/cosulta/hospede-consulta.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro-hospede', component: HospedeCadastroComponent},
    {path: 'consulta-hospede', component: HospedeConsultaComponent},
    {path: 'edit-hospede/:id', component: HospedeCadastroComponent}];
