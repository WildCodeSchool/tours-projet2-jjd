import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../core/models/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profileForm.component.html',
  styleUrls: ['./profileForm.component.css'],
})
export class ProfileFormComponent implements OnInit {

  constructor(
    public profileService: ProfileService,
    private fb: FormBuilder,
    private router: Router,
    ) { }

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

  ngOnInit() {
    this.profileService.getProfile().subscribe(
      (profile: Profile) => {
        this.profileForm.patchValue(profile);
      },
    );
  }

  onSubmit() {

    this.profileService.putProfile(this.profileForm.value).subscribe(
      (profile: Profile) => {
        this.profileForm.patchValue(profile);
        this.router.navigate(['/profile/list']);
      },
    );
  }
}
