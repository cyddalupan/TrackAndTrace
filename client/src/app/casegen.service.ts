import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { mainUrl } from '../config';

import { State } from  './reducers/index';
import { Casegen } from './casegen';
import { setCasegens } from './reducers/casegens';
import { CasegenRequest } from './casegen-request';

@Injectable({
  providedIn: 'root'
})
export class CasegenService {

  constructor(private http: HttpClient,
    private store: Store<State>) { }

  getCasegen()  {
    const url = 'api/casegen';
    this.http.get<Casegen[]>(mainUrl+url).subscribe(data => {
      this.store.dispatch(setCasegens({
        data: data,
      }));
    });
  }

  saveCasegen(casegen: CasegenRequest) {
    const url = 'api/casegen';
    return this.http.post(mainUrl+url, casegen);
  }
}
