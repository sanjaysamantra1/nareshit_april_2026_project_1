import { DirectivesDemo } from './../directives-demo/directives-demo';
import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DataBindingAssignments } from '../data-binding-assignments/data-binding-assignments';
import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding
    // DataBindingAssignments
    // DirectivesDemo
    // UserList
    // ProductList,
    // PipesDemo,
    // ParentDemo
    // EmployeeCrud
    Demo1,
    Demo2
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag = true;
}
