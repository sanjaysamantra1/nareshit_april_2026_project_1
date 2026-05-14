import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a', 'b', 'numArr'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Demo {
  a: any;
  b: any;
  numArr: any;
  courseName: string;

  async fetchUserData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let userDate = await response.json();
    console.log(userDate);
  }

  constructor(
    private ele: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {
    // Dependency Injection
    console.log('child constructor');
    this.courseName = 'Angular';
  }
  ngOnInit() {
    console.log('child ngOnInit');
    this.fetchUserData();
  }
  ngOnChanges(myChanges: SimpleChanges) {
    console.log('child ngOnChanges');
    console.log(myChanges);
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
    this.cdr.markForCheck();
  }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
