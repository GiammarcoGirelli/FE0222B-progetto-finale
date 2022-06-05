import { Component, OnInit } from '@angular/core';
import { Fatture } from 'src/app/models/fatture';
import { FattureService } from 'src/app/services/fatture.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio-fattura',
  templateUrl: './dettaglio-fattura.component.html',
  styleUrls: ['./dettaglio-fattura.component.scss']
})
export class DettaglioFatturaComponent implements OnInit {

  fatturaCliente!: Fatture

  idFattura : any

  constructor(
    private fattureService: FattureService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idFattura = +params['id'];
    });
    this.getFatturaCliente(this.idFattura);
  }


  getFatturaCliente(idFattura: any) {
    this.fattureService.getFatturaCliente(idFattura).subscribe((res)=>{
    this.fatturaCliente = res
    })
    console.log(this.idFattura)
  }
}
