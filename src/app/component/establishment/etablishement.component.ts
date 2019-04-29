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
    { name: 'Restaurant' },
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
        name: [''],
        link: [''],
      }),
    ]),
    medias: this.fb.array([
      this.fb.group({
        url: [''],
        order: [''],
      }),
    ]),
  });

  // establishmentForm onSubmit create or update, redirect to '/establishment/list'
  onSubmit() {
    if (this.id) {

      this.toastr.warning('Being update', 'Establishment being Updater');

      this.establishmentService.putEstablishment(
        this.id, this.establishmentForm.value).subscribe(
        (establishment: Establishment) => {
          this.establishmentForm.patchValue(establishment);
          this.toastr.clear();
          this.toastr.success('success', 'Establishment Updater');
          this.router.navigateByUrl('/establishment/list');
        },
        (error) => {
          this.toastr.clear();
          this.toastr.error(`Error ${error}`);
        });
    } else {

      this.toastr.warning('Being create', 'Establishment being Create');

      this.establishmentService.postEstablishment(
        this.establishmentForm.value).subscribe(
          (establishment: Establishment) => {
            this.establishmentForm.patchValue(establishment);
            this.toastr.clear();
            this.toastr.success('success', 'Establishment Created');
            this.router.navigateByUrl('/establishment/list');
          },
          (error) => {
            this.toastr.clear();
            this.toastr.error(`Error ${error}`);
          });
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
  get mediasForms() {
    return this.establishmentForm.get('medias') as FormArray;
  }

  // add media form establishmentForm
  addMedias() {
    const medias = this.fb.group({
      url: ['', [Validators.required]],
      order: ['', [Validators.required]],
    });
    this.mediasForms.push(medias);
  }

  // delete media establishmentForm
  deleteMedias(i) {
    this.mediasForms.removeAt(i);
  }

}
