import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { mainUrl, GQL, httpOptions } from '../config';

export class OtherCategoryRequest {
  report_id: number;
  category_id: number;
  category_name: string;
  severity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReportSeverityService {

  constructor(private http: HttpClient) { }
  

  getByReportId(reportId:number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      query report_severity {
        report_severity(
          report_id: "${reportId}") {
            id
            report_id
            category_id
            category_name
            severity
deleted_at
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }

  add(otherCategoryRequest:OtherCategoryRequest) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation report_severity {
        report_severity(
          report_id: "${otherCategoryRequest.report_id}",
          category_id: "${otherCategoryRequest.category_id}",
          category_name: "${otherCategoryRequest.category_name}",
          severity: "${otherCategoryRequest.severity}") {
            id
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }
  
  delete(id:number) {
    const url = 'graphql';
    const gql:GQL = {query: `
      mutation report_severity {
        report_severity(
          id: "${id}",
          deleted_at: "1990-05-05") {
            id
        }
      }
    `};

    return this.http.post(mainUrl+url, gql, httpOptions);
  }
}
