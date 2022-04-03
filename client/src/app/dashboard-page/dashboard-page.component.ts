import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { State } from  '../reducers/index';
import { setCategories } from '../reducers/categories';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    const categories = [
      {
        id: 0,
        name: "name",
        created_at: "",
        updated_at: "",
      },
      {
        id: 1,
        name: "categori 2",
        created_at: "",
        updated_at: "",
      }
    ];

    this.store.dispatch(setCategories({
      data: categories,
    }));
  }

}
