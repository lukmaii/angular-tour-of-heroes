import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  //public type cause this one we will binding in templates : Angular only bind to public component property
  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }

}
