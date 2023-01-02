import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-all-recomondations',
  templateUrl: './all-recomondations.component.html',
  styleUrls: ['./all-recomondations.component.scss']
})
export class AllRecomondationsComponent implements OnInit {
  filterData
  userInfo
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getAllRecommendations(1)
    this.checkDelete();
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  
  RecommendationsList
  pageData
  getAllRecommendations(page = 1,q='') {
    this.spinner.show();
    this.viewService.GetAllRecommendations(page,q).then(res => {
      this.spinner.hide();
      this.RecommendationsList = res['data'].data
      this.pageData = res['data'];
      // console.log(this.RecommendationsList );
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


  toEditRecomondation(id){
    this.router.navigateByUrl(`/recommendationsManagement/all-recomondations/operations/${id}`)
  }

  roleIndex
  deleteSector(id , index){
    this.roleIndex = index
    this.viewService.PopupDeletition('recommendations' , id);
  }
  checkDelete(){
    this.viewService.deleteStatus.subscribe((value) => {
    if(value.status){
      this.RecommendationsList = this.RecommendationsList.slice(0);
      this.RecommendationsList.splice(this.roleIndex, 1);
    }
    });
  }
}
