import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public filterData;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit() {
    // this.getAllSliders(1)
    this.checkDelete()
  }

  
  SlidersList
  pageData
  getAllSliders(page = 1 , q='') {
    // 
    this.spinner.show();
    this.viewService.GetAll('sliders' , page , q).then(res => {
      this.spinner.hide();
      this.SlidersList = res['data'].data
      this.pageData = res['data'];

    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }


  toEditSlider(id){
    this.router.navigateByUrl(`sliders/operations/${id}`)
  }

roleIndex
deleteSlider(id , index){
  this.roleIndex = index
  this.viewService.PopupDeletition('sliders' , id);
}
checkDelete(){
  this.viewService.deleteStatus.subscribe((value) => {
  if(value.status){
    this.SlidersList = this.SlidersList.slice(0);
    this.SlidersList.splice(this.roleIndex, 1);
  }
  });
}


}
