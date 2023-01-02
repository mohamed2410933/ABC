import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public filterData;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit() {
    // this.getAllNews(1)
    this.checkDelete()
  }

  
  NewsList
  pageData
  getAllNews(page=1 , q='') {
    this.spinner.show();
    this.viewService.GetAll('news' , page , q).then(res => {
      this.spinner.hide();
      this.NewsList = res['data'].data
      this.pageData = res['data'];

    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


  toEditNews(id){
    this.router.navigateByUrl(`news/operations/${id}`)
  }

roleIndex
deleteNews(id , index){
  this.roleIndex = index
  this.viewService.PopupDeletition('news' , id);
}
checkDelete(){
  this.viewService.deleteStatus.subscribe((value) => {
  if(value.status){
    this.NewsList = this.NewsList.slice(0);
    this.NewsList.splice(this.roleIndex, 1);
  }
  });
}


viewNewsDescription(obj){
  Swal.fire({
    title: 'وصف الخبر',
    text: obj.description,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}



}
