import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormBuilder, AbstractControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    loginForm: FormGroup;
    submitted
    constructor(
        private fb: UntypedFormBuilder,
        private auth: AuthService,
        private router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService,
    ) { }
    
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ["", Validators.required],       
            password: ["" , Validators.required],       
          });
        // this.router.events.subscribe(event => {
        //     if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        //         this.loadingText = 'Loading Dashboard Module...';

        //         this.loading = true;
        //     }
        //     if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        //         this.loading = false;
        //     }
        // });

        // this.loginForm = this.fb.group({
        //     email: ['test@example.com', Validators.required],
        //     password: ['1234', Validators.required]
        // });
    }

    get f(): { [key: string]: AbstractControl } {
        return this.loginForm.controls;
      }
    // signin() {
        // this.loading = true;
        // this.loadingText = 'Sigining in...';
        // this.auth.signin(this.loginForm.value)
        //     .subscribe(res => {
        //         this.router.navigateByUrl('/dashboard/v1');
        //         this.loading = false;
        //     });
    // }


    signin() {
    //   
        this.spinner.show();
        this.auth.Login(this.loginForm.value).then(res=>{
            this.auth.authenticated = true;
            this.loginForm.value.token = res['data'].token;
            this.loginForm.value.website = res['data'].user.website;
            this.loginForm.value.name = res['data'].user.name;
            this.loginForm.value.image = res['data'].user.image;
            this.loginForm.value.password = "##"
            this.loginForm.value.id = res['data'].user.id;
            this.loginForm.value.roleId = res['data'].user.role[0].id;
            this.loginForm.value.roleName = res['data'].user.role_name;
            localStorage.setItem('userInfo' , JSON.stringify(this.loginForm.value))
            this.spinner.hide();
            localStorage.setItem('forceLogout' , 'forceLogout');
            this.router.navigateByUrl('/dashboard');
           
        }).catch(err=>{
            this.spinner.hide();
            this.toastr.error(err.error.message);

        })
    }



}
