import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookingComponent } from './component/booking/booking.component';
import { EtablishementComponent } from './component/establishment/etablishement.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BookingListComponent } from './component/booking/booking-list/booking-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'establishment', component: EtablishementComponent  },
  { path: 'establishment/:id', component: EtablishementComponent  },
  { path: 'dashboard/user/:userId', component: DashboardComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'booking/:id/update', component: BookingComponent },
  { path: 'establishment/:id/bookings', component: BookingListComponent },
  { path: 'establishment/:establishmentId/booking/create', component: BookingComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
