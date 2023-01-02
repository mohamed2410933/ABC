import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  public filterData;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.getAllEvalution(1)
    this.checkDelete()
  }

  
  EvalutionList
  pageData
  getAllEvalution(page , q ='') {
    this.spinner.show();
    this.viewService.GetAll('evaluations' , page ,q).then(res => {
      this.spinner.hide();
      this.EvalutionList = res['data'].data
      this.pageData = res['data'];

    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


  viewEvaluation(id){
    this.router.navigateByUrl(`evaluations/operations/${id}`)
  }

roleIndex
deleteEvaluation(id , index){
  this.roleIndex = index
  this.viewService.PopupDeletition('evaluations' , id);
}
checkDelete(){
  this.viewService.deleteStatus.subscribe((value) => {
  if(value.status){
    this.EvalutionList = this.EvalutionList.slice(0);
    this.EvalutionList.splice(this.roleIndex, 1);
  }
  });
}

}
