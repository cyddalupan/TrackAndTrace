import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { State } from  '../reducers/index';
import { Casegen } from '../casegen';
import {CasegenRequest, CasegenOptions} from '../casegen-request';
import { CategoryService } from '../category.service';
import { CasegenService } from '../casegen.service';
import { Category } from '../category';

@Component({
  selector: 'app-casegen-edit',
  templateUrl: './casegen-edit.component.html',
  styleUrls: ['./casegen-edit.component.css']
})
export class CasegenEditComponent implements OnInit {
	questID = 0;

  casegens$: Observable<Casegen[]> = this.store.pipe(select('casegens'));
  casegens:Casegen[];
  casegen:Casegen;

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

  emptyCasegenOptions:CasegenOptions = {
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

  casegenOptions:CasegenOptions = {...this.emptyCasegenOptions};

  categories$: Observable<Category> = this.categoryService.getCategories();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService, 
    private casegenService: CasegenService,
    private store: Store<State>) { 
      router.events.subscribe((val) => {
        this.updateForm();
      });
    }

  ngOnInit() {

    this.casegens$.subscribe(casegens => {
      this.casegens = casegens;
      this.updateForm();
    });

  }

  updateForm() {
    this.casegenOptions = {...this.emptyCasegenOptions};

    if(this.route.snapshot.paramMap.get('id')) {
      this.questID = +this.route.snapshot.paramMap.get('id');
    }
    if(this.casegens){
      this.casegen = this.casegens.filter(data => +data.quest_id === +this.questID)[0];

      if(this.casegen){
        this.casegenRequest.quest_id = this.questID;
        this.casegenRequest.casegen_id = this.casegen.id;
        this.casegenRequest.message = this.casegen.quest.message;
        this.casegenRequest.category_id = this.casegen.report_category_id;
        this.casegenRequest.subcategory = this.casegen.subcategory;
        this.casegenRequest.claimant = this.casegen.claimant;
        this.casegenRequest.severity = this.casegen.severity;
        this.casegenRequest.remarks = this.casegen.remarks;

        const per_rule = this.casegen.quest.rule.split(",");
        let count = 0;
        for (let rule of per_rule) {
          if(count === 0){
            const data = rule.split(":");
            this.casegenOptions.option1 = data[0];
            this.casegenOptions.quest1 = +data[1];
          }
          if(count === 1){
            const data = rule.split(":");
            this.casegenOptions.option2 = data[0];
            this.casegenOptions.quest2 = +data[1];
          }
          if(count === 2){
            const data = rule.split(":");
            this.casegenOptions.option3 = data[0];
            this.casegenOptions.quest3 = +data[1];
          }
          if(count === 3){
            const data = rule.split(":");
            this.casegenOptions.option4 = data[0];
            this.casegenOptions.quest4 = +data[1];
          }
          if(count === 4){
            const data = rule.split(":");
            this.casegenOptions.option5 = data[0];
            this.casegenOptions.quest5 = +data[1];
          }
          if(count === 5){
            const data = rule.split(":");
            this.casegenOptions.option6 = data[0];
            this.casegenOptions.quest6 = +data[1];
          }

          count++;
        } 
      }
    }
  }

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
        alert("Casegen updated");
      });
    }

  }

}
