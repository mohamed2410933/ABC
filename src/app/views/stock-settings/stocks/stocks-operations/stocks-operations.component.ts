import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';
import { Select2OptionData } from 'ng-select2';
@Component({
  selector: 'app-stocks-operations',
  templateUrl: './stocks-operations.component.html',
  styleUrls: ['./stocks-operations.component.scss']
})




export class StocksOperationsComponent implements OnInit {

  public SectorsList: Array<Select2OptionData>;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
    public formControl = new FormControl();
    public value: string;
stockForm;
stockId
  ngOnInit(): void {
    this.stockId = this.route.snapshot.paramMap.get('id');
    if(this.stockId ){
      this.getStockById(this.stockId)
      
    }
    this.getAllSectors(1)


    // this.exampleData = [
    //   {
    //     id: 'basic1',
    //     text: 'Basic 1'
    //   },
    //   {
    //     id: 'basic2',
    //     disabled: true,
    //     text: 'Basic 2'
    //   },
    //   {
    //     id: 'basic3',
    //     text: 'Basic 3'
    //   },
    //   {
    //     id: 'basic4',
    //     text: 'Basic 4'
    //   }
    // ];
   
 
 
     
 
  

    this.stockForm = this.formBuilder.group({
      stockCode: ["", Validators.required],       
      stockName: ["", Validators.required],       
      sector: [""],       
      stocktype: [""],       
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.stockForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.stockForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.stockForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.stockForm.reset();
  }

  selectedStock
  getStockById(id){
    // debugger
    this.viewService.getStocksById(id).then(res=>{
        this.stockForm.get('stockCode').setValue(res['data']['code']);
        this.stockForm.get('stockName').setValue(res['data']['name']);
        this.stockForm.get('sector').setValue(res['data']['sector_id']);
        this.selectedStock = res['data']['sector_id']
        this.stockForm.get('stocktype').setValue(res['data']['type_id']);
    }).catch(err=>{
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')


    })
  }


  // SectorsList
  getAllSectors(page= 1 , q='') {
    this.viewService.GetAllSectors(page , q == null ? '' : q).then(res => {
      this.SectorsList = res['data'].data
      // console.log(this.SectorsList );
    }).catch(err => {
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }



  trackBySector(index, item){
    return item.name; 
 }
  addEditStock(id) {
    this.submitted = true;
    if (this.stockForm.invalid) {
      return;
    }
    this.spinner.show();
    this.viewService.addEditStock(this.stockForm.value , +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/stockSettings/stocks');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }






}
