import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
  
  empall:any[]=[];
    constructor(private http:HttpClient){}
 getAllEmployee(){
 return this.http.get("assets/employee.json");
  
 }
addEmployee(data:any){
      this.empall.push(data);
      return true;
 }

} 
