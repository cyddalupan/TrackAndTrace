(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-route-guards.ts":
/*!*************************************!*\
  !*** ./src/app/app-route-guards.ts ***!
  \*************************************/
/*! exports provided: AppRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouteGuard", function() { return AppRouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



/**
 * Application root route guard.
 * Prevents access to the application if the user is unauthorized.
 */
var AppRouteGuard = /** @class */ (function () {
    function AppRouteGuard(route, router) {
        this.route = route;
        this.router = router;
    }
    AppRouteGuard.prototype.canActivate = function () {
        var _this = this;
        if (localStorage.getItem('hash') && localStorage.getItem('hash') === "akduolnaifsu") {
            return true;
        }
        var counter = 0;
        this.route.queryParamMap.subscribe(function (queryParams) {
            var hash = queryParams.get("hash");
            if (hash === 'akduolnaifsu') {
                localStorage.setItem('hash', "akduolnaifsu");
                _this.router.navigate(['/dashboard']);
                return true;
            }
            else {
                counter++;
            }
            if (counter > 1 && hash !== 'akduolnaifsu') {
                window.location.href = "https://devinehealthmedical.com/msg/track-and-trace/public_html/admin/login";
            }
        });
        return true;
    };
    AppRouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppRouteGuard);
    return AppRouteGuard;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _casegen_add_casegen_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./casegen-add/casegen-add.component */ "./src/app/casegen-add/casegen-add.component.ts");
/* harmony import */ var _casegen_edit_casegen_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./casegen-edit/casegen-edit.component */ "./src/app/casegen-edit/casegen-edit.component.ts");
/* harmony import */ var _replies_page_replies_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replies-page/replies-page.component */ "./src/app/replies-page/replies-page.component.ts");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./src/app/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _catkeyword_catkeyword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catkeyword/catkeyword.component */ "./src/app/catkeyword/catkeyword.component.ts");
/* harmony import */ var _verifyreport_verifyreport_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verifyreport/verifyreport.component */ "./src/app/verifyreport/verifyreport.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _reports_closed_reports_closed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports-closed/reports-closed.component */ "./src/app/reports-closed/reports-closed.component.ts");
/* harmony import */ var _report_add_report_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report-add/report-add.component */ "./src/app/report-add/report-add.component.ts");
/* harmony import */ var _report_edit_report_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report-edit/report-edit.component */ "./src/app/report-edit/report-edit.component.ts");
/* harmony import */ var _app_route_guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-route-guards */ "./src/app/app-route-guards.ts");
/* harmony import */ var _fb_user_fb_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fb-user/fb-user.component */ "./src/app/fb-user/fb-user.component.ts");
















