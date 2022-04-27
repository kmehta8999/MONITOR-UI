import { Component, Inject } from '@angular/core';
import {ModelEmployee} from '.Model/model-employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public Employees:ModelEmployee ;

  constructor(private employeesrv : EmployeeService){  
    this.employeeserv.GetAllEmployees().subscribe((Employees) => {  
      this.Employees = Employees;  
    });  
    }   , error => console.error(error));
  }
}

