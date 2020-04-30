import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {

  public emp: Observable<any>;
  public empId: string
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.paramMap.get('_id')
    this.emp = this.employeeService.getEmployee(this.empId)
  }



}
