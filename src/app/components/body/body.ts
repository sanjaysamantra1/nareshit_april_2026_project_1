import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DataBindingAssignments } from '../data-binding-assignments/data-binding-assignments';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding
    DataBindingAssignments
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
