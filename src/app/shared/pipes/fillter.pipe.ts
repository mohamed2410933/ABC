// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'fillter'
// })
// export class FillterPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from "@angular/core";
import { ViewService } from "../services/view.service";

@Pipe({
  name: "fillter",
})
export class FillterPipe implements PipeTransform {
  filteredProducts;
    
    constructor(public viewService: ViewService){}
  transform(items: any[], filterdata: any): any {
    // console.log(filterdata);
    // console.log(items);
    this.viewService.checkForceLogout();

    if (filterdata) {
      filterdata = filterdata.toLowerCase();
    } else {
      if (items) return (this.filteredProducts = [...items]);
    }
    let columns;
    if (items) {
      columns = Object.keys(items[0]);
      if (!columns.length) {
        return;
      }
    }

    const rows = items?.filter(function (d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        if (
          d[column] &&
          d[column].toString().toLowerCase().indexOf(filterdata) > -1
        ) {
          return true;
        }
      }
    });
    this.filteredProducts = rows;
    return this.filteredProducts;
  }
}
