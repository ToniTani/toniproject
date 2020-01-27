import { Injectable } from '@angular/core';
import {FeedBackItem} from '../feedback/questions';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  feedbackItemsList: Array<FeedBackItem>;

constructor() {
    this.feedbackItemsList = [new FeedBackItem('Mitä kuuluu?'),
      new FeedBackItem('Miten menee?'),
      new FeedBackItem('Kuka olet?')];
    this.feedbackItemsList.push(new FeedBackItem('Hur mår du?'),
      new FeedBackItem('Hur är läget?'),
      new FeedBackItem('Vem är du?'));

  }


getFeedback(): FeedBackItem[] {
  return this.feedbackItemsList;
}
}

