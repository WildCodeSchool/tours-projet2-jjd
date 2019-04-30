import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BookingComponent } from './component/booking/booking.component';
import { EtablishementComponent } from './component/establishment/etablishement.component';
import { ProfileComponent } from './component/profile/profile/profile.component';
import { ProfileFormComponent } from './component/profile/profileForm/profileForm.component';
import { BookingListComponent } from './component/booking/booking-list/booking-list.component';
import { EstablishmentListComponent }
from './component/establishment/establishment-list/establishment-list.component';
import { EstablishmentDetailComponent }
from './component/establishment/establishment-detail/establishment-detail.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'establishment/list', component: EstablishmentListComponent, canActivate: [AuthGuard] },
  { path: 'establishment/detail/:id',
    component: EstablishmentDetailComponent },
  { path: 'establishment/create', component: EtablishementComponent, canActivate: [AuthGuard] },
  { path: 'establishment/:id', component: EtablishementComponent },
  { path: 'establishment/:id/update', component: EtablishementComponent, canActivate: [AuthGuard] },
  { path: 'booking/:id', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'booking/:id/update', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'establishment/:id/bookings', component: BookingListComponent, canActivate: [AuthGuard] },
  { path: 'establishment/:establishmentId/booking/create',
    component: BookingComponent },
  { path: 'profile-form', component: ProfileFormComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profileForm/update', component: ProfileFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgot', component: ForgotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
