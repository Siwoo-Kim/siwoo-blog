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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about-me/about-me.component.css":
/*!*******************************************************!*\
  !*** ./src/app/about/about-me/about-me.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about-me/about-me.component.html":
/*!********************************************************!*\
  !*** ./src/app/about/about-me/about-me.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-me works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about-me/about-me.component.ts":
/*!******************************************************!*\
  !*** ./src/app/about/about-me/about-me.component.ts ***!
  \******************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/about/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about/about-me/about-me.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ],
            declarations: [_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-card-content, mat-sidenav-content, mat-sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n  width: 250px;\r\n}\r\n\r\nmat-sidenav-content {\r\n  overflow: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav mode=\"over\" align=\"start\" #sidenav>\n    Sidenav content\n  </mat-sidenav>\n  <!-- Body -->\n  <mat-sidenav-content>\n    <!--Header-->\n    <app-header (sidenavChange)=\"sidenav.toggle()\"></app-header>\n    <!--Locator-->\n    <app-locator></app-locator>\n\n    <!--Main-->\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth-service.service */ "./src/app/service/auth-service.service.ts");
/* harmony import */ var _service_data_source_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/data-source.service */ "./src/app/service/data-source.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(mdIconRegistry, dataSource, authService, sanitizer) {
        // dataSource.get('/private').subscribe(data => console.log(data));
        /*authService.authenticate(new Login('GUEST','1234'));*/
        mdIconRegistry
            .addSvgIcon('angular-img-transparent', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/domain/angular-img-transparent.svg'));
        mdIconRegistry
            .addSvgIcon('angular-img', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/domain/angular-img.svg'));
        mdIconRegistry
            .addSvgIcon('hibernate-img', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/domain/hibernate-img.svg'));
        mdIconRegistry
            .addSvgIcon('java-img', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/domain/java-img.svg'));
        mdIconRegistry
            .addSvgIcon('spring-img', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/domain/spring-img.svg'));
        mdIconRegistry
            .addSvgIcon('typescript-img', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/domain/typescript-img.svg'));
        mdIconRegistry
            .addSvgIcon('youtube-img', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/domain/youtube-img.svg'));
        mdIconRegistry
            .addSvgIcon('toggle_on', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/svg/baseline-toggle_on.svg'));
        mdIconRegistry
            .addSvgIcon('google-img', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/svg/google-img.svg'));
        mdIconRegistry
            .addSvgIcon('facebook-img', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/svg/facebook-img.svg'));
        mdIconRegistry
            .addSvgIcon('github-img', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/svg/github-img.svg'));
        mdIconRegistry
            .addSvgIcon('messenger', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/svg/messenger.svg'));
        authService.checkSocialLogin();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _service_data_source_service__WEBPACK_IMPORTED_MODULE_4__["DataSource"],
            _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _category_category_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.module */ "./src/app/category/category.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.tokens */ "./src/app/app.tokens.ts");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                /*Core Module*/
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutingModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_10__["ServiceModule"],
                /*Feature Module*/
                _main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginModule"],
                _category_category_module__WEBPACK_IMPORTED_MODULE_7__["CategoryModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_12__["AboutModule"],
            ],
            providers: [
                { provide: _app_tokens__WEBPACK_IMPORTED_MODULE_9__["BACKEND_URL_TOKEN"], useValue: _app_tokens__WEBPACK_IMPORTED_MODULE_9__["DEV_BACKEND_URL"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.tokens.ts":
/*!*******************************!*\
  !*** ./src/app/app.tokens.ts ***!
  \*******************************/
/*! exports provided: BACKEND_URL_TOKEN, DEV_BACKEND_URL, PROD_BACKEND_URL, Param, BY_NAME, BY_CATEGORY, BY_TOPIC, BY_SEARCH, TERM_ANY, REQUEST_TOPICLISTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL_TOKEN", function() { return BACKEND_URL_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEV_BACKEND_URL", function() { return DEV_BACKEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROD_BACKEND_URL", function() { return PROD_BACKEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_NAME", function() { return BY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_CATEGORY", function() { return BY_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_TOPIC", function() { return BY_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_SEARCH", function() { return BY_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERM_ANY", function() { return TERM_ANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_TOPICLISTS", function() { return REQUEST_TOPICLISTS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-05-06 오전 8:43
 * @github : https://github.com/Siwoo-Kim
 **/

/*
*  ENV TOKENS
*/
var BACKEND_URL_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Backend url token');
var DEV_BACKEND_URL = '/rest/';
var PROD_BACKEND_URL = 'https://' + location.hostname + '/rest/';
var Param = /** @class */ (function () {
    function Param(key, value) {
        this.key = key;
        this.value = value;
    }
    return Param;
}());

var BY_NAME = new Param("by", "name");
var BY_CATEGORY = new Param("by", "category");
var BY_TOPIC = new Param("by", "topic");
var BY_SEARCH = new Param("by", "search");
var TERM_ANY = new Param("term", "any");
var REQUEST_TOPICLISTS = new Param("request", "topicLists");


/***/ }),

/***/ "./src/app/category/category-bootstrap.component.css":
/*!***********************************************************!*\
  !*** ./src/app/category/category-bootstrap.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-drawer-container {\r\n  min-height: 800px;\r\n}\r\n\r\nmat-drawer-container, mat-drawer, mat-drawer-content {\r\n  height: 100%;\r\n}\r\n\r\nsection {\r\n  background-color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-bootstrap.component.html":
/*!************************************************************!*\
  !*** ./src/app/category/category-bootstrap.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fxLayout>\n  <!--SideNav-->\n  <mat-sidenav mode=\"side\"\n               [opened]=\"true\"\n               #sidenav\n               fxHide.lt-sm=\"true\"\n               fxFlex=\"250px\"\n               class=\"menu-list-bar\">\n    <app-category-topic-list [topicLists]=\"topicLists\"></app-category-topic-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content fxFlex>\n    <!--Menu Bar-->\n    <app-category-menu-bar [domain]=\"domain\"\n                           [(opened)]=\"sidenav.opened\"></app-category-menu-bar>\n    <mat-divider></mat-divider>\n    <!--Main Section-->\n    <section fxFlex>\n      <router-outlet></router-outlet>\n    </section>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/category/category-bootstrap.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/category/category-bootstrap.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryBootstrapComponent", function() { return CategoryBootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_domain_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/domain-repository.service */ "./src/app/service/domain-repository.service.ts");
/* harmony import */ var _service_category_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/category-repository.service */ "./src/app/service/category-repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryBootstrapComponent = /** @class */ (function () {
    function CategoryBootstrapComponent(domainRepository, categoryRepository) {
        var _this = this;
        this.domainRepository = domainRepository;
        this.categoryRepository = categoryRepository;
        this.domainName = 'category';
        this.domainRepository
            .byName(this.domainName)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (domain) { return _this.domain = domain; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () { return _this.categoryRepository.allTopicLists(); }))
            .subscribe(function (_topicLists) { return _this.topicLists = _topicLists; });
    }
    CategoryBootstrapComponent.prototype.ngOnInit = function () {
    };
    CategoryBootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-bootstrap',
            template: __webpack_require__(/*! ./category-bootstrap.component.html */ "./src/app/category/category-bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./category-bootstrap.component.css */ "./src/app/category/category-bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [_service_domain_repository_service__WEBPACK_IMPORTED_MODULE_2__["DomainRepository"],
            _service_category_repository_service__WEBPACK_IMPORTED_MODULE_3__["CategoryRepository"]])
    ], CategoryBootstrapComponent);
    return CategoryBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/category/category-introduction/category-description/category-description.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/category/category-introduction/category-description/category-description.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.category-description {\r\n  margin-top: 45px;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.description-header mat-icon {\r\n  margin-right: 5px;\r\n}\r\n\r\n.description-content {\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n}\r\n\r\n.go-first-chapter {\r\n  margin-top: 25px;\r\n}\r\n\r\n.go-first-chapter mat-card{\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);\r\n  box-sizing: border-box;\r\n  transition: box-shadow .5s;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 150px;\r\n  min-width: 350px;\r\n  height: auto;\r\n  margin: auto;\r\n  padding: 24px;\r\n  box-shadow: 0 6px 6px rgba(10,16,20,.15), 0 0 52px rgba(10,16,20,.12);\r\n}\r\n\r\n.go-first-chapter img {\r\n  height: 70px;\r\n}\r\n\r\n.go-first-chapter mat-card mat-card-title {\r\n  font-family: Lato, Roboto, Rubik, sans-serif;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #3f51b5;\r\n}\r\n\r\n.go-first-chapter mat-card-title, .go-first-chapter mat-card-subtitle {\r\n  font-family: Lato, Roboto, Rubik, sans-serif;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-introduction/category-description/category-description.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/category/category-introduction/category-description/category-description.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"category-description ui text container\">\n  <!--Header-->\n  <div class=\"ui header dividing\" fxLayout fxLayoutAlign=\"space-between\">\n    <span class=\"description-header\">\n      <mat-icon [svgIcon]=\"category?.imgName\"></mat-icon>\n      {{ category?.name }}\n    </span>\n    <div class=\"sub header\" >\n      <mat-chip-list>\n        <mat-chip>{{category?.type}}</mat-chip>\n      </mat-chip-list>\n    </div>\n  </div>\n\n  <!--Content-->\n  <p class=\"description-content ui text\">\n    {{ category?.description }}\n  </p>\n\n  <div class=\"row go-first-chapter\" fxFlex fxLayoutAlign=\"center\"  >\n    <a [routerLink]=\"['/category',category.name, firstTopic.name]\"\n       [queryParams]=\"{topicId: firstTopic.id}\" >\n      <mat-card fxLayout\n                fxFlexAlign=\"center center\" >\n        <img fxFlex src=\"/assets/img/code-icon.svg\">\n        <mat-card-header fxFlex>\n          <mat-card-title>GET STARTED</mat-card-title>\n          <mat-card-subtitle>Go First Topic</mat-card-subtitle>\n        </mat-card-header>\n      </mat-card>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/category/category-introduction/category-description/category-description.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/category/category-introduction/category-description/category-description.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CategoryDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDescriptionComponent", function() { return CategoryDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/category.model */ "./src/app/model/category.model.ts");
/* harmony import */ var _model_topic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/topic.model */ "./src/app/model/topic.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryDescriptionComponent = /** @class */ (function () {
    function CategoryDescriptionComponent() {
    }
    CategoryDescriptionComponent.prototype.ngOnInit = function () {
    };
    CategoryDescriptionComponent.prototype.getPath = function () {
        return this.category != null ? _model_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"].resolveRouterPath(this.category) : "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"])
    ], CategoryDescriptionComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_topic_model__WEBPACK_IMPORTED_MODULE_2__["Topic"])
    ], CategoryDescriptionComponent.prototype, "firstTopic", void 0);
    CategoryDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-description',
            template: __webpack_require__(/*! ./category-description.component.html */ "./src/app/category/category-introduction/category-description/category-description.component.html"),
            styles: [__webpack_require__(/*! ./category-description.component.css */ "./src/app/category/category-introduction/category-description/category-description.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryDescriptionComponent);
    return CategoryDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/category/category-introduction/category-introduction.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/category/category-introduction/category-introduction.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.topic-list-group {\r\n  margin-top: 100px;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.topic-list-group button {\r\n  margin: 10px;\r\n}\r\n\r\n.container-fluid {\r\n  margin-top: 100px;\r\n  margin-bottom: 100px;\r\n}\r\n\r\napp-category-description {\r\n  margin-top: 100px;\r\n  margin-bottom: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-introduction/category-introduction.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/category/category-introduction/category-introduction.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-about-domain [domain]=\"domain\"></app-about-domain>\n\n<app-category-description\n  *ngIf=\"topics\"\n  [category]=\"category\"\n  [firstTopic]=\"getFirstTopic()\"></app-category-description>\n\n<div class=\"container-fluid\" style=\"margin-top: 45px; margin-bottom: 45px\" >\n  <app-topic-table\n    [categoryName]=\"category?.name\"\n    [topics]=\"topics\"></app-topic-table>\n</div>\n\n<div class=\"topic-list-group\"\n     fxLayout=\"row no-wrap\" fxFlexAlign=\"center center\">\n  <button\n    fxFlex=\"30%\"\n    mat-raised-button\n    color=\"primary\"\n    [routerLink]=\"['/category',category?.name,topic?.name]\"\n    [queryParams]=\"{'topicId': topic.id}\"\n    *ngFor=\"let topic of topics\"> {{ topic?.name }}</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/category/category-introduction/category-introduction.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/category/category-introduction/category-introduction.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CategoryIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIntroductionComponent", function() { return CategoryIntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_domain_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/domain-repository.service */ "./src/app/service/domain-repository.service.ts");
/* harmony import */ var _service_category_repository_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/category-repository.service */ "./src/app/service/category-repository.service.ts");
/* harmony import */ var _service_topic_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/topic-repository.service */ "./src/app/service/topic-repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryIntroductionComponent = /** @class */ (function () {
    function CategoryIntroductionComponent(domainRepository, categoryRepository, topicRepository, route) {
        var _this = this;
        this.domainRepository = domainRepository;
        this.categoryRepository = categoryRepository;
        this.topicRepository = topicRepository;
        this.route = route;
        this.domainName = 'Category Introduction';
        this.domainRepository
            .byName(this.domainName)
            .subscribe(function (_domain) { return _this.domain = _domain; });
        this.route.params.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (params) { return params['categoryName']; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (params) { return params['categoryName']; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (categoryName) {
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(_this.categoryRepository.byName(categoryName), _this.topicRepository.byCategoryName(categoryName));
        }))
            .subscribe(function (_a) {
            var _category = _a[0], _topics = _a[1];
            _this.category = _category;
            _this.topics = _topics;
        });
    }
    CategoryIntroductionComponent.prototype.getFirstTopic = function () {
        return this.topics[0];
    };
    CategoryIntroductionComponent.prototype.ngOnInit = function () {
    };
    CategoryIntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-introduction',
            template: __webpack_require__(/*! ./category-introduction.component.html */ "./src/app/category/category-introduction/category-introduction.component.html"),
            styles: [__webpack_require__(/*! ./category-introduction.component.css */ "./src/app/category/category-introduction/category-introduction.component.css")]
        }),
        __metadata("design:paramtypes", [_service_domain_repository_service__WEBPACK_IMPORTED_MODULE_4__["DomainRepository"],
            _service_category_repository_service__WEBPACK_IMPORTED_MODULE_5__["CategoryRepository"],
            _service_topic_repository_service__WEBPACK_IMPORTED_MODULE_6__["TopicRepository"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoryIntroductionComponent);
    return CategoryIntroductionComponent;
}());



/***/ }),

/***/ "./src/app/category/category-introduction/topic-table/topic-table.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/category/category-introduction/topic-table/topic-table.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  overflow: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-introduction/topic-table/topic-table.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/category/category-introduction/topic-table/topic-table.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\" style=\"width: 100%\">\n  <table mat-table #table [dataSource]=\"dataSource\" *ngIf=\"topics\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> ID#. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.id}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"\n          [routerLink]=\"resolvePath(element)\"\n          [queryParams]=\"resolveParams(element)\"\n          [style.color]=\"'#ff4081'\" >\n        <button matBadge=\"GO\"\n\n                matBadgeColor=\"accent\"\n                matBadgePosition=\"before\"\n                class=\"btn-block\" mat-button >{{element?.name}} </button>\n      </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"shortDescription\">\n      <th mat-header-cell *matHeaderCellDef> Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.shortDescription}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"created\">\n      <th mat-header-cell *matHeaderCellDef> Created </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.basicTime.created | date : 'short' }} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n                 [pageSize]=\"5\"\n                 [pageSizeOptions]=\"[5, 10, 20]\"\n                 [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/category/category-introduction/topic-table/topic-table.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/category/category-introduction/topic-table/topic-table.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TopicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicTableComponent", function() { return TopicTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicTableComponent = /** @class */ (function () {
    function TopicTableComponent() {
        this.displayedColumns = ['id', 'name', 'shortDescription', 'created'];
    }
    Object.defineProperty(TopicTableComponent.prototype, "topics", {
        get: function () {
            return this._topics;
        },
        set: function (topics) {
            if (topics != null) {
                this._topics = topics;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](topics);
                this.dataSource.paginator = this.paginator;
                console.log(this.dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    TopicTableComponent.prototype.ngOnInit = function () {
    };
    TopicTableComponent.prototype.resolvePath = function (element) {
        return '/category/' + this.categoryName + '/' + element.name;
    };
    TopicTableComponent.prototype.resolveParams = function (element) {
        return { topicId: element.id };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TopicTableComponent.prototype, "categoryName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TopicTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TopicTableComponent.prototype, "topics", null);
    TopicTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-table',
            template: __webpack_require__(/*! ./topic-table.component.html */ "./src/app/category/category-introduction/topic-table/topic-table.component.html"),
            styles: [__webpack_require__(/*! ./topic-table.component.css */ "./src/app/category/category-introduction/topic-table/topic-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopicTableComponent);
    return TopicTableComponent;
}());



/***/ }),

/***/ "./src/app/category/category-main/category-main.component.css":
/*!********************************************************************!*\
  !*** ./src/app/category/category-main/category-main.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category-main/category-main.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/category/category-main/category-main.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Describe Domain-->\n<app-about-domain [domain]=\"domain\"></app-about-domain>\n<mat-divider></mat-divider>\n<app-category-timeline [categories]=\"categories\"></app-category-timeline>\n\n"

/***/ }),

/***/ "./src/app/category/category-main/category-main.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-main/category-main.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMainComponent", function() { return CategoryMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_domain_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/domain-repository.service */ "./src/app/service/domain-repository.service.ts");
/* harmony import */ var _service_category_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category-repository.service */ "./src/app/service/category-repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryMainComponent = /** @class */ (function () {
    function CategoryMainComponent(domainRepository, categoryRepository) {
        var _this = this;
        this.domainRepository = domainRepository;
        this.categoryRepository = categoryRepository;
        this.domainName = 'category';
        this.domainRepository
            .byName(this.domainName)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (domain) { return _this.domain = domain; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () { return _this.categoryRepository.all(); }))
            .subscribe(function (_categories) { return _this.categories = _categories; });
    }
    CategoryMainComponent.prototype.ngOnInit = function () {
    };
    CategoryMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-main',
            template: __webpack_require__(/*! ./category-main.component.html */ "./src/app/category/category-main/category-main.component.html"),
            styles: [__webpack_require__(/*! ./category-main.component.css */ "./src/app/category/category-main/category-main.component.css")]
        }),
        __metadata("design:paramtypes", [_service_domain_repository_service__WEBPACK_IMPORTED_MODULE_2__["DomainRepository"],
            _service_category_repository_service__WEBPACK_IMPORTED_MODULE_3__["CategoryRepository"]])
    ], CategoryMainComponent);
    return CategoryMainComponent;
}());



/***/ }),

/***/ "./src/app/category/category-main/category-timeline/category-timeline.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/category/category-main/category-timeline/category-timeline.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\ndiv.timeline-date-panel p {\r\n  background-color: white;\r\n  color: #3f51b5;\r\n}\r\n\r\ndiv.time-line-date-content {\r\n  background-color: white;\r\n}\r\n\r\ndiv.timeline-text-content {\r\n  background-color: white !important;\r\n}\r\n\r\n.card-title {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 1.3rem;\r\n  text-align: start;\r\n}\r\n\r\n.card-content {\r\n  text-align: start;\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 0.98rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-main/category-timeline/category-timeline.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/category/category-main/category-timeline/category-timeline.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"timeline1 cid-qRhQyiVX8D\" id=\"timeline1-26\">\n  <div class=\"container align-center\">\n    <!--Header-->\n    <h2 class=\"mbr-section-title pb-3 mbr-fonts-style display-2\">\n      Category Lists\n    </h2>\n    <h3 class=\"mbr-section-subtitle pb-5 mbr-fonts-style display-5\">\n      The Order is sorted by updated and created time.\n    </h3>\n\n\n    <div class=\"container timelines-container\" mbri-timelines=\"\">\n      <!--Row for Category-->\n      <div class=\"row timeline-element separline\"\n           *ngFor=\"let category of categories;let i = index\"\n           [ngClass]=\"{reverse : i % 2 == 0}\">\n\n        <!--Category Time-->\n        <div class=\"timeline-date-panel col-xs-12 col-md-6  align-left\">\n          <div class=\"time-line-date-content\">\n            <p class=\"mbr-timeline-date mbr-fonts-style display-5\">\n              {{category.basicTime.lastUpdated | date : 'short' }}\n            </p>\n          </div>\n        </div>\n        <span class=\"iconBackground\"></span>\n\n        <!--Category Card-->\n        <div class=\"col-xs-12 col-md-6 align-right\">\n          <div class=\"timeline-text-content\" style=\"background-color: white\">\n            <mat-card>\n              <img matCardImage [src]=\"category.imgPath+'.png'\">\n              <mat-card-header>\n                <mat-card-title class=\"card-title\">{{ category.name }}</mat-card-title>\n              </mat-card-header>\n              <mat-card-content class=\"card-content\" [innerHtml]=\"category.shortDescription\">\n              </mat-card-content>\n              <mat-card-footer>\n                <button mat-raised-button class=\"btn-block\" [routerLink]=\"['/category', category.name]\" >Get Start</button>\n              </mat-card-footer>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/category/category-main/category-timeline/category-timeline.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/category/category-main/category-timeline/category-timeline.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CategoryTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTimelineComponent", function() { return CategoryTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_basic_time_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/basic-time.model */ "./src/app/model/basic-time.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryTimelineComponent = /** @class */ (function () {
    function CategoryTimelineComponent() {
    }
    Object.defineProperty(CategoryTimelineComponent.prototype, "categories", {
        get: function () {
            return this._categories;
        },
        set: function (categories) {
            if (categories != null && categories.length > 1) {
                this._categories = categories
                    .sort(function (a, b) { return _model_basic_time_model__WEBPACK_IMPORTED_MODULE_1__["BasicTime"].sortByLastUpdatedDesc(a.basicTime, b.basicTime); });
            }
        },
        enumerable: true,
        configurable: true
    });
    CategoryTimelineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CategoryTimelineComponent.prototype, "categories", null);
    CategoryTimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-timeline',
            template: __webpack_require__(/*! ./category-timeline.component.html */ "./src/app/category/category-main/category-timeline/category-timeline.component.html"),
            styles: [__webpack_require__(/*! ./category-timeline.component.css */ "./src/app/category/category-main/category-timeline/category-timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryTimelineComponent);
    return CategoryTimelineComponent;
}());



/***/ }),

