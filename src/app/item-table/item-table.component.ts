import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {
  @Input()
  items;

  @Output()
  saveToFav: EventEmitter<any> = new EventEmitter();

  @Output()
  removeFromFav: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  save(item) {
    this.saveToFav.emit(item);
  }

  removeFav(event) {
    this.removeFromFav.emit(event);
  }

  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement
      .textContent;
  }
}