var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'dashboard',
        component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_6__["DashboardPageComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'fbuser',
        component: _fb_user_fb_user_component__WEBPACK_IMPORTED_MODULE_15__["FbUserComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'casegen',
        component: _casegen_add_casegen_add_component__WEBPACK_IMPORTED_MODULE_3__["CasegenAddComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'casegen/edit/:id',
        component: _casegen_edit_casegen_edit_component__WEBPACK_IMPORTED_MODULE_4__["CasegenEditComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'replies',
        component: _replies_page_replies_page_component__WEBPACK_IMPORTED_MODULE_5__["RepliesPageComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'reports',
        component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'reports-closed',
        component: _reports_closed_reports_closed_component__WEBPACK_IMPORTED_MODULE_11__["ReportsClosedComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'report-add',
        component: _report_add_report_add_component__WEBPACK_IMPORTED_MODULE_12__["ReportAddComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'report-edit/:id',
        component: _report_edit_report_edit_component__WEBPACK_IMPORTED_MODULE_13__["ReportEditComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'categories',
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'category/:id',
        component: _catkeyword_catkeyword_component__WEBPACK_IMPORTED_MODULE_8__["CatkeywordComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
    {
        path: 'verify',
        component: _verifyreport_verifyreport_component__WEBPACK_IMPORTED_MODULE_9__["VerifyreportComponent"],
        canActivate: [_app_route_guards__WEBPACK_IMPORTED_MODULE_14__["AppRouteGuard"]],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n    flex: 1 1 auto;\n}\n\nmat-sidenav-container {\n    min-height: 100%;\n}\n\n.page {\n  padding: 4% 7% 4% 2%;\n  max-width: 1600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2Uge1xuICBwYWRkaW5nOiA0JSA3JSA0JSAyJTtcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Track And Trace </span>\n    <span class=\"spacer\"></span>\n    <i class=\"material-icons\">\n      track_changes\n    </i>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-sidenav-container>\n  <mat-sidenav mode=\"side\" opened>\n      <app-sidebar></app-sidebar>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div class=\"page\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./src/app/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _replies_page_replies_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./replies-page/replies-page.component */ "./src/app/replies-page/replies-page.component.ts");
/* harmony import */ var _info_bar_info_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./info-bar/info-bar.component */ "./src/app/info-bar/info-bar.component.ts");
/* harmony import */ var _casegen_add_casegen_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./casegen-add/casegen-add.component */ "./src/app/casegen-add/casegen-add.component.ts");
/* harmony import */ var _casegen_edit_casegen_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./casegen-edit/casegen-edit.component */ "./src/app/casegen-edit/casegen-edit.component.ts");
/* harmony import */ var _replies_add_replies_add_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./replies-add/replies-add.component */ "./src/app/replies-add/replies-add.component.ts");
/* harmony import */ var _app_route_guards__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-route-guards */ "./src/app/app-route-guards.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _catkeyword_catkeyword_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./catkeyword/catkeyword.component */ "./src/app/catkeyword/catkeyword.component.ts");
/* harmony import */ var _verifyreport_verifyreport_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./verifyreport/verifyreport.component */ "./src/app/verifyreport/verifyreport.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _report_add_report_add_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./report-add/report-add.component */ "./src/app/report-add/report-add.component.ts");
/* harmony import */ var _report_edit_report_edit_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./report-edit/report-edit.component */ "./src/app/report-edit/report-edit.component.ts");
/* harmony import */ var _reports_closed_reports_closed_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./reports-closed/reports-closed.component */ "./src/app/reports-closed/reports-closed.component.ts");
/* harmony import */ var _upload_csv_upload_csv_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./upload-csv/upload-csv.component */ "./src/app/upload-csv/upload-csv.component.ts");
/* harmony import */ var _fb_user_fb_user_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./fb-user/fb-user.component */ "./src/app/fb-user/fb-user.component.ts");









































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["SidebarComponent"],
                _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_23__["DashboardPageComponent"],
                _replies_page_replies_page_component__WEBPACK_IMPORTED_MODULE_24__["RepliesPageComponent"],
                _info_bar_info_bar_component__WEBPACK_IMPORTED_MODULE_25__["InfoBarComponent"],
                _casegen_add_casegen_add_component__WEBPACK_IMPORTED_MODULE_26__["CasegenAddComponent"],
                _casegen_edit_casegen_edit_component__WEBPACK_IMPORTED_MODULE_27__["CasegenEditComponent"],
                _replies_add_replies_add_component__WEBPACK_IMPORTED_MODULE_28__["RepliesAddComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_32__["CategoryComponent"],
                _catkeyword_catkeyword_component__WEBPACK_IMPORTED_MODULE_33__["CatkeywordComponent"],
                _verifyreport_verifyreport_component__WEBPACK_IMPORTED_MODULE_34__["VerifyreportComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_35__["ReportsComponent"],
                _report_add_report_add_component__WEBPACK_IMPORTED_MODULE_36__["ReportAddComponent"],
                _report_edit_report_edit_component__WEBPACK_IMPORTED_MODULE_37__["ReportEditComponent"],
                _reports_closed_reports_closed_component__WEBPACK_IMPORTED_MODULE_38__["ReportsClosedComponent"],
                _upload_csv_upload_csv_component__WEBPACK_IMPORTED_MODULE_39__["UploadCsvComponent"],
                _fb_user_fb_user_component__WEBPACK_IMPORTED_MODULE_40__["FbUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_30__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_30__["metaReducers"] }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].production }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] },
                _app_route_guards__WEBPACK_IMPORTED_MODULE_29__["AppRouteGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/casegen-add/casegen-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/casegen-add/casegen-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.casegen {\n    width: 48%;\n}\n\n.info-bar {\n    width: 48%;\n}\n\n.option-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.by-two {\n    width: 48%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZWdlbi1hZGQvY2FzZWdlbi1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jYXNlZ2VuLWFkZC9jYXNlZ2VuLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhc2VnZW4ge1xuICAgIHdpZHRoOiA0OCU7XG59XG5cbi5pbmZvLWJhciB7XG4gICAgd2lkdGg6IDQ4JTtcbn1cblxuLm9wdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ieS10d28ge1xuICAgIHdpZHRoOiA0OCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/casegen-add/casegen-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/casegen-add/casegen-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"casegen\">\n    <br><br>\n    <form>\n      <div class=\"form-group\">\n        <label>Message</label>\n        <input [(ngModel)]=\"casegenRequest.message\" name=\"message\" type=\"email\" class=\"form-control\" aria-describedby=\"message\" placeholder=\"message\">\n      </div>\n      <div class=\"option-container\">\n        <div class=\"by-two\">\n          <div class=\"form-group\">\n            <label>Option</label>\n            <input [(ngModel)]=\"casegenOptions.option1\" name=\"option1\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"by-two\">\n          <div class=\"form-group\">\n            <label>Quest ID</label>\n            <input [(ngModel)]=\"casegenOptions.quest1\" name=\"quest1\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option2\" name=\"option2\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest2\" name=\"quest2\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option3\" name=\"option3\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest3\" name=\"quest3\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option4\" name=\"option4\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest4\" name=\"quest4\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option5\" name=\"option5\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest5\" name=\"quest5\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option6\" name=\"option6\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest6\" name=\"quest6\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <label>Category</label>\n        <select [(ngModel)]=\"casegenRequest.category_id\" name=\"category_id\" class=\"custom-select\">\n          <option selected value=\"0\">Select report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Subcategory</label>\n        <input [(ngModel)]=\"casegenRequest.subcategory\" name=\"subcategory\" type=\"email\" class=\"form-control\" aria-describedby=\"subcategory\" placeholder=\"subcategory\">\n      </div>\n      <div class=\"form-group\">\n        <label>Claimant</label>\n        <input [(ngModel)]=\"casegenRequest.claimant\" name=\"claimant\" type=\"email\" class=\"form-control\" aria-describedby=\"claimant\" placeholder=\"claimant\">\n      </div>\n      <div class=\"form-group\">\n        <label>Severity</label> \n        <input [(ngModel)]=\"casegenRequest.severity\" name=\"severity\" type=\"number\" class=\"form-control\" aria-describedby=\"claimant\" placeholder=\"Severity\">\n      </div>\n      <div class=\"form-group\">\n        <label>Remarks</label>\n        <input [(ngModel)]=\"casegenRequest.remarks\" name=\"remarks\" type=\"email\" class=\"form-control\" aria-describedby=\"remarks\" placeholder=\"remarks\">\n      </div>\n      <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-primary\">save</button>\n    </form>\n  </div>\n  <div class=\"info-bar\">\n    <app-info-bar></app-info-bar>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/casegen-add/casegen-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/casegen-add/casegen-add.component.ts ***!
  \******************************************************/
/*! exports provided: CasegenAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasegenAddComponent", function() { return CasegenAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _casegen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../casegen.service */ "./src/app/casegen.service.ts");




var CasegenAddComponent = /** @class */ (function () {
    function CasegenAddComponent(categoryService, casegenService) {
        this.categoryService = categoryService;
        this.casegenService = casegenService;
        this.initCasegenRequest = {
            quest_id: null,
            casegen_id: null,
            message: "",
            rule: "",
            category_id: 0,
            subcategory: "",
            claimant: "",
            severity: 0,
            remarks: "",
        };
        this.initCasegenOptions = {
            option1: "",
            quest1: 0,
            option2: "",
            quest2: 0,
            option3: "",
            quest3: 0,
            option4: "",
            quest4: 0,
            option5: "",
            quest5: 0,
            option6: "",
            quest6: 0,
        };
        this.casegenRequest = {
            quest_id: null,
            casegen_id: null,
            message: "",
            rule: "",
            category_id: 0,
            subcategory: "",
            claimant: "",
            severity: 0,
            remarks: "",
        };
        this.casegenOptions = {
            option1: "",
            quest1: 0,
            option2: "",
            quest2: 0,
            option3: "",
            quest3: 0,
            option4: "",
            quest4: 0,
            option5: "",
            quest5: 0,
            option6: "",
            quest6: 0,
        };
        this.categories$ = this.categoryService.getCategories();
    }
    CasegenAddComponent.prototype.ngOnInit = function () { };
    CasegenAddComponent.prototype.submit = function () {
        var _this = this;
        //convert options
        var rule = "";
        if (this.casegenOptions.option1 === "" || this.casegenOptions.quest1 === 0) {
            alert("User should have an option. Please fix first options.");
        }
        else {
            if (this.casegenOptions.option1 !== "" && this.casegenOptions.quest1 !== 0) {
                rule = this.casegenOptions.option1 + ":" + this.casegenOptions.quest1;
            }
            if (this.casegenOptions.option2 !== "" && this.casegenOptions.quest2 !== 0) {
                rule = rule + "," + this.casegenOptions.option2 + ":" + this.casegenOptions.quest2;
            }
            if (this.casegenOptions.option3 !== "" && this.casegenOptions.quest3 !== 0) {
                rule = rule + "," + this.casegenOptions.option3 + ":" + this.casegenOptions.quest3;
            }
            if (this.casegenOptions.option4 !== "" && this.casegenOptions.quest4 !== 0) {
                rule = rule + "," + this.casegenOptions.option4 + ":" + this.casegenOptions.quest4;
            }
            if (this.casegenOptions.option5 !== "" && this.casegenOptions.quest5 !== 0) {
                rule = rule + "," + this.casegenOptions.option5 + ":" + this.casegenOptions.quest5;
            }
            if (this.casegenOptions.option6 !== "" && this.casegenOptions.quest6 !== 0) {
                rule = rule + "," + this.casegenOptions.option6 + ":" + this.casegenOptions.quest6;
            }
            this.casegenRequest.rule = rule;
            this.casegenService.saveCasegen(this.casegenRequest).subscribe(function () {
                _this.casegenService.getCasegen();
                // Clear form values.
                _this.casegenRequest = _this.initCasegenRequest;
                _this.casegenOptions = _this.initCasegenOptions;
                alert("Casegen saved");
            });
        }
    };
    CasegenAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-casegen-add',
            template: __webpack_require__(/*! ./casegen-add.component.html */ "./src/app/casegen-add/casegen-add.component.html"),
            styles: [__webpack_require__(/*! ./casegen-add.component.css */ "./src/app/casegen-add/casegen-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _casegen_service__WEBPACK_IMPORTED_MODULE_3__["CasegenService"]])
    ], CasegenAddComponent);
    return CasegenAddComponent;
}());



/***/ }),

/***/ "./src/app/casegen-edit/casegen-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/casegen-edit/casegen-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.casegen {\n    width: 48%;\n}\n\n.info-bar {\n    width: 48%;\n}\n\n.option-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.by-two {\n    width: 48%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZWdlbi1lZGl0L2Nhc2VnZW4tZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Nhc2VnZW4tZWRpdC9jYXNlZ2VuLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXNlZ2VuIHtcbiAgICB3aWR0aDogNDglO1xufVxuXG4uaW5mby1iYXIge1xuICAgIHdpZHRoOiA0OCU7XG59XG5cbi5vcHRpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYnktdHdvIHtcbiAgICB3aWR0aDogNDglO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/casegen-edit/casegen-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/casegen-edit/casegen-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"casegen\">\n    <br><br>\n    <form>\n      <div class=\"form-group\">\n        <label>Message</label>\n        <input [(ngModel)]=\"casegenRequest.message\" name=\"message\" type=\"email\" class=\"form-control\" aria-describedby=\"message\" placeholder=\"message\">\n      </div>\n      <div class=\"option-container\">\n        <div class=\"by-two\">\n          <div class=\"form-group\">\n            <label>Option</label>\n            <input [(ngModel)]=\"casegenOptions.option1\" name=\"option1\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"by-two\">\n          <div class=\"form-group\">\n            <label>Quest ID</label>\n            <input [(ngModel)]=\"casegenOptions.quest1\" name=\"quest1\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option2\" name=\"option2\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest2\" name=\"quest2\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option3\" name=\"option3\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest3\" name=\"quest3\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option4\" name=\"option4\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest4\" name=\"quest4\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option5\" name=\"option5\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest5\" name=\"quest5\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.option6\" name=\"option6\" maxlength=\"19\" type=\"text\" class=\"form-control\" aria-describedby=\"option\" placeholder=\"option\">\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"casegenOptions.quest6\" name=\"quest6\" type=\"number\" class=\"form-control\" aria-describedby=\"quest\" placeholder=\"Quest ID\">\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <label>Category</label>\n        <select [(ngModel)]=\"casegenRequest.category_id\" name=\"category_id\" class=\"custom-select\">\n          <option selected value=\"0\">Select report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Subcategory</label>\n        <input [(ngModel)]=\"casegenRequest.subcategory\" name=\"subcategory\" type=\"email\" class=\"form-control\" aria-describedby=\"subcategory\" placeholder=\"subcategory\">\n      </div>\n      <div class=\"form-group\">\n        <label>Claimant</label>\n        <input [(ngModel)]=\"casegenRequest.claimant\" name=\"claimant\" type=\"text\" class=\"form-control\" aria-describedby=\"claimant\" placeholder=\"claimant\">\n      </div>\n      <div class=\"form-group\">\n        <label>Severity</label> \n        <input [(ngModel)]=\"casegenRequest.severity\" name=\"severity\" type=\"number\" class=\"form-control\" aria-describedby=\"claimant\" placeholder=\"Severity\">\n      </div>\n      <div class=\"form-group\">\n        <label>Remarks</label>\n        <input [(ngModel)]=\"casegenRequest.remarks\" name=\"remarks\" type=\"email\" class=\"form-control\" aria-describedby=\"remarks\" placeholder=\"remarks\">\n      </div>\n      <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-primary\">save</button>\n    </form>\n  </div>\n  <div class=\"info-bar\">\n    <app-info-bar></app-info-bar>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/casegen-edit/casegen-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/casegen-edit/casegen-edit.component.ts ***!
  \********************************************************/
/*! exports provided: CasegenEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasegenEditComponent", function() { return CasegenEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _casegen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../casegen.service */ "./src/app/casegen.service.ts");






var CasegenEditComponent = /** @class */ (function () {
    function CasegenEditComponent(route, router, categoryService, casegenService, store) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.categoryService = categoryService;
        this.casegenService = casegenService;
        this.store = store;
        this.questID = 0;
        this.casegens$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('casegens'));
        this.casegenRequest = {
            quest_id: null,
            casegen_id: null,
            message: "",
            rule: "",
            category_id: 0,
            subcategory: "",
            claimant: "",
            severity: 0,
            remarks: "",
        };
        this.emptyCasegenOptions = {
            option1: "",
            quest1: 0,
            option2: "",
            quest2: 0,
            option3: "",
            quest3: 0,
            option4: "",
            quest4: 0,
            option5: "",
            quest5: 0,
            option6: "",
            quest6: 0,
        };
        this.casegenOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.emptyCasegenOptions);
        this.categories$ = this.categoryService.getCategories();
        router.events.subscribe(function (val) {
            _this.updateForm();
        });
    }
    CasegenEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.casegens$.subscribe(function (casegens) {
            _this.casegens = casegens;
            _this.updateForm();
        });
    };
    CasegenEditComponent.prototype.updateForm = function () {
        var _this = this;
        this.casegenOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.emptyCasegenOptions);
        if (this.route.snapshot.paramMap.get('id')) {
            this.questID = +this.route.snapshot.paramMap.get('id');
        }
        if (this.casegens) {
            this.casegen = this.casegens.filter(function (data) { return +data.quest_id === +_this.questID; })[0];
            if (this.casegen) {
                this.casegenRequest.quest_id = this.questID;
                this.casegenRequest.casegen_id = this.casegen.id;
                this.casegenRequest.message = this.casegen.quest.message;
                this.casegenRequest.category_id = this.casegen.report_category_id;
                this.casegenRequest.subcategory = this.casegen.subcategory;
                this.casegenRequest.claimant = this.casegen.claimant;
                this.casegenRequest.severity = this.casegen.severity;
                this.casegenRequest.remarks = this.casegen.remarks;
                var per_rule = this.casegen.quest.rule.split(",");
                var count = 0;
                for (var _i = 0, per_rule_1 = per_rule; _i < per_rule_1.length; _i++) {
                    var rule = per_rule_1[_i];
                    if (count === 0) {
                        var data = rule.split(":");
                        this.casegenOptions.option1 = data[0];
                        this.casegenOptions.quest1 = +data[1];
                    }
                    if (count === 1) {
                        var data = rule.split(":");
                        this.casegenOptions.option2 = data[0];
                        this.casegenOptions.quest2 = +data[1];
                    }
                    if (count === 2) {
                        var data = rule.split(":");
                        this.casegenOptions.option3 = data[0];
                        this.casegenOptions.quest3 = +data[1];
                    }
                    if (count === 3) {
                        var data = rule.split(":");
                        this.casegenOptions.option4 = data[0];
                        this.casegenOptions.quest4 = +data[1];
                    }
                    if (count === 4) {
                        var data = rule.split(":");
                        this.casegenOptions.option5 = data[0];
                        this.casegenOptions.quest5 = +data[1];
                    }
                    if (count === 5) {
                        var data = rule.split(":");
                        this.casegenOptions.option6 = data[0];
                        this.casegenOptions.quest6 = +data[1];
                    }
                    count++;
                }
            }
        }
    };
    CasegenEditComponent.prototype.submit = function () {
        var _this = this;
        //convert options
        var rule = "";
        if (this.casegenOptions.option1 === "" || this.casegenOptions.quest1 === 0) {
            alert("User should have an option. Please fix first options.");
        }
        else {
            if (this.casegenOptions.option1 !== "" && this.casegenOptions.quest1 !== 0) {
                rule = this.casegenOptions.option1 + ":" + this.casegenOptions.quest1;
            }
            if (this.casegenOptions.option2 !== "" && this.casegenOptions.quest2 !== 0) {
                rule = rule + "," + this.casegenOptions.option2 + ":" + this.casegenOptions.quest2;
            }
            if (this.casegenOptions.option3 !== "" && this.casegenOptions.quest3 !== 0) {
                rule = rule + "," + this.casegenOptions.option3 + ":" + this.casegenOptions.quest3;
            }
            if (this.casegenOptions.option4 !== "" && this.casegenOptions.quest4 !== 0) {
                rule = rule + "," + this.casegenOptions.option4 + ":" + this.casegenOptions.quest4;
            }
            if (this.casegenOptions.option5 !== "" && this.casegenOptions.quest5 !== 0) {
                rule = rule + "," + this.casegenOptions.option5 + ":" + this.casegenOptions.quest5;
            }
            if (this.casegenOptions.option6 !== "" && this.casegenOptions.quest6 !== 0) {
                rule = rule + "," + this.casegenOptions.option6 + ":" + this.casegenOptions.quest6;
            }
            this.casegenRequest.rule = rule;
            this.casegenService.saveCasegen(this.casegenRequest).subscribe(function () {
                _this.casegenService.getCasegen();
                alert("Casegen updated");
            });
        }
    };
    CasegenEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-casegen-edit',
            template: __webpack_require__(/*! ./casegen-edit.component.html */ "./src/app/casegen-edit/casegen-edit.component.html"),
            styles: [__webpack_require__(/*! ./casegen-edit.component.css */ "./src/app/casegen-edit/casegen-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _casegen_service__WEBPACK_IMPORTED_MODULE_5__["CasegenService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CasegenEditComponent);
    return CasegenEditComponent;
}());



