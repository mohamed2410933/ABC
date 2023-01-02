import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsOperationsComponent } from './news-operations/news-operations.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'operations/new', component: NewsOperationsComponent },
  { path: 'operations/:id', component: NewsOperationsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
