import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  
  <div [ngSwitch]="color">
  <div [style.color]="'red'" *ngSwitchCase="'red'"> This is red color </div>
  <div [style.color]="'green'" *ngSwitchCase="'green'"> This is green color </div>
  <div [style.color]="'blue'" *ngSwitchCase="'blue'"> This is blue color </div>
  <div *ngSwitchDefault>Select again </div>

  </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {


  public color ="green"

  constructor() { }

  ngOnInit() {
  }
  
}
