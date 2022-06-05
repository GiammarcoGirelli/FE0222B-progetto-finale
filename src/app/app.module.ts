import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { ListaClientiComponent } from './components/clienti/lista-clienti/lista-clienti.component';
import { FattureClientiComponent } from './components/clienti/fatture-clienti/fatture-clienti.component';
import { DettaglioClienteComponent } from './components/clienti/dettaglio-cliente/dettaglio-cliente.component';
import { ModificaClienteComponent } from './components/clienti/modifica-cliente/modifica-cliente.component';
import { NuovaFatturaComponent } from './components/fatture/nuova-fattura/nuova-fattura.component';
import { ListaFattureComponent } from './components/fatture/lista-fatture/lista-fatture.component';
import { DettaglioFatturaComponent } from './components/fatture/dettaglio-fattura/dettaglio-fattura.component';
import { UserComponent } from './components/user/user.component';
import { NuovoClienteComponent } from './components/clienti/nuovo-cliente/nuovo-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ListaClientiComponent,
    FattureClientiComponent,
    DettaglioClienteComponent,
    ModificaClienteComponent,
    NuovaFatturaComponent,
    ListaFattureComponent,
    DettaglioFatturaComponent,
    UserComponent,
    NuovoClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
