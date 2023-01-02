import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { NgxEchartsModule } from 'ngx-echarts';

// import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { stockSettingsRoutingModule } from './stockSettings-routing.module';
import { SectorsComponent } from './sectors/sectors.component';
import { SectorsOperationsComponent } from './sectors/sectors-operations/sectors-operations.component';
import { StocksComponent } from './stocks/stocks.component';
import { StocksOperationsComponent } from './stocks/stocks-operations/stocks-operations.component';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { NgSelect2Module } from 'ng-select2';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({

  declarations: [
  SectorsComponent,
  SectorsOperationsComponent,
  StocksComponent,
  StocksOperationsComponent,
  // FillterPipe
    ],
    imports: [
      CommonModule,
      FormsModule,
      ToastrModule,
      NgbModule,
      NgxEchartsModule,
      // SharedComponentsModule,
      SharedDirectivesModule,
      AngularEditorModule,
      MatMenuModule,
      MatIconModule,
      NgbModule,
      NgxPaginationModule,
      NgxDatatableModule,
      ReactiveFormsModule,
      stockSettingsRoutingModule,
      SharedPipesModule,
      NgSelect2Module,
      NgSelectModule,
      ]
})
export class stockSettingsModule { }