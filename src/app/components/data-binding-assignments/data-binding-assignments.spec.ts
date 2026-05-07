import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingAssignments } from './data-binding-assignments';

describe('DataBindingAssignments', () => {
  let component: DataBindingAssignments;
  let fixture: ComponentFixture<DataBindingAssignments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingAssignments],
    }).compileComponents();

    fixture = TestBed.createComponent(DataBindingAssignments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
