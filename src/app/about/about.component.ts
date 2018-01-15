import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ratings: number[] = [1, 4, 2.5, 5, 3.4];

  constructor() { }

  ngOnInit() {
  }

  message(event: Event) {
    alert('thanks for you vote'.concat(event));
  }

}
