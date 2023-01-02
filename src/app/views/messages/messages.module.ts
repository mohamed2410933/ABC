import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessgaeComponent } from './messgae/messgae.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { MessageOperationComponent } from './messgae/message-operation/message-operation.component';


@NgModule({
  declarations: [
    MessgaeComponent,
    MessageOperationComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    NgxPaginationModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedPipesModule,
    FormsModule 
  ]
})
export class MessagesModule { }
