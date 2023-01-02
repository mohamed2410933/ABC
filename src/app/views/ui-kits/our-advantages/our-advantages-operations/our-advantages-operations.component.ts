import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-our-advantages-operations',
  templateUrl: './our-advantages-operations.component.html',
  styleUrls: ['./our-advantages-operations.component.scss']
})
export class OurAdvantagesOperationsComponent implements OnInit {

  submitted: boolean;
  AdvantageId
  constructor(private formBuilder: FormBuilder,
     public viewService: ViewService,
     private toastr: ToastrService,
     private spinner: NgxSpinnerService,
     private router: Router,
     private route: ActivatedRoute,) { }
  ourAdvantagesForm;
  ngOnInit(): void {
    this.AdvantageId = this.route.snapshot.paramMap.get('id');
    if(this.AdvantageId ){
      this.getAdvantageById(this.AdvantageId)
  
    }
    this.ourAdvantagesForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""],
      status:["" , Validators.required]
    });


  }

  get f(): { [key: string]: AbstractControl } {
    return this.ourAdvantagesForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.ourAdvantagesForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.ourAdvantagesForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.ourAdvantagesForm.reset();
  }


  addEditAdvantages(id) {
    this.submitted = true;
    if (this.ourAdvantagesForm.invalid) {
      return;
    }
    this.spinner.show();
    this.viewService.addEditAdvangages(this.ourAdvantagesForm.value , +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/contentManagement/our-advantages');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
      // console.log(err.msg);
    })
  }

// servceData
  getAdvantageById(id){
    // debugger
    this.viewService.ShowById('why-services',id).then(res=>{
        this.ourAdvantagesForm.get('name').setValue(res['data']['name']);
        this.ourAdvantagesForm.get('description').setValue(res['data']['description']);
        this.ourAdvantagesForm.get('status').setValue(res['data']['status'] !== 'عدم النشر' ? 'active' : "dis-active");

    }).catch(err=>{
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
      this.spinner.hide();
    })
  }
}
