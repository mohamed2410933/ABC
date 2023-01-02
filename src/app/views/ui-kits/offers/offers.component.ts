import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
offersForm;
newId
  ngOnInit(): void {
 this.getOfferData()
    this.offersForm = this.formBuilder.group({
      dateFrom: ["2022-12-03 10:00:00", Validators.required],       
      dateTo: ["", Validators.required],       
      photo: [""],       
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.offersForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.offersForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.offersForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.offersForm.reset();
  }


viewImgUrl


offerData
getOfferData() {
  this.spinner.show();
  this.viewService.GetOfferData().then(res => {
   this.offerData = res['data']
   this.offersForm.get('dateFrom').setValue(res['data']['start_date']);
   this.offersForm.get('dateTo').setValue(res['data']['end_date']);
   this.viewImgUrl =  this.offerData.image
  //  console.log(this.offerData );
   
   this.spinner.hide();
  }).catch(err => {
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    this.spinner.hide();
  })
}





  updateOffer() {
    this.submitted = true;
    if (this.offersForm.invalid) {
      return;
    }
    this.spinner.show();
    this.offersForm.value.photo = this.imgUrl;
    this.viewService.EditOffer(this.offersForm.value).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      // this.router.navigateByUrl('/news');
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
