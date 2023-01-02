import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsOperationsComponent } from './bills/bills-operations/bills-operations.component';
import { BillsComponent } from './bills/bills.component';
import { AddStatusComponent } from './customers/add-status/add-status.component';
import { CustomersOperationsComponent } from './customers/customers-operations/customers-operations.component';
import { CustomersComponent } from './customers/customers.component';
import { SendEmailsComponent } from './customers/send-emails/send-emails.component';
import { ViewClientHistoryComponent } from './customers/view-client-history/view-client-history.component';
import { PackagesOPerationsComponent } from './packages/packages-operations/packages-operations.component';
import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customers/operations/new',
    component: CustomersOperationsComponent
  },
  {
    path: 'customers/operations/:id',
    component: CustomersOperationsComponent
  },
  {
    path: 'customers/viewClientHistory/:id',
    component: ViewClientHistoryComponent
  },
  {
    path: 'customers/addClientSataus/:id',
    component: AddStatusComponent
  },
  {
    path: 'customers/sendEmails/:id',
    component: SendEmailsComponent
  },
  {
    path: 'packages',
    component: PackagesComponent
  },
  {
    path: 'packages/operations/new',
    component: PackagesOPerationsComponent
  },
  {
    path: 'packages/operations/:id',
    component: PackagesOPerationsComponent
  },
  {
    path:'bills',
    component: BillsComponent
  },
  {
    path:'bills/operations/new',
    component: BillsOperationsComponent
  },
  {
    path:'bills/operations/:id',
    component: BillsOperationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersManagementRoutingModule { }
