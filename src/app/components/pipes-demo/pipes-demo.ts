import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom_pipes/remaining-pipe';
import { OrdinalPipe } from '../../custom_pipes/ordinal-pipe';
import { AlphaNumeric } from '../../custom_directives/alpha-numeric';
import { MySortPipe } from '../../custom_pipes/my-sort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule, FormsModule,
    RemainingPipe, OrdinalPipe, AlphaNumeric,
    MySortPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName = 'saCHiN teNdUlkAr';
  salary = 5000;
  dateObj = new Date();

  user = { name: 'Sanjay', role: 'Trainer', add: 'bangalore', age: 55 };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];

  msg = 'Hello';
  num = 21;

  numArr = [50, 10, 40, 30, 20];
}
