import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { State } from  '../reducers/index';
import { CategoryService } from '../category.service';
import { FbuserService } from '../fbuser.service';
import { ReportService } from '../report.service';
import { ReportSeverityService, OtherCategoryRequest } from '../report-severity.service';
import { Report } from '../report';
import { Category } from '../category';
import { Fbuser } from '../fbuser';

export class OtherCategory {
  id: number;
  severity: number;
}

@Component({
  selector: 'app-report-add',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.css']
})
export class ReportAddComponent implements OnInit {

  categories$: Observable<Category[]> = this.store.pipe(select('categories'));
  categories: Category[];
  fbusers$: Observable<Fbuser[]> = this.store.pipe(select('fbusers'));
  
  newReport:Report = {
    fb_id: 0,
    report_category_id: 0,
    sub_category: "",
    claimant: "",
    severity: 1,
    remarks: "",
  };
  
  // Other categories.
  otherCategory1:OtherCategory = {
    id: 0,
    severity: 1,
  };
  otherCategory2:OtherCategory = {
    id: 0,
    severity: 1,
  };
  otherCategory3:OtherCategory = {
    id: 0,
    severity: 1,
  };
  otherCategory4:OtherCategory = {
    id: 0,
    severity: 1,
  };
  
  constructor(
    private reportService: ReportService,
    private categoryService: CategoryService,
    private reportSeverityService: ReportSeverityService,
    private fbuserService: FbuserService,
    private router: Router,
    private store: Store<State>) { }

  ngOnInit() {
    this.categoryService.getAll();
    this.fbuserService.getAll();
    
    // object category.
    this.categories$.subscribe(categories => {
      this.categories =categories;
    });
  }
  
  submit() {
    this.reportService.add(this.newReport).subscribe((result:any) => {
      // Other category 1
      if(this.otherCategory1.id !== 0){
        let otherCategoryName1 = "";
        if(this.categories.find(data => data.id === this.otherCategory1.id)){
          otherCategoryName1 = this.categories.find(data => data.id === this.otherCategory1.id).name;
        }
        const otherCategoryRequest1:OtherCategoryRequest = {
          report_id: result.data.report.id,
          category_id: this.otherCategory1.id,
          category_name: otherCategoryName1,
          severity: this.otherCategory1.severity,
        };
        this.reportSeverityService.add(otherCategoryRequest1).subscribe(ret => {
          console.log("ret1",ret);
        });
      }
      
      // Other category 2
      if(this.otherCategory2.id !== 0){
        let otherCategoryName2 = "";
        if(this.categories.find(data => data.id === this.otherCategory2.id)){
          otherCategoryName2 = this.categories.find(data => data.id === this.otherCategory2.id).name;
        }
        const otherCategoryRequest2:OtherCategoryRequest = {
          report_id: result.data.report.id,
          category_id: this.otherCategory2.id,
          category_name: otherCategoryName2,
          severity: this.otherCategory2.severity,
        };
        this.reportSeverityService.add(otherCategoryRequest2).subscribe(ret => {
          console.log("ret2",ret);
        });
      }
      
      // Other category 3
      if(this.otherCategory3.id !== 0){
        let otherCategoryName3 = "";
        if(this.categories.find(data => data.id === this.otherCategory3.id)){
          otherCategoryName3 = this.categories.find(data => data.id === this.otherCategory3.id).name;
        }
        const otherCategoryRequest3:OtherCategoryRequest = {
          report_id: result.data.report.id,
          category_id: this.otherCategory3.id,
          category_name: otherCategoryName3,
          severity: this.otherCategory3.severity,
        };
        this.reportSeverityService.add(otherCategoryRequest3).subscribe(ret => {
          console.log("ret3",ret);
        });
      }
      
      // Other category 4
      if(this.otherCategory4.id !== 0){
        let otherCategoryName4 = "";
        if(this.categories.find(data => data.id === this.otherCategory4.id)){
          otherCategoryName4 = this.categories.find(data => data.id === this.otherCategory4.id).name;
        }
        const otherCategoryRequest4:OtherCategoryRequest = {
          report_id: result.data.report.id,
          category_id: this.otherCategory4.id,
          category_name: otherCategoryName4,
          severity: this.otherCategory4.severity,
        };
        this.reportSeverityService.add(otherCategoryRequest4).subscribe(ret => {
          console.log("ret4",ret);
        });
      }
      
      // Adding success.
      alert("Adding report success");
      this.router.navigateByUrl('/reports');
    });
  }

}
