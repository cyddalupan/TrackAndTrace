import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasegenPageComponent } from './casegen-page/casegen-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RepliesPageComponent } from './replies-page/replies-page.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { CasegenAddComponent } from './casegen-add/casegen-add.component';
import { CasegenEditComponent } from './casegen-edit/casegen-edit.component';
import { RepliesAddComponent } from './replies-add/replies-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CasegenPageComponent,
    SidebarComponent,
    DashboardPageComponent,
    RepliesPageComponent,
    InfoBarComponent,
    CasegenAddComponent,
    CasegenEditComponent,
    RepliesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