/***/ "./src/app/category/category-menu-bar/category-menu-bar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/category/category-menu-bar/category-menu-bar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.menu-list-bar {\r\n  background-color: #fafafa;\r\n  box-shadow: 6px 0 6px rgba(0,0,0,.1);\r\n}\r\n\r\n.menu-bar {\r\n  background-color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-menu-bar/category-menu-bar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/category/category-menu-bar/category-menu-bar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"menu-bar\" >\n  <mat-button-toggle-group>\n    <mat-button-toggle value=\"left\"\n                       fxHide.lt-sm=\"true\"\n                       [matTooltip]=\"'Close Sidebar'\" >\n      <mat-icon (click)=\"toggle()\"\n                color=\"{{ opened ? 'primary' : 'accent'}}\">\n        {{ opened ? 'arrow_back' : 'arrow_forward'}}\n      </mat-icon>\n\n    </mat-button-toggle>\n    <mat-button-toggle routerLink=\"/category\"\n                       [matTooltip]=\"'Go to ' + domain?.name\" value=\"center\">\n      <mat-icon color=\"primary\" >home</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle  [matTooltip]=\"'Share Link'\"  value=\"right\">\n      <mat-icon color=\"primary\">shared</mat-icon>\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/category/category-menu-bar/category-menu-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/category/category-menu-bar/category-menu-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryMenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMenuBarComponent", function() { return CategoryMenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_domain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/domain.model */ "./src/app/model/domain.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryMenuBarComponent = /** @class */ (function () {
    function CategoryMenuBarComponent() {
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CategoryMenuBarComponent.prototype.ngOnInit = function () {
    };
    CategoryMenuBarComponent.prototype.toggle = function () {
        this.opened = !this.opened;
        this.openedChange.emit(this.opened);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CategoryMenuBarComponent.prototype, "openedChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CategoryMenuBarComponent.prototype, "opened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_domain_model__WEBPACK_IMPORTED_MODULE_1__["Domain"])
    ], CategoryMenuBarComponent.prototype, "domain", void 0);
    CategoryMenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-menu-bar',
            template: __webpack_require__(/*! ./category-menu-bar.component.html */ "./src/app/category/category-menu-bar/category-menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./category-menu-bar.component.css */ "./src/app/category/category-menu-bar/category-menu-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryMenuBarComponent);
    return CategoryMenuBarComponent;
}());



