import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowMarkterComponent } from './follow-markter/follow-markter.component';
import { MembersOperationsComponent } from './members/members-operations/members-operations.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {
    path: 'team-work',
    component: MembersComponent
  },
  {
    path: 'follow-markter',
    component: FollowMarkterComponent
  },
  {
    path: 'team-work/operations/new',
    component: MembersOperationsComponent
  },
  {
    path: 'team-work/operations/:id',
    component: MembersOperationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamWorkRoutingModule { }
