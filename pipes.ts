import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  template: `

  <h2> {{name}} </h2>
  <h2> {{name | lowercase }} </h2>
  <h2> {{name  | uppercase }} </h2>
  <h2> {{message | titlecase }} </h2>
  <h2> {{name | slice:3}} </h2>
  <h2> {{message | slice:3:8}} </h2>
  <h2> {{person | json }} </h2>

  <h3> {{4.5678 | number:'1.2-3'}} </h3>
  <h3> {{4.5678 | number:'3.1-2'}} </h3>

  <h4> {{0.25 | percent }} </h4>

  <h4> {{0.25 | currency }} </h4>
  <h4> {{0.25 | currency: 'INR' }} </h4>

  <h5> {{ date }} </h5>
  <h5> {{ date | date: 'short'  }} </h5>
  <h5> {{ date | date :'shortDate' }} </h5>
  <h5> {{ date | date :'shortTime' }} </h5>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name =" Raja " ;
  public message = "Ssup sekhar " ;
  public person = {
    "firstName": "Rajaaa",
    "lastName" : "Seeekhar"
  }

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

  
}
