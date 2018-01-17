import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import Message from './../../model/message';
import { MessageService } from './../../service/message.service';

@Component({
  selector: 'app-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.css']
})
export class MessageCenterComponent implements OnInit {
  messages: Message[];
  constructor(
    private msgService: MessageService
  ) {
    this.msgService.getMessages()
      .subscribe((msgs: Message[]) => {
        this.messages = msgs;
      });
  }

  ngOnInit() {
  }

}
