export class Album {
  ID: number;
  Views: number;
  User: string;
  UserImageURL: string;

  constructor(id: number, userImageURL: string, views: number, user: string, ) {
    this.ID = id;
    this.Views = views;
    this.User = user;
    this.UserImageURL = userImageURL;
  }
}

