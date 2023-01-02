import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }
  contactsForm;
  ngOnInit(): void {
    this.contactsForm = this.formBuilder.group({
      mobile: ["", Validators.required],
      address: [""],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      addresFacebook: [""],
      addresYoutube: [""],
      addresTwiter: [""],
      addresInstagram: [""],
      workTime: [""],

    });
    this.getContactsData();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactsForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactsForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.contactsForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.contactsForm.reset();
  }

  contactData
  getContactsData() {
    this.spinner.show();
    this.viewService.GetAll('contacts').then(res => {
      this.spinner.hide();
      this.contactData = res['data'];
      this.contactsForm.get('mobile').setValue(res['data']['mobile'])
      this.contactsForm.get('address').setValue(res['data']['address']);
      this.contactsForm.get('email').setValue(res['data']['email']);
      this.contactsForm.get('phone').setValue(res['data']['phone']);
      this.contactsForm.get('addresFacebook').setValue(res['data']['facebook']);
      this.contactsForm.get('addresYoutube').setValue(res['data']['youtube']);
      this.contactsForm.get('addresTwiter').setValue(res['data']['twitter']);
      this.contactsForm.get('addresInstagram').setValue(res['data']['instagram']);
      this.contactsForm.get('workTime').setValue(res['data']['work_time']);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }

  updateContacts(){
    if(this.contactsForm.invalid){
      return
    }
    this.spinner.show();
    this.viewService.EditContacts(this.contactsForm.value).then(res=>{
      this.spinner.hide();
      this.toastr.success(res['message'])
    }).catch(err=>{
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }



}
