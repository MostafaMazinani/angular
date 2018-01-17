import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../model/icomment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: IComment = {
    text: 'your are my men',
    rate: 3.5,
    dislike: 3,
    like: 20,
    reviewNumber: 1
  };
  comments: IComment[] = [this.comment];

  constructor() {
  }

  ngOnInit() {
  }

  setRate(index: number, value: number) {
    this.comments[index].rate += value;
    this.comments[index].reviewNumber += 1;
    console.log('rate: ' + this.comments[index].rate);
    console.log('review : ' + this.comments[index].reviewNumber);

  }

  setComment(textcomment: HTMLInputElement) {
    if (textcomment.value.trim().length > 0) {
      this.comments.push({
        text: textcomment.value,
        rate: 0,
        dislike: 0,
        like: 0,
        reviewNumber: 0
      });
    }
  }

  likeComment(index: number) {
    this.comments[index].like += 1;
  }

  disLikeComment(index: number) {
    this.comments[index].dislike -= 1;
  }

}
