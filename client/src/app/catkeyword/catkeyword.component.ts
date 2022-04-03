import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { State } from  '../reducers/index';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {CategoryKeywordService} from '../category-keyword.service';
import {CategoryKeyword} from '../category';

@Component({
  selector: 'app-catkeyword',
  templateUrl: './catkeyword.component.html',
  styleUrls: ['./catkeyword.component.css']
})
export class CatkeywordComponent implements OnInit {
  categoryId:number;

  category:Category;

  keywords$: Observable<CategoryKeyword[]> = this.store.pipe(select('categoryKeywords'));

  keywordInput:string = "";

  constructor(
		private route: ActivatedRoute,
    private categoryKeywordService: CategoryKeywordService,
    private categoryService: CategoryService,
    private store: Store<State>) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')) {
      this.categoryId = +this.route.snapshot.paramMap.get('id');
    }
    
    this.categoryService.getOne(this.categoryId).subscribe(data => {
      this.category = data.data.report_category[0];
    });
    
    this.categoryKeywordService.getByCategory(this.categoryId);
  }

  submit (){
    this.categoryKeywordService.save(this.categoryId, this.keywordInput).subscribe(() => {
      this.categoryKeywordService.getByCategory(this.categoryId);
      this.keywordInput = "";
      alert("Keyword Saved.");
    });
  }

  delete(id:number){
    if (confirm("are you sure you want to delete?")) {
      this.categoryKeywordService.delete(id).subscribe(() => {
        this.ngOnInit();
        alert("Report deleted.");
      });
    } 
  }
}