/***/ }),

/***/ "./src/app/casegen.service.ts":
/*!************************************!*\
  !*** ./src/app/casegen.service.ts ***!
  \************************************/
/*! exports provided: CasegenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasegenService", function() { return CasegenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _reducers_casegens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/casegens */ "./src/app/reducers/casegens.ts");






var CasegenService = /** @class */ (function () {
    function CasegenService(http, store) {
        this.http = http;
        this.store = store;
    }
    CasegenService.prototype.getCasegen = function () {
        var _this = this;
        var url = 'api/casegen';
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url).subscribe(function (data) {
            _this.store.dispatch(Object(_reducers_casegens__WEBPACK_IMPORTED_MODULE_5__["setCasegens"])({
                data: data,
            }));
        });
    };
    CasegenService.prototype.saveCasegen = function (casegen) {
        var url = 'api/casegen';
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, casegen);
    };
    CasegenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], CasegenService);
    return CasegenService;
}());



/***/ }),

/***/ "./src/app/category-keyword.service.ts":
/*!*********************************************!*\
  !*** ./src/app/category-keyword.service.ts ***!
  \*********************************************/
/*! exports provided: GQL, Server, CategoryKeywordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GQL", function() { return GQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryKeywordService", function() { return CategoryKeywordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _reducers_category_keyword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/category_keyword */ "./src/app/reducers/category_keyword.ts");






var GQL = /** @class */ (function () {
    function GQL() {
    }
    return GQL;
}());

var Server = /** @class */ (function () {
    function Server() {
    }
    return Server;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
};
var CategoryKeywordService = /** @class */ (function () {
    function CategoryKeywordService(http, store) {
        this.http = http;
        this.store = store;
    }
    CategoryKeywordService.prototype.getByCategory = function (categoryId) {
        var _this = this;
        var url = 'graphql';
        var gql = { query: "\n      query category_keyword {\n        category_keyword(category_id: \"" + categoryId + "\") {\n            id\n            category_id\n            keyword\n            created_at\n            updated_at\n        }\n      }\n    " };
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions).subscribe(function (server) {
            _this.store.dispatch(Object(_reducers_category_keyword__WEBPACK_IMPORTED_MODULE_5__["setData"])({
                data: server.data.category_keyword,
            }));
        });
    };
    CategoryKeywordService.prototype.save = function (categoryId, categoryKeyword) {
        var url = 'graphql';
        var gql = { query: "\n    mutation category_keyword {\n      category_keyword(category_id: \"" + categoryId + "\" ,keyword: \"" + categoryKeyword + "\") {\n        id\n        category_id\n        keyword\n        created_at\n        updated_at\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions);
    };
    CategoryKeywordService.prototype.delete = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      mutation category_keyword {\n        category_keyword(id:\"" + id + "\", deleted_at: \"" + new Date().toISOString().slice(0, 10) + "\") {\n          id\n          category_id\n          keyword\n          created_at\n          updated_at\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions);
    };
    CategoryKeywordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], CategoryKeywordService);
    return CategoryKeywordService;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: GQL, Server, CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GQL", function() { return GQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _reducers_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/categories */ "./src/app/reducers/categories.ts");






var GQL = /** @class */ (function () {
    function GQL() {
    }
    return GQL;
}());

var Server = /** @class */ (function () {
    function Server() {
    }
    return Server;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
};
var CategoryService = /** @class */ (function () {
    function CategoryService(http, store) {
        this.http = http;
        this.store = store;
    }
    CategoryService.prototype.getCategories = function () {
        var url = 'api/category';
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url);
    };
    CategoryService.prototype.getAll = function () {
        var _this = this;
        var url = 'graphql';
        var gql = { query: "\n      query category {\n        report_category {\n            id\n            name\n            created_at\n            updated_at\n        }\n      }\n    " };
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions).subscribe(function (server) {
            _this.store.dispatch(Object(_reducers_categories__WEBPACK_IMPORTED_MODULE_5__["setCategories"])({
                data: server.data.report_category,
            }));
        });
    };
    CategoryService.prototype.getOne = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      query report_category {\n        report_category(id: \"" + id + "\") {\n            id\n            name\n            created_at\n            updated_at\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions);
    };
    CategoryService.prototype.save = function (category) {
        var url = 'graphql';
        var gql = { query: "\n      mutation category {\n        report_category(name: \"" + category + "\") {\n            id\n            name\n            created_at\n            updated_at\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions);
    };
    CategoryService.prototype.delete = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      mutation category {\n        report_category(id:\"" + id + "\", deleted_at: \"" + new Date().toISOString().slice(0, 10) + "\") {\n            id\n            name\n            created_at\n            updated_at\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions);
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label>Add new Category</label>\n    <input [(ngModel)]=\"category\" name=\"category\" type=\"text\" class=\"form-control\" placeholder=\"Category\">\n  </div>\n  <button (click)=\"submit()\" type=\"sent\" class=\"btn btn-primary\">Add</button>\n</form>\n\n<h2>Categories</h2>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Category</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr  *ngFor=\"let category of categories$ | async\">\n      <td>\n        <a routerLink=\"/category/{{ category.id }}\">\n          {{category.name}}\n        </a>\n      </td>\n      <td></td>\n      <td>\n        <a routerLink=\"/categories\" (click)=\"delete(category.id)\">\n          delete\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");




var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, store) {
        this.categoryService = categoryService;
        this.store = store;
        this.categories$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('categories'));
        this.category = "";
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.categoryService.getAll();
    };
    CategoryComponent.prototype.submit = function () {
        var _this = this;
        this.categoryService.save(this.category).subscribe(function () {
            _this.ngOnInit();
            _this.category = "";
            alert("Category Saved.");
        });
    };
    CategoryComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm("are you sure you want to delete?")) {
            this.categoryService.delete(id).subscribe(function () {
                _this.ngOnInit();
                alert("Report deleted.");
            });
        }
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/catkeyword/catkeyword.component.css":
/*!*****************************************************!*\
  !*** ./src/app/catkeyword/catkeyword.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGtleXdvcmQvY2F0a2V5d29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/catkeyword/catkeyword.component.html":
/*!******************************************************!*\
  !*** ./src/app/catkeyword/catkeyword.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label *ngIf=\"this.category as category\">Add new Keyword for {{(category.name)}}</label>\n    <input [(ngModel)]=\"keywordInput\" name=\"keywordInput\" type=\"text\" class=\"form-control\" placeholder=\"Keyword\">\n  </div>\n  <button (click)=\"submit()\" type=\"sent\" class=\"btn btn-primary\">Add</button>\n</form>\n\n<h2>Keywords</h2>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Keyword</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr  *ngFor=\"let keyword of keywords$ | async\">\n      <td>{{keyword.keyword}}</td>\n      <td><!--[Edit Soon]--></td>\n      <td>\n        <button mat-raised-button \n          color=\"accent\"\n          (click)=\"delete(keyword.id)\">\n          Delete\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/catkeyword/catkeyword.component.ts":
/*!****************************************************!*\
  !*** ./src/app/catkeyword/catkeyword.component.ts ***!
  \****************************************************/
/*! exports provided: CatkeywordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatkeywordComponent", function() { return CatkeywordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _category_keyword_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category-keyword.service */ "./src/app/category-keyword.service.ts");






var CatkeywordComponent = /** @class */ (function () {
    function CatkeywordComponent(route, categoryKeywordService, categoryService, store) {
        this.route = route;
        this.categoryKeywordService = categoryKeywordService;
        this.categoryService = categoryService;
        this.store = store;
        this.keywords$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('categoryKeywords'));
        this.keywordInput = "";
    }
    CatkeywordComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.paramMap.get('id')) {
            this.categoryId = +this.route.snapshot.paramMap.get('id');
        }
        this.categoryService.getOne(this.categoryId).subscribe(function (data) {
            _this.category = data.data.report_category[0];
        });
        this.categoryKeywordService.getByCategory(this.categoryId);
    };
    CatkeywordComponent.prototype.submit = function () {
        var _this = this;
        this.categoryKeywordService.save(this.categoryId, this.keywordInput).subscribe(function () {
            _this.categoryKeywordService.getByCategory(_this.categoryId);
            _this.keywordInput = "";
            alert("Keyword Saved.");
        });
    };
    CatkeywordComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm("are you sure you want to delete?")) {
            this.categoryKeywordService.delete(id).subscribe(function () {
                _this.ngOnInit();
                alert("Report deleted.");
            });
        }
    };
    CatkeywordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catkeyword',
            template: __webpack_require__(/*! ./catkeyword.component.html */ "./src/app/catkeyword/catkeyword.component.html"),
            styles: [__webpack_require__(/*! ./catkeyword.component.css */ "./src/app/catkeyword/catkeyword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _category_keyword_service__WEBPACK_IMPORTED_MODULE_5__["CategoryKeywordService"],
            _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CatkeywordComponent);
    return CatkeywordComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Show dashboard when data is active.\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/categories */ "./src/app/reducers/categories.ts");




var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent(store) {
        this.store = store;
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        var categories = [
            {
                id: 0,
                name: "name",
                created_at: "",
                updated_at: "",
            },
            {
                id: 1,
                name: "categori 2",
                created_at: "",
                updated_at: "",
            }
        ];
        this.store.dispatch(Object(_reducers_categories__WEBPACK_IMPORTED_MODULE_3__["setCategories"])({
            data: categories,
        }));
    };
    DashboardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-page',
            template: __webpack_require__(/*! ./dashboard-page.component.html */ "./src/app/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-page.component.css */ "./src/app/dashboard-page/dashboard-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "./src/app/fb-user/fb-user.component.css":
/*!***********************************************!*\
  !*** ./src/app/fb-user/fb-user.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\n.profile-pic {\n    max-width: 100px;\n    max-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmItdXNlci9mYi11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZmItdXNlci9mYi11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fb-user/fb-user.component.html":
/*!************************************************!*\
  !*** ./src/app/fb-user/fb-user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Facebook Users</h1>\n<table mat-table [dataSource]=\"userTable\" matSort class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"img\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Image. </th>\n    <td mat-cell *matCellDef=\"let user\">\n      <div *ngIf=\"(user.img !== null) && (user.img !== 'failed')\">\n        <img class=\"profile-pic\" [src]=\"user.img\">\n      </div>\n      <div *ngIf=\"user.img === 'failed'\">\n        <img class=\"profile-pic\" src=\"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png\">\n      </div>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name. </th>\n    <td mat-cell *matCellDef=\"let user\">\n      <div *ngIf=\"user.name !== null\">\n          {{user.name}} \n      </div>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"block\">\n    <th mat-header-cell *matHeaderCellDef> Block. </th>\n    <td mat-cell *matCellDef=\"let user\">\n      <button *ngIf=\"user.fb_quest_id !== 10\" \n              mat-raised-button color=\"primary\"\n              (click)=\"block(user.id)\">\n        Block\n      </button>\n      <button *ngIf=\"user.fb_quest_id === 10\"\n              mat-raised-button color=\"warn\"\n              (click)=\"unblock(user.id)\">\n        Un-block\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"tableHeader\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: tableHeader;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/fb-user/fb-user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fb-user/fb-user.component.ts ***!
  \**********************************************/
/*! exports provided: FbUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbUserComponent", function() { return FbUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fbuser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fbuser.service */ "./src/app/fbuser.service.ts");





