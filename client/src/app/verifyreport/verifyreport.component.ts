import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { State } from  '../reducers/index';
import {VerifyReportService} from '../verify-report.service';
import {Category} from '../category';

import { Hitkey, HitkeySeverity } from '../hitkey';

@Component({
  selector: 'app-verifyreport',
  templateUrl: './verifyreport.component.html',
  styleUrls: ['./verifyreport.component.css']
})
export class VerifyreportComponent implements OnInit {

  hitkey:Hitkey;

  constructor(
    private verifyReportService: VerifyReportService) { }

  ngOnInit() {
    this.verifyReportService.getOneActive().subscribe((hitkey:Hitkey) => {
      this.hitkey = hitkey;
    });
  }

  submit() {
    this.verifyReportService.save(this.hitkey).subscribe(() => {
      alert("Report save.");
      this.ngOnInit();
    });
  }
}
