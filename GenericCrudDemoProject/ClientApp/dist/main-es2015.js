(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\" style=\"margin-top: 70px;\" >\r\n    <app-header></app-header> \r\n  <router-outlet></router-outlet>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">Angular Bootstrap Demo</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n  \r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/table1\">Table 1</a>\r\n          </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home works! </p>\r\n<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table1/table1.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table1/table1.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\">\r\n\r\n\r\n\r\n  <div class=\"col-md-7\">\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n\r\n        <div class=\"form-group\">\r\n          <select class=\"form-control\" (change)=\"onSelect($event.target.value)\">\r\n            <option *ngFor=\"let product of items\" [value]=\"product.id\">{{product.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-5\">\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <form class=\"form-horizontal\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-3 col-sm-12 col-ml-auto\">\r\n              <input class=\"form-input\"\r\n                     type=\"text\"\r\n                     id=\"globalSearch\"\r\n                     (input)=\"onChange($event.target.value)\"\r\n                     placeholder=\"Search\">\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"columns\">\r\n\r\n      <div class=\"column col-12\">\r\n        <ngx-table [configuration]=\"configuration\"\r\n                   [data]=\"data\"\r\n                   #table\r\n                   (event)=\"eventEmitted($event)\"\r\n                   [columns]=\"columns\"\r\n                   class=\"table-responsive\">\r\n        </ngx-table>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"col-md-5\">\r\n    <br>  <br><br>\r\n    <div style=\"height: 500px !important; overflow-y:scroll !important\">\r\n      <div *ngIf=\"currentItem\">\r\n        <form>\r\n  \r\n            <div *ngFor = \"let k of currentItemKeys; let ind = index;\">\r\n            <div *ngFor=\"let x of (currentItemCloneFields | keyvalue); let i = index; trackBy:trackByFn\">  \r\n   \r\n                <!-- ngIf=\"k == x.key\" -->\r\n     <div *ngIf=\"k == x.key && k != entKeyField\" class=\"form-group\">\r\n\r\n              <label for=\"name\">{{k}}</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"{{k}}\" required [(ngModel)]=\"currentItem[x.key]\" name={{k}}>\r\n            </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n        </form>\r\n        <!-- {{ currentItem | json }} -->\r\n      </div>\r\n\r\n    </div>\r\n    <br> \r\n    <div class=\"row\">\r\n       \r\n        <div class=\"col-md-5\">\r\n          <button type=\"button\" (click)=\"doSave(this.entity,currentItem.id)\" class=\"btn btn-success\">Save</button>\r\n          &nbsp; <button type=\"button\" (click)=\"doAdd()\" class=\"btn btn-info\">Add</button>\r\n          &nbsp;<button type=\"button\" class=\"btn btn-danger\" (click)=\"doDelete(this.currentItemIndex)\" >Delete</button>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-7\">\r\n        </div>\r\n\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n\r\n  tr:hover {\r\n    background-color: #ffff99;\r\n  }\r\n\r\n</style>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _table1_table1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table1/table1.component */ "./src/app/table1/table1.component.ts");





const routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "table1", component: _table1_table1_component__WEBPACK_IMPORTED_MODULE_4__["Table1Component"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let AppComponent = class AppComponent {
    constructor(toastrService) {
        this.toastrService = toastrService;
        this.title = 'ngxTable';
    }
    ngOnInit() {
        this.toastrService.overlayContainer = this.toastContainer;
    }
    onClick() {
        this.toastrService.success('in div', "excellent", { timeOut: 2000 });
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"], { static: true })
], AppComponent.prototype, "toastContainer", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _table1_table1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table1/table1.component */ "./src/app/table1/table1.component.ts");
/* harmony import */ var ngx_easy_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-easy-table */ "./node_modules/ngx-easy-table/fesm2015/ngx-easy-table.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _table1_table1_component__WEBPACK_IMPORTED_MODULE_12__["Table1Component"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastContainerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_easy_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/generic.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/generic.service.ts ***!
  \*********************************************/
/*! exports provided: GenericService, ApiSend, ApiSendSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericService", function() { return GenericService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiSend", function() { return ApiSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiSendSave", function() { return ApiSendSave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GenericService = class GenericService {
    constructor(http) {
        this.http = http;
        // readonly rootURL = 'http://localhost:53520/api';
        //readonly rootURL = 'http://localhost:53149/api';
        this.rootURL = 'https://genericcrudwebapp.azurewebsites.net/api';
    }
    getItem(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        headers.append("access-control-allow-methods", "POST, PUT, DELETE, GET, OPTIONS");
        var url = this.rootURL + '/Generic/GetItemById?id=' + id;
        var ret = this.http.get(url);
        return ret;
    }
    getItems(entName) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        headers.append("access-control-allow-methods", "POST, PUT, DELETE, GET, OPTIONS");
        var url = this.rootURL + '/Generic/getItems?entName=' + entName;
        var ret = this.http.get(url);
        return ret;
    }
    getItemsSql(ent, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        headers.append("access-control-allow-methods", "POST, PUT, DELETE, GET, OPTIONS");
        var obj = new ApiSend();
        obj.p_entity = ent;
        obj.p_entity_sql = ent;
        obj.p_sqlWhere = "id = " + id;
        obj.p_entity_sql = ent;
        var url = this.rootURL + '/Generic/GetItemsSQL';
        var ret = this.http.post(url, obj);
        return ret;
    }
    updateItem(ent, id, fldName, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        var headers2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        headers.append("access-control-allow-methods", "POST, PUT, DELETE, GET, OPTIONS");
        let options = {
            headers: headers
        };
        var obj = new ApiSendSave();
        obj.p_entity = ent;
        obj.p_recId = id;
        obj.p_primeKey = fldName;
        obj.record = data;
        var url2 = this.rootURL + '/Generic/UpdateItem';
        var ret = this.http.post(url2, obj, options);
        return ret;
    }
    deleteItem(ent, id, fldName, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        var headers2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        headers.append("access-control-allow-methods", "POST, PUT, DELETE, GET, OPTIONS");
        let options = {
            headers: headers
        };
        var obj = new ApiSendSave();
        obj.p_entity = ent;
        obj.p_recId = id;
        obj.p_primeKey = fldName;
        obj.record = data;
        var url2 = this.rootURL + '/Generic/deleteItem';
        var ret = this.http.post(url2, obj, options);
        return ret;
    }
    updateItem2(ent, id, fldName, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        headers.append("access-control-allow-methods", "POST, PUT, DELETE, GET, OPTIONS");
        var obj = new ApiSend();
        obj.p_entity = ent;
        obj.p_entity_sql = ent;
        obj.p_sqlWhere = "id = " + id;
        obj.p_entity_sql = ent;
        var url = this.rootURL + '/Generic/GetItemsSQL';
        var ret = this.http.post(url, obj);
        return ret;
    }
};
GenericService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GenericService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GenericService);

class ApiSend {
}
class ApiSendSave {
}


/***/ }),

/***/ "./src/app/table1/table-functions.ts":
/*!*******************************************!*\
  !*** ./src/app/table1/table-functions.ts ***!
  \*******************************************/
