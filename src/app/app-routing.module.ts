import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'employee',
    component: EmployeeComponent
  },

  {
    path: 'employeeDetails/:_id',
    component: EmployeedetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