var FbUserComponent = /** @class */ (function () {
    function FbUserComponent(fbuserService, store) {
        this.fbuserService = fbuserService;
        this.store = store;
        this.fbusers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('fbusers'));
        this.tableHeader = ['img', 'name', 'block'];
    }
    FbUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbuserService.getAll();
        this.fbusers$.subscribe(function (user) {
            _this.userTable = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](user.map(function (user) {
                return {
                    id: user.id,
                    name: user.fb_name,
                    img: user.img,
                    fb_quest_id: +user.fb_quest_id,
                };
            }));
            _this.userTable.sort = _this.sort;
        });
    };
    FbUserComponent.prototype.block = function (id) {
        var _this = this;
        console.log("id", id);
        this.fbuserService.block(id).subscribe(function () {
            _this.fbuserService.getAll();
            alert("User Blocked.");
        });
    };
    FbUserComponent.prototype.unblock = function (id) {
        var _this = this;
        this.fbuserService.unblock(id).subscribe(function () {
            _this.fbuserService.getAll();
            alert("User Restored.");
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FbUserComponent.prototype, "sort", void 0);
    FbUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fb-user',
            template: __webpack_require__(/*! ./fb-user.component.html */ "./src/app/fb-user/fb-user.component.html"),
            styles: [__webpack_require__(/*! ./fb-user.component.css */ "./src/app/fb-user/fb-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fbuser_service__WEBPACK_IMPORTED_MODULE_4__["FbuserService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], FbUserComponent);
    return FbUserComponent;
}());



/***/ }),

/***/ "./src/app/fbuser.service.ts":
/*!***********************************!*\
  !*** ./src/app/fbuser.service.ts ***!
  \***********************************/
/*! exports provided: Server, FbuserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbuserService", function() { return FbuserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _reducers_fbusers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/fbusers */ "./src/app/reducers/fbusers.ts");






var Server = /** @class */ (function () {
    function Server() {
    }
    return Server;
}());

var FbuserService = /** @class */ (function () {
    function FbuserService(http, store) {
        this.http = http;
        this.store = store;
    }
    FbuserService.prototype.getAll = function () {
        var _this = this;
        var url = 'graphql';
        var gql = { query: "\n      query fbuser {\n        fbuser {\n          id\n          fb_name\n          fb_id\n          fb_user_type_id\n          fb_person_id\n          fb_quest_id\n          fb_variable\n          img\n        }\n      }\n    " };
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).subscribe(function (server) {
            _this.store.dispatch(Object(_reducers_fbusers__WEBPACK_IMPORTED_MODULE_5__["setFbusers"])({
                data: server.data.fbuser,
            }));
        });
    };
    FbuserService.prototype.block = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      mutation fbuser {\n        fbuser(id:\"" + id + "\", fb_quest_id: \"10\") {\n            id\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    FbuserService.prototype.unblock = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      mutation fbuser {\n        fbuser(id:\"" + id + "\", fb_quest_id: \"5\") {\n            id\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    FbuserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], FbuserService);
    return FbuserService;
}());



/***/ }),

/***/ "./src/app/info-bar/info-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/info-bar/info-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\n.table-id {\n    padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1iYXIvaW5mby1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2luZm8tYmFyL2luZm8tYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZS1pZCB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/info-bar/info-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/info-bar/info-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"casegens$ | async\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"quest id\">\n      <th mat-header-cell *matHeaderCellDef class=\"table-id\"> ID. </th>\n      <td class=\"table-id\" mat-cell *matCellDef=\"let element\"> {{element.quest_id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"message\">\n      <th mat-header-cell *matHeaderCellDef> Message. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.quest.message}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> Edit. </th>\n      <td mat-cell *matCellDef=\"let element\"> \n          <a routerLink=\"/casegen/edit/{{ element.quest_id }}\">\n            <i class=\"material-icons\">\n              edit\n            </i>\n          </a> \n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>"

/***/ }),

/***/ "./src/app/info-bar/info-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/info-bar/info-bar.component.ts ***!
  \************************************************/
/*! exports provided: InfoBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBarComponent", function() { return InfoBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _casegen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../casegen.service */ "./src/app/casegen.service.ts");




var InfoBarComponent = /** @class */ (function () {
    function InfoBarComponent(casegenService, store) {
        this.casegenService = casegenService;
        this.store = store;
        this.displayedColumns = ['quest id', 'message', 'edit',];
        this.casegens$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('casegens'));
    }
    InfoBarComponent.prototype.ngOnInit = function () {
        this.casegenService.getCasegen();
    };
    InfoBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-bar',
            template: __webpack_require__(/*! ./info-bar.component.html */ "./src/app/info-bar/info-bar.component.html"),
            styles: [__webpack_require__(/*! ./info-bar.component.css */ "./src/app/info-bar/info-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_casegen_service__WEBPACK_IMPORTED_MODULE_3__["CasegenService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], InfoBarComponent);
    return InfoBarComponent;
}());



/***/ }),

/***/ "./src/app/reducers/casegens.ts":
/*!**************************************!*\
  !*** ./src/app/reducers/casegens.ts ***!
  \**************************************/
/*! exports provided: setCasegens, InitialState, featureReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCasegens", function() { return setCasegens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReducer", function() { return featureReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


/**
 * ACTIONS.
 **/
var setCasegens = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Casegens] Set Casegens', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * INITIAL VALUE.
 **/
var InitialState = [];
/**
 * REDUCER.
 **/
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(InitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(setCasegens, function (state, _a) {
    var data = _a.data;
    return state = data;
}));
/**
 * EXPORT REDUCER.
 **/
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/categories.ts":
/*!****************************************!*\
  !*** ./src/app/reducers/categories.ts ***!
  \****************************************/
/*! exports provided: setCategories, InitialState, featureReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCategories", function() { return setCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReducer", function() { return featureReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


/**
 * ACTIONS.
 **/
var setCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Categories] Set Categories', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * INITIAL VALUE.
 **/
var InitialState = [];
/**
 * REDUCER.
 **/
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(InitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(setCategories, function (state, _a) {
    var data = _a.data;
    return state = data;
}));
/**
 * EXPORT REDUCER.
 **/
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/category_keyword.ts":
/*!**********************************************!*\
  !*** ./src/app/reducers/category_keyword.ts ***!
  \**********************************************/
/*! exports provided: setData, InitialState, featureReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReducer", function() { return featureReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


/**
 * ACTIONS.
 **/
var setData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category Keywords] Set Category Keywords', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * INITIAL VALUE.
 **/
var InitialState = [];
/**
 * REDUCER.
 **/
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(InitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(setData, function (state, _a) {
    var data = _a.data;
    return state = data;
}));
/**
 * EXPORT REDUCER.
 **/
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/fbusers.ts":
/*!*************************************!*\
  !*** ./src/app/reducers/fbusers.ts ***!
  \*************************************/
/*! exports provided: setFbusers, InitialState, featureReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFbusers", function() { return setFbusers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReducer", function() { return featureReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


/**
 * ACTIONS.
 **/
var setFbusers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fbusers] Set Fbusers', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * INITIAL VALUE.
 **/
var InitialState = [];
/**
 * REDUCER.
 **/
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(InitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(setFbusers, function (state, _a) {
    var data = _a.data;
    return state = data;
}));
/**
 * EXPORT REDUCER.
 **/
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/hitkeys.ts":
/*!*************************************!*\
  !*** ./src/app/reducers/hitkeys.ts ***!
  \*************************************/
/*! exports provided: setHitkeys, InitialState, featureReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHitkeys", function() { return setHitkeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReducer", function() { return featureReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


/**
 * ACTIONS.
 **/
var setHitkeys = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Hitkeys] Set Hitkeys', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * INITIAL VALUE.
 **/
var InitialState = [];
/**
 * REDUCER.
 **/
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(InitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(setHitkeys, function (state, _a) {
    var data = _a.data;
    return state = data;
}));
/**
 * EXPORT REDUCER.
 **/
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _casegens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./casegens */ "./src/app/reducers/casegens.ts");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./src/app/reducers/categories.ts");
/* harmony import */ var _category_keyword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category_keyword */ "./src/app/reducers/category_keyword.ts");
/* harmony import */ var _reports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports */ "./src/app/reducers/reports.ts");
/* harmony import */ var _hitkeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hitkeys */ "./src/app/reducers/hitkeys.ts");
/* harmony import */ var _uniquechat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uniquechat */ "./src/app/reducers/uniquechat.ts");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users */ "./src/app/reducers/users.ts");
/* harmony import */ var _fbusers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fbusers */ "./src/app/reducers/fbusers.ts");









var reducers = {
    casegens: _casegens__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    categories: _categories__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    categoryKeywords: _category_keyword__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    reports: _reports__WEBPACK_IMPORTED_MODULE_4__["reducer"],
    hitkeys: _hitkeys__WEBPACK_IMPORTED_MODULE_5__["reducer"],
    uniquechat: _uniquechat__WEBPACK_IMPORTED_MODULE_6__["reducer"],
    users: _users__WEBPACK_IMPORTED_MODULE_7__["reducer"],
    fbusers: _fbusers__WEBPACK_IMPORTED_MODULE_8__["reducer"],
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/reducers/reports.ts":
/*!*************************************!*\
  !*** ./src/app/reducers/reports.ts ***!
  \*************************************/
/*! exports provided: setReports, InitialState, featureReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReports", function() { return setReports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReducer", function() { return featureReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


/**
 * ACTIONS.
 **/
var setReports = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Reports] Set Report', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * INITIAL VALUE.
 **/
var InitialState = [];
/**
 * REDUCER.
 **/
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(InitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(setReports, function (state, _a) {
    var data = _a.data;
    return state = data;
}));
/**
 * EXPORT REDUCER.
 **/
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/uniquechat.ts":
/*!****************************************!*\
  !*** ./src/app/reducers/uniquechat.ts ***!
  \****************************************/
/*! exports provided: setUniquechat, InitialState, featureReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUniquechat", function() { return setUniquechat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReducer", function() { return featureReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


/**
 * ACTIONS.
 **/
var setUniquechat = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uniquechat] Set Uniquechat', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * INITIAL VALUE.
 **/
var InitialState = {
    id: 0,
    message: "",
    fb_id: 0,
    is_closed: false,
};
/**
 * REDUCER.
 **/
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(InitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(setUniquechat, function (state, _a) {
    var data = _a.data;
    return state = data;
}));
/**
 * EXPORT REDUCER.
 **/
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/users.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/users.ts ***!
  \***********************************/
/*! exports provided: setUsers, InitialState, featureReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsers", function() { return setUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReducer", function() { return featureReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


/**
 * ACTIONS.
 **/
var setUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Set Users', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * INITIAL VALUE.
 **/
var InitialState = [];
/**
 * REDUCER.
 **/
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(InitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(setUsers, function (state, _a) {
    var data = _a.data;
    return state = data;
}));
/**
 * EXPORT REDUCER.
 **/
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/replies-add/replies-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/replies-add/replies-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcGxpZXMtYWRkL3JlcGxpZXMtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/replies-add/replies-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/replies-add/replies-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<p *ngIf=\"!(unique$ | async)\"> No more uknown message from users. </p>\n<form *ngIf=\"(unique$ | async) as unique\">\n  <div class=\"form-group\">\n    <label>User Message: {{unique.message}}</label>\n    <input [(ngModel)]=\"reply.reply\" name=\"reply\" type=\"text\" class=\"form-control\" placeholder=\"reply\">\n  </div>\n  <button (click)=\"submit()\" type=\"sent\" class=\"btn btn-primary\">sent</button>\n  <p>\n    NOTE: Typing number on reply means redirect to a quest.\n  </p>\n</form>\n"

/***/ }),

