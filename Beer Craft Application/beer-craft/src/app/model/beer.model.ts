import { BeerItem } from './beer.interface';

export class Beer {
    beers: BeerItem[];
    canSubscribe: boolean;
    columnHeaders: any[];
    totalRecords: number;
    cartItems: BeerItem[];
    constructor() {
        this.beers = [];
        this.canSubscribe = true;
        this.cartItems = [];
        this.columnHeaders = [
            { field: 'id', header: 'Id' },
            { field: 'name', header: 'Name' },
            { field: 'abv', header: 'Alcoholic content per volume (ABV)' },
            { field: 'style', header: 'Beer Style' },
            { field: 'ounces', header: 'Size of beer (ounces)' },
            { field: 'ibu', header: 'International bitterness unit (IBU)' },
            { field: 'button', header: '' },
          ];
    }
}