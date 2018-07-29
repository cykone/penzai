import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserManager } from '../account/user.manager';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public userManager: UserManager) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.userManager.hasAuthenticatedUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.userManager.GetCurrentUser().token}`
                }
            });
        }

        return next.handle(request);
    }
}
