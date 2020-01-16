import { Pipe, PipeTransform} from '@angular/core';
import {propertyNames} from '@angular/material/schematics/ng-update/data';
import {Album} from './album';

@Pipe({
  name: 'newsFilter'
})

export class NewsfilterPipe implements PipeTransform {
  transform(items: Album[], searchTerm: string) {
    if (!items || !searchTerm) {
     return items;
    }
    return items.filter(item => item.Title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}


  //   const resultArray = [];
  //   for (const item of cinemaData$) {
  //   if (item === searchTerm) {
  //   resultArray.push(item);
  //   }
  // }
  //   return resultArray;
  //  }
  // }


//   transform(cinemaData$: any[], searchTerm: string) {
//
//     if (!cinemaData$ || !searchTerm) {
//       return cinemaData$;
//     }
//     return cinemaData$.filter(news => news.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
//
//   }
// }
