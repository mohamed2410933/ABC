import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompitionRoutingModule } from './compition-routing.module';
import { ComptionComponent } from './comption/comption.component';
import { ComptionOperationsComponent } from './comption/comption-operations/comption-operations.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { AnswersComponent } from './comption/answers/answers.component';


@NgModule({
  declarations: [
    ComptionComponent,
    ComptionOperationsComponent,
    AnswersComponent
  ],
  imports: [
    CommonModule,
    CompitionRoutingModule,
    NgxPaginationModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedPipesModule,
    FormsModule 
  ]
})
export class CompitionModule { }
