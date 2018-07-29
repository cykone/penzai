import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserProfileShort } from './models/user-profile-short';
import { UserManager } from '../account/user.manager';
import { environment } from '../../../environments/environment';

const serviceRoot = environment.penzaiApiRootUrl + '/Profile';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable()
export class UserProfileService {

  constructor(private httpClient: HttpClient, private userManager: UserManager) { }

  public getShortProfile(): Promise<UserProfileShort> {
    const currentUser = this.userManager.GetCurrentUser();
    if (!currentUser) {
      throw new Error('No user logged in');
    }

    return this.httpClient
      .get<UserProfileShort>(serviceRoot + '/short/' + currentUser.userId, { headers: headers })
      .toPromise()
      .catch(err => {
        console.log('error while fetchig short profile!!!');
        // TODO handel stuff
        console.log(err);
        return Promise.resolve(null);
      });
  }
}
