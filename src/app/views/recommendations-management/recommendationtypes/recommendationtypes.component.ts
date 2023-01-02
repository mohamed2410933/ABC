import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-recommendationtypes',
  templateUrl: './recommendationtypes.component.html',
  styleUrls: ['./recommendationtypes.component.scss']
})
export class RecommendationtypesComponent implements OnInit {
  filterData
  userInfo
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllRecommendationsTypes(1);
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

  }

  
  RecommendationsTypesList
  pageData
  getAllRecommendationsTypes(page =1, q='') {
    // 
    this.spinner.show();
    this.viewService.GetAllRecommendationsTypes(page , q).then(res => {
      this.spinner.hide();
      this.RecommendationsTypesList = res['data']
      this.pageData = res['data'];
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


  toEditRecomondationType(id){
    this.router.navigateByUrl(`/recommendationsManagement/recommendationtypes/operations/${id}`)

  }
}
