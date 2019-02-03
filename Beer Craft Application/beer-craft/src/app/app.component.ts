import { Component, OnInit } from '@angular/core';

import { takeWhile } from 'rxjs/operators';
import * as lodash from 'lodash';
import { BeerService } from './beer.service';
import { Beer } from './model/beer.model';
import { BeerItem } from './model/beer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beer-craft';
  beerModel: Beer;
  searchBeer: string = '';
  constructor(private readonly beerService: BeerService) {
    this.beerModel = new Beer();
  }

  ngOnInit() {
    this.fetchBeerList();
    if(localStorage.getItem('cartItems')) {
      this.beerModel.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
  }

  fetchBeerList() {
    this.beerService.getBeerList().pipe(
      (takeWhile(() => this.beerModel.canSubscribe))
    ).subscribe((data: BeerItem[]) => {
      this.beerModel.beers = data;
      this.beerModel.totalRecords = data.length;
    });
  }

  addToCart(beer: BeerItem) {
    var index = lodash.findIndex(this.beerModel.cartItems, {id: beer.id});
    if(index >= 0) {
      beer = this.beerModel.beers[index];
      beer.quantity++;
      this.beerModel.cartItems.splice(index, 1, beer);
    } else {
      beer.quantity = 1;
      this.beerModel.cartItems.push(beer);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.beerModel.cartItems));
  }

  sortColumn(event) {
    console.log(event);
  }
}
