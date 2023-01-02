import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionsComponent } from './accordions/accordions.component';
import { OurServiceComponent } from './our-services/our-services.component';
import { OurServicesOperationsComponent } from './our-services/our-services-operations/our-services-operations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { SitePolicyComponent } from './site-policy/site-policy.component';
import { EvacuationResponsibilatyComponent } from './evacuation-responsibilaty/evacuation-responsibilaty.component';
import { OurAdvantagesComponent } from './our-advantages/our-advantages.component';
import { OurAdvantagesOperationsComponent } from './our-advantages/our-advantages-operations/our-advantages-operations.component';
import { OffersComponent } from './offers/offers.component';
// import { PopoverComponent } from './popover/popover.component';
// import { RatingComponent } from './rating/rating.component';

const routes: Routes = [

  {
    path: 'accordions',
    component: AccordionsComponent
  },
  {
    path: 'our-services',
    component: OurServiceComponent
  },
  {
    path: 'our-services/operations/new',
    component: OurServicesOperationsComponent
  },
  {
    path: 'our-services/operations/:id',
    component: OurServicesOperationsComponent
  },
  {
    path: 'our-advantages',
    component: OurAdvantagesComponent
  },
  {
    path: 'our-advantages/operations/new',
    component: OurAdvantagesOperationsComponent
  },
  {
    path: 'our-advantages/operations/:id',
    component: OurAdvantagesOperationsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent
  },
  {
    path: 'site-policy',
    component: SitePolicyComponent
  },
  {
    path: 'evacuation-responsibilaty',
    component: EvacuationResponsibilatyComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class contentManagementRoutingModule { }
