import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import de from 'date-fns/esm/locale/de/index.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  filterData
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllAgents(1)
    this.getAllSales(1)
    this.getAllMembers(1)
  }


  agentsList
  pageData
  getAllAgents(page? , q='') {
    this.spinner.show();
    this.viewService.GetAll('client/new',page , q).then(res => {
      this.spinner.hide();
      this.agentsList = res['data'].data
      this.pageData = res['data'];
      this.isShowChecbox = true;
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }
  salesList
  getAllSales(page , q= '') {
    this.spinner.show();
    this.viewService.GetAll('assign-agent-customer/sales' ,page , q).then(res => {
      this.spinner.hide();
      this.salesList = res['data'].data;
      this.pageData = res['data'];

      // console.log(this.agentsList );
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }




assignCustomersToSales(){
  // debugger
  if(this.selectedCustomersList.length == 0 || this.salesId  == undefined){
    if(this.selectedCustomersList.length == 0){
      // this.toastr.clear();
      this.toastr.error('من فضلك قم بتحديد عملاء اولا')
    }if(this.salesId  == undefined){
      // this.toastr.clear();
      this.toastr.error('من فضلك قم بتحديد وكيل اولا')
    }
    return
  }
  this.spinner.show();
  this.viewService.AssignCustomersToSales(this.selectedCustomersList , this.salesId).then(res=>{
    this.spinner.hide();
    this.toastr.success(res['message']);
    window.location.reload()
    this.agentsList = this.agentsList.filter(x=>this.selectedCustomersList.find(e=>x.id !== e))
    $('input[type=checkbox]').prop('checked', false);
  }).catch(err=>{
    this.spinner.hide();
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
  })
}



 


selectedCustomersList=[]
unselectedCustomersList=[]
  onActivate(event) {
    if(event.type == "checkbox"){
     if(this.selectedCustomersList.includes(event.row.id)){
        this.selectedCustomersList = this.selectedCustomersList.filter(e=> e !== event.row.id)
      }else{
         this.selectedCustomersList.push(event.row.id)
      }
 
       
    }
}

salesId
isShowChecbox = true
getSaleId(id){
this.salesId  = id.target.value
}
selectedItem
setRow(item) {
  this.selectedItem = item;
}


toShowClientsForSales(item){
  this.router.navigateByUrl(`/agents/operations/${item?.id}/${item?.name}`)

}

membersList = [];
// pageData
getAllMembers(page , q ='') {
  this.spinner.show();
  this.viewService.GetAll('assign-agent-customer/admin-agents',page , q).then(res => {
    this.spinner.hide();
    this.membersList = res['data'];
    // this.membersList  = res['data'].data.filter((e, index) => {
    //   // arr[index + 1] += " extra";
    //   return e.role[0].id == 4;

    // });
    // console.log(modifiedWords);
    
    // this.pageData = res['data'];
  }).catch(err => {
    this.spinner.hide();
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
  })
}

}
