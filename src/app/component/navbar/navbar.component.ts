import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public profile;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private profileService: ProfileService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(
      (param) => {
        this.profile = param.firstName;
      });
  }

  logout() {
    this.authenticationService.logout();
    this.toastr.success('Success', 'Profile logout');
    this.router.navigateByUrl('/');
  }

}
