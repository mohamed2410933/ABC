import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationsManagementRoutingModule } from './recommendations-management-routing.module';
import { AllRecomondationsComponent } from './all-recomondations/all-recomondations.component';
import { AllRecomonationsOperationsComponent } from './all-recomondations/all-recomonations-operations/all-recomonations-operations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecommendationtypesComponent } from './recommendationtypes/recommendationtypes.component';
import { RecommendationtypesOperationsComponent } from './recommendationtypes/recommendationtypes-operations/recommendationtypes-operations.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportsOperationsComponent } from './reports/reports-operations/reports-operations.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
@NgModule({
  declarations: [
    AllRecomondationsComponent,
    AllRecomonationsOperationsComponent,
    RecommendationtypesComponent,
    RecommendationtypesOperationsComponent,
    ReportsComponent,
    ReportsOperationsComponent,
  ],
  imports: [
    CommonModule,
    RecommendationsManagementRoutingModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    NgxPaginationModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    SharedPipesModule
  ]
})
export class RecommendationsManagementModule { }
