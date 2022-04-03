import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { mainUrl } from '../config';

import { State } from  './reducers/index';
import { Uniquechat } from './uniquechat';
import { setUniquechat } from './reducers/uniquechat';

@Injectable({
  providedIn: 'root'
})
export class UniqueChatService {

  constructor(private http: HttpClient,
    private store: Store<State>) { }

  getUnique() {
    const url = 'api/unique';
    this.http.get<Uniquechat>(mainUrl+url).subscribe(data => {
      this.store.dispatch(setUniquechat({
        data: data,
      }));
    });
  }
}
