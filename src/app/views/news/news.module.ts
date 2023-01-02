import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsOperationsComponent } from './news-operations/news-operations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    NewsComponent,
    NewsOperationsComponent,
    // FillterPipe
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    NgxPaginationModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedPipesModule,
    FormsModule 
  ]
})
export class NewsModule { }
