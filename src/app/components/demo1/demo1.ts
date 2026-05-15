import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  timerId: any;
  constructor() {
    this.timerId = setInterval(() => {
      console.log('I am SetInterval from Demo-1');
    }, 1000);
  }

  ngOnInit() {
    console.log('Demo-1 ngOnInit');
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.timerId);
  }
}
