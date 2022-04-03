import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasegenAddComponent } from './casegen-add/casegen-add.component';
import { CasegenEditComponent } from './casegen-edit/casegen-edit.component';
import { RepliesPageComponent } from './replies-page/replies-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CategoryComponent } from './category/category.component';
import { CatkeywordComponent } from './catkeyword/catkeyword.component';
import { VerifyreportComponent } from './verifyreport/verifyreport.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportsClosedComponent } from './reports-closed/reports-closed.component';
import { ReportAddComponent } from './report-add/report-add.component';
import { ReportEditComponent } from './report-edit/report-edit.component';
import {AppRouteGuard} from './app-route-guards';
import { FbUserComponent } from './fb-user/fb-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    canActivate: [AppRouteGuard],
  },
  {
    path: 'dashboard',
     component: DashboardPageComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'fbuser',
     component: FbUserComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'casegen',
    component: CasegenAddComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'casegen/edit/:id',
    component: CasegenEditComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'replies',
    component: RepliesPageComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'reports-closed',
    component: ReportsClosedComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'report-add',
    component: ReportAddComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'report-edit/:id',
    component: ReportEditComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'categories',
    component: CategoryComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'category/:id',
    component: CatkeywordComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'verify',
    component: VerifyreportComponent,
    canActivate: [AppRouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
