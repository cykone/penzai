import { Component, OnInit } from '@angular/core';
import { LoginAccount } from '../../penzai-common/account/login-account';
import { AccountService } from '../../penzai-common/account/account.service';
import { LoginResult } from '../../penzai-common/account/login-result';
import { Router } from '@angular/router';
import { UserManager } from '../../penzai-common/account/user.manager';
import { UserAccount } from '../../penzai-common/account/user-account';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private overlayRef: OverlayRef,
    private accountService: AccountService,
    private userManager: UserManager,
    private router: Router) { }

  public isLoading = false;

  public loginModel = new LoginAccount();

  public errorMsg = '';

  ngOnInit() {
    this.overlayRef.backdropClick().subscribe(_ => this.cancel());
  }

  public cancel(): void {
    this.overlayRef.dispose();
  }

  public onSubmit() {
    this.isLoading = true;
    this.errorMsg = '';
    this.accountService.login(this.loginModel)
      .subscribe((loginResult: LoginResult) => {
        if (loginResult.success) {
          this.userManager.SetCurrentUser(new UserAccount(loginResult.userId, loginResult.userName, loginResult.token));
          if (!loginResult.onBoardingCompleted) {
            this.router.navigate(['/start']);
          } else {
            this.router.navigate(['/dashboard']);
          }
          this.overlayRef.dispose();
        } else {
          if (loginResult.isNotAllowed) {
            this.router.navigate(['/check-emails']);
            this.overlayRef.dispose();
          } else if (loginResult.invalidUserPw) {
            this.errorMsg = 'Invalid combination of email and password.';
          }
        }
        this.isLoading = false;
      }, (err: any) => {
        console.error(err);
        this.isLoading = false;
      });
  }

}