/*! exports provided: TableFunctionsService, retObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFunctionsService", function() { return TableFunctionsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retObject", function() { return retObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tableConfigData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableConfigData */ "./src/app/table1/tableConfigData.ts");



let TableFunctionsService = class TableFunctionsService {
    constructor() {
        this.columns = _tableConfigData__WEBPACK_IMPORTED_MODULE_2__["EntityVariables"].entityGridColumns;
        this.retVal = _tableConfigData__WEBPACK_IMPORTED_MODULE_2__["EntityVariables"].entityGridColumns;
    }
    DoChangeColumns(entName) {
        var ret = new retObject();
        let obj = this.retVal.find(obj => obj["name"] == entName);
        ret.columns = obj.columns;
        ret.keyField = obj.entKeyField;
        return ret;
    }
};
TableFunctionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TableFunctionsService);

class retObject {
}


/***/ }),

/***/ "./src/app/table1/table1.component.scss":
/*!**********************************************!*\
  !*** ./src/app/table1/table1.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*! Based on Spectre.css v0.4.5 | MIT License | github.com/picturepan2/spectre */\n.ngx-container {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n.ngx-table {\n  color: #50596c;\n  border-collapse: collapse;\n  border-spacing: 0;\n  display: table;\n  font-family: Montserrat, Verdana, serif;\n  font-size: 14px;\n  text-align: left;\n  width: 100%;\n}\n.ngx-table td {\n  border-bottom: 1px solid #e7e9ed;\n  padding: 12px 6px;\n}\n.ngx-table th {\n  padding: 12px 6px;\n  border-bottom: 2px solid #e7e9ed;\n}\n.ngx-table__table-row--selected, .ngx-table__table-col--selected, .ngx-table__table-cell--selected {\n  background: #e7e9ed !important;\n}\n.ngx-table__table-no-results {\n  text-align: center;\n}\n.ngx-table__table-loader-wrapper {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.ngx-table__body-loading:hover {\n  background: 0 !important;\n}\n.ngx-table__table-loader {\n  -webkit-animation: spin 0.6s linear infinite;\n          animation: spin 0.6s linear infinite;\n  border: 1px solid #e7e9ed;\n  border-radius: 50%;\n  border-top-color: #50596c;\n  height: 1.8rem;\n  width: 1.8rem;\n}\n.ngx-table__table-row-context-menu {\n  position: absolute;\n}\n.ngx-table__header-search {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: #fff none;\n  border: 0.05rem solid #e7e9ed;\n  border-radius: 0.1rem;\n  color: #50596c;\n  display: block;\n  font-size: 0.8rem;\n  height: 1.47rem;\n  line-height: 1rem;\n  max-width: 100%;\n  outline: 0;\n  padding: 0.15rem 0.3rem;\n  position: relative;\n  width: 97%;\n}\n.ngx-table__header-cell {\n  position: relative;\n}\n.ngx-table__header-cell .pointer {\n  cursor: pointer;\n}\n.ngx-table__horizontal-scroll {\n  display: block;\n  overflow-x: scroll;\n  white-space: nowrap;\n}\n.ngx-table__horizontal-scroll::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 3px;\n  height: 10px;\n}\n.ngx-table__horizontal-scroll::-webkit-scrollbar-thumb {\n  background-color: grey;\n}\n.ngx-table__column-resizer {\n  background-color: #e7e9ed;\n  cursor: col-resize;\n  display: block;\n  height: 20px;\n  margin-top: 10px;\n  position: absolute;\n  padding: 0;\n  right: 0;\n  top: 0;\n  width: 2px;\n}\n.ngx-table__table--borderless > tbody > tr > td, .ngx-table__table--borderless > thead > tr > th {\n  border-bottom: 0 !important;\n}\n.ngx-table__table--hoverable > tbody tr:hover {\n  background: #f6f7f9;\n}\n.ngx-table__table--striped > tbody tr:nth-of-type(odd) {\n  background: #f6f7f9;\n}\n.ngx-table__table--tiny > tbody > tr > td, .ngx-table__table--tiny > thead > tr > th {\n  border-bottom: 1px solid #e7e9ed;\n  padding: 4px 7px;\n}\n.ngx-table__table--normal > tbody > tr > td, .ngx-table__table--normal > thead > tr > th {\n  border-bottom: 1px solid #e7e9ed;\n  padding: 10px 6px;\n}\n.ngx-table__table--big > tbody > tr > td, .ngx-table__table--big > thead > tr > th {\n  border-bottom: 1px solid #e7e9ed;\n  padding: 12px 8px;\n}\n.ngx-table__table--dark {\n  background-color: #50596c;\n  color: #f6f7f9;\n}\n.ngx-table__table--dark > tbody tr:hover {\n  color: #50596c;\n}\n.ngx-table__table--dark.ngx-table__table--striped > tbody tr:nth-of-type(odd) {\n  background: #f6f7f9;\n  color: #50596c;\n}\n.ngx-table__table--dark-pagination ::ng-deep .ngx-pagination .current {\n  background: #f6f7f9;\n  color: #50596c;\n}\n.ngx-table__table--dark-pagination ::ng-deep pagination-template > ul {\n  -webkit-padding-start: 0;\n  -webkit-margin-before: 0;\n}\n.ngx-table__table--dark-pagination ::ng-deep pagination-template > ul > li {\n  border: 1px solid #e7e9ed;\n  background: #50596c;\n}\n.ngx-table__table--dark-pagination ::ng-deep pagination-template > ul > li.current {\n  border: 1px solid #50596c;\n}\n.ngx-table__table--dark-pagination ::ng-deep pagination-template > ul > li > a {\n  color: #f6f7f9;\n}\n.ngx-table__table--dark-pagination-wrapper {\n  background-color: #50596c;\n}\n.ngx-table__table--dark-pagination-range > #rowAmount > div > div {\n  color: #e7e9ed;\n  border: 1px solid #e7e9ed;\n  background-color: #50596c;\n}\n.ngx-table__table--dark-pagination-range > #rowAmount > div > ul {\n  color: #e7e9ed;\n  background-color: #50596c;\n}\n.ngx-table__table--dark-pagination-range > #rowAmount > div > ul > li {\n  color: #e7e9ed;\n  background-color: #50596c;\n}\n.ngx-table__header-title {\n  display: inline;\n}\n.ngx-menu {\n  background: #fff;\n  border: 1px solid #e7e9ed;\n  list-style: none;\n  margin: 0;\n  min-width: 60px;\n  z-index: 100;\n}\n.ngx-form-icon {\n  border-radius: 0.1rem;\n  background: #fff;\n  height: 0.9rem;\n  left: 0;\n  top: 0.2rem;\n  width: 0.9rem;\n  transition: all 0.2s ease;\n  border: 0.05rem solid #e7e9ed;\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n}\n.ngx-form-checkbox {\n  line-height: 1rem;\n  margin: 0.2rem 0;\n  min-height: 1.2rem;\n  padding: 0.2rem 0.4rem 0.4rem 1.6rem;\n  position: relative;\n}\n.ngx-form-checkbox input {\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n}\n.ngx-form-checkbox input:focus + .ngx-form-icon {\n  box-shadow: 0 0 0 0.1rem rgba(63, 134, 202, 0.2);\n  border-color: #3f86ca;\n}\n.ngx-form-checkbox input:checked + .ngx-form-icon {\n  background: #3f86ca;\n  border-color: #3f86ca;\n}\n.ngx-form-checkbox input:active + .ngx-form-icon {\n  background: #50596c;\n}\n.ngx-form-checkbox input:checked + .ngx-form-icon::before {\n  background-clip: padding-box;\n  border: 0.1rem solid #fff;\n  border-left-width: 0;\n  border-top-width: 0;\n  content: \"\";\n  height: 12px;\n  left: 50%;\n  margin-left: -3px;\n  margin-top: -8px;\n  position: absolute;\n  top: 50%;\n  transform: rotate(45deg);\n  width: 6px;\n}\n.ngx-icon {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  font-size: inherit;\n  font-style: normal;\n  height: 1em;\n  position: relative;\n  text-indent: -9999px;\n  vertical-align: middle;\n  width: 1em;\n}\n.ngx-icon::before, .ngx-icon::after {\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.ngx-icon-arrow-down::before, .ngx-icon-arrow-right::before, .ngx-icon-arrow-up::before {\n  border: 0.1rem solid #50596c;\n  border-bottom: 0;\n  border-right: 0;\n  height: 0.65em;\n  width: 0.65em;\n}\n.ngx-icon-arrow-down::before {\n  transform: translate(-50%, -75%) rotate(225deg);\n}\n.ngx-icon-arrow-right::before {\n  transform: translate(-75%, -50%) rotate(135deg);\n}\n.ngx-icon-arrow-up::before {\n  transform: translate(-50%, -25%) rotate(45deg);\n}\n.ngx-icon-menu::before {\n  background: #50596c;\n  box-shadow: 0 -0.35em, 0 0.35em;\n  content: \"\";\n  height: 0.1rem;\n  width: 100%;\n}\n.ngx-icon-pin {\n  border-radius: 50%;\n  border: 4px solid #50596c;\n  width: 11px;\n  height: 11px;\n}\n.ngx-icon-more::before {\n  background: #50596c;\n  border-radius: 50%;\n  box-shadow: 0 -0.4em, 0 0.4em;\n  height: 3px;\n  width: 3px;\n}\n.ngx-dropdown {\n  display: inline;\n  position: relative;\n  float: right;\n}\n.ngx-dropdown .ngx-menu {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  left: auto;\n}\n.ngx-dropdown a {\n  color: #50596c;\n}\n.ngx-btn-group {\n  display: inline;\n}\n.ngx-draggable-row {\n  cursor: move;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 1px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  padding-top: 9px;\n  padding-left: 4px;\n  display: table;\n  table-layout: fixed;\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.ngx-draggable-row-area.cdk-drop-list-dragging .ngx-draggable-row:not(.cdk-drag-placeholder) {\n  transition: transform 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.ngx-table__header-cell--draggable {\n  cursor: move;\n  background-color: white;\n}\n.ngx-table__header--draggable.cdk-drop-list-dragging .ngx-table__header-cell--draggable:not(.cdk-drag-placeholder) {\n  transition: transform 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.ngx-pagination {\n  font-family: Montserrat, Verdana, serif;\n  display: inline-block;\n  margin-left: 0;\n  margin-bottom: 1rem;\n  -webkit-padding-start: 0;\n  -webkit-margin-before: 0;\n}\n.ngx-pagination::before, .ngx-pagination::after {\n  content: \" \";\n  display: table;\n}\n.ngx-pagination::after {\n  clear: both;\n}\n.ngx-pagination li {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  margin-right: 0.0625rem;\n  border-radius: 0;\n  border: 1px solid #e7e9ed;\n}\n.ngx-pagination li.current {\n  border: 1px solid #50596c;\n}\n.ngx-pagination li {\n  display: inline-block;\n}\n.ngx-pagination a,\n.ngx-pagination button {\n  color: #50596c;\n  display: block;\n  padding: 0.1875rem 0.625rem;\n  border-radius: 0;\n}\n.ngx-pagination a:hover,\n.ngx-pagination button:hover {\n  background: #e6e6e6;\n}\n.ngx-pagination .current {\n  padding: 0.1875rem 0.625rem;\n  background: #3f86ca;\n  color: #fefefe;\n  cursor: default;\n}\n.ngx-pagination .disabled {\n  padding: 0.1875rem 0.625rem;\n  color: #cacaca;\n  cursor: default;\n}\n.ngx-pagination .disabled:hover {\n  background: transparent;\n}\n.ngx-pagination a, .ngx-pagination button {\n  cursor: pointer;\n}\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before {\n  content: \"«\";\n  display: inline-block;\n  margin-right: 0.5rem;\n}\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: \"»\";\n  display: inline-block;\n  margin-left: 0.5rem;\n}\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n}\n.ngx-pagination .small-screen {\n  display: none;\n}\n.ngx-pagination-wrapper {\n  margin-top: 8px;\n}\n.ngx-pagination-range {\n  display: inline-block;\n  float: right;\n}\n.ngx-pagination-steps {\n  display: inline-block;\n}\n.ngx-pagination-range-dropdown {\n  margin-top: 0;\n}\n.ngx-pagination-range-dropdown-button-item {\n  cursor: pointer;\n  color: #50596c;\n  padding: 0.4rem;\n}\n.ngx-pagination-range--selected {\n  background-color: #f6f7f9;\n}\n.ngx-pagination-range-dropdown-button {\n  color: #50596c;\n  border: 1px solid #e7e9ed;\n  cursor: pointer;\n  padding: 4px;\n}\n.pinned-left {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  background-color: white;\n  box-shadow: 2px 0 0 rgba(128, 128, 128, 0.175);\n}\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0;\n  }\n\n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none;\n  }\n}\n.ngx-infinite-scroll-viewport {\n  display: block;\n  height: 250px;\n  overflow: auto;\n}\n.ngx-infinite-scroll-viewport tr,\n.ngx-infinite-scroll-viewport-thead {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUxL3RhYmxlMS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFibGUxL0M6XFx6enpYZmVyXFxjdXJyXFxudWdldEdlbmVyaWNDcnVkXFxHZW5lcmljQ3J1ZERlbW9Qcm9qZWN0XFxHZW5lcmljQ3J1ZERlbW9Qcm9qZWN0XFxDbGllbnRBcHBHZW5lcmljQ3J1ZC9ub2RlX21vZHVsZXNcXG5neC1lYXN5LXRhYmxlXFxzdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ01oQixnRkFBQTtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURMSjtBQ1FFO0VBQ0UsY0FWWTtFQVdaLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FETko7QUNRSTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUROTjtBQ1NJO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtBRFBOO0FDVUk7RUFDRSw4QkFBQTtBRFJOO0FDV0k7RUFDRSxrQkFBQTtBRFROO0FDWUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBRFZOO0FDYUk7RUFDRSx3QkFBQTtBRFhOO0FDY0k7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQW5EVTtFQW9EVixjQUFBO0VBQ0EsYUFBQTtBRFpOO0FDd0JJO0VBQ0Usa0JBQUE7QUR0Qk47QUMrQkk7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FqRlU7RUFrRlYsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRDdCTjtBQ2dDSTtFQUNFLGtCQUFBO0FEOUJOO0FDZ0NNO0VBQ0UsZUFB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IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qISBCYXNlZCBvbiBTcGVjdHJlLmNzcyB2MC40LjUgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vcGljdHVyZXBhbjIvc3BlY3RyZSAqL1xuLm5neC1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uZ3gtdGFibGUge1xuICBjb2xvcjogIzUwNTk2YztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgVmVyZGFuYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmd4LXRhYmxlIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U5ZWQ7XG4gIHBhZGRpbmc6IDEycHggNnB4O1xufVxuLm5neC10YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDEycHggNnB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U3ZTllZDtcbn1cbi5uZ3gtdGFibGVfX3RhYmxlLXJvdy0tc2VsZWN0ZWQsIC5uZ3gtdGFibGVfX3RhYmxlLWNvbC0tc2VsZWN0ZWQsIC5uZ3gtdGFibGVfX3RhYmxlLWNlbGwtLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2U3ZTllZCAhaW1wb3J0YW50O1xufVxuLm5neC10YWJsZV9fdGFibGUtbm8tcmVzdWx0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uZ3gtdGFibGVfX3RhYmxlLWxvYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ubmd4LXRhYmxlX19ib2R5LWxvYWRpbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAwICFpbXBvcnRhbnQ7XG59XG4ubmd4LXRhYmxlX190YWJsZS1sb2FkZXIge1xuICBhbmltYXRpb246IHNwaW4gMC42cyBsaW5lYXIgaW5maW5pdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U5ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzUwNTk2YztcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIHdpZHRoOiAxLjhyZW07XG59XG4ubmd4LXRhYmxlX190YWJsZS1yb3ctY29udGV4dC1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm5neC10YWJsZV9faGVhZGVyLXNlYXJjaCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmU7XG4gIGJvcmRlcjogMC4wNXJlbSBzb2xpZCAjZTdlOWVkO1xuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XG4gIGNvbG9yOiAjNTA1OTZjO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGhlaWdodDogMS40N3JlbTtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogMC4xNXJlbSAwLjNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDk3JTtcbn1cbi5uZ3gtdGFibGVfX2hlYWRlci1jZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5neC10YWJsZV9faGVhZGVyLWNlbGwgLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmd4LXRhYmxlX19ob3Jpem9udGFsLXNjcm9sbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubmd4LXRhYmxlX19ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMTBweDtcbn1cbi5uZ3gtdGFibGVfX2hvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4ubmd4LXRhYmxlX19jb2x1bW4tcmVzaXplciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U5ZWQ7XG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMnB4O1xufVxuLm5neC10YWJsZV9fdGFibGUtLWJvcmRlcmxlc3MgPiB0Ym9keSA+IHRyID4gdGQsIC5uZ3gtdGFibGVfX3RhYmxlLS1ib3JkZXJsZXNzID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLm5neC10YWJsZV9fdGFibGUtLWhvdmVyYWJsZSA+IHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjdmOTtcbn1cbi5uZ3gtdGFibGVfX3RhYmxlLS1zdHJpcGVkID4gdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNmNmY3Zjk7XG59XG4ubmd4LXRhYmxlX190YWJsZS0tdGlueSA+IHRib2R5ID4gdHIgPiB0ZCwgLm5neC10YWJsZV9fdGFibGUtLXRpbnkgPiB0aGVhZCA+IHRyID4gdGgge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTllZDtcbiAgcGFkZGluZzogNHB4IDdweDtcbn1cbi5uZ3gtdGFibGVfX3RhYmxlLS1ub3JtYWwgPiB0Ym9keSA+IHRyID4gdGQsIC5uZ3gtdGFibGVfX3RhYmxlLS1ub3JtYWwgPiB0aGVhZCA+IHRyID4gdGgge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTllZDtcbiAgcGFkZGluZzogMTBweCA2cHg7XG59XG4ubmd4LXRhYmxlX190YWJsZS0tYmlnID4gdGJvZHkgPiB0ciA+IHRkLCAubmd4LXRhYmxlX190YWJsZS0tYmlnID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U5ZWQ7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xufVxuLm5neC10YWJsZV9fdGFibGUtLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1OTZjO1xuICBjb2xvcjogI2Y2ZjdmOTtcbn1cbi5uZ3gtdGFibGVfX3RhYmxlLS1kYXJrID4gdGJvZHkgdHI6aG92ZXIge1xuICBjb2xvcjogIzUwNTk2Yztcbn1cbi5uZ3gtdGFibGVfX3RhYmxlLS1kYXJrLm5neC10YWJsZV9fdGFibGUtLXN0cmlwZWQgPiB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjdmOTtcbiAgY29sb3I6ICM1MDU5NmM7XG59XG4ubmd4LXRhYmxlX190YWJsZS0tZGFyay1wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiAjZjZmN2Y5O1xuICBjb2xvcjogIzUwNTk2Yztcbn1cbi5uZ3gtdGFibGVfX3RhYmxlLS1kYXJrLXBhZ2luYXRpb24gOjpuZy1kZWVwIHBhZ2luYXRpb24tdGVtcGxhdGUgPiB1bCB7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcbiAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAwO1xufVxuLm5neC10YWJsZV9fdGFibGUtLWRhcmstcGFnaW5hdGlvbiA6Om5nLWRlZXAgcGFnaW5hdGlvbi10ZW1wbGF0ZSA+IHVsID4gbGkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlOWVkO1xuICBiYWNrZ3JvdW5kOiAjNTA1OTZjO1xufVxuLm5neC10YWJsZV9fdGFibGUtLWRhcmstcGFnaW5hdGlvbiA6Om5nLWRlZXAgcGFnaW5hdGlvbi10ZW1wbGF0ZSA+IHVsID4gbGkuY3VycmVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDU5NmM7XG59XG4ubmd4LXRhYmxlX190YWJsZS0tZGFyay1wYWdpbmF0aW9uIDo6bmctZGVlcCBwYWdpbmF0aW9uLXRlbXBsYXRlID4gdWwgPiBsaSA+IGEge1xuICBjb2xvcjogI2Y2ZjdmOTtcbn1cbi5uZ3gtdGFibGVfX3RhYmxlLS1kYXJrLXBhZ2luYXRpb24td3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDU5NmM7XG59XG4ubmd4LXRhYmxlX190YWJsZS0tZGFyay1wYWdpbmF0aW9uLXJhbmdlID4gI3Jvd0Ftb3VudCA+IGRpdiA+IGRpdiB7XG4gIGNvbG9yOiAjZTdlOWVkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlOWVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1OTZjO1xufVxuLm5neC10YWJsZV9fdGFibGUtLWRhcmstcGFnaW5hdGlvbi1yYW5nZSA+ICNyb3dBbW91bnQgPiBkaXYgPiB1bCB7XG4gIGNvbG9yOiAjZTdlOWVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1OTZjO1xufVxuLm5neC10YWJsZV9fdGFibGUtLWRhcmstcGFnaW5hdGlvbi1yYW5nZSA+ICNyb3dBbW91bnQgPiBkaXYgPiB1bCA+IGxpIHtcbiAgY29sb3I6ICNlN2U5ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDU5NmM7XG59XG4ubmd4LXRhYmxlX19oZWFkZXItdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubmd4LW1lbnUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlOWVkO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgei1pbmRleDogMTAwO1xufVxuLm5neC1mb3JtLWljb24ge1xuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMC45cmVtO1xuICBsZWZ0OiAwO1xuICB0b3A6IDAuMnJlbTtcbiAgd2lkdGg6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYm9yZGVyOiAwLjA1cmVtIHNvbGlkICNlN2U5ZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubmd4LWZvcm0tY2hlY2tib3gge1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgbWFyZ2luOiAwLjJyZW0gMDtcbiAgbWluLWhlaWdodDogMS4ycmVtO1xuICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtIDAuNHJlbSAxLjZyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uZ3gtZm9ybS1jaGVja2JveCBpbnB1dCB7XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbn1cbi5uZ3gtZm9ybS1jaGVja2JveCBpbnB1dDpmb2N1cyArIC5uZ3gtZm9ybS1pY29uIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtIHJnYmEoNjMsIDEzNCwgMjAyLCAwLjIpO1xuICBib3JkZXItY29sb3I6ICMzZjg2Y2E7XG59XG4ubmd4LWZvcm0tY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5uZ3gtZm9ybS1pY29uIHtcbiAgYmFja2dyb3VuZDogIzNmODZjYTtcbiAgYm9yZGVyLWNvbG9yOiAjM2Y4NmNhO1xufVxuLm5neC1mb3JtLWNoZWNrYm94IGlucHV0OmFjdGl2ZSArIC5uZ3gtZm9ybS1pY29uIHtcbiAgYmFja2dyb3VuZDogIzUwNTk2Yztcbn1cbi5uZ3gtZm9ybS1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLm5neC1mb3JtLWljb246OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICNmZmY7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEycHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgd2lkdGg6IDZweDtcbn1cbi5uZ3gtaWNvbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxZW07XG59XG4ubmd4LWljb246OmJlZm9yZSwgLm5neC1pY29uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm5neC1pY29uLWFycm93LWRvd246OmJlZm9yZSwgLm5neC1pY29uLWFycm93LXJpZ2h0OjpiZWZvcmUsIC5uZ3gtaWNvbi1hcnJvdy11cDo6YmVmb3JlIHtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzUwNTk2YztcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBoZWlnaHQ6IDAuNjVlbTtcbiAgd2lkdGg6IDAuNjVlbTtcbn1cbi5uZ3gtaWNvbi1hcnJvdy1kb3duOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzUlKSByb3RhdGUoMjI1ZGVnKTtcbn1cbi5uZ3gtaWNvbi1hcnJvdy1yaWdodDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSwgLTUwJSkgcm90YXRlKDEzNWRlZyk7XG59XG4ubmd4LWljb24tYXJyb3ctdXA6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yNSUpIHJvdGF0ZSg0NWRlZyk7XG59XG4ubmd4LWljb24tbWVudTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzUwNTk2YztcbiAgYm94LXNoYWRvdzogMCAtMC4zNWVtLCAwIDAuMzVlbTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAwLjFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5neC1pY29uLXBpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiA0cHggc29saWQgIzUwNTk2YztcbiAgd2lkdGg6IDExcHg7XG4gIGhlaWdodDogMTFweDtcbn1cbi5uZ3gtaWNvbi1tb3JlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjNTA1OTZjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgLTAuNGVtLCAwIDAuNGVtO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDNweDtcbn1cbi5uZ3gtZHJvcGRvd24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLm5neC1kcm9wZG93biAubmd4LW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG4ubmd4LWRyb3Bkb3duIGEge1xuICBjb2xvcjogIzUwNTk2Yztcbn1cbi5uZ3gtYnRuLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLm5neC1kcmFnZ2FibGUtcm93IHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm5neC1kcmFnZ2FibGUtcm93LWFyZWEuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAubmd4LWRyYWdnYWJsZS1yb3c6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5uZ3gtdGFibGVfX2hlYWRlci1jZWxsLS1kcmFnZ2FibGUge1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubmd4LXRhYmxlX19oZWFkZXItLWRyYWdnYWJsZS5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5uZ3gtdGFibGVfX2hlYWRlci1jZWxsLS1kcmFnZ2FibGU6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBWZXJkYW5hLCBzZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDA7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbjo6YmVmb3JlLCAubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiBsaSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjA2MjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U5ZWQ7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiBsaS5jdXJyZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwNTk2Yztcbn1cblxuLm5neC1wYWdpbmF0aW9uIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmd4LXBhZ2luYXRpb24gYSxcbi5uZ3gtcGFnaW5hdGlvbiBidXR0b24ge1xuICBjb2xvcjogIzUwNTk2YztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm5neC1wYWdpbmF0aW9uIGE6aG92ZXIsXG4ubmd4LXBhZ2luYXRpb24gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbn1cblxuLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xuICBiYWNrZ3JvdW5kOiAjM2Y4NmNhO1xuICBjb2xvcjogI2ZlZmVmZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkIHtcbiAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xuICBjb2xvcjogI2NhY2FjYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiBhLCAubmd4LXBhZ2luYXRpb24gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIsKrXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGE6OmFmdGVyLFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCLCu1wiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiAuc2hvdy1mb3Itc3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiAuc21hbGwtc2NyZWVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5neC1wYWdpbmF0aW9uLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbi1yYW5nZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubmd4LXBhZ2luYXRpb24tc3RlcHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbi1yYW5nZS1kcm9wZG93biB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbi1yYW5nZS1kcm9wZG93bi1idXR0b24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM1MDU5NmM7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cblxuLm5neC1wYWdpbmF0aW9uLXJhbmdlLS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3Zjk7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbi1yYW5nZS1kcm9wZG93bi1idXR0b24ge1xuICBjb2xvcjogIzUwNTk2YztcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTllZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5waW5uZWQtbGVmdCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAycHggMCAwIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNzUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDFweCkge1xuICAubmd4LXBhZ2luYXRpb24ucmVzcG9uc2l2ZSAuc21hbGwtc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAubmd4LXBhZ2luYXRpb24ucmVzcG9uc2l2ZSBsaTpub3QoLnNtYWxsLXNjcmVlbik6bm90KC5wYWdpbmF0aW9uLXByZXZpb3VzKTpub3QoLnBhZ2luYXRpb24tbmV4dCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5uZ3gtaW5maW5pdGUtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubmd4LWluZmluaXRlLXNjcm9sbC12aWV3cG9ydCB0cixcbi5uZ3gtaW5maW5pdGUtc2Nyb2xsLXZpZXdwb3J0LXRoZWFkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufSIsIiRncmV5OiAjZTdlOWVkO1xuJGdyZXktbGlnaHRlcjogI2Y2ZjdmOTtcbiRncmV5LWRhcms6ICNmM2YzZjM7XG4kZGFyazogIzUwNTk2YztcbiRibHVlOiAjM2Y4NmNhO1xuJHByaW1hcnktY29sb3I6ICM1MDU5NmMgIWRlZmF1bHQ7XG4vKiEgQmFzZWQgb24gU3BlY3RyZS5jc3MgdjAuNC41IHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL3BpY3R1cmVwYW4yL3NwZWN0cmUgKi9cbi5uZ3gge1xuICAmLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJi10YWJsZSB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIFZlcmRhbmEsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5O1xuICAgICAgcGFkZGluZzogMTJweCA2cHg7XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogMTJweCA2cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGdyZXk7XG4gICAgfVxuXG4gICAgJl9fdGFibGUtcm93LS1zZWxlY3RlZCwgJl9fdGFibGUtY29sLS1zZWxlY3RlZCwgJl9fdGFibGUtY2VsbC0tc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZDogJGdyZXkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmX190YWJsZS1uby1yZXN1bHRzIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX190YWJsZS1sb2FkZXItd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgICZfX2JvZHktbG9hZGluZzpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJl9fdGFibGUtbG9hZGVyIHtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAuNnMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGhlaWdodDogMS44cmVtO1xuICAgICAgd2lkdGg6IDEuOHJlbTtcbiAgICB9XG5cbiAgICAmX19ib2R5LWVtcHR5IHtcbiAgICB9XG5cbiAgICAmX19zb3J0LWhlYWRlciB7XG4gICAgfVxuXG4gICAgJl9fdGFibGUtbWVudSB7XG4gICAgfVxuXG4gICAgJl9fdGFibGUtcm93LWNvbnRleHQtbWVudSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyIHtcbiAgICB9XG5cbiAgICAmX19oZWFkZXItY2VsbC1hZGRpdGlvbmFsLWFjdGlvbnMge1xuICAgIH1cblxuICAgICZfX2hlYWRlci1zZWFyY2gge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZiBub25lO1xuICAgICAgYm9yZGVyOiAuMDVyZW0gc29saWQgJGdyZXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMXJlbTtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgIGhlaWdodDogMS40N3JlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIHBhZGRpbmc6IC4xNXJlbSAuM3JlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiA5NyU7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyLWNlbGwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAucG9pbnRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ob3Jpem9udGFsLXNjcm9sbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb2x1bW4tcmVzaXplciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgfVxuXG4gICAgJl9fdGFibGUtLWJvcmRlcmxlc3MgPiB7XG4gICAgICB0Ym9keSA+IHRyID4gdGQsIHRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX190YWJsZS0taG92ZXJhYmxlID4gdGJvZHkgdHI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGdyZXktbGlnaHRlcjtcbiAgICB9XG5cbiAgICAmX190YWJsZS0tc3RyaXBlZCA+IHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgYmFja2dyb3VuZDogJGdyZXktbGlnaHRlcjtcbiAgICB9XG5cbiAgICAmX190YWJsZS0tdGlueSA+IHtcbiAgICAgIHRib2R5ID4gdHIgPiB0ZCwgdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5O1xuICAgICAgICBwYWRkaW5nOiA0cHggN3B4O1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX3RhYmxlLS1ub3JtYWwgPiB7XG4gICAgICB0Ym9keSA+IHRyID4gdGQsIHRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleTtcbiAgICAgICAgcGFkZGluZzogMTBweCA2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fdGFibGUtLWJpZyA+IHtcbiAgICAgIHRib2R5ID4gdHIgPiB0ZCwgdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX190YWJsZS0tZGFyayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcbiAgICAgIGNvbG9yOiAkZ3JleS1saWdodGVyO1xuXG4gICAgICAmID4gdGJvZHkgdHI6aG92ZXIge1xuICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgICB9XG5cbiAgICAgICYubmd4LXRhYmxlX190YWJsZS0tc3RyaXBlZCA+IHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleS1saWdodGVyO1xuICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgICB9XG5cbiAgICAgICYtcGFnaW5hdGlvbiB7XG4gICAgICAgICYgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJGdyZXktbGlnaHRlcjtcbiAgICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgICAgIH1cblxuICAgICAgICAmIDo6bmctZGVlcCBwYWdpbmF0aW9uLXRlbXBsYXRlID4gdWwge1xuICAgICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmIDo6bmctZGVlcCBwYWdpbmF0aW9uLXRlbXBsYXRlID4gdWwgPiBsaSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XG4gICAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XG4gICAgICAgIH1cblxuICAgICAgICAmIDo6bmctZGVlcCBwYWdpbmF0aW9uLXRlbXBsYXRlID4gdWwgPiBsaS5jdXJyZW50IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcbiAgICAgICAgfVxuXG4gICAgICAgICYgOjpuZy1kZWVwIHBhZ2luYXRpb24tdGVtcGxhdGUgPiB1bCA+IGxpID4gYSB7XG4gICAgICAgICAgY29sb3I6ICRncmV5LWxpZ2h0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1yYW5nZSB7XG4gICAgICAgICAgJiA+ICNyb3dBbW91bnQgPiBkaXYgPiBkaXYge1xuICAgICAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmID4gI3Jvd0Ftb3VudCA+IGRpdiA+IHVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYgPiAjcm93QW1vdW50ID4gZGl2ID4gdWwgPiBsaSB7XG4gICAgICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19oZWFkZXItdGl0bGUge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbiAgfVxuXG4gICYtbWVudSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG5cbiAgJi1mb3JtLWljb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IC4xcmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaGVpZ2h0OiAuOXJlbTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogLjJyZW07XG4gICAgd2lkdGg6IC45cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICBib3JkZXI6IC4wNXJlbSBzb2xpZCAkZ3JleTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gICYtZm9ybS1jaGVja2JveCB7XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgbWFyZ2luOiAwLjJyZW0gMDtcbiAgICBtaW4taGVpZ2h0OiAxLjJyZW07XG4gICAgcGFkZGluZzogMC4ycmVtIC40cmVtIDAuNHJlbSAxLjZyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW5wdXQge1xuICAgICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbWFyZ2luOiAtMXB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxcHg7XG5cbiAgICAgICY6Zm9jdXMgKyAubmd4LWZvcm0taWNvbiB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIC4xcmVtIHJnYmEoJGJsdWUsIC4yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcbiAgICAgIH1cblxuICAgICAgJjpjaGVja2VkICsgLm5neC1mb3JtLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUgKyAubmd4LWZvcm0taWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrO1xuICAgICAgfVxuXG4gICAgICAmOmNoZWNrZWQgKyAubmd4LWZvcm0taWNvbiB7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICBib3JkZXI6IC4xcmVtIHNvbGlkICNmZmY7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLWljb24ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAxZW07XG5cbiAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICB9XG5cbiAgJi1pY29uLWFycm93LWRvd246OmJlZm9yZSwgJi1pY29uLWFycm93LXJpZ2h0OjpiZWZvcmUsICYtaWNvbi1hcnJvdy11cDo6YmVmb3JlIHtcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkICRkYXJrO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGhlaWdodDogLjY1ZW07XG4gICAgd2lkdGg6IC42NWVtXG4gIH1cblxuICAmLWljb24tYXJyb3ctZG93bjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzUlKSByb3RhdGUoMjI1ZGVnKTtcbiAgfVxuXG4gICYtaWNvbi1hcnJvdy1yaWdodDo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlLCAtNTAlKSByb3RhdGUoMTM1ZGVnKTtcbiAgfVxuXG4gICYtaWNvbi1hcnJvdy11cDo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjUlKSByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgJi1pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogJGRhcms7XG4gICAgYm94LXNoYWRvdzogMCAtLjM1ZW0sIDAgLjM1ZW07XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IC4xcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJi1pY29uLXBpbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICRkYXJrO1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgfVxuXG4gICYtaWNvbi1tb3JlOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICRkYXJrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwIC0uNGVtLCAwIC40ZW07XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDNweFxuICB9XG5cbiAgJi1kcm9wZG93biB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAubmd4LW1lbnUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICYtYnRuLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICAmLWRyYWdnYWJsZS1yb3cge1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHRhYmxlLWxheW91dDogZml4ZWRcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm5neC1kcmFnZ2FibGUtcm93LWFyZWEuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAubmd4LWRyYWdnYWJsZS1yb3c6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5uZ3gtdGFibGVfX2hlYWRlci1jZWxsLS1kcmFnZ2FibGUge1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubmd4LXRhYmxlX19oZWFkZXItLWRyYWdnYWJsZS5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5uZ3gtdGFibGVfX2hlYWRlci1jZWxsLS1kcmFnZ2FibGU6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBWZXJkYW5hLCBzZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDA7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbjo6YmVmb3JlLCAubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcbiAgY29udGVudDogJyAnO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLm5neC1wYWdpbmF0aW9uOjphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ubmd4LXBhZ2luYXRpb24gbGkge1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMC4wNjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleTtcbn1cblxuLm5neC1wYWdpbmF0aW9uIGxpLmN1cnJlbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcbn1cblxuLm5neC1wYWdpbmF0aW9uIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmd4LXBhZ2luYXRpb24gYSxcbi5uZ3gtcGFnaW5hdGlvbiBidXR0b24ge1xuICBjb2xvcjogJGRhcms7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiBhOmhvdmVyLFxuLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcbiAgYmFja2dyb3VuZDogJGJsdWU7XG4gIGNvbG9yOiAjZmVmZWZlO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQge1xuICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XG4gIGNvbG9yOiAjY2FjYWNhO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm5neC1wYWdpbmF0aW9uIGEsIC5uZ3gtcGFnaW5hdGlvbiBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhOjpiZWZvcmUsXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICfCqyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGE6OmFmdGVyLFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6OmFmdGVyIHtcbiAgY29udGVudDogJ8K7JztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4ubmd4LXBhZ2luYXRpb24gLnNob3ctZm9yLXNyIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xufVxuXG4ubmd4LXBhZ2luYXRpb24gLnNtYWxsLXNjcmVlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbi13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubmd4LXBhZ2luYXRpb24tcmFuZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm5neC1wYWdpbmF0aW9uLXN0ZXBzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmd4LXBhZ2luYXRpb24tcmFuZ2UtZHJvcGRvd24ge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmd4LXBhZ2luYXRpb24tcmFuZ2UtZHJvcGRvd24tYnV0dG9uLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuXG4ubmd4LXBhZ2luYXRpb24tcmFuZ2UtLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktbGlnaHRlcjtcbn1cblxuLm5neC1wYWdpbmF0aW9uLXJhbmdlLWRyb3Bkb3duLWJ1dHRvbiB7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ucGlubmVkLWxlZnQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMnB4IDAgMCByZ2JhKGdyYXksIC4xNzUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDFweCkge1xuICAubmd4LXBhZ2luYXRpb24ucmVzcG9uc2l2ZSAuc21hbGwtc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLm5neC1wYWdpbmF0aW9uLnJlc3BvbnNpdmUgbGk6bm90KC5zbWFsbC1zY3JlZW4pOm5vdCgucGFnaW5hdGlvbi1wcmV2aW91cyk6bm90KC5wYWdpbmF0aW9uLW5leHQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5uZ3gtaW5maW5pdGUtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubmd4LWluZmluaXRlLXNjcm9sbC12aWV3cG9ydCB0cixcbi5uZ3gtaW5maW5pdGUtc2Nyb2xsLXZpZXdwb3J0LXRoZWFkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/table1/table1.component.ts":
/*!********************************************!*\
  !*** ./src/app/table1/table1.component.ts ***!
  \********************************************/
/*! exports provided: Table1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table1Component", function() { return Table1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _tableConfigData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableConfigData */ "./src/app/table1/tableConfigData.ts");
/* harmony import */ var ngx_easy_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-easy-table */ "./node_modules/ngx-easy-table/fesm2015/ngx-easy-table.js");
/* harmony import */ var _services_generic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/generic.service */ "./src/app/services/generic.service.ts");
/* harmony import */ var _table_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-functions */ "./src/app/table1/table-functions.ts");



