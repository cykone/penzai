import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { UserManager } from '../penzai-common/account/user.manager';
import { UserAccount } from '../penzai-common/account/user-account';
import { UserProfileService } from '../penzai-common/profile/user-profile.service';
import { Router } from '@angular/router';
import { UserProfileShort } from '../penzai-common/profile/models/user-profile-short';
import { AccountService } from '../penzai-common/account/account.service';

@Component({
  selector: 'app-members-main',
  templateUrl: './members-main.component.html',
  styleUrls: ['./members-main.component.css']
})
export class MembersMainComponent implements OnInit {

  constructor(private el: ElementRef,
    private userProfileService: UserProfileService,
    private accountService: AccountService,
    private router: Router) { }

  public currentProfile: UserProfileShort;

  public isDropDownActive: boolean;

  ngOnInit() {
    this.userProfileService.getShortProfile()
      .then((userProfileShort: UserProfileShort) => {
        if (userProfileShort == null) {
          this.router.navigate(['/']);
        }
        this.currentProfile = userProfileShort;
      });
  }

  public close(clickedEl): void {
    // this is a quick hack... think about the dom to fix this
    if (clickedEl.id !== 'openDropDown') {
      this.isDropDownActive = false;
    }
  }

  public openDropDown(): void {
    this.isDropDownActive = !this.isDropDownActive;
  }

  public closeDropDown(): void {

  }

  public deleteCurrentAccount() {
    this.accountService.deleteAccount(this.currentProfile.id).then((result: boolean) => {
      if (result) {
        // ok
        this.router.navigate(['/']);
      }
      console.log('Could not delete account');
    });
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    // console.log(this.el.nativeElement);
    // console.log(targetElement);
  }
}
