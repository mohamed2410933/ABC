import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-reviews-operations',
  templateUrl: './reviews-operations.component.html',
  styleUrls: ['./reviews-operations.component.scss']
})
export class ReviewsOperationsComponent implements OnInit {

  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
reviewsForm;
reviewId
ngOnInit(): void {
  this.reviewId = this.route.snapshot.paramMap.get('id');
  if (this.reviewId) {
    this.getReviewById(this.reviewId)
  }
  
  this.reviewsForm = this.formBuilder.group({
    name: ["", Validators.required],       
    discription: ["", Validators.required],       
    photo: ["", !this.reviewId ? Validators.required : []],       
  });
}


get f(): { [key: string]: AbstractControl } {
  return this.reviewsForm.controls;
}

onSubmit(): void {
  this.submitted = true;

  if (this.reviewsForm.invalid) {
    return;
  }

  // console.log(JSON.stringify(this.reviewsForm.value, null, 2));
}


onReset(): void {
  this.submitted = false;
  this.reviewsForm.reset();
}


viewImgUrl
getReviewById(id) {
  this.viewService.ShowById('visitors' ,id).then(res => {
    this.reviewsForm.get('name').setValue(res['data']['name']);
    this.reviewsForm.get('discription').setValue(res['data']['description']);
    this.viewImgUrl = res['data']['image']
  }).catch(err => {
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
  })
}







addEditReview(id) {
  this.submitted = true;
  if (this.reviewsForm.invalid) {
    return;
  }
  this.spinner.show();
  this.reviewsForm.value.photo = this.imgUrl;
  this.viewService.addEditReview(this.reviewsForm.value, +id).then(res => {
    this.spinner.hide();
    this.toastr.clear();
    this.toastr.success(res['message'])
    this.router.navigateByUrl('/customers-reviews');
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
