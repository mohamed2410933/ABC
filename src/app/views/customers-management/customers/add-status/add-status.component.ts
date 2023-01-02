import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.scss']
})
export class AddStatusComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,) { }
    customerId
    userInfo
    submitted: boolean;
  addStatusForm

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

    this.customerId = this.route.snapshot.paramMap.get('id');
    this.getAllStatus(1)

    this.addStatusForm = this.formBuilder.group({
      response: ["", Validators.required],
      note: [""],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addStatusForm.controls;
  }
  statusList:any=[]



  onReset(): void {
    this.submitted = false;
    this.addStatusForm.reset();
  }


  addClientStatus(){
    if (this.addStatusForm.invalid) {
      this.toastr.clear();
      this.toastr.error('حاله الاستجابة مطلوبة')
      return;

    }
      this.spinner.show();
      this.viewService.UpdateStatusForAssign(this.customerId , this.addStatusForm.value).then(res=>{
        this.spinner.hide()
       this.toastr.success(res['message'])
      //  this.getAllStatus(1)
      window.location.reload()
      }).catch(err=>{
        this.spinner.hide()

      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
      })
  }
  pageData
  getAllStatus(page){
      // this.spinner.show();
      this.viewService.GetAll(`assign-agent-customer/comments/${this.customerId}` , page , '').then(res=>{
        this.statusList = res['data']['data'];
     this.pageData = res['data'];

        this.spinner.hide()

      }).catch(err=>{
        this.spinner.hide()
       err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
      })
  }
}
