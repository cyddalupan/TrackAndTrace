import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { ReportSeverity } from '../report-severity';

export class OtherCategory {
  id: number;
  severity: number;
}

@Component({
  selector: 'app-report-edit',
  templateUrl: './report-edit.component.html',
  styleUrls: ['./report-edit.component.css']
})
export class ReportEditComponent implements OnInit {

  reportID:number = 0;

  categories$: Observable<Category[]> = this.store.pipe(select('categories'));
  categories: Category[];
  fbusers$: Observable<Fbuser[]> = this.store.pipe(select('fbusers'));
  reportSeverity: ReportSeverity[];
  
  editReport:Report = {
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
    private route: ActivatedRoute,
    private reportService: ReportService,
    private categoryService: CategoryService,
    private reportSeverityService: ReportSeverityService,
    private fbuserService: FbuserService,
    private router: Router,
    private store: Store<State>) { }

  ngOnInit() {
    this.reportID = +this.route.snapshot.paramMap.get('id');
    
    // Get current report.
    this.reportService.one(this.reportID).subscribe((response:any) => {
      this.editReport = response.data.report;
    });

    this.categoryService.getAll();
    this.fbuserService.getAll();
    this.updateSeverity();
    
    // object category.
    this.categories$.subscribe(categories => {
      this.categories =categories;
    });
  }
  
  updateSeverity() {
    this.reportSeverityService.getByReportId(this.reportID).subscribe((qlres:any) => {
      this.reportSeverity = qlres.data.report_severity;
    });
  }
  
  submit() {
    this.reportService.edit(this.reportID,this.editReport).subscribe(() => {
      
      // Other category 1
      if(this.otherCategory1.id !== 0){
        let otherCategoryName1 = "";
        if(this.categories.find(data => data.id === this.otherCategory1.id)){
          otherCategoryName1 = this.categories.find(data => data.id === this.otherCategory1.id).name;
        }
        const otherCategoryRequest1:OtherCategoryRequest = {
          report_id: this.reportID,
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
          report_id: this.reportID,
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
          report_id: this.reportID,
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
          report_id: this.reportID,
          category_id: this.otherCategory4.id,
          category_name: otherCategoryName4,
          severity: this.otherCategory4.severity,
        };
        this.reportSeverityService.add(otherCategoryRequest4).subscribe(ret => {
          console.log("ret4",ret);
        });
      }
      
      // Adding success.
      alert("Update report success");
      this.router.navigateByUrl('/reports');
    });
  }
  
  deleteSeverity(id:number) {
    if (confirm("Are you sure you wont to delete?")) {
      this.reportSeverityService.delete(id).subscribe(() => {
        console.log("delete success");
        this.updateSeverity();
      });
    }
  }

}
