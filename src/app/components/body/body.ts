import { DirectivesDemo } from './../directives-demo/directives-demo';
import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DataBindingAssignments } from '../data-binding-assignments/data-binding-assignments';
import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding
    // DataBindingAssignments
    // DirectivesDemo
    // UserList
    ProductList,
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
