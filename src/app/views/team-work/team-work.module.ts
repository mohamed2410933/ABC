import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamWorkRoutingModule } from './team-work-routing.module';
import { MembersComponent } from './members/members.component';
import { MembersOperationsComponent } from './members/members-operations/members-operations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { FollowMarkterComponent } from './follow-markter/follow-markter.component';


@NgModule({
  declarations: [
    MembersComponent,
    MembersOperationsComponent,
    FollowMarkterComponent,
  ],
  imports: [
    CommonModule,
    TeamWorkRoutingModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    NgxPaginationModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    SharedPipesModule
  ]
})
export class TeamWorkModule { }
