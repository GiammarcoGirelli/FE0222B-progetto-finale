import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SedeApi } from 'src/app/models/sede-api';
import { ClientiService } from 'src/app/services/clienti.service';

@Component({
  selector: 'app-nuovo-cliente',
  templateUrl: './nuovo-cliente.component.html',
  styleUrls: ['./nuovo-cliente.component.scss']
})
export class NuovoClienteComponent implements OnInit {

  formNuovoCliente!: FormGroup

  nuovoCliente = {
  email : "",
  id : "",
  partitaIva : "",
  ragioneSociale : "",
  telefono : "",
  //tipoCliente= "SRL"
  pec : "",
  nomeContatto : "",
  cognomeContatto : "",
  telefonoContatto : "",
  emailContatto : "",
  //indirizzoSedeLegale : new SedeApi(),
  //indirizzoSedeLegale.cap=""
  //indirizzoSedeLegale.civico = "via delle viex"
  //indirizzoSedeLegale.localalità = "Romia"
  //indirizzoSedeLegale.provincia= new ProvinciaApi();
  //indirizzoSedeLegale.provincia.id = 1;
  //indirizzoSedeLegale.provincia.nome = "Roma";
  //indirizzoSedeLegale.provincia.sigla = "RM";
  dataInserimento : "",
  dataUltimoContatto : "",
  //indirizzoSedeOperativa = new SedeApi(),
  //indirizzoSedeOperativa.cap="00000"
  //indirizzoSedeOperativa.civico = "via delle viex"
  //indirizzoSedeOperativa.localalità = "Romia"
  //indirizzoSedeOperativa.provincia= new ProvinciaApi();
  //indirizzoSedeOperativa.provincia.id = 1;
  //indirizzoSedeOperativa.provincia.nome = "Roma";
  //indirizzoSedeOperativa.provincia.sigla = "RM";
  //indirizzoSedeOperativa.comune = new ComuneApi();
  //indirizzoSedeOperativa.comune.id= 1;
  //indirizzoSedeOperativa.comune.nome= "LASTRA A SIGNA",
  //indirizzoSedeOperativa.comune.provincia= nuovoCliente.indirizzoSedeOperativa.provincia;
  //indirizzoSedeLegale.comune = new ComuneApi();
  //indirizzoSedeLegale.comune.id= 1;
  //indirizzoSedeLegale.comune.nome= "LASTRA A SIGNA",
  //indirizzoSedeLegale.comune.provincia= nuovoCliente.indirizzoSedeOperativa.provincia
  }

  constructor(private formBuilder: FormBuilder, private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.formNuovoCliente = this.formBuilder.group({
      email: this.formBuilder.control(null, Validators.required),
      partitaIva: this.formBuilder.control(null, Validators.required),
      ragioneSociale: this.formBuilder.control(null, Validators.required),
      telefono: this.formBuilder.control(null, Validators.required),
      pec: this.formBuilder.control(null, Validators.required),
      nomeContatto: this.formBuilder.control(null, Validators.required),
      cognomeContatto: this.formBuilder.control(null, Validators.required),
      telefonoContatto: this.formBuilder.control(null, Validators.required),
      emailContatto: this.formBuilder.control(null, Validators.required),
      indirizzoSedeLegale: this.formBuilder.control(null, Validators.required),
      dataInserimento: this.formBuilder.control(null, Validators.required),
      dataUltimoContatto: this.formBuilder.control(null, Validators.required),
      //: this.formBuilder.control(null, Validators.required),
      //: this.formBuilder.control(null, Validators.required),
      //: this.formBuilder.control(null, Validators.required),
      //: this.formBuilder.control(null, Validators.required),
    })
  }

  aggiungiCliente(form: any) {
    this.nuovoCliente.nomeContatto = form.value.nomeContatto;
    this.nuovoCliente.cognomeContatto = form.value.cognomeContatto;
    this.nuovoCliente.email = form.value.email;
    this.nuovoCliente.emailContatto = form.value.emailContatto;
    this.nuovoCliente.id = form.value.id;
    this.nuovoCliente.partitaIva = form.value.partitaIva;
    this.nuovoCliente.ragioneSociale = form.value.ragioneSociale;
    this.nuovoCliente.pec = form.value.pec;
    this.nuovoCliente.telefono = form.value.telefono;
    this.nuovoCliente.telefonoContatto = form.value.telefonoContatto;
    //this.nuovoCliente.indirizzoSedeLegale = form.value.indirizzoSedeLegale;
    this.nuovoCliente.dataInserimento = form.value.dataInserimento;
    this.nuovoCliente.dataUltimoContatto = form.value.dataUltimoContatto;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;
    //this.nuovoCliente. = form.value.;



    //this.clientiService.aggiungiCliente(this.nuovoCliente).subscribe(res => {
    //  console.log(res);
    //  this.formNuovoCliente.reset
    //  //this.router.navigate(['/login']);
    //});
  }
}
