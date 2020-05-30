// In app.component.ts

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  public name="Raja" ;  // we have added this line 
}



// In app.component.html 

<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{title}}
  </h1>
  <div >
  
<app-test [parentData]="name"> </app-test> // we have added parentData 



// In test.component.ts 

import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-test',
  template: `
  <h2> {{"Hello "  + parentData  }} </h2>    // added this 
     
  `,
  styles: []
})
export class TestComponent implements OnInit {
  @Input() public parentData;  // added this 
  constructor() { }
  ngOnInit() {
  }
}
