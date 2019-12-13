import {Component, OnInit, ViewChild} from '@angular/core';
import {Photo} from './photo';
import {QuestionsService} from '../service/questions.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photo: Photo = {
    kissa: '',
    koira: '',
    apina: ''
  }
  photos: Photo[];
  loaded = false;
  showPhotoForm = false;
  photoForm: any;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.photos = this.questionsService.getPhotos();
    this.loaded = true;
  }
  onSubmit({value, valid}: {value: Photo, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.kissa = String(true);
      value.koira = String(true);
      value.apina = String(true);

      this.questionsService.addPhoto(value);

     // this.form.reset();
    }
  }
}
