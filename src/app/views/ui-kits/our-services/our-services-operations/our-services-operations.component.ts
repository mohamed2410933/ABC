import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-our-services-operations',
  templateUrl: './our-services-operations.component.html',
  styleUrls: ['./our-services-operations.component.scss']
})
export class OurServicesOperationsComponent implements OnInit {
  submitted: boolean;
  servicId
  constructor(private formBuilder: FormBuilder,
     public viewService: ViewService,
     private toastr: ToastrService,
     private spinner: NgxSpinnerService,
     private router: Router,
     private route: ActivatedRoute,) { }
  ourServicesForm;
  ngOnInit(): void {
    this.servicId = this.route.snapshot.paramMap.get('id');
    if(this.servicId ){
      this.getServiceById(this.servicId)
  
    }
    this.ourServicesForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""],
    });


  }

  get f(): { [key: string]: AbstractControl } {
    return this.ourServicesForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.ourServicesForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.ourServicesForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.ourServicesForm.reset();
  }


  addEditService(id) {
    this.submitted = true;
    if (this.ourServicesForm.invalid) {
      return;
    }
    this.spinner.show();
    this.viewService.addEditService(this.ourServicesForm.value , +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/contentManagement/our-services');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
      // console.log(err.msg);
    })
  }

servceData
  getServiceById(id){
    this.viewService.getServiceById(id).then(res=>{
        this.ourServicesForm.get('name').setValue(res['data']['name']);
        this.ourServicesForm.get('description').setValue(res['data']['description']);
    }).catch(err=>{
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }
}
