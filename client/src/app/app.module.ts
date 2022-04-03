import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RepliesPageComponent } from './replies-page/replies-page.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { CasegenAddComponent } from './casegen-add/casegen-add.component';
import { CasegenEditComponent } from './casegen-edit/casegen-edit.component';
import { RepliesAddComponent } from './replies-add/replies-add.component';
import {AppRouteGuard} from './app-route-guards';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { CategoryComponent } from './category/category.component';
import { CatkeywordComponent } from './catkeyword/catkeyword.component';
import { VerifyreportComponent } from './verifyreport/verifyreport.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportAddComponent } from './report-add/report-add.component';
import { ReportEditComponent } from './report-edit/report-edit.component';
import { ReportsClosedComponent } from './reports-closed/reports-closed.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { FbUserComponent } from './fb-user/fb-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardPageComponent,
    RepliesPageComponent,
    InfoBarComponent,
    CasegenAddComponent,
    CasegenEditComponent,
    RepliesAddComponent,
    CategoryComponent,
    CatkeywordComponent,
    VerifyreportComponent,
    ReportsComponent,
    ReportAddComponent,
    ReportEditComponent,
    ReportsClosedComponent,
    UploadCsvComponent,
    FbUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatChipsModule,
    MatBadgeModule,
    MatSortModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AppRouteGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
