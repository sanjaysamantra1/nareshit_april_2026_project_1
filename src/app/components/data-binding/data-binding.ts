import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular';

  my_img_url =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGTcQI9_LYx7i1ZBeoE4SV1ZOwV9I-gRZfw&s';

  flag: boolean = true;
  toggleFlag() {
    this.flag = !this.flag;
  }

  max_length = 10;

  // Variables for Addition
  num1: number = 10;
  num2: number = 20;

  addResult: number = 0;
  addition(val1: string, val2: string) {
    this.addResult = Number(val1) + Number(val2);
  }
}