/***/ "./src/app/replies-add/replies-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/replies-add/replies-add.component.ts ***!
  \******************************************************/
/*! exports provided: RepliesAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepliesAddComponent", function() { return RepliesAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _uniquechat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uniquechat.service */ "./src/app/uniquechat.service.ts");
/* harmony import */ var _reply_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reply.service */ "./src/app/reply.service.ts");





var RepliesAddComponent = /** @class */ (function () {
    function RepliesAddComponent(UniqueChatService, replyService, store) {
        this.UniqueChatService = UniqueChatService;
        this.replyService = replyService;
        this.store = store;
        this.unique$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('uniquechat'));
        this.reply = {
            fb_id: 0,
            message: "",
            reply: "",
            unique_id: 0,
        };
    }
    RepliesAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UniqueChatService.getUnique();
        this.unique$.subscribe(function (data) {
            _this.reply.fb_id = data.fb_id;
            _this.reply.message = data.message;
            _this.reply.unique_id = data.id;
        });
    };
    RepliesAddComponent.prototype.submit = function () {
        var _this = this;
        this.replyService.saveReply(this.reply).subscribe(function () {
            _this.UniqueChatService.getUnique();
            _this.reply.reply = "";
            alert("Reply Saved.");
        });
    };
    RepliesAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-replies-add',
            template: __webpack_require__(/*! ./replies-add.component.html */ "./src/app/replies-add/replies-add.component.html"),
            styles: [__webpack_require__(/*! ./replies-add.component.css */ "./src/app/replies-add/replies-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uniquechat_service__WEBPACK_IMPORTED_MODULE_3__["UniqueChatService"],
            _reply_service__WEBPACK_IMPORTED_MODULE_4__["ReplyService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RepliesAddComponent);
    return RepliesAddComponent;
}());



/***/ }),

/***/ "./src/app/replies-page/replies-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/replies-page/replies-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.replies {\n    width: 48%;\n}\n\n.info-bar {\n    width: 48%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwbGllcy1wYWdlL3JlcGxpZXMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yZXBsaWVzLXBhZ2UvcmVwbGllcy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmVwbGllcyB7XG4gICAgd2lkdGg6IDQ4JTtcbn1cblxuLmluZm8tYmFyIHtcbiAgICB3aWR0aDogNDglO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/replies-page/replies-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/replies-page/replies-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"replies\">\n    <app-replies-add></app-replies-add>\n  </div>\n  <div class=\"info-bar\">\n    <app-info-bar></app-info-bar>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/replies-page/replies-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/replies-page/replies-page.component.ts ***!
  \********************************************************/
/*! exports provided: RepliesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepliesPageComponent", function() { return RepliesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RepliesPageComponent = /** @class */ (function () {
    function RepliesPageComponent() {
    }
    RepliesPageComponent.prototype.ngOnInit = function () {
    };
    RepliesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-replies-page',
            template: __webpack_require__(/*! ./replies-page.component.html */ "./src/app/replies-page/replies-page.component.html"),
            styles: [__webpack_require__(/*! ./replies-page.component.css */ "./src/app/replies-page/replies-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RepliesPageComponent);
    return RepliesPageComponent;
}());



/***/ }),

/***/ "./src/app/reply.service.ts":
/*!**********************************!*\
  !*** ./src/app/reply.service.ts ***!
  \**********************************/
/*! exports provided: ReplyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyService", function() { return ReplyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config */ "./src/config.ts");




var ReplyService = /** @class */ (function () {
    function ReplyService(http) {
        this.http = http;
    }
    ReplyService.prototype.saveReply = function (reply) {
        var url = 'api/reply';
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["mainUrl"] + url, reply);
    };
    ReplyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReplyService);
    return ReplyService;
}());



/***/ }),

/***/ "./src/app/report-add/report-add.component.css":
/*!*****************************************************!*\
  !*** ./src/app/report-add/report-add.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC1hZGQvcmVwb3J0LWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report-add/report-add.component.html":
/*!******************************************************!*\
  !*** ./src/app/report-add/report-add.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Add Report\n</h1>\n<form>\n  <div class=\"form-group\">\n    <label>User/Applicant</label>\n    <select [(ngModel)]=\"newReport.fb_id\" name=\"fb_id\" class=\"custom-select\">\n      <option selected value=\"0\">Select User/Applicant</option>\n      <option *ngFor=\"let fbuser of fbusers$ | async\"  value=\"{{fbuser.fb_id}}\">{{fbuser.fb_name}}</option>\n    </select>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <div class=\"form-group\">\n        <label>Report Category</label>\n        <select [(ngModel)]=\"newReport.report_category_id\" name=\"category_id\" class=\"custom-select\">\n          <option selected value=\"0\">Select report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <label>Severity (1 to 9)</label>\n        <input [(ngModel)]=\"newReport.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"newReport.report_category_id !== 0\">\n    <div class=\"col-8\">\n      <div class=\"form-group\" >\n        <label>Other Category</label>\n        <select [(ngModel)]=\"otherCategory1.id\" name=\"other-category-1\" class=\"custom-select\">\n          <option selected value=\"0\">Select other report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <label>Severity (1 to 9)</label>\n        <input [(ngModel)]=\"otherCategory1.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity1\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"otherCategory1.id !== 0\">\n    <div class=\"col-8\">\n      <div class=\"form-group\">\n        <select [(ngModel)]=\"otherCategory2.id\" name=\"other-category-2\" class=\"custom-select\">\n          <option selected value=\"0\">Select other report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <input [(ngModel)]=\"otherCategory2.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity2\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"otherCategory2.id !== 0\">\n    <div class=\"col-8\">\n      <div class=\"form-group\">\n        <select [(ngModel)]=\"otherCategory3.id\" name=\"other-category-3\" class=\"custom-select\">\n          <option selected value=\"0\">Select other report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <input [(ngModel)]=\"otherCategory3.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity3\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"otherCategory3.id !== 0\">\n    <div class=\"col-8\">\n      <div class=\"form-group\">\n        <select [(ngModel)]=\"otherCategory4.id\" name=\"other-category-4\" class=\"custom-select\">\n          <option selected value=\"0\">Select other report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <input [(ngModel)]=\"otherCategory4.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity4\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Sub-category</label>\n    <input [(ngModel)]=\"newReport.sub_category\"\n           type=\"text\"\n           class=\"form-control\"\n           name=\"sub_category\"\n           aria-describedby=\"sub_category\"\n           placeholder=\"sub category\">\n  </div>\n  <div class=\"form-group\">\n    <label>Claimant</label>\n    <input [(ngModel)]=\"newReport.claimant\"\n           type=\"text\"\n           class=\"form-control\"\n           name=\"claimant\"\n           aria-describedby=\"claimant\"\n           placeholder=\"Claimant\">\n  </div>\n  <div class=\"form-group\">\n    <label>Remarks</label>\n    <input [(ngModel)]=\"newReport.remarks\"\n           type=\"text\"\n           class=\"form-control\"\n           name=\"remarks\"\n           aria-describedby=\"remarks\"\n           placeholder=\"Remarks\">\n  </div>\n  <button mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\n</form>\n  "

/***/ }),

/***/ "./src/app/report-add/report-add.component.ts":
/*!****************************************************!*\
  !*** ./src/app/report-add/report-add.component.ts ***!
  \****************************************************/
/*! exports provided: OtherCategory, ReportAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCategory", function() { return OtherCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportAddComponent", function() { return ReportAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _fbuser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fbuser.service */ "./src/app/fbuser.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report.service */ "./src/app/report.service.ts");
/* harmony import */ var _report_severity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../report-severity.service */ "./src/app/report-severity.service.ts");








var OtherCategory = /** @class */ (function () {
    function OtherCategory() {
    }
    return OtherCategory;
}());

var ReportAddComponent = /** @class */ (function () {
    function ReportAddComponent(reportService, categoryService, reportSeverityService, fbuserService, router, store) {
        this.reportService = reportService;
        this.categoryService = categoryService;
        this.reportSeverityService = reportSeverityService;
        this.fbuserService = fbuserService;
        this.router = router;
        this.store = store;
        this.categories$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('categories'));
        this.fbusers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('fbusers'));
        this.newReport = {
            fb_id: 0,
            report_category_id: 0,
            sub_category: "",
            claimant: "",
            severity: 1,
            remarks: "",
        };
        // Other categories.
        this.otherCategory1 = {
            id: 0,
            severity: 1,
        };
        this.otherCategory2 = {
            id: 0,
            severity: 1,
        };
        this.otherCategory3 = {
            id: 0,
            severity: 1,
        };
        this.otherCategory4 = {
            id: 0,
            severity: 1,
        };
    }
    ReportAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getAll();
        this.fbuserService.getAll();
        // object category.
        this.categories$.subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    ReportAddComponent.prototype.submit = function () {
        var _this = this;
        this.reportService.add(this.newReport).subscribe(function (result) {
            // Other category 1
            if (_this.otherCategory1.id !== 0) {
                var otherCategoryName1 = "";
                if (_this.categories.find(function (data) { return data.id === _this.otherCategory1.id; })) {
                    otherCategoryName1 = _this.categories.find(function (data) { return data.id === _this.otherCategory1.id; }).name;
                }
                var otherCategoryRequest1 = {
                    report_id: result.data.report.id,
                    category_id: _this.otherCategory1.id,
                    category_name: otherCategoryName1,
                    severity: _this.otherCategory1.severity,
                };
                _this.reportSeverityService.add(otherCategoryRequest1).subscribe(function (ret) {
                    console.log("ret1", ret);
                });
            }
            // Other category 2
            if (_this.otherCategory2.id !== 0) {
                var otherCategoryName2 = "";
                if (_this.categories.find(function (data) { return data.id === _this.otherCategory2.id; })) {
                    otherCategoryName2 = _this.categories.find(function (data) { return data.id === _this.otherCategory2.id; }).name;
                }
                var otherCategoryRequest2 = {
                    report_id: result.data.report.id,
                    category_id: _this.otherCategory2.id,
                    category_name: otherCategoryName2,
                    severity: _this.otherCategory2.severity,
                };
                _this.reportSeverityService.add(otherCategoryRequest2).subscribe(function (ret) {
                    console.log("ret2", ret);
                });
            }
            // Other category 3
            if (_this.otherCategory3.id !== 0) {
                var otherCategoryName3 = "";
                if (_this.categories.find(function (data) { return data.id === _this.otherCategory3.id; })) {
                    otherCategoryName3 = _this.categories.find(function (data) { return data.id === _this.otherCategory3.id; }).name;
                }
                var otherCategoryRequest3 = {
                    report_id: result.data.report.id,
                    category_id: _this.otherCategory3.id,
                    category_name: otherCategoryName3,
                    severity: _this.otherCategory3.severity,
                };
                _this.reportSeverityService.add(otherCategoryRequest3).subscribe(function (ret) {
                    console.log("ret3", ret);
                });
            }
            // Other category 4
            if (_this.otherCategory4.id !== 0) {
                var otherCategoryName4 = "";
                if (_this.categories.find(function (data) { return data.id === _this.otherCategory4.id; })) {
                    otherCategoryName4 = _this.categories.find(function (data) { return data.id === _this.otherCategory4.id; }).name;
                }
                var otherCategoryRequest4 = {
                    report_id: result.data.report.id,
                    category_id: _this.otherCategory4.id,
                    category_name: otherCategoryName4,
                    severity: _this.otherCategory4.severity,
                };
                _this.reportSeverityService.add(otherCategoryRequest4).subscribe(function (ret) {
                    console.log("ret4", ret);
                });
            }
            // Adding success.
            alert("Adding report success");
            _this.router.navigateByUrl('/reports');
        });
    };
    ReportAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-add',
            template: __webpack_require__(/*! ./report-add.component.html */ "./src/app/report-add/report-add.component.html"),
            styles: [__webpack_require__(/*! ./report-add.component.css */ "./src/app/report-add/report-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"],
            _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _report_severity_service__WEBPACK_IMPORTED_MODULE_7__["ReportSeverityService"],
            _fbuser_service__WEBPACK_IMPORTED_MODULE_5__["FbuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ReportAddComponent);
    return ReportAddComponent;
}());



