import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-members-operations',
  templateUrl: './members-operations.component.html',
  styleUrls: ['./members-operations.component.scss']
})
export class MembersOperationsComponent implements OnInit {


  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
  addMemberForm;
  memberId;
  userInfo
  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

    this.memberId = this.route.snapshot.paramMap.get('id');
    if (this.memberId) {
      this.getMemberById(this.memberId)
    }
    this.addMemberForm = this.formBuilder.group({
      memberName: ["", Validators.required],
      validity: ["", Validators.required],
      email: ["", Validators.required],
      password: ['', !this.memberId ? Validators.required : []],
      confirmPassword: ['', !this.memberId ? Validators.required : []],
    });
    this.getAllRoles();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addMemberForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addMemberForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.addMemberForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.addMemberForm.reset();
  }


  getMemberById(id) {
    
    this.spinner.show();
    this.viewService.ShowById('users', id).then(res => {
      this.spinner.hide();
      this.addMemberForm.get('memberName').setValue(res['data']['name']);
      this.addMemberForm.get('validity').setValue(res['data']['role'][0].id);

      this.addMemberForm.get('email').setValue(res['data']['email']);
      this.addMemberForm.get('password').setValue(res['data']['description']);
      this.addMemberForm.get('confirmPassword').setValue(res['data']['is_show']);
      //  this.addMemberForm.get('photo').setValue(res['data']['image']);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }
RolesList=[]
  getAllRoles(){
    this.viewService.GetAll('user/roles').then(res=>{
      // console.log(res);
      this.RolesList = res['data'];
      // this.RolesList = this.RolesList.forEach(e=>e.arabic-name)
        
      // console.log(this.RolesList);
      
    }).catch(err=>{
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  // thiqaUrl="";
  websiteUrl="";
  addEditMember(id) {
  this.submitted = true;
  if (this.addMemberForm.invalid) {
    this.spinner.show('برجاء ادخال بيانات صحيحة')
    return;
  }
  this.spinner.show();
  // this.addMemberForm.get('stockId').setValue(this.selectedStock);
  this.viewService.addEditMember(this.addMemberForm.value , +id).then(res => {
    this.spinner.hide();
    this.toastr.clear();
    this.toastr.success(res['message']);
    if(this.userInfo.roleId == 6){
      if(this.userInfo.website.id === 1){
           this.websiteUrl = `https://aly-thiqa.vercel.app/marketer/login/${res['data']}`
      }else{
          this.websiteUrl=`https://abc-tadawl-app.vercel.app/marketer/login/${res['data']}`
      }
      // this.router.navigateByUrl('/teamWork/follow-markter');

    }else{
      this.router.navigateByUrl('/teamWork/team-work');
    }
    // console.log(res);
  }).catch(err => {
    this.spinner.hide();
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
  })
}

// getRole(id){
//   let nameObj = this.RolesList.filter(x=>x.id == id);
//   return nameObj[0]['arabic-name']
// }
}
