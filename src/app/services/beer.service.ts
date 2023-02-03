import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  url = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }
}
