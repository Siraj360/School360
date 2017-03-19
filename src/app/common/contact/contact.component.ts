import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {

  @Output('close') close: EventEmitter<any> = new EventEmitter();
  
  constructor() {}

  ngOnInit() {
  }

    onCloseClick(value: number) {
        this.close.next(value);
    }

}
