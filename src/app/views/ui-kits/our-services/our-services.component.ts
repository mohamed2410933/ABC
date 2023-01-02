import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServiceComponent implements OnInit {
  public ServicesList = []
  public filterData;
  constructor(  
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
    ) {

   
  }

  ngOnInit() {
    this.getAllServices(1)
    this. checkDelete();
  }

  pageData
  getAllServices(page , q ='') {
     this.spinner.show();
    this.viewService.GetAllService(page , q).then(res => {
      this.spinner.hide();
      this.ServicesList = res['data'].data
      this.pageData = res['data'];
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  toEditService(id){
  this.router.navigateByUrl(`/contentManagement/our-services/operations/${id}`)
  }
  // routerLink='+row.id'


    //===============================================================================

    roleIndex
    deleteService(id , index){
      this.roleIndex = index
      this.viewService.PopupDeletition('services' , id);
    }
    checkDelete(){
      this.viewService.deleteStatus.subscribe((value) => {
      if(value.status){
        this.ServicesList = this.ServicesList.slice(0);
        this.ServicesList.splice(this.roleIndex, 1);
      }
      });
    }
}
