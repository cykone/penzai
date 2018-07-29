import { Injectable } from '@angular/core';
import { ContactData } from './contact-data';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

const serviceRoot = environment.penzaiApiRootUrl + '/contact';

@Injectable()
export class ContactService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf8');

  constructor(private httpClient: HttpClient) {
  }

  public sendEmail(contactData: ContactData) {
    console.log('hit send');
    return this.httpClient.post(serviceRoot, contactData, { headers: this.headers })
      .catch((err: HttpErrorResponse) => {
        console.error(err);
        console.log('failed to send email');
        return Observable.of<object>(null);
      });
  }
}
