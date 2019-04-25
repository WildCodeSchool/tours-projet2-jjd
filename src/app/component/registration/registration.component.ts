import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Profile } from '../../core/models/profile';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public profile: Profile;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              public authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    // reset login status
    this.authenticationService.logout();
  }
  onSubmit() {
  }

}
