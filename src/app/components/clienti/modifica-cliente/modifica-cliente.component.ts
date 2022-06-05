import { Component, OnInit } from '@angular/core';
import { ClientiApi } from 'src/app/models/clienti-api';
import { ClientiService } from 'src/app/services/clienti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifica-cliente',
  templateUrl: './modifica-cliente.component.html',
  styleUrls: ['./modifica-cliente.component.scss']
})
export class ModificaClienteComponent implements OnInit {

  constructor(
    private clientiService: ClientiService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  aggiungiCliente(nuovoCliente: ClientiApi) {
    console.log(nuovoCliente);
    this.clientiService.aggiungiCliente(nuovoCliente)
    // .subscribe((res) => {
    //   console.log(res);
      this.router.navigate(['/lista-clienti']);
    }
    // )
    ;

  }
// }
