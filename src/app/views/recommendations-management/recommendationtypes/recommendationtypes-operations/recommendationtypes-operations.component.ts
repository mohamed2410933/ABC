import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-recommendationtypes-operations',
  templateUrl: './recommendationtypes-operations.component.html',
  styleUrls: ['./recommendationtypes-operations.component.scss']
})
export class RecommendationtypesOperationsComponent implements OnInit {

  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
recomondationTypeForm;
recomondationTypeId
  ngOnInit(): void {
    this.recomondationTypeId = this.route.snapshot.paramMap.get('id');
    if(this.recomondationTypeId){
      this.getRecomondationTypeById(this.recomondationTypeId);
    
    }
    this.recomondationTypeForm = this.formBuilder.group({
      type: ["", Validators.required],       
      discription: ["", Validators.required],       
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.recomondationTypeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.recomondationTypeForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.recomondationTypeForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.recomondationTypeForm.reset();
  }


  addEditRecomondationType(id) {
    
  this.submitted = true;
  if (this.recomondationTypeForm.invalid) {
    return;
  }
  this.spinner.show();
  this.viewService.addEditRecomondationType(this.recomondationTypeForm.value , +id).then(res => {
    this.spinner.hide();
    this.toastr.clear();
    this.toastr.success(res['message'])
    this.router.navigateByUrl('/recommendationsManagement/recommendationtypes');
    // console.log(res);
  }).catch(err => {
    this.spinner.hide();
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

  })
}


getRecomondationTypeById(id){

  this.viewService.getRecomondationTypeById(id).then(res=>{
      this.recomondationTypeForm.get('type').setValue(res['data']['name']);
      this.recomondationTypeForm.get('discription').setValue(res['data']['description']);
  }).catch(err=>{
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')


  })
}

}
