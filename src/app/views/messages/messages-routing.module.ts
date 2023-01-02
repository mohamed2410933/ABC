import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageOperationComponent } from './messgae/message-operation/message-operation.component';
import { MessgaeComponent } from './messgae/messgae.component';

const routes: Routes = [
  { path: '', component: MessgaeComponent },
  { path: 'operations/:id', component: MessageOperationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
