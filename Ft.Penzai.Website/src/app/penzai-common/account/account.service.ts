import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RegisterAccount } from './register-account';
import { RegisterResult } from './register-result';
import { LoginAccount } from './login-account';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { EmailConfirmationResult } from './email-confirmation-result';

import { environment } from '../../../environments/environment';
import { LoginResult } from './login-result';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
});

const serviceRoot = environment.penzaiApiRootUrl + '/accounts';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  public register(account: RegisterAccount): Observable<RegisterResult> {
    return this.httpClient.post<RegisterResult>(serviceRoot + '/register?confirmationRedirectUrl=' + environment.registerCallbackUrl,
      account, { headers: headers })
      .catch((err: HttpErrorResponse) => {
        console.log('http error: ' + err);

        const errRegisterResult = new RegisterResult(false);
        return Observable.of<RegisterResult>(errRegisterResult);
      });
  }

  public confirmEmail(userId: string, token: string) {
    return this.httpClient.get(serviceRoot + '/confirmEmail?userId=' + userId + '&token=' + token);
  }

  public login(account: LoginAccount): Observable<LoginResult> {
    return this.httpClient.post<LoginResult>(serviceRoot + '/login', account, { headers: headers })
      .catch((err: HttpErrorResponse) => {
        console.error(err);

        const loginResult = new LoginResult();
        loginResult.success = false;
        return Observable.of<LoginResult>(loginResult);
      });
  }

  public logout() {
    // todo implement serverside logoout
  }

  public deleteAccount(userId: string): Promise<boolean> {
    return this.httpClient.delete(serviceRoot + '/delete/' + userId, { headers: headers })
      .toPromise()
      .then(_ => true)
      .catch((err: HttpErrorResponse) => {
        console.error(err);
        return false;
      });
  }
}
