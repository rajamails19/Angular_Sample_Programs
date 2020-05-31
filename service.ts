
Services 


	Ø ng g s employee
	
	
// In employee-list.component.ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';
//import { EventEmitter } from 'protractor';
@Component({
  selector: 'employee-list',
  template: `
  <h2> Employee List</h2>
  <ul *ngFor="let employee of employees">
  <li> {{employee.name}}</li>
  </ul>
   `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
    public employees =[];
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit() {
      this.employees = this._employeeService.getEmployees();
  }
  
}


===

// In employee-detail.component.ts


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';
//import { EventEmitter } from 'protractor';
@Component({
  selector: 'employee-detail',
  template: `
  <h2> Employee Details </h2>
  <ul *ngFor="let employee of employees">
  <li> {{employee.id}}.{{employee.name}}.{{employee.age}}</li>
  </ul>
 `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
    public employees =[];
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit() {
      this.employees = this._employeeService.getEmployees();
  }
  
}


===

// In app.component.html 

<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1> KGF Raja </h1>
</div>
<employee-list></employee-list>
<employee-detail></employee-detail>


==

// In app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms' ;
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './employee.service';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


==

// In employee.service.ts


import { Injectable } from '@angular/core';
@Injectable()
  export class EmployeeService {
  constructor() { }
  getEmployees() {
    return [
      {"id": 1, "name": "Raja", "age": 30},
      {"id": 2, "name": "Sekhar", "age": 25},
      {"id": 3, "name": "Vaderav", "age": 26},
      {"id": 4, "name": "Raaaaaj", "age": 28}
    ];
  }
  }


==

O/P:

KGF Raja
Employee List
	• Raja
	• Sekhar
	• Vaderav
	• Raaaaaj
Employee Details
	• 1.Raja.30
	• 2.Sekhar.25
	• 3.Vaderav.26
	• 4.Raaaaaj.28
