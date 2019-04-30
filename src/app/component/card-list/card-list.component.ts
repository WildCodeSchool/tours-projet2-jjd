import { Component, OnInit, Input } from '@angular/core';
import { Establishment } from 'src/app/core/models/establishment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  establishments: Establishment[];
  @Input()
  title: string;
  @Input()
  filter: string;
  @Input()
  type: string;
}
