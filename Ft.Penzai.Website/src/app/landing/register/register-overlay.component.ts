import { Component, OnInit, ComponentRef, OnDestroy } from '@angular/core';
import { AccountService } from '../../penzai-common/account/account.service';
import { RegisterAccount } from '../../penzai-common/account/register-account';
import { RegisterResult } from '../../penzai-common/account/register-result';
import { Router } from '@angular/router';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-register',
  templateUrl: './register-overlay.component.html',
  styleUrls: ['./register-overlay.component.css']
})
export class RegisterOverlayComponent implements OnInit, OnDestroy {

  public account: RegisterAccount = new RegisterAccount();

  constructor(public overlayRef: OverlayRef, private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.overlayRef.backdropClick().subscribe(_ => this.cancel());
  }

  ngOnDestroy() {
    // TODO check for possible memory leak... or is it good with dispose?
    console.log('on destroy overlay component called.');
  }

  public cancel(): void {
    this.overlayRef.dispose();
  }

  public onSubmit(): void {
    this.accountService.register(this.account)
      .subscribe((registerResult: RegisterResult) => {
        if (registerResult.success) {
          this.overlayRef.dispose();
          this.router.navigate(['/check-emails'], { queryParams: { email: this.account.email } });
        } else {
          console.log('Result: Login Failed');
          // TODO show error message
        }
      }, (err: any) => {
        console.log('Error while loggging in' + err);
      });
  }
}
