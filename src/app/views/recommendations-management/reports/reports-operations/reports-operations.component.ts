import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { ViewService } from "src/app/shared/services/view.service";

@Component({
  selector: "app-reports-operations",
  templateUrl: "./reports-operations.component.html",
  styleUrls: ["./reports-operations.component.scss"],
})
export class ReportsOperationsComponent implements OnInit {
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  addReportForm;
  reportId;
  ngOnInit(): void {
    this.reportId = this.route.snapshot.paramMap.get("id");
    if (this.reportId) {
      this.getReportById(this.reportId);
    }
    this.getAllMarkets();
    this.addReportForm = this.formBuilder.group({
      discription: ["", Validators.required],
      addFile: [""],
      AddImage: ["", !this.reportId ? Validators.required : []],
      market_id: ["", Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addReportForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addReportForm.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.addReportForm.value, null, 2));
  }

  MarketsList;
  getAllMarkets(page = 1, q = "") {
    //
    this.spinner.show();
    this.viewService
      .GetAll("markets", page, q)
      .then((res) => {
        this.spinner.hide();
        this.MarketsList = res["data"];
      })
      .catch((err) => {
        this.spinner.hide();
        err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("حدث خطأ في النظام");
      });
  }

  onReset(): void {
    this.submitted = false;
    this.addReportForm.reset();
  }

  addEditReport(id) {
    this.submitted = true;
    if (this.addReportForm.invalid) {
      return;
    }
    this.spinner.show();
    this.addReportForm.value.AddImage = this.reportImage;
    this.addReportForm.value.addFile = this.PDF;
    this.viewService
      .addEditReports(this.addReportForm.value, +id)
      .then((res) => {
        this.spinner.hide();
        this.toastr.clear();
        this.toastr.success(res["message"]);
        this.router.navigateByUrl("/recommendationsManagement/reports");
        // console.log(res);
      })
      .catch((err) => {
        this.spinner.hide();
        // console.log(err.message.message);
        err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("حدث خطأ في النظام");
      });
  }

  getReportById(id) {
    this.viewService
      .getReportById(id)
      .then((res) => {
        // this.addReportForm.get('type').setValue(res['data']['name']);
        this.addReportForm
          .get("discription")
          .setValue(res["data"]["description"]);
        this.addReportForm.value.addFile = res["data"]["file"];
        this.addReportForm.get("AddImage").setValue(res["data"]["image"]);
      })
      .catch((err) => {
        err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("حدث خطأ في النظام");
      });
  }

  reportImage: File;
  reportFile: File;
  reportImageUrl;
  // onFileChange(e) {
  //   this.reportImage = new File([], '');
  //   this.reportImage = (e.target as HTMLInputElement).files[0];
  //   const reader = new FileReader();
  //   reader.onload = (event: any) => {
  //     if (event.target.result) {
  //       this.reportImageUrl = event.target.result
  //     }
  //     if (this.reportImage) {
  //       reader.readAsDataURL(this.reportImage);
  //     }
  //   }
  //   var output = document.getElementById('output') as HTMLInputElement;
  //   output.src = URL.createObjectURL(e.target.files[0]);
  //   output.onload = function() {
  //     URL.revokeObjectURL(output.src) // free memory
  //   }
  // }
  onFileChange(e) {
    this.reportImage = new File([], "");
    this.reportImage = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      if (event.target.result) {
        this.reportImageUrl = event.target.result;
      }
    };

    // Reading the file to get its data URL
    if (this.reportImage) {
      reader.readAsDataURL(this.reportImage);
    }

    const output = document.getElementById("output") as HTMLImageElement;

    // Preserve the width and height
    const originalWidth = output.width;
    const originalHeight = output.height;

    // Setting the new source
    output.src = URL.createObjectURL(e.target.files[0]);

    // Revoke the object URL to free memory
    output.onload = function () {
      URL.revokeObjectURL(output.src);

      // Restore the original dimensions
      output.width = originalWidth;
      output.height = originalHeight;
    };
  }

  PDF;
  onFileSelected() {
    let $file: any = document.getElementById("fileId");
    this.spinner.show();
    if (typeof FileReader !== "undefined") {
      let reader = new FileReader();
      // reader.onload = (e: any) => {
      //   // this.PDF = e.target.result
      // }
      reader.readAsArrayBuffer($file.files[0]);
      this.PDF = $file.files[0];
      this.spinner.hide();
    }
  }

  // afterLoadComplete(pdf: any) {
  //   this.spinner.hide();
  // }
}
