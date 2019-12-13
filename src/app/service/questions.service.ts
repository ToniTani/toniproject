import { Injectable } from '@angular/core';
import {Photo} from '../photos/photo';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


photos: Photo[];

constructor() {
  this.photos = [
    {
      kissa: 'John',
      koira: 'Doe',
      apina: 'Bo',
    },
    {
      kissa: 'Kevin',
      koira: 'John',
      apina: 'Youk',

    }
  ];
}

getPhotos(): Photo[] {
  console.log('Photo added');
  return this.photos;
}

addPhoto(photo: Photo) {
  this.photos.unshift(photo);
}
}
