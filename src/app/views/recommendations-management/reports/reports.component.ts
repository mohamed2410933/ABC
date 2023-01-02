import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  filterData
  userInfo
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getAllReports(1)
    this.checkDelete()
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

  }

  
  ReportsList
  pageData
  getAllReports(page = 1 , q='') {
    this.spinner.show();
    this.viewService.GetAllReports(page , q).then(res => {
      this.spinner.hide();
      this.ReportsList = res['data'].data
      this.pageData = res['data'];

    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


  toEditReport(id){
    this.router.navigateByUrl(`/recommendationsManagement/reports/operations/${id}`)

  }

downloadFile(pdfUrl){
  window.open(pdfUrl, '_blank');
}


viewReport(obj){
  Swal.fire({
    // title: 'Sweet!',
    text: obj.description,
    imageUrl: obj.image,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}


roleIndex
deleteReport(id , index){
  this.roleIndex = index
  this.viewService.PopupDeletition('reports' , id);
}
checkDelete(){
  this.viewService.deleteStatus.subscribe((value) => {
  if(value.status){
    this.ReportsList = this.ReportsList.slice(0);
    this.ReportsList.splice(this.roleIndex, 1);
  }
  });
}
 
}
