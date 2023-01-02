import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  roleIndex
  filterData
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllMembers(1);
    this.checkDelete();
  }

  membersList = [];
  pageData
  getAllMembers(page , q ='') {
    this.spinner.show();
    this.viewService.GetAll('users',page , q).then(res => {
      this.spinner.hide();
      this.membersList = res['data'].data;
      this.pageData = res['data'];
    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }
  toEditMember(id){
    this.router.navigateByUrl(`/teamWork/team-work/operations/${id}`)
  }


  // roleIndex
  deleteMember(id , index){
    this.roleIndex = index
    this.viewService.PopupDeletition('users' , id);
  }
  checkDelete(){
    this.viewService.deleteStatus.subscribe((value) => {
    if(value.status){
      this.membersList = this.membersList.slice(0);
      this.membersList.splice(this.roleIndex, 1);
    }
    });
  }
}
