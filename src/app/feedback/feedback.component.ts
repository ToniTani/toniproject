import { Component, OnInit } from '@angular/core';
import { FeedBackItem } from './questions';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackItemsList: Array<FeedBackItem>;

  constructor() {
    this.feedbackItemsList = [new FeedBackItem('Mitä kuuluu?'),
      new FeedBackItem('Miten menee?'),
      new FeedBackItem('Kuka olet?')];
    this.feedbackItemsList.push(new FeedBackItem('Hur mår du?'),
      new FeedBackItem('Hur är läget?'),
      new FeedBackItem('Vem är du?'));

    // new FeedBackItem('');
    // new FeedBackItem('Oliko ruoka hyvää');
  }

  ngOnInit() {
  }

}
