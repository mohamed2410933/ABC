import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-messgae',
  templateUrl: './messgae.component.html',
  styleUrls: ['./messgae.component.scss']
})
export class MessgaeComponent implements OnInit {

  public filterData;
  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit() {
    // this.getAllMesssages(1)
    this.checkDelete()
  }

  
  MessagesList
  pageData
  getAllMesssages(page=1 , q='') {
    this.spinner.show();
    this.viewService.GetAll('messages' , page , q).then(res => {
      this.spinner.hide();
      this.MessagesList = res['data'].data
      this.pageData = res['data'];

    }).catch(err => {
      this.spinner.hide();
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }

  viewMessage(id){
    this.router.navigateByUrl(`/messages/operations/${id}`)
  }


roleIndex
deleteMessage(id , index){
  this.roleIndex = index
  this.viewService.PopupDeletition('messages' , id);
}
checkDelete(){
  this.viewService.deleteStatus.subscribe((value) => {
  if(value.status){
    this.MessagesList = this.MessagesList.slice(0);
    this.MessagesList.splice(this.roleIndex, 1);
  }
  });
}
}
