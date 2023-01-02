import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-site-policy',
  templateUrl: './site-policy.component.html',
  styleUrls: ['./site-policy.component.scss']
})
export class SitePolicyComponent implements OnInit {


  constructor(

    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.getPolicyData();
  }
  sitePolicy
  getPolicyData() {
    this.spinner.show();
    this.viewService.GetPolicyData().then(res => {
     this.sitePolicy = res['data'][0]
     this.spinner.hide();
    }).catch(err => {
      this.spinner.hide();
    })
  }


  editPolicy(data){
    this.spinner.show()
    this.viewService.EditPolicy(data).then(res=>{
     this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message']);
    }).catch(err=>{
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(err['message']);
    })
  }


}
