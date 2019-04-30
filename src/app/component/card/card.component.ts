import { Component, OnInit, Input } from '@angular/core';
import { Establishment } from 'src/app/core/models/establishment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  establishment: Establishment;
}
