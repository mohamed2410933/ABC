import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-send-emails',
  templateUrl: './send-emails.component.html',
  styleUrls: ['./send-emails.component.scss']
})
export class SendEmailsComponent implements OnInit {
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
    sendEmailForm;
    selectedCustomer
  ngOnInit(): void {
    this.sendEmailForm = this.formBuilder.group({
      address: ["", Validators.required],
      title: ["", Validators.required],    
      data: ["", Validators.required],
    });
    this.getAllCustomers(1);
  }





  public onSelectAll() {
    const selected = this.CustomersList.map(item => item.id);
    // this.sendEmailForm.get('email').patchValue(selected);
    this.selectedCustomer = selected
  }
  
  public onClearAll() {
    // this.sendEmailForm.get('email').patchValue([]);
    this.selectedCustomer = []
  }

  onSubmit(){
    this.spinner.show()
    this.submitted = true;
    if (this.sendEmailForm.invalid) {
      return;
    }
      let clientsIds= this.selectedCustomer;
      this.viewService.sendEmail(clientsIds , this.sendEmailForm.value).then(res=>{
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
    }).catch(err=>{
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
      
    

  }
  get f(): { [key: string]: AbstractControl } {
    return this.sendEmailForm.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.sendEmailForm.reset();
  }

  CustomersList
  pageData
  getAllCustomers(page, q = '') {
    this.spinner.show();
    this.viewService.GetAll('client/active',page, q).then(res => {
      this.spinner.hide();
      this.CustomersList = res['data'].data
      this.pageData = res['data'];
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }
}
