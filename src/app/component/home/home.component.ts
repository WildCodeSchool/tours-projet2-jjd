import { Component, OnInit } from '@angular/core';
import { Establishment } from '../../core/models/establishment';
import { EstablishmentService } from '../../services/establishment.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-body',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  public establishment: Establishment[];
  public allEstablishment: Establishment[];
  public user = this.authenticationService.user;

  // search data
  public filterData;

  constructor(public establishmentService: EstablishmentService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    if (this.user) {
      this.getEstablishment();
    }
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

}
