import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { Router } from 'express';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-my-agents',
  templateUrl: './my-agents.component.html',
  styleUrls: ['./my-agents.component.scss']
})
export class MyAgentsComponent implements OnInit {

  roleIndex
  filterData
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
    userInfo
  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.getAllMembers(1);
    this.checkDelete();
  }

  membersList = [];
  pageData
  getAllMembers(page , q ='') {
    this.spinner.show();
    this.viewService.GetAll('user/agent-admin',page , q).then(res => {
      this.spinner.hide();
      // if(this.userInfo.role != 6){
        this.membersList = res['data'].data;
      // }
      // else{
      //   this.membersList = res['data'].data.filter(x=>x.role == 6);
      // }
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