import { Component, OnInit } from '@angular/core';
import {Hiremanager} from '../pojo/hiremanager';
import { MOCKS } from '../mocks/mock-hiremanagers';

@Component({
  selector: 'app-hiremanager',
  templateUrl: './hiremanager.component.html',
  styleUrls: ['./hiremanager.component.css']
})

export class HiremanagerComponent implements OnInit {
  hiremanagers = MOCKS;
  selectedHiremanager: Hiremanager;
  constructor() { }
  ngOnInit() {
  }
  onSelect(hiremanager: Hiremanager): void {
  this.selectedHiremanager = hiremanager;
 }
}




