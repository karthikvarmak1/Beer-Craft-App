import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class BeerService {
  constructor(private readonly http: HttpClient){}

  getBeerList() {
    return this.http.get('/beercraft');
  }
}