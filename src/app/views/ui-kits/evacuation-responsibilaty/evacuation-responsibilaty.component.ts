import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-evacuation-responsibilaty',
  templateUrl: './evacuation-responsibilaty.component.html',
  styleUrls: ['./evacuation-responsibilaty.component.scss']
})
export class EvacuationResponsibilatyComponent implements OnInit {


  
  constructor(

    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.getResponsibilityData();
  }
  responsibility
  getResponsibilityData() {
    this.spinner.show();
    this.viewService.GetResponsibilityData().then(res => {
     this.responsibility = res['data'][0]
     this.spinner.hide();
    }).catch(err => {
      this.spinner.hide();
    })
  }


  editResponsibility(data){
    
    this.spinner.show()
    this.viewService.EditResponsibility(data).then(res=>{
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
