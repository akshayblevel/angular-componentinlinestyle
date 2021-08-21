import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styles: ['thead { color:#337AB7;}']
})
export class EmployeeComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  employees: IEmployee[] = [
    {
      id: 1,
      code: 'VOD1410',
      name: 'Akshay Patel',
      salary: 3000
    },
    {
      id: 2,
      code: 'VOD1710',
      name: 'Panth Patel',
      salary: 1500
    }
  ];
}
