import { Component, OnInit } from '@angular/core';
import { Profile } from '../../core/models/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  public profile: Profile;

  constructor(public profileService: ProfileService, private fb: FormBuilder) { }

  onSubmit() {}

  ngOnInit() {
    this.profileService.getProfile().subscribe(
      (param: Profile) => {
        this.profile = param;
        this.profileForm.patchValue(param);
      },
    );
  }

  profileForm = this.fb.group({

    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    key: ['', [Validators.required]],

    address: this.fb.group({
      street: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      number: ['', [Validators.required]],
    }),

    contact: this.fb.group({
      fax: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
    }),

  });

}
