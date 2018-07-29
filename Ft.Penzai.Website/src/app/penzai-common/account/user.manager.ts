import { Injectable } from '@angular/core';
import { UserAccount } from './user-account';
import { userAccountKey } from '../../penzai-common/constants/local-storage-constants';

@Injectable()
export class UserManager {

  private currentUser: UserAccount = null;

  constructor() { }

  public SetCurrentUser(userAccount: UserAccount) {
    this.currentUser = userAccount;
    localStorage.setItem(userAccountKey, JSON.stringify(userAccount));
  }

  public GetCurrentUser(): UserAccount {
    if (this.currentUser != null) {
      return this.currentUser;
    }

    this.currentUser = JSON.parse(localStorage.getItem(userAccountKey)) as UserAccount;
    return this.currentUser;
  }

  public RemoveCurrentUser() {
    localStorage.removeItem(userAccountKey);
  }

  public get hasAuthenticatedUser(): boolean {
    const user = this.GetCurrentUser();
    if (user == null) {
      return false;
    }

    // TODO implement expiration of jwt token
    return true;
  }
}
