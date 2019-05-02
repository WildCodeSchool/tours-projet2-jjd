import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { BookingComponent } from '../app/component/booking/booking.component';
import { BookingListComponent } from './component/booking/booking-list/booking-list.component';
import { EtablishementComponent } from './component/establishment/etablishement.component';
import { ProfileFormComponent } from './component/profile/profileForm/profileForm.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstablishmentListComponent }
from './component/establishment/establishment-list/establishment-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EstablishmentDetailComponent }
from './component/establishment/establishment-detail/establishment-detail.component';
import { ProfileComponent } from './component/profile/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FilterBookingPipe } from './pipes/filterbooking.pipe';
import { NgbdCarouselConfig } from './component/carousel/carousel.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { CardComponent } from './component/card/card.component';
import { CardListComponent } from './component/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BookingComponent,
    EtablishementComponent,
    ProfileComponent,
    EstablishmentListComponent,
    FilterPipe,
    EstablishmentDetailComponent,
    ProfileComponent,
    LoginComponent,
    ForgotComponent,
    BookingListComponent,
    RegistrationComponent,
    FilterBookingPipe,
    NgbdCarouselConfig,
    SearchbarComponent,
    CardComponent,
    CardListComponent,
    ProfileFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['open-reza.herokuapp.com'],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function tokenGetter() {
  return localStorage.getItem('token');
}
