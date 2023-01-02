import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './comption/answers/answers.component';
import { ComptionOperationsComponent } from './comption/comption-operations/comption-operations.component';
import { ComptionComponent } from './comption/comption.component';

const routes: Routes = [
  { path: '', component: ComptionComponent },
  { path: 'operations/new', component: ComptionOperationsComponent },
  { path: 'operations/:id', component: ComptionOperationsComponent },
  { path: 'answers/:id', component: AnswersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompitionRoutingModule { }
