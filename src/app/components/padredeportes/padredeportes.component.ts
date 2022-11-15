import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent implements OnInit {
  public deportes : Array<string>;
  public mensaje! : string;

  //CUANDO HAGAMOS EMIT LEERA ESTE METODO
  seleccionarDeportePadre(event : string) : void {
    this.mensaje = "Deporte seleccionado " + event;
  }

  constructor() {
    this.deportes = ["Pin Pong", "Ajedrez", "Balonmano", "Baloncesto"];
  }

  ngOnInit(): void {
  }

}
