import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.css']
})
export class GaleriaFotosComponent implements OnInit {

  searchFilter = new Subject<string>();
  public nomeFilme: string;

  constructor() { }

  ngOnInit() {
  }

}
