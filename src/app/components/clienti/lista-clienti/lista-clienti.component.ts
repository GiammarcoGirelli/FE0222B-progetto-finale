import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/services/clienti.service';
import { ClientiApi } from 'src/app/models/clienti-api';
import { ComuneApi } from 'src/app/models/comune-api';
import { DettaglioClientiService } from 'src/app/services/dettaglio-clienti.service';
import { Router } from '@angular/router';
import { NuovaFatturaComponent } from '../../fatture/nuova-fattura/nuova-fattura.component';
import { SedeApi } from 'src/app/models/sede-api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProvinciaApi } from 'src/app/models/provincia-api';




@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.scss']
})
export class ListaClientiComponent implements OnInit {

  res: any;

  clienti!: ClientiApi[];

  tipoCliente: any

  // nuovoCliente: FormGroup

  constructor(
    private clientiService: ClientiService,
    private dettaglioClientiService: DettaglioClientiService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.clientiService.getClientiGetAll(0).subscribe((p) => {
      this.res = p;
      this.clienti = this.res.content;
      console.log(this.clienti);
    })
    this.dettaglioClientiService.getClientiTipoCliente(0).subscribe((p)=>{
      this.tipoCliente = p;
    })

  }

  aggiungiCliente(/*nuovoCliente: ClientiApi*/) {
    // console.log(nuovoCliente);
    var nuovoCliente = new ClientiApi();



    this.clientiService.aggiungiCliente(nuovoCliente)
      this.router.navigate(['/lista-clienti']);
  };
  // redirectDettaglio(idCliente : any){
  //     console.log(idCliente)
  //     this.router.navigate(['/dettaglio-cliente'])
  // }


}

