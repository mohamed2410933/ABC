import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-bills-operations',
  templateUrl: './bills-operations.component.html',
  styleUrls: ['./bills-operations.component.scss']
})
export class BillsOperationsComponent implements OnInit  {

  submitted: boolean;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
addBillForm;
billId
selectedCustomer
  ngOnInit(): void {
    this.billId = this.route.snapshot.paramMap.get('id');
 if(this.billId){
  this.getBillById(this.billId)
 }
    
    this.getAllPackages(1);
    this.getAllCustomers(1);
    this.addBillForm = this.formBuilder.group({
      client: [""],    
      package: [""],
      price: [""],       
      type :[""] 
    });
   
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addBillForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addBillForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.addBillForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.addBillForm.reset();
  }


  CustomersList
  pageData
  getAllCustomers(page , q ='') {
    // 
    this.viewService.GetAllCustomers(page , q).then(res => {
      this.CustomersList = res['data'].data
    }).catch(err => {
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }



  getBillById(id) {
    this.spinner.show();
    this.viewService.ShowById('invoices', id).then(res => {
      this.spinner.hide();
    //  console.log(res['data']);
          this.selectedCustomer = res['data']['id'];
     this.addBillForm.get('client').patchValue(res['data']['client']);
     this.addBillForm.get('package').setValue(res['data']['bouquet_id']);
     this.addBillForm.get('price').setValue(res['data']['price']);
     this.addBillForm.get('type').setValue(res['data']['type']);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

 

  PackagesList
  
  getAllPackages(page , q= '') {
    this.viewService.GetAll('bouquets',page ,q).then(res => {
      this.PackagesList = res['data']
    }).catch(err => {
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }


  addEditBill(id) {
    
    this.submitted = true;
    if (this.addBillForm.invalid) {
      return;
    }
    this.spinner.show();
        this.addBillForm.value.client =  this.selectedCustomer ;
    this.viewService.addEditBill(this.addBillForm.value, +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/customersManagement/bills');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }


}
