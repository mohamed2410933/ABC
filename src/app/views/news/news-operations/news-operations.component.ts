import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-news-operations',
  templateUrl: './news-operations.component.html',
  styleUrls: ['./news-operations.component.scss']
})
export class NewsOperationsComponent implements OnInit {
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
newsForm;
newId
  ngOnInit(): void {
    this.newId = this.route.snapshot.paramMap.get('id');
    if (this.newId) {
      this.getNewById(this.newId)
    }
    this.getAllMarkets();
    this.newsForm = this.formBuilder.group({
      title: ["", Validators.required],       
      discription: ["", Validators.required],   
      type: ["", Validators.required],
      market_id: ["", Validators.required],
      photo: ["", !this.newId ? Validators.required : []],       
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.newsForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.newsForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.newsForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.newsForm.reset();
  }


viewImgUrl
  getNewById(id) {
    this.viewService.ShowById('news' ,id).then(res => {
      // this.newsForm.get('type').setValue(res['data']['name']);
      this.newsForm.get('title').setValue(res['data']['title']);
      // this.newsForm.value.addFile = res['data']['file'];
      this.newsForm.get('discription').setValue(res['data']['description']);
      this.newsForm.get('market_id').setValue(res['data']['market_id']);
      this.newsForm.get('type').setValue(res['data']['type'] == 'Ektetab' ? '2' : '1');
      this.viewImgUrl = res['data']['image']
    }).catch(err => {
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
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



  addEditNews(id) {
    this.submitted = true;
    if (this.newsForm.invalid) {
      return;
    }
    this.spinner.show();
    this.newsForm.value.photo = this.imgUrl;
    this.viewService.addEditNews(this.newsForm.value, +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/news');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      // console.log(err.message.message);
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
  
}
