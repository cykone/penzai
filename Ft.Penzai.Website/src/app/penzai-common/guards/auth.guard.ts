import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserManager } from '../account/user.manager';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userManager: UserManager, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userManager.hasAuthenticatedUser) {
            return true;
        } else {
            console.log('Not Allowed.');
            this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
        }

        return false;
    }
}
