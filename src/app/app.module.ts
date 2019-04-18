import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AboutComponent} from './about/about.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {HomeComponent} from './home/home.component';
import {HospedeCadastroComponent} from './hospede/cadastro/hospede-cadastro.component';
import {SharedModule} from './shared/shared.module';
import {StorageServiceModule} from 'angular-webstorage-service';
import {HospedeConsultaComponent} from './hospede/cosulta/hospede-consulta.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HospedeService} from './hospede/hospede.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        HomeComponent,
        HospedeCadastroComponent,
        HospedeConsultaComponent

    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        SharedModule,
        StorageServiceModule,
        HttpClientModule
    ],
    providers: [HttpClient, HospedeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
