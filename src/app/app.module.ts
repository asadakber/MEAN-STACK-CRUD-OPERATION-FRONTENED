import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeedetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
