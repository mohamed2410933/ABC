import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-evaluation-operation',
  templateUrl: './evaluation-operation.component.html',
  styleUrls: ['./evaluation-operation.component.scss']
})
export class EvaluationOperationComponent implements OnInit {

  constructor(
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) { }
  EvalutionId
  ngOnInit(): void {
    this.EvalutionId = this.route.snapshot.paramMap.get('id');
    if (this.EvalutionId) {
      this.getEvaluationById(this.EvalutionId)
    }
  }

  evalutionData
  getEvaluationById(id) {
    this.spinner.show()
    this.viewService.ShowById('evaluations' ,id).then(res => {
      this.spinner.hide();
      this.evalutionData = res['data']
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

}
