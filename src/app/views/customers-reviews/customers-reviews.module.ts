import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersReviewsRoutingModule } from './customers-reviews-routing.module';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsOperationsComponent } from './reviews/reviews-operations/reviews-operations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';


@NgModule({
  declarations: [
    ReviewsComponent,
    ReviewsOperationsComponent
  ],
  imports: [
    CommonModule,
    CustomersReviewsRoutingModule,
    SharedPipesModule,
    NgxPaginationModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomersReviewsModule { }
