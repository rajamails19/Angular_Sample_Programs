import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  
  <div *ngFor="let raja of colors ; index as i ; first as f ">
  // also we can do (last as l, even as e, odd as o - and then bind {{e}} )
  
    <h2>  {{i}} {{f}} {{raja}} </h2>
  </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors = ["red","yellow", "blue", "green" ] ;

  constructor() { }

  ngOnInit() {
  }

}
