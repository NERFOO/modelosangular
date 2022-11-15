import { Component, OnInit, Input } from '@angular/core';
import { Coche } from './../../models/coche';

@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css']
})
export class HijococheComponent implements OnInit {
  @Input() public car! : Coche;
  public mensaje! : string;

  constructor() {
    //this.car = new Coche("Toyota", "Supra", 0, 20, false);

    //CUANDO RECIBIMOS UN OBJETO INPUT NO PODEMOS UTILIZARLOS EN EL CONSTRUCTOR
    
  }

  compobarEstado() : boolean {
    if(this.car.estado == false) {
      this.mensaje = "El coche esta apagado";
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = "El coche esta encendido";
      return true;
    }
  }

  encenderCoche() : void {
    this.car.estado = !this.car.estado;
    this.compobarEstado();
  }

  acelerarCoche () : void {
    if(this.compobarEstado() == false) {
      alert("Donde vas??? El coche esta apagado");
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
    }
  }

  ngOnInit(): void {
    this.compobarEstado();
  }

}
