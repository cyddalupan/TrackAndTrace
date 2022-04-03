import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {MatSort, MatTableDataSource} from '@angular/material';

import { State } from  '../reducers/index';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {ReportService} from '../report.service';
import {Report} from '../report';

@Component({
  selector: 'app-reports-closed',
  templateUrl: './reports-closed.component.html',
  styleUrls: ['./reports-closed.component.css']
})
export class ReportsClosedComponent implements OnInit {
  // Observables
  reports$: Observable<Report[]> = this.store.pipe(select('reports'));
  categories$: Observable<Category[]> = this.store.pipe(select('categories'));

  // Static variables
  closedHeader: string[] = ['name', 'categories', 'sub', 'claimant', 'remarks', 'updated', 'edit' ,'action' ];
  categories:Category[];
  reports: Report[];
  closedReports: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private reportService: ReportService,
    private categoryService: CategoryService,
    private store: Store<State>) { }

  ngOnInit() {
    // Get services needed.
    this.reportService.all();
    this.categoryService.getAll();

    this.categories$.subscribe(categories => {
      this.categories = categories;
    });

    this.reports$.subscribe(reports => {
      this.reports = reports;
      this.closedReports = new MatTableDataSource(reports.filter(report => report.is_active == false).map(report => {
        let name = "";
        if(report.fbuser){
          name = report.fbuser.fb_name;
        }
        return {
          id: report.id,
          name: name,
          sub: report.sub_category,
          claimant: report.claimant,
          remarks: report.remarks,
          updated: report.updated_at,
        };
      }));
      this.closedReports.sort = this.sort;
    });
  }

  idToCategoryName(id: number) {
    if(this.categories.filter(category => +category.id === +id).length > 0){
      return this.categories.filter(category => +category.id === +id)[0].name;
    }
  }

  idToReport(id: number) {
    return this.reports.filter(report => +report.id === +id)[0];
  }

  closeReport(id:number){
    this.reportService.close(id).subscribe(() => {
      this.reportService.all();
      alert("Report Closed.");
    });
  }

  openReport(id:number){
    this.reportService.open(id).subscribe(() => {
      this.reportService.all();
      alert("Report Restored.");
    });
  }

}
