import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Profile } from '../../core/models/profile';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public profile: Profile;

  constructor(private fb: FormBuilder, public authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  registrationForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    this.authenticationService.postAuthentication(
      this.registrationForm.value).subscribe(
      (profile: Profile) =>
        this.registrationForm.patchValue(profile),
    );
  }

}
