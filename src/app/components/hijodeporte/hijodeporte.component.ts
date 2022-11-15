import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css']
})
export class HijodeporteComponent implements OnInit {
  @Input() sport! : string;
  //VAMOS A  RECIBIR UN METODO DEL PADRE MEDIANTE props
  @Output() seleccionarDeporte : EventEmitter<any> = new EventEmitter();

  seleccionarFavoritoHijo() : void {
    //CUANDO REALICEMOS CLICK EN EL HIJO LLAMAMOS AL PADRE
    this.seleccionarDeporte.emit(this.sport);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
