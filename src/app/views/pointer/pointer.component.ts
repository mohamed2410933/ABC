import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.scss']
})
export class PointerComponent implements OnInit {

  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
pointerForm;
newId
  ngOnInit(): void {
this.getPointerData();
    this.pointerForm = this.formBuilder.group({
      // title: ["", Validators.required],       
      discription: ["", Validators.required],       
      photo: ["", !this.newId ? Validators.required : []],       
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.pointerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.pointerForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.pointerForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.pointerForm.reset();
  }


viewImgUrl



pointerData
getPointerData() {
  this.spinner.show();
  this.viewService.GetPointerData().then(res => {
   this.pointerData = res['data']
   this.pointerForm.get('discription').setValue(res['data']['description']);
   this.viewImgUrl =  this.pointerData.image
  //  console.log(this.pointerData );
   
   this.spinner.hide();
  }).catch(err => {
    this.spinner.hide();
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
  })
}




  EditPointer() {
    this.submitted = true;
    if (this.pointerForm.invalid) {
      return;
    }
    this.spinner.show();
    this.pointerForm.value.photo = this.imgUrl;
    this.viewService.EditPointer(this.pointerForm.value).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      // this.router.navigateByUrl('/news');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      // console.log(err.message.message);
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }

  imgUrl
  onFileChange(e) {
    // debugger
    this.imgUrl = new File([], '');
    this.imgUrl = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      if (event.target.result) {
        this.imgUrl = event.target.result
      }
      if (this.imgUrl) {
        reader.readAsDataURL(this.imgUrl);
        // blah.src = URL.createObjectURL(file)
      }
    }
    var output = document.getElementById('output') as HTMLInputElement;
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  }
}
