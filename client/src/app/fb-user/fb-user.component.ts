import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {MatSort, MatTableDataSource} from '@angular/material';

import { State } from  '../reducers/index';
import { FbuserService } from '../fbuser.service';
import { Fbuser } from '../fbuser';

@Component({
  selector: 'app-fb-user',
  templateUrl: './fb-user.component.html',
  styleUrls: ['./fb-user.component.css']
})
export class FbUserComponent implements OnInit {

  fbusers$: Observable<Fbuser[]> = this.store.pipe(select('fbusers'));

  tableHeader: string[] = ['img', 'name', 'block'];
  userTable: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private fbuserService: FbuserService,
    private store: Store<State>) { }

  ngOnInit() {
    this.fbuserService.getAll();

    this.fbusers$.subscribe(user => {
      this.userTable = new MatTableDataSource(user.map(user => {
        return {
          id : user.id,
          name: user.fb_name,
          img: user.img,
          fb_quest_id: +user.fb_quest_id,
        };
      }));
      this.userTable.sort = this.sort;
    });
  }

  block(id:number) {
    console.log("id",id);
    this.fbuserService.block(id).subscribe(() => {
      this.fbuserService.getAll();
      alert("User Blocked.");
    });
  }

  unblock(id:number) {
    this.fbuserService.unblock(id).subscribe(() => {
      this.fbuserService.getAll();
      alert("User Restored.");
    });
  }

}
