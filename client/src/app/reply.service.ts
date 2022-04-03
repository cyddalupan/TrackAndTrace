import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { mainUrl } from './../config';

import { Reply } from './reply';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private http: HttpClient) { }

  saveReply(reply: Reply) {
    const url = 'api/reply';
    return this.http.post(mainUrl+url, reply);
  }
}
