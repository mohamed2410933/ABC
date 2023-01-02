import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-our-advantages',
  templateUrl: './our-advantages.component.html',
  styleUrls: ['./our-advantages.component.scss']
})
export class OurAdvantagesComponent implements OnInit {

  public AdvantageList = []
  public filterData;
  constructor(  
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
    ) {

   
  }

  ngOnInit() {
    this.getAllAdvantages(1)
    this. checkDelete();
  }

  pageData
  getAllAdvantages(page , q = '') {
    this.spinner.show()
    this.viewService.GetAll('why-services',page , q).then(res => {
      this.spinner.hide();
      this.AdvantageList = res['data'].data
      this.pageData = res['data'];
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  toEditAdvantages(id){
  this.router.navigateByUrl(`/contentManagement/our-advantages/operations/${id}`)
  }
  // routerLink='+row.id'


    //===============================================================================

    roleIndex
    deleteAdvantage(id , index){
      this.roleIndex = index
      this.viewService.PopupDeletition('why-services' , id);
    }
    checkDelete(){
      this.viewService.deleteStatus.subscribe((value) => {
      if(value.status){
        this.AdvantageList = this.AdvantageList.slice(0);
        this.AdvantageList.splice(this.roleIndex, 1);
      }
      });
    }

}
