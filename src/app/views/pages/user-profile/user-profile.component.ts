import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  submitted: boolean;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  userInfo
  websiteImg
  profileForm
    ngOnInit() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo')) 

      if(this.userInfo.website.id == 1){
        this.websiteImg = 'assets/images/thiqa.jpg'
      }else{
        this.websiteImg = 'assets/images/abc-logo.png'
      }

      this.profileForm = this.formBuilder.group({
        name: ["", Validators.required],       
        email: ["", Validators.required], 
        password: ["", Validators.required],       
        confirm_password: ["", Validators.required],       
      });

      this.viewAdminProfile()
    }

    get f(): { [key: string]: AbstractControl } {
      return this.profileForm.controls;
    }
  
    onSubmit(): void {
      this.submitted = true;
  
      if (this.profileForm.invalid) {
        return;
      }
  
      // console.log(JSON.stringify(this.profileForm.value, null, 2));
    }
  
  
    onReset(): void {
      this.submitted = false;
      this.profileForm.reset();
    }
  

    viewAdminProfile(){
      this.viewService.GetAll('user/profile').then(res=>{
        this.profileForm.get('name').setValue(res['data']['name']);
        this.profileForm.get('email').setValue(res['data']['email']);
        // this.profileForm.get('password').setValue(res['data']['sector']);
        // this.profileForm.get('confirm_password').setValue(res['data']['type']);
    }).catch(err=>{
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
      })
    }


    updateProfile(form){
      this.spinner.show();
      this.viewService.UpdateProfile(form).then(res=>{
        this.spinner.hide();
        // console.log(res);
        this.toastr.success(res['message'])
      }).catch(err=>{
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
      })
    }

}
