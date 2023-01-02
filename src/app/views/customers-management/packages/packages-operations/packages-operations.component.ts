import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-packages-operations',
  templateUrl: './packages-operations.component.html',
  styleUrls: ['./packages-operations.component.scss']
})
export class PackagesOPerationsComponent implements OnInit {


  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
addPackageForm;
packageId
  ngOnInit(): void {
    this.packageId = this.route.snapshot.paramMap.get('id');

    if(this.packageId){
      this.getPackageById(this.packageId)
    }
    this.getAllMarkets();

    this.addPackageForm = this.formBuilder.group({
      packageName: ["", Validators.required],    
      avaliabeDays: ["", Validators.required],
      price: ["", Validators.required],       
      discription: ["", Validators.required],       
      isShow: [""],     
      market_id: ["", Validators.required],     
      photo: ["", !this.packageId ?  Validators.required : []], 
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addPackageForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addPackageForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.addPackageForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.addPackageForm.reset();
  }

imgUrl;
  getPackageById(id) {
    
    this.viewService.ShowById('bouquets', id).then(res => {
    //  console.log(res['data']);
     this.addPackageForm.get('packageName').setValue(res['data']['name']);
     this.addPackageForm.get('avaliabeDays').setValue(res['data']['days']);
     this.addPackageForm.get('price').setValue(res['data']['price']);
     this.addPackageForm.get('discription').setValue(res['data']['description']);
     this.addPackageForm.get('isShow').setValue(res['data']['is_show'] == 'show' ? 'show' : '');
    //  this.addPackageForm.get('photo').setValue(res['data']['image']);
     this.imgUrl = res['data']['image'];
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

  addEditPackage(id) {
    // 
    this.submitted = true;
    if (this.addPackageForm.invalid) {
      return;
    }
    this.spinner.show();
    this.addPackageForm.value.photo = this.packageImage;
    this.addPackageForm.value.isShow  == '' ? this.addPackageForm.value.isShow ='hide' : this.addPackageForm.value.isShow ='show'
    this.viewService.addEditPackage(this.addPackageForm.value, +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/customersManagement/packages');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }


  packageImage: File;
  reportFile: File;
  reportImageUrl
  onFileChange(e) {
    this.packageImage = new File([], '');
    this.packageImage = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    // reader.onload = (event: any) => {
    //   if (event.target.result) {
    //     this.reportImageUrl = event.target.result
      // }
      // if (this.packageImage) {
        reader.readAsDataURL(this.packageImage);
      // }
    // }
    // var output = document.getElementById('output') as HTMLInputElement;
    // output.src = URL.createObjectURL(e.target.files[0]);
    // output.onload = function() {
    //   URL.revokeObjectURL(output.src) // free memory
    // }
  }


}
