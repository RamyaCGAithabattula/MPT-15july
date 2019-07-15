import {Component,Input} from '@angular/core';

import { EmployeeService } from './app.employeeservice';
import {Router} from '@angular/router'
@Component({
    selector:'add',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{ 
   
    constructor(private service:EmployeeService,private router:Router){}
    empId:any;
    empName:any;
    empEmail:any;
    empPhone:any;
    myalldata:any;
    
    addData(){
        this.myalldata={empId:this.empId,empName:this.empName,empEmail:this.empEmail,empPhone:this.empPhone}
        if(this.service.addEmployee(this.myalldata)){
        this.router.navigate(['show']);

    }
   
}
}