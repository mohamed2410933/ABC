import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-view-client-history',
  templateUrl: './view-client-history.component.html',
  styleUrls: ['./view-client-history.component.scss']
})
export class ViewClientHistoryComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
    customerId
  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id');
    if (this.customerId) {
      this.getCustomerById(this.customerId)
    }
  }

clientHistoryList=[]
  getCustomerById(id){
    this.spinner.show();
    this.viewService.ShowById('clients' , +id).then(res=>{
      this.spinner.hide();
        this.clientHistoryList = res['data'].is_serve
    }).catch(err=>{
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }

}
