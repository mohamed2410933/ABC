import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-follow-markter',
  templateUrl: './follow-markter.component.html',
  styleUrls: ['./follow-markter.component.scss']
})
export class FollowMarkterComponent implements OnInit {

  filterData
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
  userInfo: any
  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (this.userInfo.roleId === 1 || this.userInfo.roleId === 6  ) {
      this.getAllCustomers(1)
    } else {
      // this.GetCustomersByAgentAdminId()
    }
    this.checkDelete()

  }


  CustomersList
  pageData
  getAllCustomers(page, q = '') {
    this.spinner.show();
    this.viewService.GetAllCustomers(page , q).then(res => {
      this.spinner.hide();
      this.CustomersList = res['data'].data;
      // console.log(this.CustomersList);
      
      this.pageData = res['data'];
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }



  agentAdminCustomers = []
  GetCustomersByAgentAdminId() {
    this.spinner.show()
    this.viewService.GetCustomersByAgentAdminId(this.userInfo.id).then(res => {
      this.spinner.hide();
      this.agentAdminCustomers = res['data'];

    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }

  toEditCustomer(id) {
    this.router.navigateByUrl(`/customersManagement/customers/operations/${id}`)
  }

  roleIndex
  deleteCustomer(id, index) {
    // debugger
    this.roleIndex = index
    this.viewService.PopupDeletition('assign-agent-customer/destroy', id);
  }
  checkDelete() {
    this.viewService.deleteStatus.subscribe((value) => {
      if (value.status) {
        this.CustomersList = this.CustomersList.slice(0);
        this.CustomersList.splice(this.roleIndex, 1);
      }
    });


  }



  changeStatus(id) {
    this.spinner.show();
    this.viewService.ChangeClientStatus(id).then(res => {
      this.getAllCustomers(1)
      this.spinner.hide();
      this.toastr.success(res['message'])
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  fun(id) {
    this.router.navigateByUrl(`/customersManagement/customers/viewClientHistory/${id}`)
  }

  addClientStatus(id) {
    this.router.navigateByUrl(`/customersManagement/customers/addClientSataus/${id}`)
  }

  getResponse(el){
      //  console.log(el);
      if(el){
        return el.response
      }
  }
  getNote(el){
      //  console.log(el);
      if(el){
        return el.note

      }
  }
}
