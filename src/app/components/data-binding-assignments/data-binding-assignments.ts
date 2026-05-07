import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-assignments',
  imports: [],
  templateUrl: './data-binding-assignments.html',
  styleUrl: './data-binding-assignments.css',
})
export class DataBindingAssignments {
  flag: boolean = false;
  toggleFlag() {
    this.flag = !this.flag;
  }
}
