import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  public filterData;
  constructor(     
    private productService: ProductService ,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router) {

 
  }

  ngOnInit() {
    // this.products$ = this.productService.getProducts();
    // this.getAllStocks(1) 
    this.checkDelete()
  }

  StocksList
  pageData
  getAllStocks(page = 1, q='') {
    this.spinner.show()
    this.viewService.GetAllStocks(page , q).then(res => {
      this.StocksList = res['data'].data
         this.spinner.hide();
         this.pageData = res['data'];
    }).catch(err => {
         this.spinner.hide();
    })
  }

  toEditStock(id){
    this.router.navigateByUrl(`/stockSettings/stocks/stocks-operations/${id}`)
    }


    roleIndex
    deleteStock(id , index){
      this.roleIndex = index
      this.viewService.PopupDeletition('stocks' , id);
    }
    checkDelete(){
      this.viewService.deleteStatus.subscribe((value) => {
      if(value.status){
        this.StocksList = this.StocksList.slice(0);
        this.StocksList.splice(this.roleIndex, 1);
      }
      });
    }
}
