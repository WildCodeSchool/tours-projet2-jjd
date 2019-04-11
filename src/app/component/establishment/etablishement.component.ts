import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../../services/establishment.service';
import { Establishment } from '../../core/models/establishment';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-etablishement',
  templateUrl: './etablishement.component.html',
  styleUrls: ['./etablishement.component.css'],
})
export class EtablishementComponent implements OnInit {
  public establishment: Establishment[] = [];
  public q = [
    { name: 'ssfsf' },
  ];
  public test = 'demo';
  types = [
    { name: 'Bar' },
    { name: 'Restaurent' },
  ];

  constructor(public establishmentService: EstablishmentService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.establishmentService.getEstablishment().subscribe(
      (param: Establishment[]) => {
        this.establishment = param;
        /*
        this.establishmentForm.patchValue({
          address: {
            zipCode: param
          },
        });
         */
      },
    );

    this.establishmentForm.valueChanges.subscribe((value) => {
      console.log('Valeurs : ', value);
    });

    console.log(this.establishmentService);
    console.log(JSON.stringify(this.establishment));

  }

  establishmentForm = this.fb.group({
    name: ['', [Validators.required]],
    type: [this.types[1].name, [Validators.required]],
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
      site: ['', [Validators.required]],
    }),
    networks: this.fb.array([
      this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }),
    ]),
    media: this.fb.array([
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
    return this.establishmentForm.get('media') as FormArray;
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
