import {Component,OnInit} from '@angular/core';
import { EmployeeService } from './app.employeeservice';
import {ActivatedRoute,Params} from '@angular/router';
@Component({
    selector:'show',
    templateUrl:'showemployee.html'
})


export class ShowEmployeeComponent implements OnInit {
   
    constructor(private service:EmployeeService,private _active:ActivatedRoute){

    }
    empall:any[]=[];
    data:any;
     ngOnInit(){
        this.service.getAllEmployee().subscribe((data:any)=>this.empall=data);
    // this.empall= this.service.getAllEmployee();
   
    }
   

    empDelete(data:number):any{
        this.empall.splice(data,1);
    }

}