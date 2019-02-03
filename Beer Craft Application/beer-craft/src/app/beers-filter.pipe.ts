import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'beersFilter' })
export class BeersFilterPipe implements PipeTransform {
    transform(beers: any[], value: string): any[] {
        const search: string = value ? value.toLocaleLowerCase() : null;
        return search ? beers.filter((contact) =>
        contact.name.toLocaleLowerCase().startsWith(search)) : beers;
    }
}