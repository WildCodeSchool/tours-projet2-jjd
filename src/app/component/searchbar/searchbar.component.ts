import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {

  public filterData: string;

  constructor() {
  }

  ngOnInit() {
  }

  @Output()
  searchChange: EventEmitter<string> = new EventEmitter();

  sendSearchToParent() {
    this.searchChange.emit(this.filterData);
  }
}
