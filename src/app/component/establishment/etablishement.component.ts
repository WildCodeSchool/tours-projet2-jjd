import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../../services/establishment.service';
import { Establishment } from '../../core/models/establishment';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-etablishement',
  templateUrl: './etablishement.component.html',
  styleUrls: ['./etablishement.component.css'],
})
export class EtablishementComponent implements OnInit {
  public establishment: Establishment;
  public id: string;
  types = [
    { name: 'Bar' },
    { name: 'Restaurent' },
  ];

  constructor(
    public establishmentService: EstablishmentService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {
  }

  // route update recover id establishment
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      if (this.id) {
        this.establishmentService.getEstablishment(this.id).subscribe(
          (param: Establishment) => {
            this.establishment = param;
            this.establishmentForm.patchValue(param);
          },
        );
      }
    });
  }

  // establishmentForm
  establishmentForm = this.fb.group({
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    address: this.fb.group({
      street: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      number: ['', [Validators.required]],
    }),
    description: ['', [Validators.required]],
    contact: this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
    }),
    networks: this.fb.array([
      this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }),
    ]),
    medias: this.fb.array([
      this.fb.group({
        url: ['', [Validators.required]],
        order: ['', [Validators.required]],
      }),
    ]),
  });

  // establishmentForm onSubmit create or update, redirect to '/establishment/list'
  onSubmit() {
    if (this.id) {
      const updateEstablishment = this.establishmentService.putEstablishment(
        this.id, this.establishmentForm.value).subscribe(
        (establishment: Establishment) =>
          this.establishmentForm.patchValue(establishment),
      );
      if (updateEstablishment) {
        this.toastr.success('Success', 'Establishment Updater');
      }
      this.router.navigateByUrl('/establishment/list');
    } else {
      const createEstablishment = this.establishmentService.postEstablishment(
        this.establishmentForm.value).subscribe(
        (establishment: Establishment) =>
          this.establishmentForm.patchValue(establishment),
      );
      if (createEstablishment) {
        this.toastr.success('Success', 'Establishment Create');
      }
      this.router.navigateByUrl('/establishment/list');
    }
  }

  // get networks establishmentForm
  get networksForms() {
    return this.establishmentForm.get('networks') as FormArray;
  }

  // add Networks establishmentForm
  addNetworks() {
    const networks = this.fb.group({
      name: ['', [Validators.required]],
      link: ['', [Validators.required]],
    });
    this.networksForms.push(networks);
  }

  // delete networks establishmentForm
  deleteNetworks(i) {
    this.networksForms.removeAt(i);
  }

  // get media establishmentForm
  get mediaForms() {
    return this.establishmentForm.get('medias') as FormArray;
  }

  // add media form establishmentForm
  addMedia() {
    const medias = this.fb.group({
      url: ['', [Validators.required]],
      order: ['', [Validators.required]],
    });
    this.mediaForms.push(medias);
  }

  // delete media establishmentForm
  deleteMedia(i) {
    this.mediaForms.removeAt(i);
  }

}
