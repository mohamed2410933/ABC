import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsOperationsComponent } from './agents-operations/agents-operations.component';
import { AgentsComponent } from './agents.component';

const routes: Routes = [
  { path: '', component: AgentsComponent },
  { path: 'operations/:id/:name', component: AgentsOperationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
