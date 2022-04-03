import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { mainUrl, GQL, httpOptions } from '../config';

import { State } from  './reducers/index';
import { Fbuser } from './fbuser';
import { setFbusers } from './reducers/fbusers';

export class Server {
  data: {
    fbuser: Fbuser[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class FbuserService {

  constructor(private http: HttpClient,
    private store: Store<State>) { }

  getAll() {
    const url = 'graphql';
    const gql:GQL = {query: `
      query fbuser {
        fbuser {
          id
          fb_name
          fb_id
          fb_user_type_id
          fb_person_id
          fb_quest_id
          fb_variable
          img
        }
      }
    `};

    this.http.post<Server>(mainUrl+url, gql, httpOptions).subscribe(server => {
      this.store.dispatch(setFbusers({
        data: server.data.fbuser,
      }));
    });
  }

  block(id:number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation fbuser {
        fbuser(id:"${id}", fb_quest_id: "10") {
            id
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }

  unblock(id:number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation fbuser {
        fbuser(id:"${id}", fb_quest_id: "5") {
            id
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }
}