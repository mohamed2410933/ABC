import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidersRoutingModule } from './sliders-routing.module';
import { SliderComponent } from './slider/slider.component';
import { SliderOperationsComponent } from './slider/slider-operations/slider-operations.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';


@NgModule({
  declarations: [
    SliderComponent,
    SliderOperationsComponent
  ],
  imports: [
    CommonModule,
    SlidersRoutingModule,
    NgxPaginationModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedPipesModule,
    FormsModule 
  ]
})
export class SlidersModule { }
