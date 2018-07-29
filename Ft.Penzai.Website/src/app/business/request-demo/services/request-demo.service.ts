import { Injectable } from '@angular/core';
import { RequestDemoDetails } from './request-demo-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'

});

const serviceRoot = environment.penzaiApiRootUrl + '/contact';

@Injectable()
export class RequestDemoService {

  constructor(private http: HttpClient) { }

  public requestDemo(requestDemoDetails: RequestDemoDetails): Promise<Object> {
    return this.http.post(serviceRoot + '/demo', requestDemoDetails, { headers: headers })
      .toPromise()
      .catch(any => {
        console.error(any);
        return Promise.resolve(new Object());
      });
  }
}
