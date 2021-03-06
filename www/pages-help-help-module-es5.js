function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-help-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHelpHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<ion-header>\n  <ion-toolbar color=\"primary\">\n     <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Help</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<div  class=\"ion-text-center\">\n  <p>\n    <ion-title  class=\"ion-text-center\">1</ion-title>\n     Guide\n    </p>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/help/help-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/help/help-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HelpPageRoutingModule */

  /***/
  function srcAppPagesHelpHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function () {
      return HelpPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help.page */
    "./src/app/pages/help/help.page.ts");

    var routes = [{
      path: '',
      component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }];

    var HelpPageRoutingModule = function HelpPageRoutingModule() {
      _classCallCheck(this, HelpPageRoutingModule);
    };

    HelpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HelpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/help/help.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/help/help.module.ts ***!
    \*******************************************/

  /*! exports provided: HelpPageModule */

  /***/
  function srcAppPagesHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageModule", function () {
      return HelpPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./help-routing.module */
    "./src/app/pages/help/help-routing.module.ts");
    /* harmony import */


    var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./help.page */
    "./src/app/pages/help/help.page.ts");

    var HelpPageModule = function HelpPageModule() {
      _classCallCheck(this, HelpPageModule);
    };

    HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]],
      declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
    })], HelpPageModule);
    /***/
  },

  /***/
  "./src/app/pages/help/help.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/help/help.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHelpHelpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHAvaGVscC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/help/help.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/help/help.page.ts ***!
    \*****************************************/

  /*! exports provided: HelpPage */

  /***/
  function srcAppPagesHelpHelpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPage", function () {
      return HelpPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelpPage = /*#__PURE__*/function () {
      function HelpPage() {
        _classCallCheck(this, HelpPage);
      }

      _createClass(HelpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpPage;
    }();

    HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-help',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./help.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./help.page.scss */
      "./src/app/pages/help/help.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HelpPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-help-help-module-es5.js.map