import {Component, OnInit, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  startWidth: number;
  @Input()
  rating: number;
  @Output()
  starVote = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.startWidth = this.rating * 86 / 5;
  }

  onStarClick() {
    this.starVote.emit(`${this.rating}`);
  }
}
