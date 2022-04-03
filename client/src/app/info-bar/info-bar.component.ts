import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { State } from  '../reducers/index';
import { Casegen } from '../casegen';
import { CasegenService } from '../casegen.service';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css']
})
export class InfoBarComponent implements OnInit {

  displayedColumns: string[] = ['quest id', 'message', 'edit', ];

  casegens$: Observable<Casegen[]> = this.store.pipe(select('casegens'));

  constructor(private casegenService: CasegenService,
    private store: Store<State>) { }

  ngOnInit() {
    this.casegenService.getCasegen();
  }
}
