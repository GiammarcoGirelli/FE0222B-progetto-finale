import { Component, OnInit } from '@angular/core';
import { Fatture } from 'src/app/models/fatture';
import { FattureService } from 'src/app/services/fatture.service';

@Component({
  selector: 'app-lista-fatture',
  templateUrl: './lista-fatture.component.html',
  styleUrls: ['./lista-fatture.component.scss']
})
export class ListaFattureComponent implements OnInit {

  datiFatture: any;

  fatture!: Fatture[];

  constructor(private fattureService: FattureService) { }

  ngOnInit(): void {
    this.fattureService.getFattureGetAll(0).subscribe((p)=>{
      this.datiFatture = p
      this.fatture = this.datiFatture.content
  })
  }
}
