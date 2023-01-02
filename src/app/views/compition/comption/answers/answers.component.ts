import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
    comptionId
  ngOnInit(): void {


    this.comptionId = this.route.snapshot.paramMap.get('id');
    if (this.comptionId) {
      this.getAllAnswers(this.comptionId)

      // this.getAllAnswers(this.comptionId)
    }
  }


  answersList
  getAllAnswers(id){
    this.viewService.ShowById('competition/answer' , id).then(res=>{
     this.answersList = res['data'].data
    }).catch(err=>{
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }
}
