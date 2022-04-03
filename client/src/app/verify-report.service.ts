import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { mainUrl } from '../config';

import { Hitkey, HitkeySeverity } from './hitkey';

export class GQL {
  query: string;
}

export class Server {
  data: {
    hitkey: Hitkey[];
  };
}

export class Server2 {
  data: {
    hitkeySeverity: HitkeySeverity[];
  };
}

const httpOptions = {
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})
export class VerifyReportService {

  constructor(private http: HttpClient) { }

  getOneActive(): Observable<Hitkey> {
    const url = 'api/hitkey';
    return this.http.get<Hitkey>(mainUrl+url, httpOptions);
  }

  getSeverity(id:number): Observable<HitkeySeverity[]> {
    const url = 'graphql';
    const gql:GQL = {query: `
      query hitkey_severity {
        hitkey_severity(hitkey_id:"${id}") {
            id
            hitkey_id
            category_id
            severity
            date_created
            date_updated
        }
      }
    `};

    return this.http.post<Server2>(mainUrl+url, gql, httpOptions).pipe(map(server => {
      return server.data.hitkeySeverity;
    }));
  }

  doneHitkey(id:number) {
    const url = 'graphql';
    const gql:GQL = {query: `
    mutation hitkey {
      hitkey(id: "${id}", is_done: "true") {
          id
          unique_chat_id
          is_report
          is_done
          date_created
          date_updated
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }

  doneHitkeySeverity(id:number, severity:number) {
    const url = 'graphql';
    const gql:GQL = {query: `
    mutation hitkey_severity {
      hitkey_severity(id: "${id}", severity: "${severity}") {
          id
          hitkey_id
          category_id
          severity
          date_created
          date_updated
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }

  save(hitkey:Hitkey) {
    const url = 'api/hitkey';
    return this.http.post(mainUrl+url, hitkey);
  }
}
