import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersManagementRoutingModule } from './customers-management-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomersOperationsComponent } from './customers/customers-operations/customers-operations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { PackagesComponent } from './packages/packages.component';
import { PackagesOPerationsComponent } from './packages/packages-operations/packages-operations.component';
import { BillsComponent } from './bills/bills.component';
import { BillsOperationsComponent } from './bills/bills-operations/bills-operations.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { ViewClientHistoryComponent } from './customers/view-client-history/view-client-history.component';
import { AddStatusComponent } from './customers/add-status/add-status.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SendEmailsComponent } from './customers/send-emails/send-emails.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomersOperationsComponent,
    PackagesComponent,
    PackagesOPerationsComponent,
    BillsComponent,
    BillsOperationsComponent,
    ViewClientHistoryComponent,
    AddStatusComponent,
    SendEmailsComponent,
  ],
  imports: [
    CommonModule,
    CustomersManagementRoutingModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    NgxPaginationModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    SharedPipesModule,
    NgSelectModule,
  ]
})
export class CustomersManagementModule { }
