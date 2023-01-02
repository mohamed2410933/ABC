import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  roleIndex
  filterData
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllBills(1)
    this.checkDelete();
  }

billsList=[];
pageData
  getAllBills(page , q = ''){
    this.spinner.show();
    this.viewService.GetAll('invoices' , page , q).then(res=>{
      this.spinner.hide();
          // console.log(res);
          this.billsList = res['data'].data;
      this.pageData = res['data'];

    }).catch(err=>{
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })

  }

  toEditBill(id){
    this.router.navigateByUrl(`/customersManagement/bills/operations/${id}`)
  }


    deleteBill(id , index){
      this.roleIndex = index
      this.viewService.PopupDeletition('invoices' , id);
    }
    checkDelete(){
      this.viewService.deleteStatus.subscribe((value) => {
      if(value.status){
        this.billsList = this.billsList.slice(0);
        this.billsList.splice(this.roleIndex, 1);
      }
      });
    }
}
