import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/messages/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {
  messages : string[] = []
  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.messages
    this.messageService.add(`${this.constructor.name}  : starting message service`)
  }
}
