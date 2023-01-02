import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderOperationsComponent } from './slider/slider-operations/slider-operations.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'operations/new', component: SliderOperationsComponent },
  { path: 'operations/:id', component: SliderOperationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidersRoutingModule { }
