import { Component, OnInit } from '@angular/core';
import { Establishment } from '../../core/models/establishment';
import { EstablishmentService } from '../../services/establishment.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  public establishment: Establishment[];
  public allEstablishment: Establishment[];
  public on:boolean;

  // search data
  public filterData;

  constructor(public establishmentService: EstablishmentService,
  ) {
  }

  ngOnInit() {
    this.getEstablishment();
    this.getAllEstablishment();
  }

  // get listAll establishment by id
  getEstablishment() {
    this.establishmentService.getListEstablishment().subscribe(
      (param: Establishment[]) => {
        this.establishment = param;
      },
    );
  }

  // get listAll establishment
  getAllEstablishment() {
    this.establishmentService.getAllEstablishment().subscribe(
      (param: Establishment[]) => {
        this.allEstablishment = param;
      },
    );
  }
  // button on profile
  profileOn(param) {
    return (param ? this.on = true : this.on = false);
  }

}