/***/ }),

/***/ "./src/app/report-edit/report-edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/report-edit/report-edit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC1lZGl0L3JlcG9ydC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report-edit/report-edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/report-edit/report-edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Edit Report\n</h1>\n\n<form>\n  <div class=\"form-group\">\n    <label>User/Applicant</label>\n    <select [(ngModel)]=\"editReport.fb_id\" name=\"fb_id\" class=\"custom-select\">\n      <option selected value=\"0\">Select User/Applicant</option>\n      <option *ngFor=\"let fbuser of fbusers$ | async\"  value=\"{{fbuser.fb_id}}\">{{fbuser.fb_name}}</option>\n    </select>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <div class=\"form-group\">\n        <label>Report Category</label>\n        <select [(ngModel)]=\"editReport.report_category_id\" name=\"category_id\" class=\"custom-select\">\n          <option selected value=\"0\">Select report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <label>Severity (1 to 9)</label>\n        <input [(ngModel)]=\"editReport.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Other Categories</th>\n        <th scope=\"col\">Severity</th>\n        <th scope=\"col\">Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let severity of reportSeverity\">\n        <td>{{severity.category_name}}</td>\n        <td>{{severity.severity}}</td>\n        <td>\n          <button mat-icon-button color=\"accent\" (click)=\"deleteSeverity(severity.id)\">\n            <mat-icon>delete_forever</mat-icon>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row\" *ngIf=\"editReport.report_category_id !== 0\">\n    <div class=\"col-8\">\n      <div class=\"form-group\" >\n        <label>Other Category</label>\n        <select [(ngModel)]=\"otherCategory1.id\" name=\"other-category-1\" class=\"custom-select\">\n          <option selected value=\"0\">Select other report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <label>Severity (1 to 9)</label>\n        <input [(ngModel)]=\"otherCategory1.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity1\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"otherCategory1.id !== 0\">\n    <div class=\"col-8\">\n      <div class=\"form-group\">\n        <select [(ngModel)]=\"otherCategory2.id\" name=\"other-category-2\" class=\"custom-select\">\n          <option selected value=\"0\">Select other report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <input [(ngModel)]=\"otherCategory2.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity2\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"otherCategory2.id !== 0\">\n    <div class=\"col-8\">\n      <div class=\"form-group\">\n        <select [(ngModel)]=\"otherCategory3.id\" name=\"other-category-3\" class=\"custom-select\">\n          <option selected value=\"0\">Select other report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <input [(ngModel)]=\"otherCategory3.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity3\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"otherCategory3.id !== 0\">\n    <div class=\"col-8\">\n      <div class=\"form-group\">\n        <select [(ngModel)]=\"otherCategory4.id\" name=\"other-category-4\" class=\"custom-select\">\n          <option selected value=\"0\">Select other report category</option>\n          <option *ngFor=\"let category of categories$ | async\"  value=\"{{category.id}}\">{{category.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"form-group\">\n        <input [(ngModel)]=\"otherCategory4.severity\"\n               type=\"text\" \n               pattern=\"\\d*\"\n               maxlength=\"1\"\n               class=\"form-control\"\n               name=\"severity4\"\n               aria-describedby=\"severity\"\n               placeholder=\"Severity\">\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Sub-category</label>\n    <input [(ngModel)]=\"editReport.sub_category\"\n           type=\"text\"\n           class=\"form-control\"\n           name=\"sub_category\"\n           aria-describedby=\"sub_category\"\n           placeholder=\"sub category\">\n  </div>\n  <div class=\"form-group\">\n    <label>Claimant</label>\n    <input [(ngModel)]=\"editReport.claimant\"\n           type=\"text\"\n           class=\"form-control\"\n           name=\"claimant\"\n           aria-describedby=\"claimant\"\n           placeholder=\"Claimant\">\n  </div>\n  <div class=\"form-group\">\n    <label>Remarks</label>\n    <input [(ngModel)]=\"editReport.remarks\"\n           type=\"text\"\n           class=\"form-control\"\n           name=\"remarks\"\n           aria-describedby=\"remarks\"\n           placeholder=\"Remarks\">\n  </div>\n  <button mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\n</form>\n  "

/***/ }),

/***/ "./src/app/report-edit/report-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/report-edit/report-edit.component.ts ***!
  \******************************************************/
/*! exports provided: OtherCategory, ReportEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCategory", function() { return OtherCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportEditComponent", function() { return ReportEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _fbuser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fbuser.service */ "./src/app/fbuser.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report.service */ "./src/app/report.service.ts");
/* harmony import */ var _report_severity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../report-severity.service */ "./src/app/report-severity.service.ts");









var OtherCategory = /** @class */ (function () {
    function OtherCategory() {
    }
    return OtherCategory;
}());

var ReportEditComponent = /** @class */ (function () {
    function ReportEditComponent(route, reportService, categoryService, reportSeverityService, fbuserService, router, store) {
        this.route = route;
        this.reportService = reportService;
        this.categoryService = categoryService;
        this.reportSeverityService = reportSeverityService;
        this.fbuserService = fbuserService;
        this.router = router;
        this.store = store;
        this.reportID = 0;
        this.categories$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('categories'));
        this.fbusers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('fbusers'));
        this.editReport = {
            fb_id: 0,
            report_category_id: 0,
            sub_category: "",
            claimant: "",
            severity: 1,
            remarks: "",
        };
        // Other categories.
        this.otherCategory1 = {
            id: 0,
            severity: 1,
        };
        this.otherCategory2 = {
            id: 0,
            severity: 1,
        };
        this.otherCategory3 = {
            id: 0,
            severity: 1,
        };
        this.otherCategory4 = {
            id: 0,
            severity: 1,
        };
    }
    ReportEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportID = +this.route.snapshot.paramMap.get('id');
        // Get current report.
        this.reportService.one(this.reportID).subscribe(function (response) {
            _this.editReport = response.data.report;
        });
        this.categoryService.getAll();
        this.fbuserService.getAll();
        this.updateSeverity();
        // object category.
        this.categories$.subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    ReportEditComponent.prototype.updateSeverity = function () {
        var _this = this;
        this.reportSeverityService.getByReportId(this.reportID).subscribe(function (qlres) {
            _this.reportSeverity = qlres.data.report_severity;
        });
    };
    ReportEditComponent.prototype.submit = function () {
        var _this = this;
        this.reportService.edit(this.reportID, this.editReport).subscribe(function () {
            // Other category 1
            if (_this.otherCategory1.id !== 0) {
                var otherCategoryName1 = "";
                if (_this.categories.find(function (data) { return data.id === _this.otherCategory1.id; })) {
                    otherCategoryName1 = _this.categories.find(function (data) { return data.id === _this.otherCategory1.id; }).name;
                }
                var otherCategoryRequest1 = {
                    report_id: _this.reportID,
                    category_id: _this.otherCategory1.id,
                    category_name: otherCategoryName1,
                    severity: _this.otherCategory1.severity,
                };
                _this.reportSeverityService.add(otherCategoryRequest1).subscribe(function (ret) {
                    console.log("ret1", ret);
                });
            }
            // Other category 2
            if (_this.otherCategory2.id !== 0) {
                var otherCategoryName2 = "";
                if (_this.categories.find(function (data) { return data.id === _this.otherCategory2.id; })) {
                    otherCategoryName2 = _this.categories.find(function (data) { return data.id === _this.otherCategory2.id; }).name;
                }
                var otherCategoryRequest2 = {
                    report_id: _this.reportID,
                    category_id: _this.otherCategory2.id,
                    category_name: otherCategoryName2,
                    severity: _this.otherCategory2.severity,
                };
                _this.reportSeverityService.add(otherCategoryRequest2).subscribe(function (ret) {
                    console.log("ret2", ret);
                });
            }
            // Other category 3
            if (_this.otherCategory3.id !== 0) {
                var otherCategoryName3 = "";
                if (_this.categories.find(function (data) { return data.id === _this.otherCategory3.id; })) {
                    otherCategoryName3 = _this.categories.find(function (data) { return data.id === _this.otherCategory3.id; }).name;
                }
                var otherCategoryRequest3 = {
                    report_id: _this.reportID,
                    category_id: _this.otherCategory3.id,
                    category_name: otherCategoryName3,
                    severity: _this.otherCategory3.severity,
                };
                _this.reportSeverityService.add(otherCategoryRequest3).subscribe(function (ret) {
                    console.log("ret3", ret);
                });
            }
            // Other category 4
            if (_this.otherCategory4.id !== 0) {
                var otherCategoryName4 = "";
                if (_this.categories.find(function (data) { return data.id === _this.otherCategory4.id; })) {
                    otherCategoryName4 = _this.categories.find(function (data) { return data.id === _this.otherCategory4.id; }).name;
                }
                var otherCategoryRequest4 = {
                    report_id: _this.reportID,
                    category_id: _this.otherCategory4.id,
                    category_name: otherCategoryName4,
                    severity: _this.otherCategory4.severity,
                };
                _this.reportSeverityService.add(otherCategoryRequest4).subscribe(function (ret) {
                    console.log("ret4", ret);
                });
            }
            // Adding success.
            alert("Update report success");
            _this.router.navigateByUrl('/reports');
        });
    };
    ReportEditComponent.prototype.deleteSeverity = function (id) {
        var _this = this;
        if (confirm("Are you sure you wont to delete?")) {
            this.reportSeverityService.delete(id).subscribe(function () {
                console.log("delete success");
                _this.updateSeverity();
            });
        }
    };
    ReportEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-edit',
            template: __webpack_require__(/*! ./report-edit.component.html */ "./src/app/report-edit/report-edit.component.html"),
            styles: [__webpack_require__(/*! ./report-edit.component.css */ "./src/app/report-edit/report-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"],
            _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _report_severity_service__WEBPACK_IMPORTED_MODULE_7__["ReportSeverityService"],
            _fbuser_service__WEBPACK_IMPORTED_MODULE_5__["FbuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ReportEditComponent);
    return ReportEditComponent;
}());



/***/ }),

/***/ "./src/app/report-severity.service.ts":
/*!********************************************!*\
  !*** ./src/app/report-severity.service.ts ***!
  \********************************************/
/*! exports provided: OtherCategoryRequest, ReportSeverityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCategoryRequest", function() { return OtherCategoryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSeverityService", function() { return ReportSeverityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.ts");




var OtherCategoryRequest = /** @class */ (function () {
    function OtherCategoryRequest() {
    }
    return OtherCategoryRequest;
}());

var ReportSeverityService = /** @class */ (function () {
    function ReportSeverityService(http) {
        this.http = http;
    }
    ReportSeverityService.prototype.getByReportId = function (reportId) {
        var url = 'graphql';
        var gql = { query: "\n      query report_severity {\n        report_severity(\n          report_id: \"" + reportId + "\") {\n            id\n            report_id\n            category_id\n            category_name\n            severity\ndeleted_at\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]);
    };
    ReportSeverityService.prototype.add = function (otherCategoryRequest) {
        var url = 'graphql';
        var gql = { query: "\n      mutation report_severity {\n        report_severity(\n          report_id: \"" + otherCategoryRequest.report_id + "\",\n          category_id: \"" + otherCategoryRequest.category_id + "\",\n          category_name: \"" + otherCategoryRequest.category_name + "\",\n          severity: \"" + otherCategoryRequest.severity + "\") {\n            id\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]);
    };
    ReportSeverityService.prototype.delete = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      mutation report_severity {\n        report_severity(\n          id: \"" + id + "\",\n          deleted_at: \"1990-05-05\") {\n            id\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]);
    };
    ReportSeverityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportSeverityService);
    return ReportSeverityService;
}());



/***/ }),

