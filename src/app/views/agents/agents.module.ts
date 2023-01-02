import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsComponent } from './agents.component';
import {MatChipsModule} from '@angular/material/chips';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AgentsOperationsComponent } from './agents-operations/agents-operations.component';

@NgModule({
  declarations: [
    AgentsComponent,
    AgentsOperationsComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule,
    MatChipsModule,
    SharedPipesModule,
    NgxPaginationModule,
    NgxDatatableModule,
    FormsModule
  ]
})
export class AgentsModule { }
