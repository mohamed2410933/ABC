import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationOperationComponent } from './evaluation/evaluation-operation/evaluation-operation.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

const routes: Routes = [
  { path: '', component: EvaluationComponent },
  { path: 'operations/:id', component: EvaluationOperationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationsRoutingModule { }
