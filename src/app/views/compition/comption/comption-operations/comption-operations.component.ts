import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-comption-operations',
  templateUrl: './comption-operations.component.html',
  styleUrls: ['./comption-operations.component.scss']
})
export class ComptionOperationsComponent implements OnInit , AfterViewInit {
@Input ('isAnswer')  isAnswer;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngAfterViewInit(): void {
    // this.checkIsAnswer()

  }
comptionForm;
comptionId
  ngOnInit(): void {


    this.comptionId = this.route.snapshot.paramMap.get('id');
    if (this.comptionId) {
      this.getComptionById(this.comptionId)
      // this.getAllAnswers(this.comptionId)
    }
    this.getAllMarkets();
    
    this.comptionForm = this.formBuilder.group({
      title: ["", Validators.required],       
      question: ["", Validators.required],       
      status: ["", Validators.required],       
      market_id: ["", !this.comptionId ? Validators.required : []],     
      photo: ["", !this.comptionId ? Validators.required : []],       
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.comptionForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.comptionForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.comptionForm.value, null, 2));
  }


  MarketsList
  getAllMarkets(page=1 , q='') {
    // 
    this.spinner.show();
    this.viewService.GetAll('markets' , page , q).then(res => {
      this.spinner.hide();
      this.MarketsList = res['data']
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  onReset(): void {
    this.submitted = false;
    this.comptionForm.reset();
  }


viewImgUrl
  getComptionById(id) {
    // debugger
    this.viewService.ShowById('competitions' ,id).then(res => {
      this.comptionForm.get('title').setValue(res['data']['title']);
      this.comptionForm.get('question').setValue(res['data']['question']);
      this.comptionForm.get('status').setValue(res['data']['status']);
      this.comptionForm.get('market_id').setValue(res['data']['market_id']);
      this.viewImgUrl = res['data']['image']
    }).catch(err => {
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }







  addEditComption(id) {
    this.submitted = true;
    if (this.comptionForm.invalid) {
      return;
    }
    this.spinner.show();
    this.comptionForm.value.photo = this.imgUrl;
    this.viewService.addEditComption(this.comptionForm.value, +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/comption');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  imgUrl
  onFileChange(e) {
    this.imgUrl = new File([], '');
    this.imgUrl = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      if (event.target.result) {
        this.imgUrl = event.target.result
      }
      if (this.imgUrl) {
        reader.readAsDataURL(this.imgUrl);
      }
    }
    var output = document.getElementById('output') as HTMLInputElement;
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  }




  // checkIsAnswer(){
  //   this.viewService.checkIsAnswerComption.subscribe((value) => {
  //     if(value){
  //       this.answersList = value;
  //     }
  //   });
  // }

}
