import {Component,Input} from '@angular/core';

import { EmployeeService } from './app.employeeservice';
import {Router} from '@angular/router'
@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{ 
   
    constructor(private service:EmployeeService,private router:Router){}
    empId:any;
    empName:any;
    empSalary:any;
    empDepartment:any;
    myalldata:any;
    
    addData(){
        this.myalldata={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
        if(this.service.addEmployee(this.myalldata)){
        this.router.navigate(['show']);

    }
   
}
}