import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  httpClient = inject(HttpClient); // Dependency Injection
  api_url = 'http://localhost:3000/employees';

  getAllEmployees() {
    return this.httpClient.get(this.api_url);
  }
  getEmployeeById(id: any) {
    return this.httpClient.get(`${this.api_url}/${id}`);
  }
  addEmployee(empData: any) {
    return this.httpClient.post(this.api_url, empData);
  }
  updateEmployee(id: any, empData: any) {
    return this.httpClient.patch(`${this.api_url}/${id}`, empData);
  }
  deleteEmployee(id: any) {
    return this.httpClient.delete(`${this.api_url}/${id}`);
  }
}
