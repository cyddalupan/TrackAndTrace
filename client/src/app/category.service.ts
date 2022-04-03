import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { mainUrl } from '../config';

import { State } from  './reducers/index';
import { Category } from './category';
import { setCategories } from './reducers/categories';

export class GQL {
  query: string;
}

export class Server {
  data: {
    report_category: Category[];
  };
}

const httpOptions = {
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
    private store: Store<State>) { }

  getCategories(): Observable<Category> {
    const url = 'api/category';
    return this.http.get<Category>(mainUrl+url);
  }

  getAll() {
    const url = 'graphql';
    const gql:GQL = {query: `
      query category {
        report_category {
            id
            name
            created_at
            updated_at
        }
      }
    `};

    this.http.post<Server>(mainUrl+url, gql, httpOptions).subscribe(server => {
      this.store.dispatch(setCategories({
        data: server.data.report_category,
      }));
    });
  }

  getOne(id: number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      query report_category {
        report_category(id: "${id}") {
            id
            name
            created_at
            updated_at
        }
      }
    `};

    return this.http.post<Server>(mainUrl+url, gql, httpOptions);
  }

  save(category:string) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation category {
        report_category(name: "${category}") {
            id
            name
            created_at
            updated_at
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }

  delete(id:number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation category {
        report_category(id:"${id}", deleted_at: "${new Date().toISOString().slice(0,10)}") {
            id
            name
            created_at
            updated_at
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }
}