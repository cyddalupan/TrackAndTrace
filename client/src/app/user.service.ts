import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { mainUrl, GQL, httpOptions } from '../config';

import { State } from  './reducers/index';
import { Person } from './person';
import { setUsers } from './reducers/users';

export class Server {
  data: {
    users: Person[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private store: Store<State>) { }

  getAll() {
    const url = 'graphql';
    const gql:GQL = {query: `
      query person {
        users {
          id
          name
          contact
          address
          birthday
          passport_number
          image
          usertype_id
          country_id
          principal_id
          agent_id
          applicant_status_id
          hire_date
          deployed_date
          created_at
          updated_at
          deleted_at
        }
      }
    `};

    this.http.post<Server>(mainUrl+url, gql, httpOptions).subscribe(server => {
      this.store.dispatch(setUsers({
        data: server.data.users,
      }));
    });
  }

}