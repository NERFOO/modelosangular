import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic! : Comic;
  @Input() index! : number;

  constructor() { }

  @Output() deleteComic : EventEmitter<number> = new EventEmitter();
  eliminarComic() : void {
    this.deleteComic.emit(this.index);
    console.log("eliminar")
  }

  ngOnInit(): void {
  }

}
