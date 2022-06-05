import { Component, OnInit } from '@angular/core';
import { ClientiApi } from 'src/app/models/clienti-api';
import { Router,ActivatedRoute } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti.service';
import { DettaglioClientiService } from 'src/app/services/dettaglio-clienti.service';

@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.scss']
})
export class DettaglioClienteComponent implements OnInit {

  dettaglioCliente!: ClientiApi

  idCliente: any

  constructor(
    private router: Router,
    private clientiService: ClientiService,
    private dettaglioClientiService: DettaglioClientiService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCliente = +params['id'];
    });
    this.getDettaglioCliente(this.idCliente);
  }

  getDettaglioCliente(idcliente: any) {
    this.dettaglioClientiService.getDettaglioCliente(idcliente).subscribe((res)=>{
    this.dettaglioCliente = res
    })

  }


}
