import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { EvaluationOperationComponent } from './evaluation/evaluation-operation/evaluation-operation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';


@NgModule({
  declarations: [
    EvaluationComponent,
    EvaluationOperationComponent
  ],
  imports: [
    CommonModule,
    EvaluationsRoutingModule,
    NgxPaginationModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedPipesModule,
    FormsModule 
  ]
})
export class EvaluationsModule { }
