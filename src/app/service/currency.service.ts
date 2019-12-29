import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency} from '../currency-calculator/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService { // not actually needed anywhere
  url: string;

constructor(public http: HttpClient) {

}
getData(): Observable<any> {
    return this.http.get<Currency[]>('https://jsonplaceholder.typicode.com/albums');
}
}