// import { Component, OnInit, ViewChild } from '@angular/core';




let Table1Component = class Table1Component {
    //public currentRowData: any;
    constructor(genericService, tableFunctions, toastrService) {
        this.genericService = genericService;
        this.tableFunctions = tableFunctions;
        this.toastrService = toastrService;
        this.columns = [];
        this.entKeyField = "id";
        this.data = [];
        this.items = _tableConfigData__WEBPACK_IMPORTED_MODULE_3__["EntityVariables"].entityListItems;
        this.selectedItem = this.items[0];
        this.currentDataArray = [];
        this.currentItemFieldSequence = [];
        this.currentItemKeys = [];
        var test = this.table;
    }
    ngOnInit() {
        this.configuration = Object.assign({}, ngx_easy_table__WEBPACK_IMPORTED_MODULE_4__["DefaultConfig"]);
        this.configuration.rows = 2;
        this.configuration.paginationEnabled = false;
        this.configuration.infiniteScroll = true;
        this.configuration.tableLayout.striped = true;
        this.entity = "tbl_contacts";
        //  this.LoadItems("tbl_contacts");
        var ret = this.tableFunctions.DoChangeColumns(this.entity);
        this.columns = ret.columns;
        this.entKeyField = ret.keyField;
        this.LoadItems(this.selectedItem.name);
    }
    LoadItems(entName) {
        this.genericService.getItems(entName).subscribe((data) => {
            // this.data = data.result;
            this.data = data;
            this.currentItemFieldSequence = this.data[0];
            this.currentItem = this.data[0];
            this.currentItemCloneFields = Object.assign({}, this.currentItem);
            let currItemKeys = Object.keys(this.currentItem);
            this.currentItemKeys = [];
            for (var prop of currItemKeys) {
                this.currentItemKeys.push(prop);
            }
            this.doAdd();
        }),
            err => {
                console.log(err);
            };
    }
    onChange(name) {
        this.table.apiEvent({
            type: ngx_easy_table__WEBPACK_IMPORTED_MODULE_4__["API"].onGlobalSearch, value: name,
        });
    }
    onSelect(productId) {
        this.selectedItem = null;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == productId) {
                this.selectedItem = this.items[i];
            }
        }
        this.entity = this.selectedItem.name;
        var ret = this.tableFunctions.DoChangeColumns(this.selectedItem.name);
        this.columns = ret.columns;
        this.entKeyField = ret.keyField;
        this.LoadItems(this.selectedItem.name);
        console.log(this.selectedItem);
    }
    eventEmitted($event) {
        // this.clicked = JSON.stringify($event, null, 2);
        if ($event.value.row) {
            this.currentItem = $event.value.row;
            //this.currentItemArray =[];
            // this.currentItemArray.push(this.currentItem);
            this.currentItemCloneFields = Object.assign({}, this.currentItem);
            let currItemKeys = Object.keys(this.currentItem);
            this.currentItemKeys = [];
            for (var prop of currItemKeys) {
                this.currentItemKeys.push(prop);
            }
            this.currentItemIndex = $event.value.rowId;
            console.log('$event', $event);
        }
    }
    trackByFn(index, item) {
        return index;
    }
    doSave(entName, id) {
        var test = this.currentItem;
        this.UpdateItem(entName, id, 'id', test);
    }
    doDelete(index) {
        var testIndex = this.currentItemIndex;
        var test = this.currentItem;
        var ent = this.entity;
        let curId = this.currentItem[this.entKeyField];
        this.deleteItem(ent, curId, this.entKeyField, test, index);
        this.toastrService.error('Have a nice day.', "Item Deleted.", { timeOut: 3000 });
    }
    doAdd() {
        let currItemKeys = Object.keys(this.currentItem);
        //this.currentItem = null;
        this.currentItemKeys = [];
        for (var prop of currItemKeys) {
            this.currentItemKeys.push(prop);
        }
        this.currentItem = new Object();
        this.currentItem[this.entKeyField] = "0";
    }
    UpdateItem(ent, id, fldName, dataEdit) {
        ent = this.entity;
        this.genericService.updateItem(ent, id, fldName, dataEdit).subscribe((data) => {
            var test = data;
            //this.currentDataArray = test;
            this.currentItemUpdate = test;
            let curId = this.currentItemUpdate[this.entKeyField];
            //this.currentRowData = data;
            var curRowItem = this.data[this.currentItemIndex];
            if (id == "0") {
                this.addRow(test);
                this.toastrService.info('Have a nice day.', "Item Added.", { timeOut: 3000 });
            }
            else {
                let obj = this.data.find(obj => obj[this.entKeyField] == curId);
                let objIndex = this.data.indexOf(obj);
                this.setTableItem(objIndex);
                this.toastrService.success('Have a nice day.', "Item Saved.", { timeOut: 3000 });
            }
        }),
            err => {
                console.log(err);
            };
    }
    deleteItem(ent, id, fldName, data, index) {
        ent = this.entity;
        this.genericService.deleteItem(ent, id, fldName, data).subscribe((data) => {
            var test = data;
            this.remove(this.currentItemIndex);
        }),
            err => {
                console.log(err);
            };
    }
    setTableItem(editIndex) {
        this.data = [...this.data.map((obj, index) => {
                if (index === editIndex) {
                    //  obj = updatedItem;
                    return this.currentItemUpdate;
                }
                return obj;
            })];
        // this.currentItemIndex =-1
    }
    addRow(addedItem) {
        this.data = [
            ...this.data,
            addedItem,
        ];
    }
    remove(rowIndex) {
        this.data = [...this.data.filter((_v, k) => k !== rowIndex)];
    }
};
Table1Component.ctorParameters = () => [
    { type: _services_generic_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"] },
    { type: _table_functions__WEBPACK_IMPORTED_MODULE_6__["TableFunctionsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: true })
], Table1Component.prototype, "table", void 0);
Table1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table1/table1.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table1.component.scss */ "./src/app/table1/table1.component.scss")).default]
    })
], Table1Component);



