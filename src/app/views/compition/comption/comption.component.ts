import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-comption',
  templateUrl: './comption.component.html',
  styleUrls: ['./comption.component.scss']
})
export class ComptionComponent implements OnInit {
 public isAnswerv = true;
  public filterData;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit() {
    // this.getAllComptions(1)
    this.checkDelete()
  }

  
  comptionsList
  pageData
  getAllComptions(page=1 , q='') {
    // 
    this.spinner.show();
    this.viewService.GetAll('competitions' , page,q).then(res => {
      this.spinner.hide();
      this.comptionsList = res['data'].data
      this.pageData = res['data'];

    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


  toEditComption(id){
    this.router.navigateByUrl(`comption/operations/${id}`)
  }

roleIndex
deleteComption(id , index){
  this.roleIndex = index
  this.viewService.PopupDeletition('competitions' , id);
}
checkDelete(){
  this.viewService.deleteStatus.subscribe((value) => {
  if(value.status){
    this.comptionsList = this.comptionsList.slice(0);
    this.comptionsList.splice(this.roleIndex, 1);
  }
  });
}

viewAnswes(id){
  // debugger
  this.viewService.setAnswers(id.answer);
  this.router.navigateByUrl(`comption/answers/${id}`)
}

}
