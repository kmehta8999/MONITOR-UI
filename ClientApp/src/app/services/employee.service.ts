import { Injectable } from '@angular/core';  
import {Http} from '@angular/http';  
import 'rxjs/add/operator/map';  
  
@Injectable()  
export class EmployeeService {  
  constructor(public http : Http) {   
  }  
GetAllEmployees(){  
  return this.http.get('http://localhost:52044/api/member').map(res =>res.json());  
}  
}  