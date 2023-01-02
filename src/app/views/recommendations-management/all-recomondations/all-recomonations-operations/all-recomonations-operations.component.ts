import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-all-recomonations-operations',
  templateUrl: './all-recomonations-operations.component.html',
  styleUrls: ['./all-recomonations-operations.component.scss']
})
export class AllRecomonationsOperationsComponent implements OnInit {
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
recomondationForm;
recomondationId
  ngOnInit(): void {
    this.recomondationId = this.route.snapshot.paramMap.get('id');
    if(this.recomondationId){
    this.getRecoById(this.recomondationId)
    }
    this.recomondationForm = this.formBuilder.group({
      stockId: [""],       
      recomondationTypeId: [""],
      purchasingPrice: ["", Validators.required],       
      sellingPrice: ["", Validators.required],       
      stopLossPrice: ["", Validators.required], 
      condition: ["", Validators.required],       
      InvestigationDate: [""],       
      dateOfPurchaseOfTheWill: [""],       
      dateOfSaleOfTheWill: [""],       
      recomondationDiscreption: [""],       
      market_id: [""],       
      is_golden: [""],       
    });
    this.getAllStocks(1);
    this.getAllMarkets(1);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.recomondationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.recomondationForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.recomondationForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.recomondationForm.reset();
  }

    addEditRecomondation(id) {
      
    this.submitted = true;
    if (this.recomondationForm.invalid) {
      return;
    }
    this.spinner.show();
    // this.recomondationForm.get('stockId').setValue(this.selectedStock);
    this.recomondationForm.value.stockId = this.selectedStock
    this.viewService.addEditRecomondation(this.recomondationForm.value , +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/recommendationsManagement/all-recomondations');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  
  selectedStock;

  StocksList
  getAllStocks(page = 1 , q= '') {
    // debugger
    this.viewService.GetAllStocks(page , q).then(res => {
      this.spinner.hide();
      this.StocksList = res['data'].data;
    }).catch(err => {
      this.spinner.hide();
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }


  getRecoById(id){
    this.spinner.show();
    this.viewService.ShowById('recommendations' , id).then(res=>{
      // console.log(res['data']);
      this.selectedStock = res['data']['stock']['id']
      // this.recomondationForm.get('stockId').setValue(res['data']['stock']['id']);
      this.recomondationForm.get('recomondationTypeId').setValue(res['data']['recommendationType_id']);
      this.recomondationForm.get('purchasingPrice').setValue(res['data']['purchasing_price']);
      this.recomondationForm.get('sellingPrice').setValue(res['data']['selling_price']);
      this.recomondationForm.get('stopLossPrice').setValue(res['data']['stop_loss_price']);
      this.recomondationForm.get('condition').setValue(res['data']['condition_id']);
      this.recomondationForm.get('InvestigationDate').setValue(res['data']['verification_date']);
      this.recomondationForm.get('dateOfPurchaseOfTheWill').setValue(res['data']['date_of_purchase']);
      this.recomondationForm.get('dateOfSaleOfTheWill').setValue(res['data']['date_of_sale']);
      this.recomondationForm.get('recomondationDiscreption').setValue(res['data']['description']);
      this.recomondationForm.get('is_golden').setValue(res['data']['is_golden'] == 'Golden' ? '1' : '2');
      this.recomondationForm.get('market_id').setValue(res['data']['market'][0].id);
    }).catch(err=>{
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


}
