import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  imports: [],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs: ['addEmpEvent'],
})
export class EmployeeAdd {
  addEmpEvent = new EventEmitter();

  addEmp(eId: string, name: string, gender: string, salary: string) {
    const newEmpObj = { eId, name, gender, sal: salary };
    this.addEmpEvent.emit(newEmpObj);
  }
}
