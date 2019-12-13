import { Pipe, PipeTransform} from '@angular/core';
import {propertyNames} from '@angular/material/schematics/ng-update/data';

@Pipe({
  name: 'newsFilter'
})
export class NewsfilterPipe implements PipeTransform {
  transform(cinemaData$: any[], searchTerm: string) {

    if (!cinemaData$ || !searchTerm) {
      return cinemaData$;
    }
    return cinemaData$.filter(news => news.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }
}


    /* if (value.length === 0 || filterString === '') {
     return value; }

   const resultArray = [];
   for (const item of value) {
     if (item[propName] === filterString) {
      resultArray.push(item);
     }
   }
   return resultArray;
   }
  }*/

