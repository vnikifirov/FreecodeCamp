import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {

  constructor(
    private _http: Http,    
    ) {}

  getNew() {
    return this._http.get('/')
      .map( records => records.json());
  }

}