/***/ }),

/***/ "./src/app/category/category-toplic-list/category-topic-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/category/category-toplic-list/category-topic-list.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.panel-list-container {\r\n  font-size: 13px;\r\n  line-height: 16px;\r\n}\r\n\r\n.panel-container {\r\n  padding-top: 0;\r\n}\r\n\r\nmat-expansion-panel.mat-expansion-panel {\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.panel-list-container {\r\n  padding-top: 0;\r\n  margin-top: 0;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  font-family: Lato,sans-serif;\r\n  color: #34302d;\r\n}\r\n\r\n.category-list-item, div.mat-list-item-content {\r\n  padding: 5px !important;\r\n\r\n}\r\n\r\n.panel-header {\r\n}\r\n\r\n.btn-block {\r\n  height: 35px;\r\n  text-align: start;\r\n}\r\n\r\n.mat-expansion-panel-content, .mat-expansion-panel-body {\r\n  padding: 0 0px 0 0 !important;\r\n}\r\n\r\n.nested-list {\r\n  padding: 0 0px 0 0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category-toplic-list/category-topic-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/category/category-toplic-list/category-topic-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-list-container\">\n  <mat-list class=\"panel-container\">\n    <mat-expansion-panel mat-list-item *ngFor=\"let topicList of topicLists\">\n      <mat-expansion-panel-header class=\"panel-header\">\n        {{ topicList.categoryName }}\n      </mat-expansion-panel-header>\n      <mat-list *ngFor=\"let topicItem of topicList.topicItems;let i = index\">\n        <button class=\"btn-block category-list-item\"\n                style=\"\n    color: rgb(117, 117, 117);\n    font-size: 15px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    z-index: 1;\"\n                mat-button\n                [routerLink]=\"['/category',topicList.categoryName, topicItem.name]\"\n                [queryParams]=\"{topicId: topicItem.id}\"\n                mat-list-item>\n          {{ i + 1 }} .&nbsp; {{ topicItem.name }}\n        </button>\n      </mat-list>\n    </mat-expansion-panel>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/category/category-toplic-list/category-topic-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/category/category-toplic-list/category-topic-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: CategoryTopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTopicListComponent", function() { return CategoryTopicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryTopicListComponent = /** @class */ (function () {
    function CategoryTopicListComponent() {
    }
    CategoryTopicListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CategoryTopicListComponent.prototype, "topicLists", void 0);
    CategoryTopicListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-topic-list',
            template: __webpack_require__(/*! ./category-topic-list.component.html */ "./src/app/category/category-toplic-list/category-topic-list.component.html"),
            styles: [__webpack_require__(/*! ./category-topic-list.component.css */ "./src/app/category/category-toplic-list/category-topic-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryTopicListComponent);
    return CategoryTopicListComponent;
}());



/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _category_bootstrap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-bootstrap.component */ "./src/app/category/category-bootstrap.component.ts");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _category_main_category_timeline_category_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-main/category-timeline/category-timeline.component */ "./src/app/category/category-main/category-timeline/category-timeline.component.ts");
/* harmony import */ var _category_main_category_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-main/category-main.component */ "./src/app/category/category-main/category-main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_introduction_category_introduction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-introduction/category-introduction.component */ "./src/app/category/category-introduction/category-introduction.component.ts");
/* harmony import */ var _category_introduction_topic_table_topic_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-introduction/topic-table/topic-table.component */ "./src/app/category/category-introduction/topic-table/topic-table.component.ts");
/* harmony import */ var _category_menu_bar_category_menu_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category-menu-bar/category-menu-bar.component */ "./src/app/category/category-menu-bar/category-menu-bar.component.ts");
/* harmony import */ var _category_toplic_list_category_topic_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category-toplic-list/category-topic-list.component */ "./src/app/category/category-toplic-list/category-topic-list.component.ts");
/* harmony import */ var _category_introduction_category_description_category_description_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category-introduction/category-description/category-description.component */ "./src/app/category/category-introduction/category-description/category-description.component.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/category/topic/topic.component.ts");
/* harmony import */ var _topic_topic_header_topic_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./topic/topic-header/topic-header.component */ "./src/app/category/topic/topic-header/topic-header.component.ts");
/* harmony import */ var _topic_paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./topic/paragraph/paragraph.component */ "./src/app/category/topic/paragraph/paragraph.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: 'category', component: _category_bootstrap_component__WEBPACK_IMPORTED_MODULE_3__["CategoryBootstrapComponent"],
        children: [
            { path: 'main', component: _category_main_category_main_component__WEBPACK_IMPORTED_MODULE_6__["CategoryMainComponent"] },
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            { path: ':categoryName', component: _category_introduction_category_introduction_component__WEBPACK_IMPORTED_MODULE_8__["CategoryIntroductionComponent"] },
            { path: ':categoryName/:topicName', component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_13__["TopicComponent"] },
        ]
    }
];
var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_4__["ServiceModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            ],
            declarations: [
                /*Side Components*/
                _category_menu_bar_category_menu_bar_component__WEBPACK_IMPORTED_MODULE_10__["CategoryMenuBarComponent"],
                _category_toplic_list_category_topic_list_component__WEBPACK_IMPORTED_MODULE_11__["CategoryTopicListComponent"],
                _category_main_category_timeline_category_timeline_component__WEBPACK_IMPORTED_MODULE_5__["CategoryTimelineComponent"],
                _category_introduction_topic_table_topic_table_component__WEBPACK_IMPORTED_MODULE_9__["TopicTableComponent"],
                /*Main Components*/
                _category_main_category_main_component__WEBPACK_IMPORTED_MODULE_6__["CategoryMainComponent"],
                _category_introduction_category_introduction_component__WEBPACK_IMPORTED_MODULE_8__["CategoryIntroductionComponent"],
                /*Bootstrap Component*/
                _category_bootstrap_component__WEBPACK_IMPORTED_MODULE_3__["CategoryBootstrapComponent"],
                _category_introduction_category_description_category_description_component__WEBPACK_IMPORTED_MODULE_12__["CategoryDescriptionComponent"],
                _topic_topic_component__WEBPACK_IMPORTED_MODULE_13__["TopicComponent"],
                _topic_topic_header_topic_header_component__WEBPACK_IMPORTED_MODULE_14__["TopicHeaderComponent"],
                _topic_paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_15__["ParagraphComponent"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/category/topic/paragraph/paragraph.component.css":
/*!******************************************************************!*\
  !*** ./src/app/category/topic/paragraph/paragraph.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.paragraph {\r\n  margin: 2em 0em;\r\n  padding: 2em 0em;\r\n  position: relative;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.paragraph h4 {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.paragraph p{\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  color: rgba(0, 0, 0, 0.8);\r\n  margin: 0.5em 0px 1em;\r\n  padding-bottom: 0em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/topic/paragraph/paragraph.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/category/topic/paragraph/paragraph.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"paragraph no example mt-3 mb-3\">\n  <h4 class=\"mat-h4\">\n    {{ paragraph.name }}\n    <mat-divider></mat-divider>\n  </h4>\n  <p> {{paragraph.description }} </p>\n  <div *ngIf=\"paragraph.code\" class=\"ui existing segment\">\n    <div class=\"ui attached top label\">\n      <span class=\"title\">Code Example</span>\n    </div>\n    <pre>\n      <code>\n        {{paragraph.code}}\n      </code>\n    </pre>\n  </div>\n</div>\n<app-paragraph *ngFor=\"let child of paragraph.children\" [paragraph]=\"child\" ></app-paragraph>\n"

/***/ }),

/***/ "./src/app/category/topic/paragraph/paragraph.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/category/topic/paragraph/paragraph.component.ts ***!
  \*****************************************************************/
/*! exports provided: ParagraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphComponent", function() { return ParagraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_paragraph_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/paragraph.model */ "./src/app/model/paragraph.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParagraphComponent = /** @class */ (function () {
    function ParagraphComponent() {
    }
    ParagraphComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_paragraph_model__WEBPACK_IMPORTED_MODULE_1__["Paragraph"])
    ], ParagraphComponent.prototype, "paragraph", void 0);
    ParagraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paragraph',
            template: __webpack_require__(/*! ./paragraph.component.html */ "./src/app/category/topic/paragraph/paragraph.component.html"),
            styles: [__webpack_require__(/*! ./paragraph.component.css */ "./src/app/category/topic/paragraph/paragraph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParagraphComponent);
    return ParagraphComponent;
}());



/***/ }),

/***/ "./src/app/category/topic/topic-header/topic-header.component.css":
/*!************************************************************************!*\
  !*** ./src/app/category/topic/topic-header/topic-header.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:host {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.introduction p {\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  color: rgba(0, 0, 0, 0.8);\r\n  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/category/topic/topic-header/topic-header.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/category/topic/topic-header/topic-header.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"ui dividing header\" fxLayout fxLayoutAlign=\"space-between\">\n  <span><mat-icon >lightbulb_outline</mat-icon>  {{ topic?.name }}</span>\n  <div class=\"sub header\">\n    <mat-icon>alarm</mat-icon>\n    {{topic?.basicTime.created | date : 'short'}}.\n  </div>\n</h2>\n<div class=\"introduction\">\n  <h3 class=\"ui header\">Topic Introduction</h3>\n  <p>{{ topic?.shortDescription }}</p>\n  <h3 class=\"ui header\">Topic Description</h3>\n  <p>{{ topic?.description}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/category/topic/topic-header/topic-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/category/topic/topic-header/topic-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: TopicHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicHeaderComponent", function() { return TopicHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_topic_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/topic.model */ "./src/app/model/topic.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicHeaderComponent = /** @class */ (function () {
    function TopicHeaderComponent() {
    }
    TopicHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_topic_model__WEBPACK_IMPORTED_MODULE_1__["Topic"])
    ], TopicHeaderComponent.prototype, "topic", void 0);
    TopicHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-header',
            template: __webpack_require__(/*! ./topic-header.component.html */ "./src/app/category/topic/topic-header/topic-header.component.html"),
            styles: [__webpack_require__(/*! ./topic-header.component.css */ "./src/app/category/topic/topic-header/topic-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopicHeaderComponent);
    return TopicHeaderComponent;
}());



/***/ }),

