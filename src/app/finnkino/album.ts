export class Album {
  ID: number;
  Views: number;
  Title: string;
  ImageURL: string;
  PublishDate: string;
  HTMLLead: string;

  constructor(id: number, userImageURL: string, views: number, title: string, publishDate: string, htmlLead: string) {
    this.ID = id;
    this.Views = views;
    this.Title = title;
    this.ImageURL = userImageURL;
    this.PublishDate = publishDate;
    this.HTMLLead = htmlLead;
  }
}

