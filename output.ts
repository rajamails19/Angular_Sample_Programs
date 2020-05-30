
//In test.component.ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-test',
  template: `
  <h2> {{"Hello "  + name  }} </h2>
  <button (click)="fireEvent()"> Send to Parent Event </button>
  
  `,
  styles: []
})
export class TestComponent implements OnInit {
  @Input('parentData') public name ;
  @Output() public childEvent = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit("Ssup Sekhar")
  }
}


==

//  In app.component.html

<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    {{message}} 
  </h1>
  <div >
  
<app-test (childEvent) = "message=$event" [parentData]="name"> </app-test>



==


// In app.component.ts

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sekhar';
  public name="Raja" ;
  public message ="" ;
}
