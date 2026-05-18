import { CommonModule } from '@angular/common';
import { EmployeeService } from './../../services/employee-service';
import { Component, inject } from '@angular/core';
import { last, Observable } from 'rxjs';

@Component({
  selector: 'app-employee-crud-http',
  imports: [CommonModule],
  templateUrl: './employee-crud-http.html',
  styleUrl: './employee-crud-http.css',
})
export class EmployeeCrudHttp {
  employeeService = inject(EmployeeService);
  employees$: Observable<any> | undefined;

  fetchEmployees() {
    this.employees$ = this.employeeService.getAllEmployees();
    console.log(this.employees$);
  }

  deleteEmp(empId: any) {
    const isConfirmed = confirm('Are you sure to delete?');
    if (isConfirmed) {
      this.employeeService.deleteEmployee(empId).subscribe((response) => {
        alert(`Employee with id ${empId} is Deleted Successfully!!`);
        this.fetchEmployees();
      });
    }
  }

  addEmp(firstName: any, lastName: any, email: any, gender: any, sal: any) {
    const newEmp = { firstName, lastName, email, gender, sal };
    this.employeeService.addEmployee(newEmp).subscribe((response) => {
      alert('employee added successfully');
    });
  }
}
