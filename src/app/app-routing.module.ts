import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookingComponent } from './component/booking/booking.component';
import { EtablishementComponent } from './component/establishment/etablishement.component';
import { ProfileListComponent } from './component/profile/profile-list/profile-list.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BookingListComponent } from './component/booking/booking-list/booking-list.component';
import { EstablishmentListComponent }
from './component/establishment/establishment-list/establishment-list.component';
import { EstablishmentDetailComponent }
from './component/establishment/establishment-detail/establishment-detail.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'establishment/list', component: EstablishmentListComponent },
  { path: 'establishment/detail/:id', component: EstablishmentDetailComponent },
  { path: 'establishment/create', component: EtablishementComponent },
  { path: 'establishment/:id', component: EtablishementComponent },
  { path: 'establishment/:id/update', component: EtablishementComponent },
  { path: 'dashboard/user/:userId', component: DashboardComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'booking/:id/update', component: BookingComponent },
  { path: 'establishment/:id/bookings', component: BookingListComponent },
  { path: 'establishment/:establishmentId/booking/create', component: BookingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/list', component: ProfileListComponent },
  { path: 'profile/update', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgot', component: ForgotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
