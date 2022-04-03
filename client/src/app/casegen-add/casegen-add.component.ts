import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {CasegenRequest, CasegenOptions} from '../casegen-request';
import { CategoryService } from '../category.service';
import { CasegenService } from '../casegen.service';
import { Category } from '../category';

@Component({
  selector: 'app-casegen-add',
  templateUrl: './casegen-add.component.html',
  styleUrls: ['./casegen-add.component.css']
})
export class CasegenAddComponent implements OnInit {

  initCasegenRequest:CasegenRequest = {
    quest_id: null,
    casegen_id: null,
    message: "",
    rule: "",
    category_id: 0,
    subcategory: "",
    claimant: "",
    severity: 0,
    remarks: "",
  }

  initCasegenOptions:CasegenOptions = {
    option1: "",
    quest1: 0,
    option2: "",
    quest2: 0,
    option3: "",
    quest3: 0,
    option4: "",
    quest4: 0,
    option5: "",
    quest5: 0,
    option6: "",
    quest6: 0,
  }

  casegenRequest:CasegenRequest = {
    quest_id: null,
    casegen_id: null,
    message: "",
    rule: "",
    category_id: 0,
    subcategory: "",
    claimant: "",
    severity: 0,
    remarks: "",
  }

  casegenOptions:CasegenOptions = {
    option1: "",
    quest1: 0,
    option2: "",
    quest2: 0,
    option3: "",
    quest3: 0,
    option4: "",
    quest4: 0,
    option5: "",
    quest5: 0,
    option6: "",
    quest6: 0,
  }

  categories$: Observable<Category> = this.categoryService.getCategories();

  constructor(private categoryService: CategoryService, private casegenService: CasegenService) { }

  ngOnInit() {}

  submit() {
    //convert options
    let rule = "";
    if(this.casegenOptions.option1 === "" || this.casegenOptions.quest1 === 0) {
       alert("User should have an option. Please fix first options.");
    }else{
      if(this.casegenOptions.option1 !== "" && this.casegenOptions.quest1 !== 0) {
        rule = `${this.casegenOptions.option1}:${this.casegenOptions.quest1}`;
      }
      if(this.casegenOptions.option2 !== "" && this.casegenOptions.quest2 !== 0) {
        rule = `${rule},${this.casegenOptions.option2}:${this.casegenOptions.quest2}`;
      }
      if(this.casegenOptions.option3 !== "" && this.casegenOptions.quest3 !== 0) {
        rule = `${rule},${this.casegenOptions.option3}:${this.casegenOptions.quest3}`;
      }
      if(this.casegenOptions.option4 !== "" && this.casegenOptions.quest4 !== 0) {
        rule = `${rule},${this.casegenOptions.option4}:${this.casegenOptions.quest4}`;
      }
      if(this.casegenOptions.option5 !== "" && this.casegenOptions.quest5 !== 0) {
        rule = `${rule},${this.casegenOptions.option5}:${this.casegenOptions.quest5}`;
      }
      if(this.casegenOptions.option6 !== "" && this.casegenOptions.quest6 !== 0) {
        rule = `${rule},${this.casegenOptions.option6}:${this.casegenOptions.quest6}`;
      }
      
      this.casegenRequest.rule = rule;

      this.casegenService.saveCasegen(this.casegenRequest).subscribe(() => {
        this.casegenService.getCasegen();
        // Clear form values.
        this.casegenRequest = this.initCasegenRequest;
        this.casegenOptions = this.initCasegenOptions;
        alert("Casegen saved");
      });
    }

  }

}