/***/ "./src/app/category/topic/topic.component.css":
/*!****************************************************!*\
  !*** ./src/app/category/topic/topic.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.youtube {\r\n  margin-top: 100px;\r\n  margin-bottom: 100px\r\n}\r\n\r\n.topic {\r\n  height: 100%;\r\n  font-weight: 400;\r\n  padding: 20px 50px 50px 20px;\r\n}\r\n\r\n.topic-content {\r\n  margin-top: 100px;\r\n}\r\n\r\n.next-topic {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  color: rgba(0,0,0,.54);\r\n  font-family: Roboto;\r\n  border-left: 4px solid #3f51b5;\r\n  background-color: #ebf1e7;\r\n  padding: 25px 20px;\r\n  margin: 30px 0;\r\n  width: auto;\r\n  font-size: 18px;\r\n  min-height: 56px;\r\n  padding: 0 8px;\r\n  flex-wrap: wrap-reverse\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/topic/topic.component.html":
/*!*****************************************************!*\
  !*** ./src/app/category/topic/topic.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group  class=\"topic\">\n  <mat-tab label=\"Topic\">\n    <app-about-domain [domainName]=\"domainName\" ></app-about-domain>\n\n    <div class=\"youtube\">\n      <app-youtube [youtubeId]=\"topic?.youtubeId\"></app-youtube>\n    </div>\n\n    <div class=\"topic-content ui main container\" >\n      <app-topic-header [topic]=\"topic\"></app-topic-header>\n      <app-paragraph *ngFor=\"let foobar of paragraphs\" [paragraph]=\"foobar\" ></app-paragraph>\n    </div>\n\n    <div class=\"next-topic\"\n      [ngStyle]=\"{color : hasNextTopic ? '#3f51b5' : 'rgba(0,0,0,.26)'}\">\n      <span>Next Topic</span>\n      <button mat-icon-button\n              [disabled]=\"!hasNextTopic\"\n              (click)=\"nextTopic()\" color=\"primary\" >\n        <mat-icon>arrow_forward</mat-icon>\n      </button>\n    </div>\n  </mat-tab>\n\n\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/category/topic/topic.component.ts":
/*!***************************************************!*\
  !*** ./src/app/category/topic/topic.component.ts ***!
  \***************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_domain_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/domain-repository.service */ "./src/app/service/domain-repository.service.ts");
/* harmony import */ var _service_topic_repository_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/topic-repository.service */ "./src/app/service/topic-repository.service.ts");
/* harmony import */ var _service_paragraph_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/paragraph-repository.service */ "./src/app/service/paragraph-repository.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TopicComponent = /** @class */ (function () {
    function TopicComponent(domainRepository, topicRepository, paragraphRepository, router, snackBar, route) {
        var _this = this;
        this.domainRepository = domainRepository;
        this.topicRepository = topicRepository;
        this.paragraphRepository = paragraphRepository;
        this.router = router;
        this.snackBar = snackBar;
        this.route = route;
        this.domainName = 'topic';
        this.hasNextTopic = true;
        this.route.queryParams.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return params['topicId']; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (topicId) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(_this.topicRepository.byId(topicId), _this.paragraphRepository.byTopic(topicId)); })).subscribe(function (_a) {
            var topic = _a[0], paragraphs = _a[1];
            _this.hasNextTopic = true;
            _this.topic = topic;
            _this.paragraphs = paragraphs;
        });
    }
    TopicComponent.prototype.ngOnInit = function () {
    };
    TopicComponent.prototype.nextTopic = function () {
        var _this = this;
        this.topicRepository
            .nextTopic(this.topic)
            .subscribe(function (topic) {
            if (topic != null) {
                _this.router.navigateByUrl('/category/' + _this.topic.category + '/' + topic.name + "?topicId=" + topic.id);
                window.scroll(0, 0);
            }
            else {
                _this.hasNextTopic = false;
                _this.snackBar.open('Sorry ! The topic is last topic! ', null, {
                    duration: 2000
                });
            }
        });
    };
    TopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic',
            template: __webpack_require__(/*! ./topic.component.html */ "./src/app/category/topic/topic.component.html"),
            styles: [__webpack_require__(/*! ./topic.component.css */ "./src/app/category/topic/topic.component.css")]
        }),
        __metadata("design:paramtypes", [_service_domain_repository_service__WEBPACK_IMPORTED_MODULE_4__["DomainRepository"],
            _service_topic_repository_service__WEBPACK_IMPORTED_MODULE_5__["TopicRepository"],
            _service_paragraph_repository_service__WEBPACK_IMPORTED_MODULE_6__["ParagraphRepository"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TopicComponent);
    return TopicComponent;
}());



/***/ }),

/***/ "./src/app/interceptor/xhrInterceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/interceptor/xhrInterceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: XhrInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptor", function() { return XhrInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    };
    ;
    XhrInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_4__["ServiceModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-card {\r\n  height: 600px;\r\n}\r\n\r\nmat-form-field {\r\n  min-width: 250px;\r\n  display: block;\r\n  margin: 20px;\r\n}\r\n\r\nmat-card-footer {\r\n  margin-top: 55px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nmat-card-header {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.container {\r\n  height: 800px;\r\n}\r\n\r\nmat-card {\r\n  padding: 40px;\r\n}\r\n\r\nmat-card-header h1 {\r\n  font-family: Lato, Roboto;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  line-height: 32px;\r\n  margin: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout fxLayoutAlign=\"center center\">\n  <mat-tab-group>\n    <mat-tab label=\"Blogger Login\">\n      <mat-card fxFlex=\"400px\">\n        <mat-card-header fxLayout fxLayoutAlign=\"center center\">\n          <mat-card-title>\n            <h1>\n              Login\n              <mat-icon [color]=\"form.hasError('credentials') ? 'accent' : 'primary'\">favorite</mat-icon>\n            </h1>\n            <mat-divider [inset]=\"true\"></mat-divider>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <form [formGroup]=\"form\">\n            <mat-form-field>\n              <span matPrefix>* &nbsp;</span>\n              <input type=\"email\"\n                     formControlName=\"email\"\n                     #emailInput\n                     required\n                     email\n                     matInput\n                     placeholder=\"Email\">\n              <mat-hint align=\"start\">Enter your email</mat-hint>\n              <mat-hint align=\"end\">{{ emailInput.value.length }} / 40</mat-hint>\n              <mat-error *ngIf=\"form.hasError('credentials')\">Your Credential is not correct</mat-error>\n              <mat-icon [matBadgeHidden]=\"!form.hasError('credentials')\"\n                        matBadge=\"!!\"\n                        matBadgeColor=\"accent\"\n                        matBadgeOverlap=\"true\"\n                        matSuffix>mail\n              </mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n              <span matPrefix>* &nbsp;</span>\n              <input type=\"password\"\n                     formControlName=\"password\"\n                     #passwordInput\n                     minlength=\"4\"\n                     required\n                     matInput\n                     placeholder=\"Password\">\n              <mat-hint align=\"start\">Enter your password</mat-hint>\n              <mat-hint align=\"end\">{{ passwordInput.value.length }} / 40</mat-hint>\n              <mat-error *ngIf=\"form.hasError('credentials')\">Your Credential is not correct</mat-error>\n              <mat-icon matSuffix\n                        [matBadgeHidden]=\"!form.hasError('credentials')\"\n                        matBadge=\"!!\"\n                        matBadgeColor=\"accent\"\n                        matBadgeOverlap=\"true\">vpn_key\n              </mat-icon>\n            </mat-form-field>\n          </form>\n        </mat-card-content>\n        <mat-card-footer fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"5px\">\n          <button mat-raised-button (click)=\"login(emailInput.value, passwordInput.value)\" color=\"primary\">Login</button>\n          <button mat-raised-button (click)=\"goback()\" color=\"primary\">Go Back</button>\n        </mat-card-footer>\n      </mat-card>\n    </mat-tab>\n    <mat-tab label=\"Social Login\">\n      <mat-card fxFlex=\"400px\">\n        <mat-card-header fxLayout fxLayoutAlign=\"center center\">\n          <mat-card-title>\n            <h1>\n              Social Login\n              <mat-icon color=\"primary\" svgIcon=\"messenger\">favorite</mat-icon>\n            </h1>\n            <mat-divider [inset]=\"true\"></mat-divider>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content fxLayout=\"row no-wrap\" fxLayoutAlign=\"space-evenly\" style=\"min-height: 150px;\">\n          <a mat-raised-button\n             *ngFor=\"let social of socials?.socials\"\n             [href]=\"socials.hostURL + social.loginPage\"\n             style=\"height: 40px;\" fxFlex=\"40%\">\n            <mat-icon [svgIcon]=\"social.imgName\"></mat-icon>\n            {{ social.name }}\n          </a>\n        </mat-card-content>\n        <mat-card-footer fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"5px\">\n          <button mat-raised-button (click)=\"goback()\" color=\"primary\">Go Back</button>\n        </mat-card-footer>\n      </mat-card>\n    </mat-tab>\n  </mat-tab-group>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth-service.service */ "./src/app/service/auth-service.service.ts");
/* harmony import */ var _model_blogger_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/blogger.model */ "./src/app/model/blogger.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, location, fb) {
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.fb = fb;
        this.form = this.build();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getSocials();
    };
    LoginComponent.prototype.build = function () {
        return this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService
            .authenticate(new _model_blogger_model__WEBPACK_IMPORTED_MODULE_2__["Login"](this.form.value['email'], this.form.value['password']))
            .subscribe(function (authenticate) {
            console.log(authenticate);
            if (authenticate) {
                _this.router.navigateByUrl('/');
            }
        }, function (error) {
            _this.form.setErrors({ credentials: true });
            console.log(_this.form.hasError('credentials'));
        });
    };
    LoginComponent.prototype.goback = function () {
        this.location.back();
    };
    LoginComponent.prototype.getSocials = function () {
        var _this = this;
        this.authService.socials().subscribe(function (socials) { return _this.socials = socials; });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/bootstrap.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/bootstrap.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/bootstrap.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/bootstrap.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-greeting></app-greeting>\n<dash-board></dash-board>\n<app-direction></app-direction>\n"

/***/ }),

/***/ "./src/app/main/bootstrap.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/bootstrap.component.ts ***!
  \*********************************************/
/*! exports provided: BootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function() { return BootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BootstrapComponent = /** @class */ (function () {
    function BootstrapComponent() {
    }
    BootstrapComponent.prototype.ngOnInit = function () {
    };
    BootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bootstrap',
            template: __webpack_require__(/*! ./bootstrap.component.html */ "./src/app/main/bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./bootstrap.component.css */ "./src/app/main/bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BootstrapComponent);
    return BootstrapComponent;
}());



/***/ }),

/***/ "./src/app/main/dash-board/dash-board.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/dash-board/dash-board.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/main/dash-board/dash-board.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/dash-board/dash-board.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <mat-grid-list cols=\"4\" rowHeight=\"310px\">\n    <mat-grid-tile [colspan]=\"3\" [rowspan]=\"2\">\n      <mat-card class=\"dashboard-card\" fxLayout>\n        <mat-card-header>\n          <mat-card-title>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\"\n                          fxLayout=\"row\"\n                          fxLayoutAlign=\"center\"\n                          style=\"overflow: auto\"\n                          fxLayoutGap=\"15px\">\n          <app-main-board></app-main-board>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"3\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title fxLayout fxLayoutAlign=\" center\">\n            <h2>Recent Topic</h2>\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div class=\"ui relaxed divided list\">\n            <div class=\"item\">\n              <i class=\"large github middle aligned icon\"></i>\n              <div class=\"content\">\n                <a class=\"header\">Semantic-Org/Semantic-UI</a>\n                <div class=\"description\">Updated 10 mins ago</div>\n              </div>\n            </div>\n            <div class=\"item\">\n              <i class=\"large github middle aligned icon\"></i>\n              <div class=\"content\">\n                <a class=\"header\">Semantic-Org/Semantic-UI-Docs</a>\n                <div class=\"description\">Updated 22 mins ago</div>\n              </div>\n            </div>\n            <div class=\"item\">\n              <i class=\"large github middle aligned icon\"></i>\n              <div class=\"content\">\n                <a class=\"header\">Semantic-Org/Semantic-UI-Meteor</a>\n                <div class=\"description\">Updated 34 mins ago</div>\n              </div>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n      <app-notice-board fxFlex></app-notice-board>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/main/dash-board/dash-board.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/dash-board/dash-board.component.ts ***!
  \*********************************************************/
