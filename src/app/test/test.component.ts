import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  number = 0 ;
  @Input()
  message = '';
  constructor() {
    this.number = Math.random();
  }

  ngOnInit() {
  }

  getColor() {
    return this.number > 0.5 ? 'red' : 'green';
  }

}
