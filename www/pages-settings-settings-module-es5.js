function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<ion-header>\n  <ion-toolbar color=\"primary\">\n     <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n \n<ion-list> \n<ion-list-header>\nSlide to increase font size\n</ion-list-header>\n <ion-item>\n <div class=\"sliderContainer\">\n    <input type=\"range\"  name=\"volume\"\n    min=\"0.3\" max=\"2\" class=\"slider\" [ngModel]=\"fontSize\" (input)=\"onChange($event.target.value)\" value = \"1.5\" step=\"0.1\"/> \n  </div>\n\n  </ion-item>\n<ion-radio-group [(ngModel)]=\"fontFamily\" (ionChange)=\"onFontFamilyChange($event)\">\n      <ion-list-header>\n        <ion-label>Font family</ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Default</ion-label>\n        <ion-radio slot=\"end\" value=\"\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Liberation Serif</ion-label>\n        <ion-radio slot=\"end\" value=\"liberation-serif-font\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Lato</ion-label>\n        <ion-radio slot=\"end\" value=\"Lato-font\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Libre Franklin</ion-label>\n        <ion-radio slot=\"end\" value=\"Fraklin-font\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Roboto</ion-label>\n        <ion-radio slot=\"end\" value=\"Roboto-font\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Futura</ion-label>\n        <ion-radio slot=\"end\" value=\"FUTURA-font\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>San-serif</ion-label>\n        <ion-radio slot=\"end\" value=\"San-serif-font\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>  \n</ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/settings/settings-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SettingsPageRoutingModule */

  /***/
  function srcAppPagesSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
      return SettingsPageRoutingModule;
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


    var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/settings/settings.page.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }];

    var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
      _classCallCheck(this, SettingsPageRoutingModule);
    };

    SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.module.ts ***!
    \***************************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppPagesSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings-routing.module */
    "./src/app/pages/settings/settings-routing.module.ts");
    /* harmony import */


    var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/settings/settings.page.ts");

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=\"range\"] {\n  width: 85%; }\n\n.sliderContainer {\n  padding-top: 2%;\n  padding-bottom: 2%;\n  padding-left: 6%; }\n\n.item-content {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important; }\n\n.divi {\n  font-size: 4px; }\n\n.slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 15px;\n  border-radius: 4px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity .2s;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px; }\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 10%;\n  background: purple;\n  cursor: pointer; }\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: purple;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vZnJleS9taXlhLWZhbC9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVMsRUFBQTs7QUFJWDtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSwyQkFBMEI7RUFDMUIsOEJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFFWix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICAgIHdpZHRoOjg1JTtcbiAgICBcbiAgfVxuXG4gIC5zbGlkZXJDb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6MiU7XG4gICAgcGFkZGluZy1ib3R0b206MiU7XG4gICAgcGFkZGluZy1sZWZ0OjYlO1xuICAgIFxuICB9XG4gIC5pdGVtLWNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRpdml7XG4gICAgZm9udC1zaXplOiA0cHg7XG59XG4gIC5zbGlkZXIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiA0cHg7XG59XG4gIFxuICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTsgXG4gICAgYmFja2dyb3VuZDogcHVycGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/settings/settings.page.ts ***!
    \*************************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppPagesSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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


    var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/event.service */
    "./src/app/pages/services/event.service.ts");

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(document, events, cdr) {
        _classCallCheck(this, SettingsPage);

        this.document = document;
        this.events = events;
        this.cdr = cdr;
        this.fontFamily = '';
      }

      _createClass(SettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange(fontsize) {
          var body = document.getElementsByTagName('body')[0];
          body.setAttribute('style', "font-size: ".concat(fontsize, "rem"));
          this.cdr.detectChanges();
          console.log(body); // fontsize
        }
      }, {
        key: "onFontFamilyChange",
        value: function onFontFamilyChange(ev) {
          var val = ev.detail.value;
          this.events.publish('update:font-family', val);
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-setting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.page.scss */
      "./src/app/pages/settings/settings.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-settings-settings-module-es5.js.map