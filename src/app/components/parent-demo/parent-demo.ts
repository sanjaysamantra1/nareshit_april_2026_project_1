import { Child2Demo } from './../child2-demo/child2-demo';
import { Component, OnChanges } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo, Child2Demo, FormsModule],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  numArr = [10, 20, 30, 40];
  a = 100;
  c_parent: number | undefined;

  receiveDataFromChild2(c_child2: number) {
    this.c_parent = c_child2;
  }

  constructor() {
    console.log('Parent constructor');
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
