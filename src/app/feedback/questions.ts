class FeedBackItem {
  static counter: number = 1;

  id: number;
  title: string;
  feedback: string;
  values: Array<string> = ['Bad', 'Ok', 'Good' ];

  constructor(msg: string) {
    this.title = msg;
    this.feedback = 'not yet ';
    this.id = FeedBackItem.counter;
  }

}
