import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-send-emails',
  templateUrl: './send-emails.component.html',
  styleUrls: ['./send-emails.component.scss']
})
export class SendEmailsComponent implements OnInit {
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }
    sendEmailForm;
  ngOnInit(): void {
    this.sendEmailForm = this.formBuilder.group({
      email: ["", Validators.required],    
      discription: ["", Validators.required],
    });
  }


  selectedCar: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];


  public onSelectAll() {
    const selected = this.cars.map(item => item.id);
    this.sendEmailForm.get('email').patchValue(selected);
  }
  
  public onClearAll() {
    this.sendEmailForm.get('email').patchValue([]);
  }

  onSubmit(){
    debugger
    this.submitted = true;

    if (this.sendEmailForm.invalid) {
      return;
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.sendEmailForm.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.sendEmailForm.reset();
  }
}
