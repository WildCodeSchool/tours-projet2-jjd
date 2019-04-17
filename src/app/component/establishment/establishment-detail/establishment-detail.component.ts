import { Component, OnInit } from '@angular/core';
import { Establishment } from '../../../core/models/establishment';
import { EstablishmentService } from '../../../services/establishment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-establishment-detail',
  templateUrl: './establishment-detail.component.html',
  styleUrls: ['./establishment-detail.component.css'],
})
export class EstablishmentDetailComponent implements OnInit {
  public establishment: Establishment;
  public id;

  constructor(
    public establishmentService: EstablishmentService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.getEstablishment();
    });
  }

  // get list establishment by id
  getEstablishment() {
    this.establishmentService.getEstablishment(this.id).subscribe(
      (param: Establishment) => {
        this.establishment = param;
      },
    );
  }

}
