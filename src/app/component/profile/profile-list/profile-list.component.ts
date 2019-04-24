import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from '../../../core/models/profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  public profile: Profile;

  constructor(
    public profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileService.getListProfile().subscribe(
      (profile: Profile) => {
        console.log(this.profile = profile);
      },
    );
  }
}
