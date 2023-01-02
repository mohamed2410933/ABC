import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  public filterData;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.getAllMarkets(1)
    this.checkDelete()
  }

  
  MarketsList
  pageData
  getAllMarkets(page = 1 , q='') {
    // debugger
    this.spinner.show();
    this.viewService.GetAll('markets' , page , q).then(res => {
      this.spinner.hide();
      this.MarketsList = res['data']
      this.pageData = res['data'];

    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


  toEditMarket(id){
    this.router.navigateByUrl(`market/operations/${id}`)
  }

roleIndex
deleteMarket(id , index){
  this.roleIndex = index
  this.viewService.PopupDeletition('markets' , id);
}
checkDelete(){
  this.viewService.deleteStatus.subscribe((value) => {
  if(value.status){
    this.MarketsList = this.MarketsList.slice(0);
    this.MarketsList.splice(this.roleIndex, 1);
  }
  });
}


}
