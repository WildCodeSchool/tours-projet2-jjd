import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from '../../../core/models/profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profile: Profile;

  constructor(
    public profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(
      (profile: Profile) => {
        this.profile = profile;
      },
    );
  }
}