/*! exports provided: DashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function() { return DashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent() {
    }
    DashBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dash-board',
            template: __webpack_require__(/*! ./dash-board.component.html */ "./src/app/main/dash-board/dash-board.component.html"),
            styles: [__webpack_require__(/*! ./dash-board.component.css */ "./src/app/main/dash-board/dash-board.component.css")]
        })
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "./src/app/main/dash-board/main-board/main-board.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main/dash-board/main-board/main-board.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.main-board-img {\r\n  background-size: cover;\r\n  width: calc(100% + 8px);\r\n  height: calc(100% - 100px);\r\n}\r\n\r\nmat-card-content p {\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n\r\n  font-family: Lato,sans-serif;\r\n  color: #34302d;\r\n}\r\n\r\n.main-board-footer {\r\n  margin-top: 5px;\r\n}\r\n\r\n.main-board-footer {\r\n  margin: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/dash-board/main-board/main-board.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/dash-board/main-board/main-board.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-board p-2\" fxLayout fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxFlexOffset=\"20px\">\n  <mat-card class=\"example-card\"\n            fxFlex\n            *ngFor=\"let domain of domains\">\n    <img mat-card-image\n         class=\"main-board-img\"\n         [src]=\"domain.imgPath + '.svg'\">\n    <mat-card-content>\n      <p>\n        {{ domain?.description }}\n      </p>\n    </mat-card-content>\n    <mat-card-footer class=\"main-board-footer\">\n      <button mat-raised-button\n              [disabled]=\"domain.name == 'Guides'\"\n              routerLink=\"/{{domain?.name.toLowerCase()}}\"\n              color=\"primary\">\n        Get Start\n      </button>\n    </mat-card-footer>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/main/dash-board/main-board/main-board.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/dash-board/main-board/main-board.component.ts ***!
  \********************************************************************/
/*! exports provided: MainBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBoardComponent", function() { return MainBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/merge */ "./node_modules/rxjs-compat/_esm5/operators/merge.js");
/* harmony import */ var _service_domain_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/domain-repository.service */ "./src/app/service/domain-repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainBoardComponent = /** @class */ (function () {
    function MainBoardComponent(domainRepository) {
        this.domainRepository = domainRepository;
        this.categoryDomainName = 'Category';
        this.guideDomainName = 'Guides';
        this.domains = [];
    }
    MainBoardComponent.prototype.ngOnInit = function () {
        this.getMainDomains();
    };
    MainBoardComponent.prototype.getMainDomains = function () {
        var _this = this;
        Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.domainRepository.byName(this.categoryDomainName), this.domainRepository.byName(this.guideDomainName))
            .subscribe(function (_a) {
            var domain1 = _a[0], domain2 = _a[1];
            _this.domains.push(domain1);
            _this.domains.push(domain2);
            console.log(_this.domains);
        });
    };
    MainBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-board',
            template: __webpack_require__(/*! ./main-board.component.html */ "./src/app/main/dash-board/main-board/main-board.component.html"),
            styles: [__webpack_require__(/*! ./main-board.component.css */ "./src/app/main/dash-board/main-board/main-board.component.css")]
        }),
        __metadata("design:paramtypes", [_service_domain_repository_service__WEBPACK_IMPORTED_MODULE_3__["DomainRepository"]])
    ], MainBoardComponent);
    return MainBoardComponent;
}());



/***/ }),

/***/ "./src/app/main/dash-board/notice-board/notice-board.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/main/dash-board/notice-board/notice-board.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.dashboard-card {\r\n  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;\r\n}\r\n\r\n.dashboard-card .summary a {\r\n  color: #3f51b5;\r\n  font-weight: 700;\r\n}\r\n\r\n.extra.text h3{\r\n  font-weight: bold;\r\n  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;\r\n}\r\n\r\n.dashboard-card-content {\r\n  max-height: 155px;\r\n  overflow: auto;\r\n}\r\n\r\n.header-icon {\r\n  cursor: pointer;\r\n  margin-right: 15px;\r\n}\r\n\r\n.extra.text {\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  font-family: Lato,sans-serif;\r\n  color: #34302d;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/dash-board/notice-board/notice-board.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/dash-board/notice-board/notice-board.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"dashboard-card\">\n  <mat-card-title>\n    <h2>\n      <mat-icon\n        class=\"header-icon\" #icon\n        (mouseover)=\"icon.color = 'primary'\"\n        (mouseleave)=\"icon.color = ''\">\n        notifications_none\n      </mat-icon>\n      Notice Board\n    </h2>\n    <mat-divider [inset]=\"true\"></mat-divider>\n  </mat-card-title>\n  <mat-card-content class=\"dashboard-card-content\" fxLayout=\"column\" fxLayoutAlign=\" center\">\n    <div class=\"ui feed\">\n      <div class=\"event\">\n        <div class=\"label\">\n          <img [src]=\"currentNotice?.blogger.avatarImgPath\">\n        </div>\n        <div class=\"content\">\n          <div class=\"summary\">\n            <a>{{currentNotice?.blogger.nickName }}</a> announced on the blog\n            <div class=\"date\">\n              {{currentNotice?.basicDate.daysAgo}} days ago\n            </div>\n          </div>\n          <div class=\"ui divider\"></div>\n          <div class=\"extra text\">\n            <h3 class=\"mat-h3\">{{ currentNotice?.title}}</h3>\n            {{ currentNotice?.content }}\n          </div>\n          <div class=\"meta\">\n            <a class=\"like\">\n              <i class=\"like icon\"></i> {{ currentNotice?.likes }} Likes\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-card-content>\n  <mat-card-footer>\n    <div class=\"btn-groups\" fxLayout fxLayoutAlign=\"end \" *ngIf=\"notices\">\n      <button mat-icon-button\n              color=\"primary\"\n              [disableRipple]=\"true\"\n              [disabled]=\"isFirstNotice()\" (click)=\"beforeNotice()\">\n        <mat-icon>arrow_backward</mat-icon>\n      </button>\n      <button mat-icon-button\n              color=\"primary\"\n              [disableRipple]=\"true\"\n              [disabled]=\"isLastNotice()\" (click)=\"nextNotice()\">\n        <mat-icon>arrow_forward</mat-icon>\n      </button>\n    </div>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/main/dash-board/notice-board/notice-board.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/dash-board/notice-board/notice-board.component.ts ***!
  \************************************************************************/
/*! exports provided: NoticeBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardComponent", function() { return NoticeBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_notice_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/notice-repository.service */ "./src/app/service/notice-repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticeBoardComponent = /** @class */ (function () {
    function NoticeBoardComponent(noticeRepository) {
        this.noticeRepository = noticeRepository;
    }
    NoticeBoardComponent.prototype.ngOnInit = function () {
        this.getNotices();
    };
    NoticeBoardComponent.prototype.getNotices = function () {
        var _this = this;
        this.noticeRepository.all()
            .subscribe(function (notices) {
            _this.notices = notices;
            _this.currentNotice = _this.notices[0];
        });
    };
    NoticeBoardComponent.prototype.isLastNotice = function () {
        return this.notices[this.notices.length - 1] == this.currentNotice;
    };
    NoticeBoardComponent.prototype.isFirstNotice = function () {
        return this.notices[0] == this.currentNotice;
    };
    NoticeBoardComponent.prototype.beforeNotice = function () {
        this.currentNotice = this.notices[this.currentIndex() - 1];
    };
    NoticeBoardComponent.prototype.nextNotice = function () {
        this.currentNotice = this.notices[this.currentIndex() + 1];
    };
    NoticeBoardComponent.prototype.currentIndex = function () {
        var _this = this;
        return this.notices.findIndex(function (notice) { return notice.id == _this.currentNotice.id; });
    };
    NoticeBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice-board',
            template: __webpack_require__(/*! ./notice-board.component.html */ "./src/app/main/dash-board/notice-board/notice-board.component.html"),
            styles: [__webpack_require__(/*! ./notice-board.component.css */ "./src/app/main/dash-board/notice-board/notice-board.component.css")]
        }),
        __metadata("design:paramtypes", [_service_notice_repository_service__WEBPACK_IMPORTED_MODULE_1__["NoticeRepository"]])
    ], NoticeBoardComponent);
    return NoticeBoardComponent;
}());



/***/ }),

/***/ "./src/app/main/direction/direction.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/direction/direction.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/direction/direction.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/direction/direction.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"features12 cid-qRenddRflW\" id=\"features12-21\">\n  <div class=\"container\">\n    <h2 class=\"mbr-section-title pb-2 mbr-fonts-style display-2\">Short Direction.</h2>\n    <h3 class=\"mbr-section-subtitle pb-3 mbr-fonts-style display-5\">Which one are you looking for?</h3>\n    <div class=\"media-container-row pt-5\">\n      <div class=\"block-content align-right\">\n        <div class=\"card pl-3 pr-3 pb-5\">\n          <div class=\"mbr-card-img-title\">\n            <div class=\"card-img pb-3\">\n              <span class=\"mbr-iconfont mbri-question\"></span>\n            </div>\n            <div class=\"mbr-crt-title\">\n              <h4 class=\"card-title py-2 mbr-crt-title mbr-fonts-style display-7\">\n                Guides\n              </h4>\n            </div>\n          </div>\n          <div class=\"card-box\">\n            <p class=\"mbr-text mbr-section-text mbr-fonts-style display-7\">\n              Publish your website to a local drive, FTP or host on Amazon S3, Google Cloud, Github Pages. Don't be a hostage to just one platform or service provider.\n            </p>\n          </div>\n        </div>\n        <div class=\"card pl-3 pr-3 pb-5\">\n          <div class=\"mbr-card-img-title\">\n            <div class=\"card-img pb-3\">\n              <span class=\"mbr-iconfont mbri-letter\"></span>\n            </div>\n            <div class=\"mbr-crt-title\">\n              <h4 class=\"card-title py-2 mbr-crt-title mbr-fonts-style display-7\">Contact</h4>\n            </div>\n          </div>\n          <div class=\"card-box\">\n            <p class=\"mbr-text mbr-section-text mbr-fonts-style display-7\">\n              Just drop the blocks into the page, edit content inline and publish - no technical skills required.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"mbr-figure\" style=\"width: 50%;\">\n        <img src=\"/assets/main/img2.jpg\" alt=\"Mobirise\" title=\"\">\n      </div>\n      <div class=\"block-content align-left  \">\n        <div class=\"card pl-3 pr-3 pb-5\">\n          <div class=\"mbr-card-img-title\">\n            <div class=\"card-img pb-3\">\n              <span class=\"mbri-features mbr-iconfont\"></span>\n            </div>\n            <div class=\"mbr-crt-title\">\n              <h4 class=\"card-title py-2 mbr-crt-title mbr-fonts-style display-7\">Category</h4>\n            </div>\n          </div>\n\n          <div class=\"card-box\">\n            <p class=\"mbr-text mbr-section-text mbr-fonts-style display-7\">\n              Mobirise offers several themes that include sliders, galleries, article blocks, counters, accordions, video and many more.\n            </p>\n          </div>\n        </div>\n\n        <div class=\"card pl-3 pr-3 pb-5\">\n          <div class=\"mbr-card-img-title\">\n            <div class=\"card-img pb-3\">\n              <span class=\"mbr-iconfont mbri-user\"></span>\n            </div>\n            <div class=\"mbr-crt-title\">\n              <h4 class=\"card-title py-2 mbr-crt-title mbr-fonts-style display-7\">About Me</h4>\n            </div>\n          </div>\n          <div class=\"card-box\">\n            <p class=\"mbr-text mbr-section-text mbr-fonts-style display-7\">\n              Mobirise gives you the freedom to develop as many websites as you like given the fact that it is a desktop app.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/main/direction/direction.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/direction/direction.component.ts ***!
  \*******************************************************/
