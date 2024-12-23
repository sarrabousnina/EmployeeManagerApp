import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeesService } from './employee.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'employeemanagerapp';
  public employees: Employee[] = [];
  public editEmployee?: Employee;
  public deleteEmployee?: Employee;

  constructor(private employeeService: EmployeesService) { }
  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees() : void{
    this.employeeService.getEmployees().subscribe(
        (response : Employee[]) => {
          this.employees=response;
        },
        (error :HttpErrorResponse)=> {alert(error.message)}
        );
  }


  public onOpenModal(employee: Employee  ,mode :string) : void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type='button';
      button.style.display='none';
      button.setAttribute('data-toggle','modal');
      if(mode ==='add'){
        button.setAttribute('data-target','#addEmployeeModal');
      }      
      if(mode ==='edit'){
        this.editEmployee =employee;
        button.setAttribute('data-target','#updateEmployeeModal');
      }      
      if(mode ==='delete'){
        this.deleteEmployee = employee;
        button.setAttribute('data-target','#deleteEmployeeModal');
      }
      container?.appendChild(button);
      button.click();
  }
  public createEmptyEmployee(): Employee {
    return {
      id: 0,                // Default value (or can be left out if id is auto-generated)
      name: '',             // Default empty string for the name
      email: '',            // Default empty string for the email
      jobTitle: '',         // Default empty string for the job title
      phone: '',            // Default empty string for the phone number
      imageUrl: '',         // Default empty string for the image URL
      employeeCode: ''      // Default empty string for the employee code
    };
  }
  


  public onAddEmployee(addForm: NgForm): void {
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset(); // Reset the form after successful addition
      },
      (error: HttpErrorResponse) => {
        alert(error.message); // Show an error message if the request fails
        addForm.reset(); // Optionally reset the form after an error
      }
    );
  }
  

  public onUpdateEmloyee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }
}
