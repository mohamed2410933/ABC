import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {


    constructor(

      public viewService: ViewService,
      private toastr: ToastrService,
      private spinner: NgxSpinnerService,
    ) { }
  
    ngOnInit() {
      this.getTermsData();
    }
    termsCondition
    getTermsData() {
      this.spinner.show();
      this.viewService.GetTermsData().then(res => {
       this.termsCondition = res['data'][0]
       this.spinner.hide();
      }).catch(err => {
        this.spinner.hide();
      })
    }
  

    editTerms(data){
      this.spinner.show()
      this.viewService.EditTermsData(data).then(res=>{
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
