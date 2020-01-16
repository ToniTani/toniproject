export class Album {
  ID: number;
  Views: number;
  Title: string;
  UserImageURL: string;

  constructor(id: number, userImageURL: string, views: number, title: string, ) {
    this.ID = id;
    this.Views = views;
    this.Title = title;
    this.UserImageURL = userImageURL;
  }
}

