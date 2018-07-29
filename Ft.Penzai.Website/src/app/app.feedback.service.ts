import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';



import { environment } from '../environments/environment';
import { Feedback } from './app.feedback.class';


const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
});

const serviceRoot = environment.penzaiApiRootUrl + '/contact';

@Injectable()
export class FeedbackService {

    constructor(private httpClient: HttpClient) { }

    public sendFeedback(feedback: Feedback): Promise<boolean> {
        return this.httpClient.post(serviceRoot + '/feedback', feedback)
            .toPromise()
            .then(_ => {
                return Promise.resolve(true);
            })
            .catch(err => {
                return Promise.resolve(false);
            });
    }
}
