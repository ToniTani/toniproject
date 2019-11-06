export class FeedBackItem {
  static counter = 1;

  id: number;
  title: string;
  feedback: string;
  values: Array<string> = ['Bad', 'Ok', 'Good' ];

  constructor(msg: string) {
    this.title = msg;
    this.feedback = 'Swipe to review!';
    this.id = FeedBackItem.counter++;
  }
  feedbackValue(value: number) {
    if (value < 35) {
      this.feedback = this.values[0];
    } else if (value > 67) {
      this.feedback = this.values[2];
    } else {
      this.feedback = this.values[1];
    }
  }
}
