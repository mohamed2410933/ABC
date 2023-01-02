import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';
import { echartStyles } from '../../../shared/echart-styles';

@Component({
	selector: 'app-dashboad-default',
	templateUrl: './dashboad-default.component.html',
	styleUrls: ['./dashboad-default.component.css']
})
export class DashboadDefaultComponent implements OnInit {
	chartLineOption1: EChartOption;
	chartLineOption2: EChartOption;
	chartLineOption3: EChartOption;
    salesChartBar: EChartOption;
    salesChartPie: EChartOption;

	constructor(private toastr: ToastrService , private spinner: NgxSpinnerService , public viewService : ViewService) {
     }

	ngOnInit() {
        // this.spinner.show();

        // setTimeout(() => {
        //   /** spinner ends after 5 seconds */
        //   this.spinner.hide();
        //   this.toastr.success('تم تسجيل الدخول بنجاح');

        // }, 2000);

        this.getData()
	}

data
  getData(){
    this.spinner.show();
    this.viewService.GetAll('main').then(res=>{
      this.spinner.hide();
        this.data = res['data']
    }).catch(err=>{
      this.spinner.hide();
     err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }
}
