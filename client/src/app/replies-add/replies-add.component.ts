import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { State } from  '../reducers/index';
import {UniqueChatService} from '../uniquechat.service';
import {ReplyService} from '../reply.service';
import {Uniquechat} from '../uniquechat';
import {Reply} from '../reply';

@Component({
  selector: 'app-replies-add',
  templateUrl: './replies-add.component.html',
  styleUrls: ['./replies-add.component.css']
})
export class RepliesAddComponent implements OnInit {

  unique$: Observable<Uniquechat> = this.store.pipe(select('uniquechat'));

  reply: Reply = {
    fb_id: 0,
    message: "",
    reply: "",
    unique_id: 0,
  };

  constructor(
    private UniqueChatService: UniqueChatService,
    private replyService: ReplyService,
    private store: Store<State>) { }

  ngOnInit() {
    this.UniqueChatService.getUnique();
    this.unique$.subscribe(data => {
      this.reply.fb_id = data.fb_id;
      this.reply.message = data.message;
      this.reply.unique_id = data.id;
    });
  }

  submit (){
    this.replyService.saveReply(this.reply).subscribe(() => {
      this.UniqueChatService.getUnique();
      this.reply.reply = "";
      alert("Reply Saved.");
    });
  }

}
