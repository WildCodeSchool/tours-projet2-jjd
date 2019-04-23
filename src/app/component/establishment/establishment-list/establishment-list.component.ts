import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../../../services/establishment.service';
import { Establishment } from '../../../core/models/establishment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.css'],
})
export class EstablishmentListComponent implements OnInit {
  public establishments: Establishment[];
  // search data
  public filterData;

  constructor(
    public establishmentService: EstablishmentService,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
    this.getEstablishment();
  }

  // get listAll establishment
  getEstablishment() {
    this.establishmentService.getListEstablishment().subscribe(
      (param: Establishment[]) => {
        this.establishments = param;
      },
    );
  }

  // delete establishment with id
  deleteEstablishment(id, index) {
    const r = confirm('Are you sure?');
    if (r) {
      this.establishmentService.deleteEstablishment(id).subscribe(() => {
        this.establishments.splice(index, 1);
      });
      if (index) {
        this.toastr.success('Success', 'Establishment Deleted');
      }
    }
  }

}
