import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  public filterData;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      // this.getAllREviews(1)
      this.checkDelete()
    }
  
    
    reviewsList
    pageData
    getAllREviews(page = 1 , q='') {
      this.spinner.show();
      this.viewService.GetAll('visitors' , page ,q).then(res => {
        this.spinner.hide();
        this.reviewsList = res['data'].data
        this.pageData = res['data'];
  
      }).catch(err => {
        this.spinner.hide();
        err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
  
      })
    }

    toEditReviews(id){
      this.router.navigateByUrl(`customers-reviews/operations/${id}`)
    }
  
  roleIndex
  deleteReviews(id , index){
    this.roleIndex = index
    this.viewService.PopupDeletition('visitors' , id);
  }
  checkDelete(){
    this.viewService.deleteStatus.subscribe((value) => {
    if(value.status){
      this.reviewsList = this.reviewsList.slice(0);
      this.reviewsList.splice(this.roleIndex, 1);
    }
    });
  }

}
