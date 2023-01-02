import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-sectors-operations',
  templateUrl: './sectors-operations.component.html',
  styleUrls: ['./sectors-operations.component.scss']
})
export class SectorsOperationsComponent implements OnInit {

  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
sectorForm;
sectorId
  ngOnInit(): void {
    this.sectorId = this.route.snapshot.paramMap.get('id');
    if(this.sectorId ){
      this.getSectorById(this.sectorId)
    }
    
    this.sectorForm = this.formBuilder.group({
      sectorName: ["", Validators.required],       
      sectorData: [""],       
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.sectorForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.sectorForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.sectorForm.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.sectorForm.reset();
  }


  getSectorById(id){
    this.viewService.getSectorById(id).then(res=>{
        this.sectorForm.get('sectorName').setValue(res['data']['name']);
        this.sectorForm.get('sectorData').setValue(res['data']['description']);
    }).catch(err=>{
      err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')


    })
  }


  addEditSector(id) {
    this.submitted = true;
    if (this.sectorForm.invalid) {
      return;
    }
    this.spinner.show();
    this.viewService.addEditSector(this.sectorForm.value , +id).then(res => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message'])
      this.router.navigateByUrl('/stockSettings/sectors');
      // console.log(res);
    }).catch(err => {
      this.spinner.hide();
      // console.log(err.msg);
    err.error.message ? this.toastr.error(err.error.message) : this.toastr.error('حدث خطأ في النظام')
    })
  }
}