/*! exports provided: DirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionComponent", function() { return DirectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirectionComponent = /** @class */ (function () {
    function DirectionComponent() {
    }
    DirectionComponent.prototype.ngOnInit = function () {
    };
    DirectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-direction',
            template: __webpack_require__(/*! ./direction.component.html */ "./src/app/main/direction/direction.component.html"),
            styles: [__webpack_require__(/*! ./direction.component.css */ "./src/app/main/direction/direction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectionComponent);
    return DirectionComponent;
}());



/***/ }),

/***/ "./src/app/main/greeting/greeting.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/greeting/greeting.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/greeting/greeting.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/greeting/greeting.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"mbr-section content5 cid-qRh9EUk2DD\" id=\"content5-23\">\n  <div class=\"container\">\n    <div class=\"media-container-row\">\n      <div class=\"title col-12 col-md-8\">\n        <h2 class=\"align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-1\">\n          Junior Developer's Blog\n        </h2>\n        <h3 class=\"mbr-section-subtitle align-center mbr-light mbr-white pb-3 mbr-fonts-style display-5\">\n          Fashion for Building App using Java EE , Spring and &nbsp;Angular\n        </h3>\n        <div class=\"mbr-section-btn align-center\">\n          <a class=\"btn btn-white-outline display-4\" routerLink=\"/category\">\n            LIVE CODING\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/main/greeting/greeting.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/greeting/greeting.component.ts ***!
  \*****************************************************/
/*! exports provided: GreetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingComponent", function() { return GreetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GreetingComponent = /** @class */ (function () {
    function GreetingComponent() {
    }
    GreetingComponent.prototype.ngOnInit = function () {
    };
    GreetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-greeting',
            template: __webpack_require__(/*! ./greeting.component.html */ "./src/app/main/greeting/greeting.component.html"),
            styles: [__webpack_require__(/*! ./greeting.component.css */ "./src/app/main/greeting/greeting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GreetingComponent);
    return GreetingComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _bootstrap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap.component */ "./src/app/main/bootstrap.component.ts");
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-board/dash-board.component */ "./src/app/main/dash-board/dash-board.component.ts");
/* harmony import */ var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./greeting/greeting.component */ "./src/app/main/greeting/greeting.component.ts");
/* harmony import */ var _direction_direction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./direction/direction.component */ "./src/app/main/direction/direction.component.ts");
/* harmony import */ var _dash_board_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dash-board/notice-board/notice-board.component */ "./src/app/main/dash-board/notice-board/notice-board.component.ts");
/* harmony import */ var _dash_board_main_board_main_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dash-board/main-board/main-board.component */ "./src/app/main/dash-board/main-board/main-board.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            ],
            declarations: [
                _bootstrap_component__WEBPACK_IMPORTED_MODULE_3__["BootstrapComponent"],
                _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__["DashBoardComponent"],
                _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__["GreetingComponent"],
                _direction_direction_component__WEBPACK_IMPORTED_MODULE_6__["DirectionComponent"],
                _dash_board_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_7__["NoticeBoardComponent"],
                _dash_board_main_board_main_board_component__WEBPACK_IMPORTED_MODULE_8__["MainBoardComponent"],
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/model/Youtube.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/Youtube.model.ts ***!
  \****************************************/
/*! exports provided: Youtube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return Youtube; });
var Youtube = /** @class */ (function () {
    function Youtube(id, title, description, publishedAt, thumbnailsUrl, videoUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.publishedAt = publishedAt;
        this.thumbnailsUrl = thumbnailsUrl;
        this.videoUrl = videoUrl;
    }
    return Youtube;
}());



/***/ }),

/***/ "./src/app/model/basic-time.model.ts":
/*!*******************************************!*\
  !*** ./src/app/model/basic-time.model.ts ***!
  \*******************************************/
/*! exports provided: BasicTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTime", function() { return BasicTime; });
/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-05-06 오전 10:19
 * @github : https://github.com/Siwoo-Kim
 **/
var BasicTime = /** @class */ (function () {
    function BasicTime(created, updated, lastUpdated) {
        this.created = created;
        this.updated = updated;
        this.lastUpdated = lastUpdated;
    }
    BasicTime.sortByLastUpdatedDesc = function (time1, time2) {
        return new Date(Date.parse(time2.lastUpdated)).valueOf() - new Date(Date.parse(time1.lastUpdated)).valueOf();
    };
    return BasicTime;
}());



/***/ }),

/***/ "./src/app/model/blogger.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/blogger.model.ts ***!
  \****************************************/
/*! exports provided: Login, Blogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blogger", function() { return Blogger; });
var Login = /** @class */ (function () {
    function Login(email, password) {
        this.email = email;
        this.password = password;
    }
    return Login;
}());

var Blogger = /** @class */ (function () {
    function Blogger(id, email, name, nickName, avatarImgName, avatarImgPath) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.nickName = nickName;
        this.avatarImgName = avatarImgName;
        this.avatarImgPath = avatarImgPath;
    }
    return Blogger;
}());



/***/ }),

/***/ "./src/app/model/category.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/category.model.ts ***!
  \*****************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(id, name, description, shortDescription, imgName, imgPath, basicTime, type) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.shortDescription = shortDescription;
        this.imgName = imgName;
        this.imgPath = imgPath;
        this.basicTime = basicTime;
        this.type = type;
    }
    Category.resolveRouterPath = function (category) {
        return '/category/' + category.name;
    };
    return Category;
}());



/***/ }),

/***/ "./src/app/model/domain.model.ts":
/*!***************************************!*\
  !*** ./src/app/model/domain.model.ts ***!
  \***************************************/
/*! exports provided: Domain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
var Domain = /** @class */ (function () {
    function Domain(id, name, description, basicTime, imgName, imgPath) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.basicTime = basicTime;
        this.imgName = imgName;
        this.imgPath = imgPath;
    }
    return Domain;
}());



/***/ }),

/***/ "./src/app/model/paragraph.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/paragraph.model.ts ***!
  \******************************************/
/*! exports provided: Paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
var Paragraph = /** @class */ (function () {
    function Paragraph(id, name, description, code, children) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.code = code;
        this.children = children;
    }
    return Paragraph;
}());



/***/ }),

/***/ "./src/app/model/topic.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/topic.model.ts ***!
  \**************************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
var Topic = /** @class */ (function () {
    function Topic(id, name, youtubeId, description, shortDescription, basicTime, reating, category) {
        this.id = id;
        this.name = name;
        this.youtubeId = youtubeId;
        this.description = description;
        this.shortDescription = shortDescription;
        this.basicTime = basicTime;
        this.reating = reating;
        this.category = category;
    }
    return Topic;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/bootstrap.component */ "./src/app/main/bootstrap.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _about_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about-me/about-me.component */ "./src/app/about/about-me/about-me.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'main', component: _main_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapComponent"] },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'login', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'about', component: _about_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"] },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/service/auth-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/auth-service.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_source_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-source.service */ "./src/app/service/data-source.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, dataSource, snackBar, router) {
        this.http = http;
        this.dataSource = dataSource;
        this.snackBar = snackBar;
        this.router = router;
        this.socialUrl = '/social';
        this.authenticated = false;
    }
    AuthService.prototype.socials = function () {
        return this.dataSource.get(this.socialUrl + "/list");
    };
    AuthService.prototype.checkSocialLogin = function () {
        var _this = this;
        return this.dataSource.get("" + this.socialUrl).subscribe(function (response) {
            if (response['name']) {
                _this.snackBar.open('Welcome Back! You are logged in by Social Login', null, {
                    duration: 2000,
                    horizontalPosition: 'end',
                    verticalPosition: 'top'
                });
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
        });
    };
    AuthService.prototype.authenticate = function (login) {
        var _this = this;
        return this.http.get('/rest/login', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set("authorization", "Basic " + btoa(login.email + ":" + login.password))
        })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
            if (response['name']) {
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return _this.authenticated; }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.post('/rest/logout', {})
            .subscribe(function () {
            _this.authenticated = false;
            _this.router.navigateByUrl('/');
            _this.snackBar.open('Logout Success!', null, {
                duration: 2000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _data_source_service__WEBPACK_IMPORTED_MODULE_5__["DataSource"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/category-repository.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/category-repository.service.ts ***!
  \********************************************************/
/*! exports provided: CategoryRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRepository", function() { return CategoryRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-source.service */ "./src/app/service/data-source.service.ts");
/* harmony import */ var _app_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.tokens */ "./src/app/app.tokens.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-05-06 오전 9:50
 * @github : https://github.com/Siwoo-Kim
 **/
var CategoryRepository = /** @class */ (function () {
    function CategoryRepository(dataSource) {
        this.dataSource = dataSource;
        this.categoryUrl = 'category';
    }
    CategoryRepository.prototype.all = function () {
        return this.dataSource.get(this.categoryUrl);
    };
    CategoryRepository.prototype.byName = function (name) {
        return this.dataSource.get(this.categoryUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set(_app_tokens__WEBPACK_IMPORTED_MODULE_2__["BY_NAME"].key, _app_tokens__WEBPACK_IMPORTED_MODULE_2__["BY_NAME"].value)
            .set('value', name));
    };
    CategoryRepository.prototype.allTopicLists = function () {
        return this.dataSource.get(this.categoryUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set(_app_tokens__WEBPACK_IMPORTED_MODULE_2__["REQUEST_TOPICLISTS"].key, _app_tokens__WEBPACK_IMPORTED_MODULE_2__["REQUEST_TOPICLISTS"].value));
    };
    CategoryRepository.prototype.searchAny = function (value) {
        return this.dataSource.get(this.categoryUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set(_app_tokens__WEBPACK_IMPORTED_MODULE_2__["BY_SEARCH"].key, _app_tokens__WEBPACK_IMPORTED_MODULE_2__["BY_SEARCH"].value)
            .set(_app_tokens__WEBPACK_IMPORTED_MODULE_2__["TERM_ANY"].key, _app_tokens__WEBPACK_IMPORTED_MODULE_2__["TERM_ANY"].value)
            .set('value', value));
    };
    CategoryRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_source_service__WEBPACK_IMPORTED_MODULE_1__["DataSource"]])
    ], CategoryRepository);
    return CategoryRepository;
}());



/***/ }),

/***/ "./src/app/service/data-source.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/data-source.service.ts ***!
  \************************************************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.tokens */ "./src/app/app.tokens.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-05-06 오전 8:43
 * @github : https://github.com/Siwoo-Kim
 **/
var DataSource = /** @class */ (function () {
    function DataSource(http, snackBar, backendUrl) {
        this.http = http;
        this.snackBar = snackBar;
        this.backendUrl = backendUrl;
    }
    DataSource.prototype.get = function (url, params) {
        return this.http.get(this.resolveUrl(url), { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('GET')));
    };
    DataSource.prototype.resolveUrl = function (url) {
        if (url.startsWith('/')) {
            url = url.substr(1, url.length);
        }
        return this.backendUrl + url;
    };
    DataSource.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            //Auauthrozied Handle Operation
            console.log(error.status == 401);
            if (error.status == 401) {
                _this.snackBar.open('You have not authorized. Please Login', null, {
                    duration: 2000,
                    horizontalPosition: 'end',
                    verticalPosition: 'top'
                });
            }
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    DataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_tokens__WEBPACK_IMPORTED_MODULE_2__["BACKEND_URL_TOKEN"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], String])
    ], DataSource);
    return DataSource;
}());



