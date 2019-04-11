import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../../services/establishment.service';
import { Establishment } from '../../core/models/establishment';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-etablishement',
  templateUrl: './etablishement.component.html',
  styleUrls: ['./etablishement.component.css'],
})
export class EtablishementComponent implements OnInit {
  public establishment: Establishment;
  types = [
    { name: 'Bar' },
    { name: 'Restaurent' },
    { name: 'Computer' },
  ];

  constructor(
    public establishmentService: EstablishmentService,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.establishmentService.getEstablishment(id).subscribe(
        (param: Establishment) => {
          this.establishment = param;
          this.establishmentForm.patchValue(param);
        },
      );
    });
  }

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

  onSubmit() {
    console.log(JSON.stringify(this.establishmentForm.value));
  }

  get networksForms() {
    return this.establishmentForm.get('networks') as FormArray;
  }

  addNetworks() {
    const networks = this.fb.group({
      name: ['', [Validators.required]],
      link: ['', [Validators.required]],
    });
    this.networksForms.push(networks);
  }

  deleteNetworks(i) {
    this.networksForms.removeAt(i);
  }

  get mediaForms() {
    return this.establishmentForm.get('medias') as FormArray;
  }

  addMedia() {
    const medias = this.fb.group({
      url: ['', [Validators.required]],
      order: ['', [Validators.required]],
    });
    this.mediaForms.push(medias);
  }

  deleteMedia(i) {
    this.mediaForms.removeAt(i);
  }

}
