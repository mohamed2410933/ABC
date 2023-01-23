import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowMarkterComponent } from './follow-markter/follow-markter.component';
import { MarksComponent } from './marks/marks.component';
import { MembersOperationsComponent } from './members/members-operations/members-operations.component';
import { MembersComponent } from './members/members.component';
import { MyAgentsComponent } from './my-agents/my-agents.component';

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
  {
    path: 'markters',
    component: MarksComponent
  },
  {
    path: 'myAgents',
    component: MyAgentsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamWorkRoutingModule { }
