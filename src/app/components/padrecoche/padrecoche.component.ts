import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-padrecoche',
  templateUrl: './padrecoche.component.html',
  styleUrls: ['./padrecoche.component.css']
})
export class PadrecocheComponent implements OnInit {
  public coches : Array<Coche>;

  constructor() {
    this.coches = [
      new Coche("Mazda", "RX9", 0, 15, false),
      new Coche("Maclaren", "P1", 0, 28, false),
      new Coche("Ford", "Mustang Cobra GT 3500", 0, 10, false),
    ];
  }

  ngOnInit(): void {
  }

}
