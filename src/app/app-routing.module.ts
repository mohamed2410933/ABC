import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGaurd } from './shared/services/auth.gaurd';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { AdminLayoutSidebarLargeComponent } from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { PointerComponent } from './views/pointer/pointer.component';

const adminRoutes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'contentManagement',
      loadChildren: () => import('./views/ui-kits/contentManagement.module').then(m => m.contentManagementModule)
    },
    {
      path: 'stockSettings',
      loadChildren: () => import('./views/stock-settings/stockSettings.module').then(m=>m.stockSettingsModule)
    },
    {
      path: 'recommendationsManagement',
      loadChildren: () => import('./views/recommendations-management/recommendations-management.module').then(m=>m.RecommendationsManagementModule)
    },
    {
      path: 'customersManagement',
      loadChildren: () => import('./views/customers-management/customers-management.module').then(m=>m.CustomersManagementModule)
    },
    {
      path: 'teamWork',
      loadChildren: () => import('./views/team-work/team-work.module').then(m=>m.TeamWorkModule)
    },
    {
      path: 'agents',
      loadChildren: () => import('./views/agents/agents.module').then(m=>m.AgentsModule)
    },
    {
      path: 'news',
      loadChildren: () => import('./views/news/news.module').then(m=>m.NewsModule)
    },
    {
      path: 'customers-reviews',
      loadChildren: () => import('./views/customers-reviews/customers-reviews.module').then(m=>m.CustomersReviewsModule)
    },
    {
      path: 'market',
      loadChildren: () => import('./views/market/market.module').then(m=>m.MarketModule)
    },
    {
      path: 'comption',
      loadChildren: () => import('./views/compition/compition.module').then(m=>m.CompitionModule)
    },
    {
      path: 'messages',
      loadChildren: () => import('./views/messages/messages.module').then(m=>m.MessagesModule)
    },
    {
      path: 'sliders',
      loadChildren: () => import('./views/sliders/sliders.module').then(m=>m.SlidersModule)
    },
    {
      path: 'evaluations',
      loadChildren: () => import('./views/evaluations/evaluations.module').then(m=>m.EvaluationsModule)
    },


 
    {
      path: 'contacts',
      loadChildren: () => import('./views/contacts/contacts.module').then(m => m.ContactsModule)
    },
 
    {
      path: 'pages',
      loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)
    },
    {
      path:'pointer',
      component:PointerComponent
    }
 
  ];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule)
      }
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutSidebarLargeComponent,
    canActivate: [AuthGaurd],
    children: adminRoutes
  },
  { path: 'agents', loadChildren: () => import('./views/agents/agents.module').then(m => m.AgentsModule) },
  { path: 'news', loadChildren: () => import('./views/news/news.module').then(m => m.NewsModule) },
  {
    path: '**',
    redirectTo: 'others/404'
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
