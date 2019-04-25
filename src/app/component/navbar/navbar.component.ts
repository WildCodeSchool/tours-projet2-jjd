import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public user = this.authenticationService.user;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.toastr.success('Success', 'Profile logout');
    this.router.navigateByUrl('/');
  }

}
