import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectorsOperationsComponent } from './sectors/sectors-operations/sectors-operations.component';
import { SectorsComponent } from './sectors/sectors.component';
import { StocksOperationsComponent } from './stocks/stocks-operations/stocks-operations.component';
import { StocksComponent } from './stocks/stocks.component';
import { NgSelect2Module } from 'ng-select2';

const routes: Routes = [
  {
    path: 'sectors',
    component: SectorsComponent
  },
  {
    path: 'sectors/sectors-operations/new',
    component: SectorsOperationsComponent
  },
  {
    path: 'sectors/sectors-operations/:id',
    component: SectorsOperationsComponent
  },
  {
    path: 'stocks',
    component: StocksComponent
  },
  {
    path: 'stocks/stocks-operations/new',
    component: StocksOperationsComponent
  },
  {
    path: 'stocks/stocks-operations/:id',
    component: StocksOperationsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),NgSelect2Module],
  exports: [RouterModule]
})
export class stockSettingsRoutingModule { }
