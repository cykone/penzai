import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { environment } from '../../environments/environment';
import { LogEntry } from './log-entry';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
});

const serviceRoot = environment.penzaiApiRootUrl + '/log';

@Injectable()
export class LoggingService {

  constructor(private httpClient: HttpClient) { }

  public log(msg: string): Promise<boolean> {
    const logEntry = new LogEntry();
    logEntry.message = msg;
    logEntry.context = "[Penzai]";

    return this.httpClient.post(serviceRoot, logEntry)
      .toPromise()
      .then(_ => Promise.resolve(true))
      .catch(_ => Promise.resolve(false));
  }
}
