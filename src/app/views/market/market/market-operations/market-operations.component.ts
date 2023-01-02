import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-market-operations',
  templateUrl: './market-operations.component.html',
  styleUrls: ['./market-operations.component.scss']
})
export class MarketOperationsComponent implements OnInit {
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
marketForm;
marketId
  ngOnInit(): void {
    this.marketId = this.route.snapshot.paramMap.get('id');
    if (this.marketId) {
      this.getMarketById(this.marketId)
    }
    
    this.marketForm = this.formBuilder.group({
      name: ["", Validators.required],       
      photo: ["", !this.marketId ? Validators.required : []],       
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.marketForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.marketForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.marketForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.marketForm.reset();
  }


viewImgUrl
  getMarketById(id) {
    this.viewService.ShowById('markets' ,id).then(res => {
      this.marketForm.get('name').setValue(res['data']['name']);
      this.viewImgUrl = res['data']['image']
    }).catch(err => {
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }







  addEditMarket(id) {
    this.submitted = true;
    if (this.marketForm.invalid) {
      return;
    }
    this.spinner.show();
    this.marketForm.value.photo = this.imgUrl;
    this.viewService.addEditMarket(this.marketForm.value, +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/market');
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

}
