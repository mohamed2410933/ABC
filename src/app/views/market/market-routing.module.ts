import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketOperationsComponent } from './market/market-operations/market-operations.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [

  { path: '', component: MarketComponent },
  { path: 'operations/new', component: MarketOperationsComponent },
  { path: 'operations/:id', component: MarketOperationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