/***/ }),

/***/ "./src/app/service/domain-repository.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/domain-repository.service.ts ***!
  \******************************************************/
/*! exports provided: DomainRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainRepository", function() { return DomainRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-source.service */ "./src/app/service/data-source.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.tokens */ "./src/app/app.tokens.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-05-06 오전 8:42
 * @github : https://github.com/Siwoo-Kim
 **/




var DomainRepository = /** @class */ (function () {
    function DomainRepository(dataSource) {
        this.dataSource = dataSource;
        this.domainUrl = '/domain/';
    }
    DomainRepository.prototype.all = function () {
        return this.dataSource.get(this.domainUrl);
    };
    DomainRepository.prototype.byName = function (name) {
        return this.dataSource.get(this.domainUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set(_app_tokens__WEBPACK_IMPORTED_MODULE_3__["BY_NAME"].key, _app_tokens__WEBPACK_IMPORTED_MODULE_3__["BY_NAME"].value)
            .set('value', name));
    };
    DomainRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_source_service__WEBPACK_IMPORTED_MODULE_1__["DataSource"]])
    ], DomainRepository);
    return DomainRepository;
}());



/***/ }),

/***/ "./src/app/service/notice-repository.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/notice-repository.service.ts ***!
  \******************************************************/
/*! exports provided: NoticeRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeRepository", function() { return NoticeRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-source.service */ "./src/app/service/data-source.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticeRepository = /** @class */ (function () {
    function NoticeRepository(dataSource) {
        this.dataSource = dataSource;
        this.noticeUrl = '/notice';
    }
    NoticeRepository.prototype.all = function () {
        return this.dataSource.get(this.noticeUrl);
    };
    NoticeRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_source_service__WEBPACK_IMPORTED_MODULE_1__["DataSource"]])
    ], NoticeRepository);
    return NoticeRepository;
}());



/***/ }),

/***/ "./src/app/service/paragraph-repository.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/paragraph-repository.service.ts ***!
  \*********************************************************/
/*! exports provided: ParagraphRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphRepository", function() { return ParagraphRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-source.service */ "./src/app/service/data-source.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.tokens */ "./src/app/app.tokens.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParagraphRepository = /** @class */ (function () {
    function ParagraphRepository(dataSource) {
        this.dataSource = dataSource;
        this.paragraphUrl = '/paragraph';
    }
    ParagraphRepository.prototype.byTopic = function (topicId) {
        return this.dataSource.get(this.paragraphUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set(_app_tokens__WEBPACK_IMPORTED_MODULE_3__["BY_TOPIC"].key, _app_tokens__WEBPACK_IMPORTED_MODULE_3__["BY_TOPIC"].value)
            .set('value', topicId));
    };
    ParagraphRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_source_service__WEBPACK_IMPORTED_MODULE_1__["DataSource"]])
    ], ParagraphRepository);
    return ParagraphRepository;
}());



/***/ }),

/***/ "./src/app/service/service.module.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_source_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-source.service */ "./src/app/service/data-source.service.ts");
/* harmony import */ var _domain_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain-repository.service */ "./src/app/service/domain-repository.service.ts");
/* harmony import */ var _category_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-repository.service */ "./src/app/service/category-repository.service.ts");
/* harmony import */ var _topic_repository_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topic-repository.service */ "./src/app/service/topic-repository.service.ts");
/* harmony import */ var _youtube_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./youtube.service */ "./src/app/service/youtube.service.ts");
/* harmony import */ var _paragraph_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paragraph-repository.service */ "./src/app/service/paragraph-repository.service.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/service/auth-service.service.ts");
/* harmony import */ var _interceptor_xhrInterceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../interceptor/xhrInterceptor.service */ "./src/app/interceptor/xhrInterceptor.service.ts");
/* harmony import */ var _notice_repository_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notice-repository.service */ "./src/app/service/notice-repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptor_xhrInterceptor_service__WEBPACK_IMPORTED_MODULE_9__["XhrInterceptor"], multi: true },
                _data_source_service__WEBPACK_IMPORTED_MODULE_2__["DataSource"],
                _auth_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _youtube_service__WEBPACK_IMPORTED_MODULE_6__["YoutubeService"],
                _domain_repository_service__WEBPACK_IMPORTED_MODULE_3__["DomainRepository"],
                _category_repository_service__WEBPACK_IMPORTED_MODULE_4__["CategoryRepository"],
                _topic_repository_service__WEBPACK_IMPORTED_MODULE_5__["TopicRepository"],
                _paragraph_repository_service__WEBPACK_IMPORTED_MODULE_7__["ParagraphRepository"],
                _notice_repository_service__WEBPACK_IMPORTED_MODULE_10__["NoticeRepository"],
            ]
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/service/topic-repository.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/topic-repository.service.ts ***!
  \*****************************************************/
/*! exports provided: TopicRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicRepository", function() { return TopicRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-source.service */ "./src/app/service/data-source.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.tokens */ "./src/app/app.tokens.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicRepository = /** @class */ (function () {
    function TopicRepository(dataSource) {
        this.dataSource = dataSource;
        this.topicUrl = 'topic';
    }
    TopicRepository.prototype.byCategoryName = function (categoryName) {
        return this.dataSource.get(this.topicUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set(_app_tokens__WEBPACK_IMPORTED_MODULE_3__["BY_CATEGORY"].key, _app_tokens__WEBPACK_IMPORTED_MODULE_3__["BY_CATEGORY"].value)
            .set('value', categoryName));
    };
    TopicRepository.prototype.byId = function (topicId) {
        return this.dataSource.get(this.topicUrl + "/" + topicId);
    };
    TopicRepository.prototype.nextTopic = function (topic) {
        return this.dataSource.get(this.topicUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('by', 'index')
            .set('value', topic.id + ""));
    };
    TopicRepository.prototype.searchAny = function (value) {
        return this.dataSource.get(this.topicUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set(_app_tokens__WEBPACK_IMPORTED_MODULE_3__["BY_SEARCH"].key, _app_tokens__WEBPACK_IMPORTED_MODULE_3__["BY_SEARCH"].value)
            .set(_app_tokens__WEBPACK_IMPORTED_MODULE_3__["TERM_ANY"].key, _app_tokens__WEBPACK_IMPORTED_MODULE_3__["TERM_ANY"].value)
            .set('value', value));
    };
    TopicRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_source_service__WEBPACK_IMPORTED_MODULE_1__["DataSource"]])
    ], TopicRepository);
    return TopicRepository;
}());



/***/ }),

/***/ "./src/app/service/youtube.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/youtube.service.ts ***!
  \********************************************/
/*! exports provided: YoutubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeService", function() { return YoutubeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Youtube_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Youtube.model */ "./src/app/model/Youtube.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YoutubeService = /** @class */ (function () {
    function YoutubeService(http) {
        this.http = http;
        this.youtubeUrl = '/youtube';
    }
    YoutubeService.prototype.get = function (videoId) {
        if (videoId == null) {
            return;
        }
        return this.http
            .get("/rest" + this.youtubeUrl + "/" + videoId)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log(response);
            return new _model_Youtube_model__WEBPACK_IMPORTED_MODULE_1__["Youtube"](response['id'], response['snippet'].title, response['snippet'].description, response['snippet'].publishedAt, response['snippet'].thumbnails.high.url, response['videoUrl']);
        }));
    };
    YoutubeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], YoutubeService);
    return YoutubeService;
}());



/***/ }),

/***/ "./src/app/shared/about-domain/about-domain.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/about-domain/about-domain.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-domain-header span {\r\n  border-top: 3px solid #3f51b5;\r\n  padding-top: 3px;\r\n}\r\n\r\n.about-domain-content {\r\n  font-weight: normal;\r\n  text-decoration: underline;\r\n}\r\n\r\ndiv.media-content {\r\n  -ms-grid-row-align: start !important;\r\n      align-self: start !important;\r\n}\r\n\r\n.about-domain-author {\r\n  padding-top: 15px;\r\n  color:  #f67315;\r\n}\r\n\r\n.about-domain {\r\n  background-color: white\r\n}\r\n\r\nsection.timeline1 {\r\n  background-color: white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/about-domain/about-domain.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/about-domain/about-domain.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-domain testimonials3 cid-qRhwfbqoPy\" id=\"testimonials3-24\" >\n  <div class=\"container\">\n    <div class=\"media-container-row\">\n      <div class=\"media-content px-3 align-self-center mbr-white py-2\">\n        <p class=\"about-domain-header mbr-text testimonial-text mat-h2\" >\n          <span >\n            {{domain?.name}}\n          </span>\n        </p>\n        <p class=\"about-domain-content mbr-author-name pt-4 mb-2 mbr-fonts-style display-7\">\n          <span>\n            <em>\n              {{domain?.description}}\n            </em>\n          </span>\n        </p>\n        <p class=\"about-domain-author mbr-author-desc mbr-fonts-style display-7;\" >\n          -\n          &nbsp;\n          BY JUNIOR DEVELOPER\n        </p>\n      </div>\n      <div class=\"mbr-figure pl-lg-5\" style=\"width: 60%;\">\n        <img height=\"200px\" [src]=\"domain?.imgPath + '.svg'\" >\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/shared/about-domain/about-domain.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/about-domain/about-domain.component.ts ***!
  \***************************************************************/
