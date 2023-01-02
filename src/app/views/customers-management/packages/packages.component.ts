import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  filterData
  userInfo
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.getAllPackages(1)
  }


  PackagesList
  pageData
  getAllPackages(page , q = '') {
    this.spinner.show();
    this.viewService.GetAll('bouquets',page, q).then(res => {
      this.spinner.hide();
      this.PackagesList = res['data']
      this.pageData = res['data'];
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }


  toEditPackage(id) {
    this.router.navigateByUrl(`/customersManagement/packages/operations/${id}`)
  }




}
