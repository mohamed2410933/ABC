import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { contentManagementRoutingModule } from './contentManagement-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionsComponent } from './accordions/accordions.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxEchartsModule } from 'ngx-echarts';
import { OurServiceComponent } from './our-services/our-services.component';
// import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { OurServicesOperationsComponent } from './our-services/our-services-operations/our-services-operations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { SitePolicyComponent } from './site-policy/site-policy.component';
import { EvacuationResponsibilatyComponent } from './evacuation-responsibilaty/evacuation-responsibilaty.component';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { OurAdvantagesComponent } from './our-advantages/our-advantages.component';
import { OurAdvantagesOperationsComponent } from './our-advantages/our-advantages-operations/our-advantages-operations.component';
import { OffersComponent } from './offers/offers.component';
@NgModule({

  declarations: [
      AccordionsComponent, 
      OurServiceComponent, 
      OurServicesOperationsComponent,
      ContactsComponent,
      TermsConditionsComponent,
      SitePolicyComponent,
      EvacuationResponsibilatyComponent,
      OurAdvantagesComponent,
      OurAdvantagesOperationsComponent,
      OffersComponent, 

    
    ],
    imports: [
      CommonModule,
      FormsModule,
      ToastrModule,
      NgbModule,
      NgxEchartsModule,
      // SharedComponentsModule,
      SharedDirectivesModule,
      contentManagementRoutingModule,
      AngularEditorModule,
      MatMenuModule,
      MatIconModule,
      NgbModule,
      NgxPaginationModule,
      NgxDatatableModule,
      ReactiveFormsModule,
      SharedPipesModule
      ]
})
export class contentManagementModule { }
