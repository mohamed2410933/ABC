import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-message-operation',
  templateUrl: './message-operation.component.html',
  styleUrls: ['./message-operation.component.scss']
})
export class MessageOperationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
    MessageId
  ngOnInit(): void {
    this.MessageId = this.route.snapshot.paramMap.get('id');
    if (this.MessageId) {
      this.getMessageById(this.MessageId)
    }
  }

messageContent
  getMessageById(id) {
    this.viewService.ShowById('messages' ,id).then(res => {
    this.messageContent = res['data']
    }).catch(err => {
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')

    })
  }
}