/***/ }),

/***/ "./src/app/table1/tableConfigData.ts":
/*!*******************************************!*\
  !*** ./src/app/table1/tableConfigData.ts ***!
  \*******************************************/
/*! exports provided: Item, EntityData, EntityVariablesItems, EntityVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityData", function() { return EntityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityVariablesItems", function() { return EntityVariablesItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityVariables", function() { return EntityVariables; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Item {
}
class EntityData {
}
class EntityVariablesItems {
    constructor() {
        this.entityGridColumns = [];
    }
}
const EntityVariables = {
    entityListItems: [
        { "id": 1, "name": "tbl_contacts" },
        { "id": 2, "name": "tblBook" },
        { "id": 3, "name": "tbl_employees" },
        { "id": 4, "name": "tbl_customers" },
        { "id": 5, "name": "Product" },
        { "id": 6, "name": "tbl_products" }
    ],
    entityGridColumns: [
        {
            "name": "tbl_contacts",
            "columns": [
                { key: 'id', title: 'ID' },
                { key: 'name', title: 'Name' },
                { key: 'email', title: 'Email' },
                { key: 'phone', title: 'Phone' },
                { key: 'url', title: 'Url' },
            ],
            "entKeyField": "id"
        },
        {
            "name": "tbl_employees",
            "columns": [
                { key: 'id', title: 'ID' },
                { key: 'firstName', title: 'firstName' },
                { key: 'lastName', title: 'lastName' },
                { key: 'designation', title: 'designation' }
            ],
            "entKeyField": "id"
        },
        {
            "name": "tblBook",
            "columns": [
                { key: 'id', title: 'ID' },
                { key: 'name', title: 'Name' },
                { key: 'authorName', title: 'AuthorName' },
                { key: 'publisherName', title: 'PublisherName' },
                { key: 'category', title: 'Category' }
            ],
            "entKeyField": "id"
        },
        {
            "name": "tbl_customers",
            "columns": [
                { key: 'customerID', title: 'CustomerID' },
                { key: 'firstName', title: 'FirstName' },
                { key: 'lastName', title: 'LastName' },
                { key: 'companyName', title: 'CompanyName' },
            ],
            "entKeyField": "customerID"
        },
        {
            "name": "Product",
            "columns": [
                { key: 'id', title: 'Id' },
                { key: 'name', title: 'Name' },
                { key: 'category', title: 'Category' },
                { key: 'price', title: 'Price' },
            ],
            "entKeyField": "id"
        },
        {
            "name": "tbl_products",
            "columns": [
                { key: 'id', title: 'Id' },
                { key: 'name', title: 'Name' },
                { key: 'category', title: 'Category' },
                { key: 'price', title: 'Price' },
            ],
            "entKeyField": "id"
        }
    ]
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\zzzXfer\curr\nugetGenericCrud\GenericCrudDemoProject\GenericCrudDemoProject\ClientAppGenericCrud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map