/*! exports provided: AboutDomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDomainComponent", function() { return AboutDomainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_domain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/domain.model */ "./src/app/model/domain.model.ts");
/* harmony import */ var _service_domain_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/domain-repository.service */ "./src/app/service/domain-repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutDomainComponent = /** @class */ (function () {
    function AboutDomainComponent(domainRepository) {
        this.domainRepository = domainRepository;
    }
    Object.defineProperty(AboutDomainComponent.prototype, "domainName", {
        set: function (domainName) {
            var _this = this;
            this.domainRepository.byName(domainName)
                .subscribe(function (_domain) { return _this.domain = _domain; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    AboutDomainComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_domain_model__WEBPACK_IMPORTED_MODULE_1__["Domain"])
    ], AboutDomainComponent.prototype, "domain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], AboutDomainComponent.prototype, "domainName", null);
    AboutDomainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-domain',
            template: __webpack_require__(/*! ./about-domain.component.html */ "./src/app/shared/about-domain/about-domain.component.html"),
            styles: [__webpack_require__(/*! ./about-domain.component.css */ "./src/app/shared/about-domain/about-domain.component.css")]
        }),
        __metadata("design:paramtypes", [_service_domain_repository_service__WEBPACK_IMPORTED_MODULE_2__["DomainRepository"]])
    ], AboutDomainComponent);
    return AboutDomainComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\r\n  padding: 12px;\r\n  font-size: 12px;\r\n  margin-top: 40px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.footer-container {\r\n  padding: 8px;\r\n  width: 100% ;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nmat-icon {\r\n  height: 50px;\r\n  display: block;\r\n  color: white;\r\n}\r\n\r\n.start span {\r\n  display: inline-block;\r\n  line-height: 50px;\r\n  margin: 0 40px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.start a {\r\n  font-size: 15px;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.middle button {\r\n  font-family: Roboto,sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n\r\n.middle button a {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.middle button img {\r\n  height: 26px;\r\n  margin: 0 4px 3px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <div class=\"footer-container\"\n       fxLayout=\"row\">\n    <div class=\"start\" fxLayout fxFlexAlign=\"center center\">\n      <mat-icon svgIcon=\"angular-img-transparent\"\n                class=\"start-logo\"></mat-icon>\n      <span>\n        <a>Junior's Blog</a>\n      </span>\n    </div>\n    <div class=\"middle\" fxLayout fxFlexAlign=\"center center\">\n      <button mat-button>\n        <a href=\"https://github.com/Siwoo-Kim/siwoo-blog\" class=\"wrapper\">\n          <img src=\"/assets/img/svg/github-img.svg\">Github\n        </a>\n      </button>\n    </div>\n\n    <div class=\"end\">\n      <p>\n        Version: 1.0.0\n      </p>\n    </div>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.menu-bar {\r\n  background-color: white;\r\n}\r\n\r\nmat-toolbar {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.start button:first-child {\r\n  margin-right: 15px;\r\n}\r\n\r\n.search-field {\r\n  font-size: 0.7em;\r\n}\r\n\r\nmat-form-field {\r\n  color: white;\r\n}\r\n\r\n.mat-hint {\r\n  color: rgba(255, 255, 255, 0.54);\r\n}\r\n\r\n.container .ui.list {\r\n  margin-bottom: 0;\r\n  margin-top: 0;\r\n}\r\n\r\n.search .item {\r\n  margin-top: 7px;\r\n}\r\n\r\n.ui.list .list > a.item i.icon, .ui.list > a.item i.icon {\r\n  color: white !important;\r\n}\r\n\r\n.search a, .search i.icon {\r\n  color: white;\r\n}\r\n\r\n.search {\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n  font-family: \"Roboto Mono\", monospace;\r\n  font-size: 13px;\r\n  background-color: #333;\r\n  color: #fafafa;\r\n}\r\n\r\n.container {\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\"\n             [ngStyle]=\"{backgroundColor : searchHidden ? '' : '#333' }\" >\n  <!--Start-->\n  <div class=\"start\">\n    <!--Sidenav Opener-->\n    <button mat-icon-button\n            [color]=\"searchHidden ? '' : 'accent'\"\n            (click)=\"sidenavChange.emit()\">\n      <mat-icon>list</mat-icon>\n    </button>\n    <!--Home-->\n    <button mat-icon-button\n            [color]=\"searchHidden ? '' : 'accent'\"\n            routerLink=\"/\" >\n      <mat-icon>home</mat-icon>\n    </button>\n    <!--Category-->\n    <button mat-icon-button\n            [color]=\"searchHidden ? '' : 'accent'\"\n            routerLink=\"/category\">\n      <mat-icon>widgets</mat-icon>\n    </button>\n    <button mat-icon-button\n            routerLink=\"/about\"\n            [color]=\"searchHidden ? '' : 'accent'\">\n      <mat-icon>help</mat-icon>\n    </button>\n  </div>\n\n\n  <!--Search Field-->\n  <div class=\"end\">\n    <button mat-icon-button matTooltip=\"Login!\"\n            *ngIf=\"!authService.authenticated\"\n            [routerLink]=\"['/login']\"\n            style=\"margin-right: 8px\">\n      <mat-icon svgIcon=\"toggle_on\"></mat-icon>\n    </button>\n    <button mat-icon-button matTooltip=\"Logout!\"\n            *ngIf=\"authService.authenticated\"\n            (click)=\"logout()\"\n            style=\"margin-right: 8px\">\n      <mat-icon >exit_to_app</mat-icon>\n    </button>\n    <mat-form-field class=\"search-field\" color=\"primary\"\n                    [color]=\"searchHidden ? 'primary' : 'accent'\">\n      <input matInput\n             [formControl]=\"searchInput\"\n             (focus)=\"searchHidden = false\"\n             (blur)=\"searchHidden = true\"\n             placeholder=\"Search\"\n             maxlength=\"15\">\n      <mat-label>\n        <mat-icon [color]=\"searchHidden ? '' : 'accent'\" >search</mat-icon>\n      </mat-label>\n      <mat-icon matSuffix\n                [color]=\"searchHidden ? '' : 'accent'\">\n        {{ searchHidden ? 'sentiment_dissatisfied' : 'sentiment_very_satisfied' }}\n      </mat-icon>\n      <mat-hint align=\"start\" >Enter search Term</mat-hint>\n      <mat-hint align=\"end\">{{ searchInput.value.length }} / 15</mat-hint>\n    </mat-form-field>\n  </div>\n</mat-toolbar>\n<mat-toolbar class=\"search\"\n             *ngIf=\"!searchHidden\">\n  <div class=\"container\"\n       *ngIf=\"hasResult()\"\n       fxLayout\n       fxLayoutAlign=\"space-evenly start\" >\n    <div class=\"ui list\">\n      <a class=\"item\"\n         *ngFor=\"let category of categories\"\n         [routerLink]=\"['/category', category.name]\">\n        <i class=\"marker icon\"></i>\n        <div class=\"content\">\n          {{ category?.name }}\n        </div>\n      </a>\n    </div>\n    <div class=\"ui list\">\n      <a class=\"item\"\n         *ngFor=\"let topic of topics\"\n         [routerLink]=\"['/category',topic.category.name,topic.name]\"\n         [queryParams]=\"{topicId: topic.id}\">\n        <i class=\"code icon\"></i>\n        <div class=\"content\">\n          {{ topic?.name }}\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"container\" fxLayout\n       fxLayoutAlign=\"center\"\n       *ngIf=\"!hasResult()\">\n    <div class=\"ui list\">\n      <div class=\"item\" >\n        <i class=\"marker icon\"></i>\n        <div class=\"content\">\n          No Result\n        </div>\n      </div>\n    </div>\n  </div>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_category_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category-repository.service */ "./src/app/service/category-repository.service.ts");
/* harmony import */ var _service_topic_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/topic-repository.service */ "./src/app/service/topic-repository.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth-service.service */ "./src/app/service/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(categoryRepository, topicRepository, authService) {
        var _this = this;
        this.categoryRepository = categoryRepository;
        this.topicRepository = topicRepository;
        this.authService = authService;
        this.sidenavChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._searchHidden = true;
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("");
        this.searchInput.valueChanges
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(800), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (value) { return value != null && value.length > 2; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) { return console.log(value); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (value) {
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(_this.categoryRepository.searchAny(value), _this.topicRepository.searchAny(value));
        }))
            .subscribe(function (_a) {
            var _categories = _a[0], _topics = _a[1];
            _this.categories = null;
            _this.topics = null;
            _this.categories = _categories;
            _this.topics = _topics;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.hasResult = function () {
        return (this.topics != null && this.topics.length != 0)
            || (this.categories != null && this.categories.length != 0);
    };
    Object.defineProperty(HeaderComponent.prototype, "searchHidden", {
        get: function () {
            return this._searchHidden;
        },
        set: function (hidden) {
            var _this = this;
            if (hidden) {
                setTimeout(function () {
                    _this._searchHidden = hidden;
                }, 800);
            }
            else {
                this._searchHidden = hidden;
            }
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HeaderComponent.prototype, "sidenavChange", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_category_repository_service__WEBPACK_IMPORTED_MODULE_3__["CategoryRepository"],
            _service_topic_repository_service__WEBPACK_IMPORTED_MODULE_4__["TopicRepository"],
            _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/locator/locator.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/locator/locator.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\r\n  margin-top: 56px;\r\n}\r\n\r\n.ui.breadcrumb {\r\n  background-color: inherit;\r\n  color: white;\r\n}\r\n\r\n.paths a {\r\n  color: white;\r\n}\r\n\r\ni.icon.chevron.right {\r\n  color: orange;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/locator/locator.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/locator/locator.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <div class=\"ui small breadcrumb\" >\n    <span class=\"paths\" *ngFor=\"let path of paths;let i = index;let final = last\">\n      <a class=\"section\">{{path}}</a>\n      <i class=\"right chevron icon divider\" *ngIf=\"!final\" ></i>\n    </span>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/locator/locator.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/locator/locator.component.ts ***!
  \*****************************************************/
/*! exports provided: LocatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocatorComponent", function() { return LocatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/tap */ "./node_modules/rxjs-compat/_esm5/operators/tap.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocatorComponent = /** @class */ (function () {
    function LocatorComponent(router) {
        var _this = this;
        this.router = router;
        this.router.events.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.urlAfterRedirects; }))
            .subscribe(function (path) {
            _this.separatePath(path);
        });
    }
    LocatorComponent.prototype.ngOnInit = function () {
    };
    LocatorComponent.prototype.separatePath = function (path) {
        path = decodeURI(path);
        var reg = new RegExp('[?].+[=].+');
        var regResult = reg.exec(path);
        if (regResult) {
            var index = reg.exec(path).index;
            path = path.substr(0, index);
        }
        var segments = path.split('/');
        segments[0] = '/';
        this.paths = segments;
    };
    LocatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locator',
            template: __webpack_require__(/*! ./locator.component.html */ "./src/app/shared/locator/locator.component.html"),
            styles: [__webpack_require__(/*! ./locator.component.css */ "./src/app/shared/locator/locator.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LocatorComponent);
    return LocatorComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var materials = [
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: materials,
            exports: materials,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _locator_locator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locator/locator.component */ "./src/app/shared/locator/locator.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _about_domain_about_domain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-domain/about-domain.component */ "./src/app/shared/about-domain/about-domain.component.ts");
/* harmony import */ var _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./youtube/youtube.component */ "./src/app/shared/youtube/youtube.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
            ],
            exports: [
                _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _locator_locator_component__WEBPACK_IMPORTED_MODULE_5__["LocatorComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _about_domain_about_domain_component__WEBPACK_IMPORTED_MODULE_7__["AboutDomainComponent"],
                _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_8__["YoutubeComponent"],
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _locator_locator_component__WEBPACK_IMPORTED_MODULE_5__["LocatorComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _about_domain_about_domain_component__WEBPACK_IMPORTED_MODULE_7__["AboutDomainComponent"],
                _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_8__["YoutubeComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/youtube/youtube.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/youtube/youtube.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.youtube-title {\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  color: #1976d2;\r\n  text-transform: uppercase;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/youtube/youtube.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/youtube/youtube.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"center\">\n  <mat-card fxFlex=\"40%\" fxFlex.lt-md=\"100%\" >\n    <mat-card-header>\n      <mat-card-title >\n        <mat-icon svgIcon=\"youtube-img\"></mat-icon>\n        <span class=\"youtube-title\">{{ youtube?.title }}</span>\n      </mat-card-title>\n    </mat-card-header>\n    <img matCardImage [src]=\"youtube?.thumbnailsUrl\" >\n    <mat-card-content >\n      <div style=\"max-height: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\">\n      {{ youtube?.description  }}\n      </div>\n    </mat-card-content>\n    <mat-card-footer>\n      <a mat-raised-button class=\"btn-block\" [href]=\"youtube?.videoUrl\" >Watch</a>\n    </mat-card-footer>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/youtube/youtube.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/youtube/youtube.component.ts ***!
  \*****************************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_youtube_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/youtube.service */ "./src/app/service/youtube.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent(youtubeService) {
        this.youtubeService = youtubeService;
    }
    Object.defineProperty(YoutubeComponent.prototype, "youtubeId", {
        set: function (youtubeId) {
            var _this = this;
            if (youtubeId) {
                this.youtubeService.get(youtubeId)
                    .subscribe(function (youtube) { return _this.youtube = youtube; });
            }
        },
        enumerable: true,
        configurable: true
    });
    YoutubeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], YoutubeComponent.prototype, "youtubeId", null);
    YoutubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtube',
            template: __webpack_require__(/*! ./youtube.component.html */ "./src/app/shared/youtube/youtube.component.html"),
            styles: [__webpack_require__(/*! ./youtube.component.css */ "./src/app/shared/youtube/youtube.component.css")]
        }),
        __metadata("design:paramtypes", [_service_youtube_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeService"]])
    ], YoutubeComponent);
    return YoutubeComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Siwoo\IdeaProjects\springblog\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map