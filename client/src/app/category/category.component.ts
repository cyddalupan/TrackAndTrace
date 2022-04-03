import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { State } from  '../reducers/index';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories$: Observable<Category[]> = this.store.pipe(select('categories'));

  category:string = "";

  constructor(
    private categoryService: CategoryService,
    private store: Store<State>) { }

  ngOnInit() {
    this.categoryService.getAll();
  }

  submit (){
    this.categoryService.save(this.category).subscribe(() => {
      this.ngOnInit();
      this.category = "";
      alert("Category Saved.");
    });
  }

  delete(id:number){
    if (confirm("are you sure you want to delete?")) {
      this.categoryService.delete(id).subscribe(() => {
        this.ngOnInit();
        alert("Report deleted.");
      });
    } 
  }
}