/***/ "./src/app/report.service.ts":
/*!***********************************!*\
  !*** ./src/app/report.service.ts ***!
  \***********************************/
/*! exports provided: Server, ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _reducers_reports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/reports */ "./src/app/reducers/reports.ts");






var Server = /** @class */ (function () {
    function Server() {
    }
    return Server;
}());

var ReportService = /** @class */ (function () {
    function ReportService(http, store) {
        this.http = http;
        this.store = store;
    }
    ReportService.prototype.all = function () {
        var _this = this;
        var url = 'api/report';
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url).subscribe(function (data) {
            _this.store.dispatch(Object(_reducers_reports__WEBPACK_IMPORTED_MODULE_5__["setReports"])({
                data: data,
            }));
        });
    };
    ReportService.prototype.close = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      mutation report {\n        report(id:\"" + id + "\", is_active: \"0\") {\n            id\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    ReportService.prototype.open = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      mutation report {\n        report(id:\"" + id + "\", is_active: \"1\") {\n            id\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    ReportService.prototype.one = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      mutation report {\n        report(id: \"" + id + "\") {\n            id\n            fb_id\n            report_category_id\n            sub_category\n            claimant\n            severity\n            remarks\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    ReportService.prototype.add = function (report) {
        var url = 'graphql';
        var gql = { query: "\n      mutation report {\n        report(\n          fb_id: \"" + report.fb_id + "\",\n          report_category_id: \"" + report.report_category_id + "\",\n          sub_category: \"" + report.sub_category + "\",\n          claimant: \"" + report.claimant + "\",\n          severity: \"" + report.severity + "\",\n          remarks: \"" + report.remarks + "\",\n          is_active: \"1\") {\n            id\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    ReportService.prototype.edit = function (id, report) {
        var url = 'graphql';
        var gql = { query: "\n      mutation report {\n        report(\n          id: \"" + id + "\",\n          fb_id: \"" + report.fb_id + "\",\n          report_category_id: \"" + report.report_category_id + "\",\n          sub_category: \"" + report.sub_category + "\",\n          claimant: \"" + report.claimant + "\",\n          severity: \"" + report.severity + "\",\n          remarks: \"" + report.remarks + "\",\n          is_active: \"1\") {\n            id\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, _config__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/reports-closed/reports-closed.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reports-closed/reports-closed.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-tag {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy1jbG9zZWQvcmVwb3J0cy1jbG9zZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMtY2xvc2VkL3JlcG9ydHMtY2xvc2VkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnktdGFnIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/reports-closed/reports-closed.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reports-closed/reports-closed.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reports\">\n  <br>\n  <button mat-fab color=\"primary\">\n    <i class=\"material-icons\"  routerLink=\"/report-add\">\n      add\n    </i>\n  </button>\n  <br><br>\n  <h1>Closed Reports</h1>\n  <table mat-table [dataSource]=\"closedReports\" matSort class=\"mat-elevation-z8\"> \n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Applicant Name. </th>\n      <td mat-cell *matCellDef=\"let report\">\n        <div *ngIf=\"report.fbuser !== null\">\n            {{report.name}} \n        </div>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"categories\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Categories. </th>\n      <td mat-cell *matCellDef=\"let report\">\n        <button mat-stroked-button\n        [matBadge]=\"idToReport(report.id).severity\" matBadgeColor=\"primary\"\n          *ngIf=\"idToReport(report.id).report_category_id !== null\">\n            {{ idToCategoryName(idToReport(report.id).report_category_id) }}\n        </button>\n        <div class=\"category-tag\" *ngFor=\"let severity of idToReport(report.id).severities\">\n          <button mat-stroked-button\n          [matBadge]=\"severity.severity\" matBadgeColor=\"primary\">\n            {{ severity.category_name }}\n          </button>\n        </div>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"sub\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Sub Category. </th>\n      <td mat-cell *matCellDef=\"let report\"> {{report.sub}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"claimant\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Claimant. </th>\n      <td mat-cell *matCellDef=\"let report\"> {{report.claimant}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"remarks\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Remarks. </th>\n        <td mat-cell *matCellDef=\"let report\"> {{report.remarks}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"updated\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date. </th>\n      <td mat-cell *matCellDef=\"let report\"> {{report.updated}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> \n        Edit\n      </th>\n      <td mat-cell *matCellDef=\"let report\">\n        <button mat-icon-button color=\"warn\">\n          <i class=\"material-icons\" [routerLink]=\"'/report-edit/'+report.id\">\n            edit\n          </i>\n        </button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef> Action. </th>\n      <td mat-cell *matCellDef=\"let report\">\n        <button mat-raised-button color=\"warn\" (click)=\"openReport(report.id)\">\n          Re-open\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"closedHeader\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: closedHeader;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/reports-closed/reports-closed.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reports-closed/reports-closed.component.ts ***!
  \************************************************************/
/*! exports provided: ReportsClosedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsClosedComponent", function() { return ReportsClosedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report.service */ "./src/app/report.service.ts");






var ReportsClosedComponent = /** @class */ (function () {
    function ReportsClosedComponent(reportService, categoryService, store) {
        this.reportService = reportService;
        this.categoryService = categoryService;
        this.store = store;
        // Observables
        this.reports$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('reports'));
        this.categories$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('categories'));
        // Static variables
        this.closedHeader = ['name', 'categories', 'sub', 'claimant', 'remarks', 'updated', 'edit', 'action'];
    }
    ReportsClosedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get services needed.
        this.reportService.all();
        this.categoryService.getAll();
        this.categories$.subscribe(function (categories) {
            _this.categories = categories;
        });
        this.reports$.subscribe(function (reports) {
            _this.reports = reports;
            _this.closedReports = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](reports.filter(function (report) { return report.is_active == false; }).map(function (report) {
                var name = "";
                if (report.fbuser) {
                    name = report.fbuser.fb_name;
                }
                return {
                    id: report.id,
                    name: name,
                    sub: report.sub_category,
                    claimant: report.claimant,
                    remarks: report.remarks,
                    updated: report.updated_at,
                };
            }));
            _this.closedReports.sort = _this.sort;
        });
    };
    ReportsClosedComponent.prototype.idToCategoryName = function (id) {
        if (this.categories.filter(function (category) { return +category.id === +id; }).length > 0) {
            return this.categories.filter(function (category) { return +category.id === +id; })[0].name;
        }
    };
    ReportsClosedComponent.prototype.idToReport = function (id) {
        return this.reports.filter(function (report) { return +report.id === +id; })[0];
    };
    ReportsClosedComponent.prototype.closeReport = function (id) {
        var _this = this;
        this.reportService.close(id).subscribe(function () {
            _this.reportService.all();
            alert("Report Closed.");
        });
    };
    ReportsClosedComponent.prototype.openReport = function (id) {
        var _this = this;
        this.reportService.open(id).subscribe(function () {
            _this.reportService.all();
            alert("Report Restored.");
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReportsClosedComponent.prototype, "sort", void 0);
    ReportsClosedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports-closed',
            template: __webpack_require__(/*! ./reports-closed.component.html */ "./src/app/reports-closed/reports-closed.component.html"),
            styles: [__webpack_require__(/*! ./reports-closed.component.css */ "./src/app/reports-closed/reports-closed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"],
            _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ReportsClosedComponent);
    return ReportsClosedComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-tag {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS10YWcge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reports\">\n  <br>\n  <button mat-fab color=\"primary\">\n    <i class=\"material-icons\"  routerLink=\"/report-add\">\n      add\n    </i>\n  </button>\n  <br><br>\n  <h1>Open Reports</h1>\n  <table mat-table [dataSource]=\"openReports\" matSort class=\"mat-elevation-z8\"> \n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Applicant Name. </th>\n      <td mat-cell *matCellDef=\"let report\">\n        <div *ngIf=\"report.fbuser !== null\">\n            {{report.name}} \n        </div>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"categories\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Categories. </th>\n      <td mat-cell *matCellDef=\"let report\">\n        <button mat-stroked-button\n        [matBadge]=\"idToReport(report.id).severity\" matBadgeColor=\"primary\"\n          *ngIf=\"idToReport(report.id).report_category_id !== null\">\n            {{ idToCategoryName(idToReport(report.id).report_category_id) }}\n        </button>\n        <div class=\"category-tag\" *ngFor=\"let severity of idToReport(report.id).severities\">\n          <button mat-stroked-button\n          [matBadge]=\"severity.severity\" matBadgeColor=\"primary\">\n            {{ severity.category_name }}\n          </button>\n        </div>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"sub\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Sub Category. </th>\n      <td mat-cell *matCellDef=\"let report\"> {{report.sub}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"claimant\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Claimant. </th>\n      <td mat-cell *matCellDef=\"let report\"> {{report.claimant}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"remarks\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Remarks. </th>\n        <td mat-cell *matCellDef=\"let report\"> {{report.remarks}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"updated\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date. </th>\n      <td mat-cell *matCellDef=\"let report\"> {{report.updated}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> \n        Edit\n      </th>\n      <td mat-cell *matCellDef=\"let report\">\n        <button mat-icon-button color=\"warn\">\n          <i class=\"material-icons\" [routerLink]=\"'/report-edit/'+report.id\">\n            edit\n          </i>\n        </button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef> Action. </th>\n      <td mat-cell *matCellDef=\"let report\">\n        <button mat-raised-button color=\"primary\" (click)=\"closeReport(report.id)\">\n          Close\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"openHeader\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: openHeader;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report.service */ "./src/app/report.service.ts");






var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(reportService, categoryService, store) {
        this.reportService = reportService;
        this.categoryService = categoryService;
        this.store = store;
        // Observables
        this.reports$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('reports'));
        this.categories$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('categories'));
        // Static variables
        this.openHeader = ['name', 'categories', 'sub', 'claimant', 'remarks', 'updated', 'edit', 'action'];
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get services needed.
        this.reportService.all();
        this.categoryService.getAll();
        this.categories$.subscribe(function (categories) {
            _this.categories = categories;
        });
        this.reports$.subscribe(function (reports) {
            _this.reports = reports;
            _this.openReports = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](reports.filter(function (report) { return report.is_active == true; }).map(function (report) {
                var name = "";
                if (report.fbuser) {
                    name = report.fbuser.fb_name;
                }
                return {
                    id: report.id,
                    name: name,
                    sub: report.sub_category,
                    claimant: report.claimant,
                    remarks: report.remarks,
                    updated: report.updated_at,
                };
            }));
            _this.openReports.sort = _this.sort;
        });
    };
    ReportsComponent.prototype.idToCategoryName = function (id) {
        if (this.categories.filter(function (category) { return +category.id === +id; }).length > 0) {
            return this.categories.filter(function (category) { return +category.id === +id; })[0].name;
        }
    };
    ReportsComponent.prototype.idToReport = function (id) {
        return this.reports.filter(function (report) { return +report.id === +id; })[0];
    };
    ReportsComponent.prototype.closeReport = function (id) {
        var _this = this;
        this.reportService.close(id).subscribe(function () {
            _this.reportService.all();
            alert("Report Closed.");
        });
    };
    ReportsComponent.prototype.openReport = function (id) {
        var _this = this;
        this.reportService.open(id).subscribe(function () {
            _this.reportService.all();
            alert("Report Restored.");
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReportsComponent.prototype, "sort", void 0);
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"],
            _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item a i {\n    vertical-align: middle;\n}\n\n.sub-list {\n  margin-left: 30px;\n}\n\n.link-blue {\n  color: #007bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGlzdC1pdGVtIGEgaSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnN1Yi1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5saW5rLWJsdWUge1xuICBjb2xvcjogIzAwN2JmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">\n    <a routerLink=\"/dashboard\">\n      <i class=\"material-icons\">\n        dashboard\n      </i>\n      dashboard\n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\">\n    <a routerLink=\"/fbuser\">\n      <i class=\"material-icons\">\n        face\n      </i>\n      Facebook User\n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\"  style=\"display:none\">\n    <a routerLink=\"/verify\">\n      <i class=\"material-icons\">\n        info\n      </i>\n      Hit Messages\n    </a>\n  </mat-list-item>\n  \n  <mat-list-item role=\"listitem\" style=\"display:none\">\n    <a routerLink=\"/replies\">\n      <i class=\"material-icons\">\n        forum\n      </i>\n      replies\n    </a>\n  </mat-list-item>\n  \n  \n  <mat-list-item role=\"listitem\">\n    <a routerLink=\"/casegen\">\n      <i class=\"material-icons\">\n        folder_open\n      </i>\n      Create Message\n    </a>\n  </mat-list-item>\n  \n  \n  \n  <mat-list-item role=\"listitem\">\n    <a href=\"https://devinehealthmedical.com/msg/track-and-trace/public_html/admin/people\">\n      <i class=\"material-icons\">\n        people\n      </i>\n      applicants\n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\" class=\"link-blue\">\n    <i class=\"material-icons\">\n      post_add\n    </i>\n    reports\n  </mat-list-item>\n  <div class=\"sub-list\">\n    <a routerLink=\"/reports\">\n      <mat-list-item class=\"link-blue\"> Open </mat-list-item>\n    </a>\n    <a routerLink=\"/reports-closed\">\n      <mat-list-item class=\"link-blue\"> Close </mat-list-item>\n    </a>\n  </div>\n  <mat-list-item role=\"listitem\">\n    <a href=\"https://devinehealthmedical.com/msg/track-and-trace/public_html/admin/applicant-statuses\">\n      <i class=\"material-icons\">\n        streetview\n      </i>\n      applicant status\n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\">\n    <a href=\"https://devinehealthmedical.com/msg/track-and-trace/public_html/admin/principals\">\n      <i class=\"material-icons\">\n        nature_people\n      </i>\n      principals\n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\">\n    <a href=\"https://devinehealthmedical.com/msg/track-and-trace/public_html/admin/agents\">\n      <i class=\"material-icons\">\n        contacts\n      </i>\n      agents\n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\">\n    <a href=\"https://devinehealthmedical.com/msg/track-and-trace/public_html/admin/countries\">\n      <i class=\"material-icons\">\n        location_city\n      </i>\n      countries\n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\">\n    <a routerLink=\"/categories\">\n      <i class=\"material-icons\">\n        file_copy\n      </i>\n      report categories \n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\">\n    <a href=\"https://devinehealthmedical.com/msg/track-and-trace/public_html/admin/user-types\">\n      <i class=\"material-icons\">\n        sports_kabaddi\n      </i>\n      user types\n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\">\n    <a href=\"https://devinehealthmedical.com/fbuser.php\"\n      target=\"_blank\">\n      <i class=\"material-icons\">\n        account_tree\n      </i>\n      user reports\n    </a>\n  </mat-list-item>\n  <mat-list-item role=\"listitem\">\n    <a href=\"https://devinehealthmedical.com/msg/track-and-trace/public_html/upload-csv\"\n      target=\"_blank\">\n      <i class=\"material-icons\">\n        grid_on\n      </i>\n      import CSV\n    </a>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/uniquechat.service.ts":
/*!***************************************!*\
  !*** ./src/app/uniquechat.service.ts ***!
  \***************************************/
/*! exports provided: UniqueChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueChatService", function() { return UniqueChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _reducers_uniquechat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/uniquechat */ "./src/app/reducers/uniquechat.ts");






var UniqueChatService = /** @class */ (function () {
    function UniqueChatService(http, store) {
        this.http = http;
        this.store = store;
    }
    UniqueChatService.prototype.getUnique = function () {
        var _this = this;
        var url = 'api/unique';
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url).subscribe(function (data) {
            _this.store.dispatch(Object(_reducers_uniquechat__WEBPACK_IMPORTED_MODULE_5__["setUniquechat"])({
                data: data,
            }));
        });
    };
    UniqueChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], UniqueChatService);
    return UniqueChatService;
}());



