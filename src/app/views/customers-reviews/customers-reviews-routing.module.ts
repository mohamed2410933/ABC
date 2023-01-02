import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsOperationsComponent } from './reviews/reviews-operations/reviews-operations.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [

  { path: '', component: ReviewsComponent },
  { path: 'operations/new', component: ReviewsOperationsComponent },
  { path: 'operations/:id', component: ReviewsOperationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersReviewsRoutingModule { }
