import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-agents-operations',
  templateUrl: './agents-operations.component.html',
  styleUrls: ['./agents-operations.component.scss']
})
export class AgentsOperationsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
salesId
salesName
  ngOnInit(): void {
    this.salesId = this.route.snapshot.paramMap.get('id');
    this.salesName = this.route.snapshot.paramMap.get('name');
    if (this.salesId) {
      this.getAllClientsForSelse(this.salesId , 1)

    }
  }
  filterData
  pageData
  clientsSalesList=[]
  getAllClientsForSelse(id? , page?){
    // debugger
    this.spinner.show();
    this.viewService.ShowById('assign-agent-customer/sales-client' , id).then(res => {
      this.spinner.hide();
      this.clientsSalesList = res['data'];
      this.pageData = res['data'];
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }

  unAssignClientFromSales(){
    // debugger
    if(this.selectedCustomersList.length == 0){
        this.toastr.clear();
        this.toastr.warning('من فضلك قم بتحديد عملاء اولا')
    }else{
      this.viewService.UnAssignCustomersToSales(this.selectedCustomersList).then(res=>{
        this.toastr.success('تم الحذف بنجاح');
        this.clientsSalesList = this.clientsSalesList.filter(x=>this.selectedCustomersList.find(e=>x.id !== e))
        this.selectedCustomersList = []
        // $('input:checkbox').removeAttr('checked');
        $('input[type=checkbox]').prop('checked', false);
      }).catch(err=>{
        err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
      })
    }
  }


  selectedCustomersList=[]
  onActivate(event) {
    if(event.type == "checkbox"){
      // console.log(event.row);
      this.selectedCustomersList.push(event.row.id)
    }
}

getResponse(el){
  //  console.log(el);
   return el.response
}
getNote(el){
  //  console.log(el);
   return el.note
}
}
