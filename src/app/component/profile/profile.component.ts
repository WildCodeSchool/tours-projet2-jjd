import { Component, OnInit } from '@angular/core';
import { Profile } from '../../core/models/profile'
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Profile[] = [];

  constructor(public profileService: ProfileService) { }


  model = new Profile('', '', '', '', '', { street: '', city: '', number: '', zipCode: '' }, { fax: '', phone: '', email: '' });

   submitted = false;

  onSubmit() {
    this.submitted = true;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }



  newProfile() {
    this.model = new Profile('', '', '', '', '', { street: '', city: '', number: '', zipCode: '' }, { fax: '', phone: '', email: '' });
  } 





  ngOnInit() {
    this.profileService.getProfile().subscribe(
      (param: Profile[]) => {
        this.profile=param;
    
  }
    )
  }
}
