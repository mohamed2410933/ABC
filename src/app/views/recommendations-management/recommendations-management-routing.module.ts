import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecomonationsOperationsComponent } from './all-recomondations/all-recomonations-operations/all-recomonations-operations.component';
import { AllRecomondationsComponent } from './all-recomondations/all-recomondations.component';
import { RecommendationtypesOperationsComponent } from './recommendationtypes/recommendationtypes-operations/recommendationtypes-operations.component';
import { RecommendationtypesComponent } from './recommendationtypes/recommendationtypes.component';
import { ReportsOperationsComponent } from './reports/reports-operations/reports-operations.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: 'all-recomondations',
    component: AllRecomondationsComponent
  },
  {
    path: 'all-recomondations/operations/new',
    component: AllRecomonationsOperationsComponent
  },
  {
    path: 'all-recomondations/operations/:id',
    component: AllRecomonationsOperationsComponent
  },
  {
    path: 'recommendationtypes',
    component: RecommendationtypesComponent
  },
  {
    path: 'recommendationtypes/operations/new',
    component: RecommendationtypesOperationsComponent
  },
  {
    path: 'recommendationtypes/operations/:id',
    component: RecommendationtypesOperationsComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'reports/operations/new',
    component: ReportsOperationsComponent
  },
  {
    path: 'reports/operations/:id',
    component: ReportsOperationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationsManagementRoutingModule { }
