import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { SortType } from '@swimlane/ngx-datatable/lib/types/sort.type';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';
@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {
  filterData

  constructor(     
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router) {

 
  }
  ngOnInit() {
    
    this.getAllSectors(1) 
    this.checkDelete() 
    
  }

  SectorsList
  pageData
  getAllSectors(page? , q = '') {
    // debugger
    this.spinner.show();
    this.viewService.GetAllSectors(page , q).then(res => {
      this.spinner.hide();
      this.SectorsList = res['data'].data
      this.pageData = res['data'];
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  toEditSector(id){
    this.router.navigateByUrl(`/stockSettings/sectors/sectors-operations/${id}`)
    }

    roleIndex
    deleteSector(id , index){
      this.roleIndex = index
      this.viewService.PopupDeletition('sectors' , id);
    }
    checkDelete(){
      this.viewService.deleteStatus.subscribe((value) => {
      if(value.status){
        this.SectorsList = this.SectorsList.slice(0);
        this.SectorsList.splice(this.roleIndex, 1);
      }
      });
    }
}
