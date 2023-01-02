import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-slider-operations',
  templateUrl: './slider-operations.component.html',
  styleUrls: ['./slider-operations.component.scss']
})
export class SliderOperationsComponent implements OnInit {

  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
SlidersForm;
SliderId
  ngOnInit(): void {
    this.SliderId = this.route.snapshot.paramMap.get('id');
    if (this.SliderId) {
      this.getSliderById(this.SliderId)
    }
    
    this.SlidersForm = this.formBuilder.group({
      title: ["", Validators.required],       
      description: ["", Validators.required],       
      status: ["", Validators.required],       
      photo: ["", !this.SliderId ? Validators.required : []],       
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.SlidersForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.SlidersForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.SlidersForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.SlidersForm.reset();
  }


viewImgUrl
  getSliderById(id) {
    this.viewService.ShowById('sliders' ,id).then(res => {
      this.SlidersForm.get('title').setValue(res['data']['title']);
      this.SlidersForm.get('description').setValue(res['data']['description']);
      this.SlidersForm.get('status').setValue(res['data']['status']);
      this.viewImgUrl = res['data']['image']
    }).catch(err => {
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }







  addEditSlider(id) {
    this.submitted = true;
    if (this.SlidersForm.invalid) {
      return;
    }
    this.spinner.show();
    this.SlidersForm.value.photo = this.imgUrl;
    this.viewService.addEditSlider(this.SlidersForm.value, +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/sliders');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  imgUrl
  onFileChange(e) {
    this.imgUrl = new File([], '');
    this.imgUrl = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      if (event.target.result) {
        this.imgUrl = event.target.result
      }
      if (this.imgUrl) {
        reader.readAsDataURL(this.imgUrl);
      }
    }
    var output = document.getElementById('output') as HTMLInputElement;
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  }
}
