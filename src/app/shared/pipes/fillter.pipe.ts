// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'fillter'
// })
// export class FillterPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillter'
})
export class FillterPipe implements PipeTransform {

  filteredProducts;
  
  transform(items: any[], filterdata: any): any {
    // console.log(filterdata);
    // console.log(items);
    
    if (filterdata) {
      filterdata = filterdata.toLowerCase();
    } else {
       return this.filteredProducts = [...items];
    }

    const columns = Object.keys(items[0]);
    if (!columns.length) {
      return;
    }

    const rows = items.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        if (d[column] && d[column].toString().toLowerCase().indexOf(filterdata) > -1) {
          return true;
        }
      }
    });
    this.filteredProducts = rows;
    return this.filteredProducts ;
  }
     
  

}
