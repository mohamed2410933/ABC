import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { ProductService } from "src/app/shared/services/product.service";
import { ViewService } from "src/app/shared/services/view.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent implements OnInit {
  filterData;
  constructor(
    private formBuilder: FormBuilder,
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  userInfo: any;
  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (this.userInfo.roleId === 1) {
      this.getAllCustomers(1);
    } else if (this.userInfo.roleId === 4) {
      this.GetCustomersByAgentAdminId();
    } else if (this.userInfo.roleId === 3) {
      this.getClientForMarkter();
    }
    this.checkDelete();
  }
  


  CustomersList;
  pageData;
  getAllCustomers(page, q = "") {
    this.spinner.show();
    this.viewService
      .GetAllCustomers(page, q)
      .then((res) => {
        this.spinner.hide();
        this.CustomersList = res["data"].data;
        this.pageData = res["data"];
      })
      .catch((err) => {
        this.spinner.hide();
        err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("حدث خطأ في النظام");
      });
  }

  agentAdminCustomers = [];
  GetCustomersByAgentAdminId() {
    this.spinner.show();
    this.viewService
      .GetCustomersByAgentAdminId(this.userInfo.id)
      .then((res) => {
        this.spinner.hide();
        this.agentAdminCustomers = res["data"].reverse();
      })
      .catch((err) => {
        this.spinner.hide();
        err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("حدث خطأ في النظام");
      });
  }

  toEditCustomer(id) {
    this.router.navigateByUrl(
      `/customersManagement/customers/operations/${id}`
    );
  }

  roleIndex;
  deleteCustomer(id, index) {
    this.roleIndex = index;
    this.viewService.PopupDeletition("clients", id);
  }
  checkDelete() {
    this.viewService.deleteStatus.subscribe((value) => {
      if (value.status) {
        this.CustomersList = this.CustomersList.slice(0);
        this.CustomersList.splice(this.roleIndex, 1);
      }
    });
  }

  changeStatus(id) {
    this.spinner.show();
    this.viewService
      .ChangeClientStatus(id)
      .then((res) => {
        // this.getAllCustomers(1)
        window.location.reload();
        this.spinner.hide();
        this.toastr.success(res["message"]);
      })
      .catch((err) => {
        this.spinner.hide();
        err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("حدث خطأ في النظام");
      });
  }

  fun(id) {
    this.router.navigateByUrl(
      `/customersManagement/customers/viewClientHistory/${id}`
    );
  }

  addClientStatus(id) {
    this.router.navigateByUrl(
      `/customersManagement/customers/addClientSataus/${id}`
    );
  }

  GetIsServe(el) {
    if (el && el.length > 0) {
      return el[0].user;
    }
  }

  toSendEmails() {
    this.router.navigateByUrl(`/customersManagement/customers/sendEmails`);
  }

  clientsMarketMonth = [];
  getClientForMarkter() {
    this.spinner.show();
    this.viewService
      .GetAll("assign-agent-customer/marketer-clients", "", "")
      .then((res) => {
        this.spinner.hide();

        this.clientsMarketMonth = res["data"];
      })
      .catch((err) => {
        this.spinner.hide();

        err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("حدث خطأ في النظام");
      });
  }

  openAddClient() {
    if (this.userInfo.website.id === 1) {
      window.open(
        `http://thiqa.abctadawul.com/marketer/login/${this.userInfo.id}`,
        "_blank"
      );
    } else {
      window.open(
        `https://abctadawul.com/marketer/login/${this.userInfo.id}`,
        "_blank"
      );
    }
  }
}
