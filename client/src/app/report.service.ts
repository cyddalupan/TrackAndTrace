import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { mainUrl, GQL, httpOptions } from '../config';

import { State } from  './reducers/index';
import { Report } from './report';
import { setReports } from './reducers/reports';

export class Server {
  data: {
    report: Report[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient,
    private store: Store<State>) { }

  all()  {
    const url = 'api/report';
    this.http.get<Report[]>(mainUrl+url).subscribe(data => {
      this.store.dispatch(setReports({
        data: data,
      }));
    });
  }

  close(id: number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation report {
        report(id:"${id}", is_active: "0") {
            id
        }
      }
    `};
    
    return this.http.post(mainUrl+url, gql, httpOptions);
  }

  open(id: number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation report {
        report(id:"${id}", is_active: "1") {
            id
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }
  
  one(id:number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation report {
        report(id: "${id}") {
            id
            fb_id
            report_category_id
            sub_category
            claimant
            severity
            remarks
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }
  
  add(report:Report) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation report {
        report(
          fb_id: "${report.fb_id}",
          report_category_id: "${report.report_category_id}",
          sub_category: "${report.sub_category}",
          claimant: "${report.claimant}",
          severity: "${report.severity}",
          remarks: "${report.remarks}",
          is_active: "1") {
            id
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }
  
  edit(id:number, report:Report) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation report {
        report(
          id: "${id}",
          fb_id: "${report.fb_id}",
          report_category_id: "${report.report_category_id}",
          sub_category: "${report.sub_category}",
          claimant: "${report.claimant}",
          severity: "${report.severity}",
          remarks: "${report.remarks}",
          is_active: "1") {
            id
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }

}
