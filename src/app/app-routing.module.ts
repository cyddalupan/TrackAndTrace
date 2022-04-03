import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasegenPageComponent } from './casegen-page/casegen-page.component';
import { RepliesPageComponent } from './replies-page/replies-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'casegen',
    component: CasegenPageComponent
  },
  {
    path: 'replies',
    component: RepliesPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
