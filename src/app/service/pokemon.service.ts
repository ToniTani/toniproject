import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Album} from '../finnkino/album';
import {Observable, throwError} from 'rxjs';
import * as url from 'url';
import {catchError, map} from 'rxjs/operators';
import {parseString} from 'xml2js';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string;
  NewsArticle: string;
  newsCount: number;

  newsURL = 'https://www.finnkino.fi/xml/News/';

  constructor(private httpClient: HttpClient) {
    // this.url = 'https://www.finnkino.fi/xml/News/';
  }

  getData(): Observable<any> {
    // return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
// return this.http.get<Album[]>('https://pixabay.com/api/?key=5303976-fd6581ad4ac165d1b75cc15b3&q=kitten&image_type=photo&pretty=true');

    return this.httpClient.get(this.newsURL, { responseType: 'text' })
      .pipe(map(response => {
        // console.log('getXMLData........' + response);

        let newsData = [];
        parseString(response, {trim: true, explicitArray: false, mergeAttrs: true}, function(eur, result) {
          newsData = result.News.NewsArticle;
        });
        return newsData;
      }));
  }
}
