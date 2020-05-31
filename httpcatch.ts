// Http Catch & throw error handling 

// In employee.service.ts


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()
  export class EmployeeService {
    private _url: string = "/assets/data/employees1.json" ;
  constructor(private http:HttpClient) { }
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(
              catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
  }


===

// In employee-list.component.ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'employee-list',
  template: `
  <h2> Employee List</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
  <li> {{employee.name}}</li>
  </ul>
   `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
    public employees = [];
    public errorMsg;
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit() {
      this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                    error => this.errorMsg = error);
  }
  
}


==

// In employee-detail.component.ts


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';
//import { EventEmitter } from 'protractor';
@Component({
  selector: 'employee-detail',
  template: `
  <h2> Employee Details </h2>{
    <h3> {{ errorMsg }} </h3>
  <ul *ngFor="let employee of employees">
  <li> {{employee.id}}.{{employee.name}}.{{employee.age}}</li>
  </ul>
 `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
    public employees =[];
    public errorMsg;
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error )
}
  
}


===

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
import {HttpClientModule} from '@angular/common/http';
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
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


==

O/P:

Not working, need to fix - take help from some support or karthik