/***/ }),

/***/ "./src/app/upload-csv/upload-csv.component.css":
/*!*****************************************************!*\
  !*** ./src/app/upload-csv/upload-csv.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1jc3YvdXBsb2FkLWNzdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/upload-csv/upload-csv.component.html":
/*!******************************************************!*\
  !*** ./src/app/upload-csv/upload-csv.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  upload-csv works!\n</p>\n"

/***/ }),

/***/ "./src/app/upload-csv/upload-csv.component.ts":
/*!****************************************************!*\
  !*** ./src/app/upload-csv/upload-csv.component.ts ***!
  \****************************************************/
/*! exports provided: UploadCsvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCsvComponent", function() { return UploadCsvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UploadCsvComponent = /** @class */ (function () {
    function UploadCsvComponent() {
    }
    UploadCsvComponent.prototype.ngOnInit = function () {
    };
    UploadCsvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-csv',
            template: __webpack_require__(/*! ./upload-csv.component.html */ "./src/app/upload-csv/upload-csv.component.html"),
            styles: [__webpack_require__(/*! ./upload-csv.component.css */ "./src/app/upload-csv/upload-csv.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadCsvComponent);
    return UploadCsvComponent;
}());



/***/ }),

/***/ "./src/app/verify-report.service.ts":
/*!******************************************!*\
  !*** ./src/app/verify-report.service.ts ***!
  \******************************************/
/*! exports provided: GQL, Server, Server2, VerifyReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GQL", function() { return GQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server2", function() { return Server2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyReportService", function() { return VerifyReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.ts");





var GQL = /** @class */ (function () {
    function GQL() {
    }
    return GQL;
}());

var Server = /** @class */ (function () {
    function Server() {
    }
    return Server;
}());

var Server2 = /** @class */ (function () {
    function Server2() {
    }
    return Server2;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
};
var VerifyReportService = /** @class */ (function () {
    function VerifyReportService(http) {
        this.http = http;
    }
    VerifyReportService.prototype.getOneActive = function () {
        var url = 'api/hitkey';
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, httpOptions);
    };
    VerifyReportService.prototype.getSeverity = function (id) {
        var url = 'graphql';
        var gql = { query: "\n      query hitkey_severity {\n        hitkey_severity(hitkey_id:\"" + id + "\") {\n            id\n            hitkey_id\n            category_id\n            severity\n            date_created\n            date_updated\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (server) {
            return server.data.hitkeySeverity;
        }));
    };
    VerifyReportService.prototype.doneHitkey = function (id) {
        var url = 'graphql';
        var gql = { query: "\n    mutation hitkey {\n      hitkey(id: \"" + id + "\", is_done: \"true\") {\n          id\n          unique_chat_id\n          is_report\n          is_done\n          date_created\n          date_updated\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions);
    };
    VerifyReportService.prototype.doneHitkeySeverity = function (id, severity) {
        var url = 'graphql';
        var gql = { query: "\n    mutation hitkey_severity {\n      hitkey_severity(id: \"" + id + "\", severity: \"" + severity + "\") {\n          id\n          hitkey_id\n          category_id\n          severity\n          date_created\n          date_updated\n        }\n      }\n    " };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, gql, httpOptions);
    };
    VerifyReportService.prototype.save = function (hitkey) {
        var url = 'api/hitkey';
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["mainUrl"] + url, hitkey);
    };
    VerifyReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VerifyReportService);
    return VerifyReportService;
}());



/***/ }),

/***/ "./src/app/verifyreport/verifyreport.component.css":
/*!*********************************************************!*\
  !*** ./src/app/verifyreport/verifyreport.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeXJlcG9ydC92ZXJpZnlyZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verifyreport/verifyreport.component.html":
/*!**********************************************************!*\
  !*** ./src/app/verifyreport/verifyreport.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"!hitkey\">\n  No more hit messages.\n</h3>\n<form *ngIf=\"hitkey\">\n  <br><br><br>\n  <h1>User Message: {{hitkey.unique.message}} </h1>\n  <br><br>\n  <div class=\"form-group\" *ngFor=\"let severity of hitkey.severities\">\n    <mat-form-field>\n        <input [(ngModel)]=\"severity.severity\"\n                name=\"reply\"\n                type=\"number\"\n                class=\"form-control\"\n                matInput\n                placeholder=\"{{severity.category.name}} (0 to 9)\">\n    </mat-form-field>\n  </div>\n  <button (click)=\"submit()\"\n          type=\"sent\"\n          class=\"btn btn-primary\"\n          mat-raised-button\n          color=\"primary\">\n    sent\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/verifyreport/verifyreport.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verifyreport/verifyreport.component.ts ***!
  \********************************************************/
/*! exports provided: VerifyreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyreportComponent", function() { return VerifyreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _verify_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../verify-report.service */ "./src/app/verify-report.service.ts");



var VerifyreportComponent = /** @class */ (function () {
    function VerifyreportComponent(verifyReportService) {
        this.verifyReportService = verifyReportService;
    }
    VerifyreportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verifyReportService.getOneActive().subscribe(function (hitkey) {
            _this.hitkey = hitkey;
        });
    };
    VerifyreportComponent.prototype.submit = function () {
        var _this = this;
        this.verifyReportService.save(this.hitkey).subscribe(function () {
            alert("Report save.");
            _this.ngOnInit();
        });
    };
    VerifyreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifyreport',
            template: __webpack_require__(/*! ./verifyreport.component.html */ "./src/app/verifyreport/verifyreport.component.html"),
            styles: [__webpack_require__(/*! ./verifyreport.component.css */ "./src/app/verifyreport/verifyreport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_verify_report_service__WEBPACK_IMPORTED_MODULE_2__["VerifyReportService"]])
    ], VerifyreportComponent);
    return VerifyreportComponent;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: GET_HTTP_OPTIONS, POST_HTTP_OPTIONS, PUT_HTTP_OPTIONS, PATCH_HTTP_OPTIONS, DELETE_HTTP_OPTIONS, GQL, httpOptions, mainUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HTTP_OPTIONS", function() { return GET_HTTP_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_HTTP_OPTIONS", function() { return POST_HTTP_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT_HTTP_OPTIONS", function() { return PUT_HTTP_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATCH_HTTP_OPTIONS", function() { return PATCH_HTTP_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_HTTP_OPTIONS", function() { return DELETE_HTTP_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GQL", function() { return GQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainUrl", function() { return mainUrl; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var RESPONSE_TYPE_TEXT = 'text';
/** HTTP options for the GET request. */
var GET_HTTP_OPTIONS = {
    responseType: RESPONSE_TYPE_TEXT,
};
/**
 * HTTP options for the POST request.
 * Request payload is expected to be a JSON data.
 */
var POST_HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
    responseType: RESPONSE_TYPE_TEXT,
};
/**
 * HTTP options for the PUT request.
 * Request payload is expected to be a JSON data.
 */
var PUT_HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
    responseType: RESPONSE_TYPE_TEXT,
};
/**
 * HTTP options for the PATCH request.
 * Request payload is expected to be a JSON data.
 */
var PATCH_HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
    responseType: RESPONSE_TYPE_TEXT,
};
/**
 * HTTP options for the DELETE request.
 * Request payload is expected to be a JSON data.
 */
var DELETE_HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
    responseType: RESPONSE_TYPE_TEXT,
};
var GQL = /** @class */ (function () {
    function GQL() {
    }
    return GQL;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
};
var mainUrl = 'https://devinehealthmedical.com/msg/track-and-trace/public_html/';
//export const mainUrl = 'http://localhost:8888/track-and-trace/public_html/';
//export const mainUrl = 'http://track.cyd.ninja/';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/track-and-trace/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map