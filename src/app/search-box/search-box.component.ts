import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @ViewChild('keywords')
  inputField;

  @Output()
  searchEvent: EventEmitter<String> = new EventEmitter<String>();

  @Output()
  clear: EventEmitter<String> = new EventEmitter<String>();

  constructor() {}

  ngOnInit() {}

  search(keywords) {
    if (keywords) {
      this.searchEvent.emit(keywords);
    }
  }

  keyup(event) {
    if (this.inputField.nativeElement.value === '') {
      this.clear.emit();
    }
    if (event.key === 'Enter') {
      this.search(this.inputField.nativeElement.value);
    }
  }
}
