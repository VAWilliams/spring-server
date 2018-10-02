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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n* {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.blue {\r\n    padding: 40px 20px;\r\n    background-color: slateblue;\r\n}\r\n.white {\r\n    padding: 15px;\r\n    background-color: white;\r\n    border: 1px slateblue solid;\r\n    border-top: none;\r\n    border-bottom: none;\r\n}\r\nheader * {\r\n    text-align: center;\r\n    color: white;\r\n}\r\n.box {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin: auto;\r\n}\r\n#center {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin: auto;\r\n    width: 300px;\r\n    grid-gap: 10px;\r\n}\r\n#center div {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 5px;\r\n}\r\n#center div * {\r\n    border: none;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n#center .switch {\r\n    height: 50px;\r\n    margin: auto 0;\r\n    border-radius: 50px;\r\n}\r\n.bottom {\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n.bottom button {\r\n    width: 100px;\r\n    margin: auto;\r\n    border: initial;\r\n}\r\n#convert {\r\n    border-radius: 50px;\r\n}\r\n#result {\r\n    width: 500px;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    border-radius: 2px;\r\n}\r\nselect {\r\n    font-size: 20px;\r\n}\r\ninput {\r\n    height: 40px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"blue\">\n  <h1>Converter</h1>\n  \n  <p>\n      <em>\n          Metric to Imperial and vice versa!\n      </em>\n    </p>\n</header>\n\n<main>\n\n  <div class=\"container white\">\n    <h3>Step 1: Provide Your Values</h3>\n  </div>\n\n  <div class=\"box blue\">\n\n    <div id=\"center\">\n\n      <div class=\"left-wrap\">\n\n          <select id=\"first\">\n            <option *ngFor=\"let l of options\" value=\"{{l.value}}\">{{l.name}}</option>\n          </select>\n\n          <input type=\"number\" id=\"first-value\">\n\n        </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"container white\">\n    <h3>Step 2: Calculate the Result</h3>\n  </div>\n\n  <div class=\"blue bottom\">\n\n    <button id=\"convert\" class=\"white\" (click)=\"convert()\">\n      Convert\n    </button>\n\n    <div id=\"result\" class=\"white\">\n    </div>\n\n  </div>\n\n</main>"

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
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function AppComponent(httpClient) {
        this.httpClient = httpClient;
        // constructor for creating options
        this.Data = function (value, name) {
            this.value = value;
            this.name = name;
        };
        this.options = [
            new this.Data("ml_km", "Mile/s to Kilometer/s"),
            new this.Data("pd_kg", "Pound/s to Kilogram/s"),
            new this.Data("yd_mt", "Yard/s to Meter/s"),
            new this.Data("km_ml", "Kilometer/s to Mile/s"),
            new this.Data("kg_pd", "Kilogram/s to Pound/s"),
            new this.Data("mt_yd", "Meter/s to Yard/s")
        ];
    }
    ;
    // makes an API request to the server(Spring Boot)
    AppComponent.prototype.connectToServer = function (amount, type) {
        var _this = this;
        this.httpClient.get("/" + amount + "/" + type)
            .subscribe(function (result) {
            switch (type) {
                case "ml_km":
                    _this.attachment = " kilometer/s";
                    break;
                case "pd_kg":
                    _this.attachment = " kilogram/s";
                    break;
                case "yd_mt":
                    _this.attachment = " meter/s";
                    break;
                case "km_ml":
                    _this.attachment = " mile/s";
                    break;
                case "kg_pd":
                    _this.attachment = " pound/s";
                    break;
                case "mt_yd":
                    _this.attachment = " yard/s";
                    break;
            }
            // response is printed out to the HTML
            _this.result.innerHTML = result + _this.attachment;
        });
    };
    // validates values
    AppComponent.prototype.convert = function () {
        this.first = document.getElementById('first');
        this.input = document.getElementById('first-value');
        this.result = document.getElementById('result');
        this.option = this.first.value;
        this.value = this.input.value;
        this.amount = Number(this.value);
        // checks if the amount is a valid number
        if (!isNaN(this.amount) && Object(util__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(this.amount * 2) && this.amount != 0) {
            // checks if amount is positive
            if ((this.amount * (-1)) > 0) {
                this.result.innerHTML = "Please enter a positive number.";
            }
            else {
                // gets the result
                this.connectToServer(this.amount, this.option);
            }
        }
        else {
            this.result.innerHTML = "Please enter a valid number.";
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\app\server\src\main\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map