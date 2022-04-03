import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { mainUrl } from '../config';

import { State } from  './reducers/index';
import { CategoryKeyword } from './category';
import { setData } from './reducers/category_keyword';

export class GQL {
  query: string;
}

export class Server {
  data: {
    category_keyword: CategoryKeyword[];
  };
}

const httpOptions = {
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})
export class CategoryKeywordService {

  constructor(private http: HttpClient,
    private store: Store<State>) { }

  getByCategory(categoryId:number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      query category_keyword {
        category_keyword(category_id: "${categoryId}") {
            id
            category_id
            keyword
            created_at
            updated_at
        }
      }
    `};

    this.http.post<Server>(mainUrl+url, gql, httpOptions).subscribe(server => {
      this.store.dispatch(setData({
        data: server.data.category_keyword,
      }));
    });
  }

  save(categoryId:number, categoryKeyword:string) {
    const url = 'graphql';
    const gql:GQL = {query: `
    mutation category_keyword {
      category_keyword(category_id: "${categoryId}" ,keyword: "${categoryKeyword}") {
        id
        category_id
        keyword
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
      mutation category_keyword {
        category_keyword(id:"${id}", deleted_at: "${new Date().toISOString().slice(0,10)}") {
          id
          category_id
          keyword
          created_at
          updated_at
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }
}
