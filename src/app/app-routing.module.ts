import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListaClientiComponent } from './components/clienti/lista-clienti/lista-clienti.component';
import { UserComponent } from './components/user/user.component';
import { ListaFattureComponent } from './components/fatture/lista-fatture/lista-fatture.component';
import { DettaglioClienteComponent } from './components/clienti/dettaglio-cliente/dettaglio-cliente.component';
import { ModificaClienteComponent } from './components/clienti/modifica-cliente/modifica-cliente.component';
import { DettaglioFatturaComponent } from './components/fatture/dettaglio-fattura/dettaglio-fattura.component';
import { NuovoClienteComponent } from './components/clienti/nuovo-cliente/nuovo-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'lista-clienti',
    component: ListaClientiComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'fatture',
    component: ListaFattureComponent
  },
  {
    path: 'dettaglio-cliente/:id',
    component: DettaglioClienteComponent
  },
  {
    path: 'modifica-cliente/:id',
    component: ModificaClienteComponent
  },
  {
    path: 'dettaglio-fattura/:id',
    component: DettaglioFatturaComponent
  },
  {
    path: 'nuovo-cliente',
    component: NuovoClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
