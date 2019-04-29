import { Component, OnInit } from '@angular/core';
import { Profile } from '../../core/models/profile';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  public profile: Profile;
  loginForm: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder,
              public authenticationService: AuthenticationService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['Skye44@yahoo.com', Validators.required],
      password: ['Skye44@yahoo.com', Validators.required],
    });
    // reset login status
    this.authenticationService.logout();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .subscribe(
        (data) => {
          this.toastr.success('Success', 'Connection success');
          this.router.navigateByUrl('establishment/list');
        },
        (error) => {
          this.error = error;
          this.loginForm.reset();
        });
  }
}
