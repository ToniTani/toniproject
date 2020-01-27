import { Component, OnInit } from '@angular/core';
import { FeedBackItem } from './questions';
import {QuestionsService} from '../service/questions.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackItemsList: Array<FeedBackItem>;
  loaded = false;

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
   this.feedbackItemsList = this.questionsService.getFeedback();
   this.loaded = true;
  }
}
