import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-customers-operations',
  templateUrl: './customers-operations.component.html',
  styleUrls: ['./customers-operations.component.scss']
})
export class CustomersOperationsComponent implements OnInit {

  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
addCustomerForm;
customerId;
userInfo
  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

    this.customerId = this.route.snapshot.paramMap.get('id');
    if (this.customerId) {
      this.getCustomerById(this.customerId)
    }
    this.addCustomerForm = this.formBuilder.group({
      phone: ["", Validators.required],    
      memberName: ["", Validators.required],
      email: ["", Validators.required],       
      password: ["", !this.customerId ?  Validators.required : []],       
      confirmPassword: ["", !this.customerId ?  Validators.required : []],       
      package: [""], 
      market_id: [""], 
      status: ["", Validators.required], 
      start_date: [""], 
      end_date: [""], 
    });
    this.getAllPackages(1);
    if(this.userInfo.roleId !== 6){
      this.getAllMarkets(1)
    }

  }

  get f(): { [key: string]: AbstractControl } {
    return this.addCustomerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addCustomerForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.addCustomerForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.addCustomerForm.reset();
  }


  addEditCustomer(id) {
    this.submitted = true;
    if (this.addCustomerForm.invalid) {
      return;
    }
    this.spinner.show();
    this.viewService.addEditCustomer(this.addCustomerForm.value, +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message']);
      // if(this.userInfo.roleId !== 6){
        this.router.navigateByUrl('/customersManagement/customers');
      // }else{
        // this.router.navigateByUrl('/teamWork/follow-markter');
        
      // }
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


  PackagesList
  pageData
  getAllPackages(page = 1,q='') {
    // this.spinner.show();
    this.viewService.GetAll('bouquets',page ,q).then(res => {
      // this.spinner.hide();
      this.PackagesList = res['data']
      this.pageData = res['data'];
    }).catch(err => {
      // this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }


  getCustomerById(id){
    this.spinner.show();
    this.viewService.ShowById('clients' , +id).then(res=>{
      this.spinner.hide();
      this.addCustomerForm.get('phone').setValue(res['data']['phone']);
      this.addCustomerForm.get('memberName').setValue(res['data']['name']);
      this.addCustomerForm.get('email').setValue(res['data']['email']);
      // this.addCustomerForm.get('package').setValue(res['data']['bouquet_id']);
      this.addCustomerForm.get('package').setValue(res['data']['bouquet_id']);
      this.addCustomerForm.get('market_id').setValue(res['data']['market'][0].id);
      this.addCustomerForm.get('status').setValue(res['data']['status'] == 'مفعل' ? 'active' : 'dis-active' );
    }).catch(err=>{
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }

  MarketsList
  getAllMarkets(page=1 , q='') {
    // 
    this.spinner.show();
    this.viewService.GetAll('markets' , page , q).then(res => {
      this.spinner.hide();
      this.MarketsList = res['data']
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


}
