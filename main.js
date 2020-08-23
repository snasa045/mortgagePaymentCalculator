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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mortgage_calculator_mortgage_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mortgage-calculator/mortgage-calculator.component */ "./src/app/mortgage-calculator/mortgage-calculator.component.ts");





const routes = [
    {
        path: '', component: _mortgage_calculator_mortgage_calculator_component__WEBPACK_IMPORTED_MODULE_2__["MortgageCalculatorComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                ],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'mortgageCalculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "logo_section"], ["src", "../assets/images/rbc_logo.svg", "alt", "logo", "aria-hidden", "true"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _mortgage_calculator_mortgage_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mortgage-calculator/mortgage-calculator.component */ "./src/app/mortgage-calculator/mortgage-calculator.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material-module */ "./src/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _result_dialog_result_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result-dialog/result-dialog.component */ "./src/app/result-dialog/result-dialog.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _mortgage_calculator_mortgage_calculator_component__WEBPACK_IMPORTED_MODULE_5__["MortgageCalculatorComponent"],
        _result_dialog_result_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ResultDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _mortgage_calculator_mortgage_calculator_component__WEBPACK_IMPORTED_MODULE_5__["MortgageCalculatorComponent"],
                    _result_dialog_result_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ResultDialogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                entryComponents: [
                    _result_dialog_result_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ResultDialogComponent"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mortgage-calculator/mortgage-calculator.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/mortgage-calculator/mortgage-calculator.component.ts ***!
  \**********************************************************************/
/*! exports provided: MortgageCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortgageCalculatorComponent", function() { return MortgageCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _result_dialog_result_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../result-dialog/result-dialog.component */ "./src/app/result-dialog/result-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");












function MortgageCalculatorComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.titleAlert, " ");
} }
function MortgageCalculatorComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const amortizationPeriod_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", amortizationPeriod_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", amortizationPeriod_r4.type, " ");
} }
function MortgageCalculatorComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paymentFrequency_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paymentFrequency_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", paymentFrequency_r5.type, " ");
} }
function MortgageCalculatorComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.titleAlert, " ");
} }
class MortgageCalculatorComponent {
    constructor(formBuilder, dialog) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.titleAlert = 'This field is required';
        this.amortizationPeriods = [
            { type: '20 Years', value: 20 },
            { type: '25 Years', value: 25 },
            { type: '30 Years', value: 30 }
        ];
        this.paymentFrequencies = [
            { type: 'Monthly', value: 12 },
            { type: 'Semi-monthly', value: 24 },
            { type: 'Bi-Weekly', value: 26 },
            { type: 'Weekly', value: 52 }
        ];
    }
    ngOnInit() {
        this.createForm();
    }
    // Creating a mortgage form
    createForm() {
        this.formGroup = this.formBuilder.group({
            mortgageAmount: [100000, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            amortizationPeriod: [25],
            paymentFrequency: [12],
            interestRate: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    //openResultDialog function
    openResultDialog() {
        document.body.classList.add("result-dialog-modal");
        const dialogRef = this.dialog.open(_result_dialog_result_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ResultDialogComponent"], {
            restoreFocus: true,
            panelClass: "result-dialog-modal-overlay",
            data: this.formGroup.value
        });
        dialogRef.afterClosed().subscribe(result => {
            document.body.classList.remove("result-dialog-modal");
            return true;
        });
    }
    // open result dialog on
    onCalculate() {
        if (this.formGroup.valid) {
            this.openResultDialog();
        }
    }
}
MortgageCalculatorComponent.ɵfac = function MortgageCalculatorComponent_Factory(t) { return new (t || MortgageCalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
MortgageCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MortgageCalculatorComponent, selectors: [["app-mortgage-calculator"]], decls: 38, vars: 7, consts: [[1, "global__mortgageCalculator__page"], [1, "illustration__section-container"], ["src", "../../assets/images/undraw_Calculator_0evy.svg", "alt", "illustration", "aria-hidden", "true"], [1, "mortgageCalculator__form__section-container"], [1, "mortgageCalculator__form-wrapper"], [1, "global__header1"], [1, "mortgageCalculator__form-text"], ["novalidate", "", 1, "form__container"], [1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "fill", 1, "form-element", "mortgage-amount"], ["matPrefix", ""], ["matInput", "", "formControlName", "mortgageAmount", "required", "", "type", "number"], [4, "ngIf"], ["appearance", "fill", 1, "form-element", "amortization-periodyears-element"], ["formControlName", "amortizationPeriod"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "form-element", "payment-frequency-element"], ["formControlName", "paymentFrequency"], ["appearance", "fill", 1, "form-element", "interest-rate-element"], ["matInput", "", "formControlName", "interestRate", "required", "", "type", "number"], [1, "form-element", "calculate-button-element"], ["mat-raised-button", "", "type", "submit", 1, "button", "global__button", 3, "ngClass", "disabled"], [3, "value"]], template: function MortgageCalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mortgage Payment Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quickly See What Your Mortgage Payments Might Look Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MortgageCalculatorComponent_Template_form_ngSubmit_10_listener() { return ctx.onCalculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mortgage Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "$\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MortgageCalculatorComponent_mat_error_17_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Amortization Periodyears");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MortgageCalculatorComponent_mat_option_22_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Payment Frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MortgageCalculatorComponent_mat_option_27_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Interest Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "%\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MortgageCalculatorComponent_mat_error_34_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls["mortgageAmount"].valid && ctx.formGroup.controls["mortgageAmount"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.amortizationPeriods);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentFrequencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls["interestRate"].valid && ctx.formGroup.controls["interestRate"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.formGroup.valid ? "enable-button" : "disable-button")("disabled", !ctx.formGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["body[_ngcontent-%COMP%] {\n  --primary: ;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  \n  --blue-primary: #006AC3;\n  \n  --yellow-primary: #fedf01;\n  \n  --green-success: #03883B;\n  \n  --red-error: #AF3C43;\n  \n  --orange-warning: #C05800;\n  \n  --grey-1: #384042;\n  --grey-2: #5A5C5F;\n  --grey-3: #c2c5cc;\n  --grey-4: #E4E5E7;\n  --grey-5: #F8F8F8;\n  \n  --white: #FFFFFF;\n  \n  --link_default: #2B4380;\n  --link_hover: #0535D2;\n  --link_visited: #7834BC;\n}\n\n.color--brand1[_ngcontent-%COMP%] {\n  color: var(--blue-primary);\n}\n\n.background-color--brand1[_ngcontent-%COMP%] {\n  background-color: var(--blue-primary);\n}\n\n.color--brand2[_ngcontent-%COMP%] {\n  color: var(--yellow-primary);\n}\n\n.background-color--brand2[_ngcontent-%COMP%] {\n  background-color: var(--yellow-primary);\n}\n\n.color--background--white[_ngcontent-%COMP%] {\n  background-color: var(--white);\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .illustration__section-container[_ngcontent-%COMP%] {\n  padding: 3.125rem 0;\n  flex: 1.5;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .illustration__section-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 75%;\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2rem 0;\n  background-color: var(--white);\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%]   .mortgageCalculator__form-wrapper[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%]   .mortgageCalculator__form-wrapper[_ngcontent-%COMP%]   .global__header1[_ngcontent-%COMP%] {\n  color: var(--blue-primary);\n  font-size: 2.625rem;\n  margin-bottom: 1.875rem;\n  line-height: 130%;\n  font-weight: 600;\n  font-family: \"Averta\", Helvetica, sans-serif;\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%]   .mortgageCalculator__form-wrapper[_ngcontent-%COMP%]   .mortgageCalculator__form-text[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: var(--grey-1);\n  font-family: \"Averta\", Helvetica, sans-serif;\n  font-weight: 500;\n  font-size: 1.1rem;\n  line-height: 130%;\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%]   .mortgageCalculator__form-wrapper[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%]   .mortgageCalculator__form-wrapper[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n  margin: 0.625rem 0;\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%]   .mortgageCalculator__form-wrapper[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element.calculate-button-element[_ngcontent-%COMP%]   .global__button[_ngcontent-%COMP%] {\n  display: table;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 1rem;\n  line-height: 25px;\n  padding: 15px 45px;\n  width: -webkit-max-content;\n  width: max-content;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;\n  text-align: center;\n  margin: 0.9375rem 0;\n  box-shadow: none;\n  border-radius: 15px;\n  font-family: \"Averta\", Helvetica, sans-serif;\n}\n\n.global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%]   .mortgageCalculator__form-wrapper[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-element.calculate-button-element[_ngcontent-%COMP%]   .global__button.enable-button[_ngcontent-%COMP%] {\n  background: var(--blue-primary);\n  color: var(--white);\n}\n\n@media screen and (max-width: 992px) {\n  .global__mortgageCalculator__page[_ngcontent-%COMP%]   .illustration__section-container[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n  }\n  .global__mortgageCalculator__page[_ngcontent-%COMP%]   .illustration__section-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  .global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%]   .mortgageCalculator__form-wrapper[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .global__mortgageCalculator__page[_ngcontent-%COMP%]   .illustration__section-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .global__mortgageCalculator__page[_ngcontent-%COMP%]   .mortgageCalculator__form__section-container[_ngcontent-%COMP%]   .mortgageCalculator__form-wrapper[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Fzcy9jb25maWdzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvbW9ydGdhZ2UtY2FsY3VsYXRvci9tb3J0Z2FnZS1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDQTtFQUNJLFdBQUE7QUNqQ0o7O0FEc0NJLFdBQUE7O0FBR0EsYUFBQTs7QUFHQSxjQUFBOztBQUdBLFlBQUE7O0FBR0MsY0FBQTs7QUFHQyxXQUFBOztBQU9GLFlBQUE7O0FBR0EsV0FBQTs7QUFRSjtFQUdFLFdBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7RUFDQSx3QkFBQTtFQUVBLFlBQUE7RUFDQSxvQkFBQTtFQUVDLGNBQUE7RUFDQSx5QkFBQTtFQUVDLFdBQUE7RUFDRixpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ3JFRjs7QUR5RUE7RUFDSSwwQkFBQTtBQ3RFSjs7QUR5RUE7RUFDRSxxQ0FBQTtBQ3RFRjs7QUR5RUE7RUFDRSw0QkFBQTtBQ3RFRjs7QUR5RUE7RUFDRSx1Q0FBQTtBQ3RFRjs7QUR5RUE7RUFDSSw4QkFBQTtBQ3RFSjs7QUFyREE7RUFDSSxhQUFBO0FBd0RKOztBQXRESTtFQUNJLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF3RFI7O0FBdERRO0VBQ0ksY0FBQTtBQXdEWjs7QUFwREk7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFzRFI7O0FBcERRO0VBQ0ksV0FBQTtBQXNEWjs7QUFwRFk7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUFzRGhCOztBQW5EWTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXFEaEI7O0FBaERnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQWtEcEI7O0FBaERvQjtFQUNJLGtCQUFBO0FBa0R4Qjs7QUEvQzRCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0RBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FBaURoQzs7QUEvQ2dDO0VBQ0ksK0JBQUE7RUFDQSxtQkFBQTtBQWlEcEM7O0FBdENJO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxPQUFBO0VBd0NWO0VBdENVO0lBQ0ksY0FBQTtFQXdDZDtFQXBDTTtJQUNJLFVBQUE7RUFzQ1Y7RUFwQ1U7SUFDSSxVQUFBO0VBc0NkO0FBQ0Y7O0FBbENJO0VBQ0k7SUFDSSxhQUFBO0VBb0NWO0VBakNNO0lBQ0ksV0FBQTtFQW1DVjtFQWhDVTtJQUNJLFVBQUE7RUFrQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vcnRnYWdlLWNhbGN1bGF0b3IvbW9ydGdhZ2UtY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZvciBjc3MgdmFyaWFibGVzXG5cbiR2YXJzOiAoXG4gIC8qLSBwcmltYXJ5IGJsdWUgLSovXG4gIGJsdWUtcHJpbWFyeTogIzAwNkFDMyxcblxuICAvKi0geWVsbG93IC0qL1xuICB5ZWxsb3ctcHJpbWFyeTogI2ZlZGYwMSxcblxuICAvKi0gc3VjY2VzcyAtKi9cbiAgZ3JlZW4tc3VjY2VzczogIzAzODgzQixcblxuICAvKi0gZXJyb3IgLSovXG4gIHJlZC1lcnJvcjogI0FGM0M0MyxcblxuICAgLyotIHdhcm5pbmcgLSovXG4gICBvcmFuZ2Utd2FybmluZzogI0MwNTgwMCxcblxuICAgIC8qLSBncmV5IC0qL1xuICBncmV5LTE6ICMzODQwNDIsXG4gIGdyZXktMjogIzVBNUM1RixcbiAgZ3JleS0zOiAjYzJjNWNjLFxuICBncmV5LTQ6ICNFNEU1RTcsXG4gIGdyZXktNTogI0Y4RjhGOCxcblxuICAvKi0gd2hpdGUgLSovXG4gIHdoaXRlOiAjRkZGRkZGLFxuXG4gIC8qLSBsaW5rIC0qL1xuICBsaW5rX2RlZmF1bHQ6ICMyQjQzODAsXG4gIGxpbmtfaG92ZXI6ICMwNTM1RDIsXG4gIGxpbmtfdmlzaXRlZDogICM3ODM0QkNcbik7XG5cbmJvZHkge1xuICAgIC0tcHJpbWFyeTogI3ttYXAtZ2V0KCR2YXJzLCBwcmltYXJ5KX07XG4gIH1cblxuLy9Gb3IgU2FzcyBWYXJpYWJsZXNcblxuICAgIC8qLSBibHVlIC0qL1xuICAgICRibHVlLXByaW1hcnk6ICMwMDZBQzM7XG5cbiAgICAvKi0geWVsbG93IC0qL1xuICAgICR5ZWxsb3ctcHJpbWFyeTogI2ZlZGYwMTtcblxuICAgIC8qLSBzdWNjZXNzIC0qL1xuICAgICRncmVlbi1zdWNjZXNzOiAjMDM4ODNCO1xuXG4gICAgLyotIGVycm9yIC0qL1xuICAgICRyZWQtZXJyb3I6ICNBRjNDNDM7XG5cbiAgICAgLyotIHdhcm5pbmcgLSovXG4gICAgICRvcmFuZ2Utd2FybmluZzogI0MwNTgwMDtcblxuICAgICAgLyotIGdyZXkgLSovXG4gICAgJGdyZXktMTogIzM4NDA0MjtcbiAgICAkZ3JleS0yOiAjNUE1QzVGO1xuICAgICRncmV5LTM6ICNjMmM1Y2M7XG4gICAgJGdyZXktNDogI0U0RTVFNztcbiAgICAkZ3JleS01OiAjRjhGOEY4O1xuXG4gICAgLyotIHdoaXRlIC0qL1xuICAgICR3aGl0ZTogI0ZGRkZGRjtcblxuICAgIC8qLSBsaW5rIC0qL1xuICAgICRsaW5rX2RlZmF1bHQ6ICMyQjQzODA7XG4gICAgJGxpbmtfaG92ZXI6ICMwNTM1RDI7XG4gICAgJGxpbmtfdmlzaXRlZDogICM3ODM0QkM7XG5cblxuXG4vLyBDU1MgdmFyaWFibGVzXG46cm9vdCB7XG4gIC8vIE1haW4gQnJhbmQgQ29sb3Vyc1xuXG4gIC8qLSBibHVlIC0qL1xuICAtLWJsdWUtcHJpbWFyeTogIzAwNkFDMztcblxuICAvKi0geWVsbG93IC0qL1xuICAtLXllbGxvdy1wcmltYXJ5OiAjZmVkZjAxO1xuXG4gIC8qLSBzdWNjZXNzIC0qL1xuICAtLWdyZWVuLXN1Y2Nlc3M6ICMwMzg4M0I7XG5cbiAgLyotIGVycm9yIC0qL1xuICAtLXJlZC1lcnJvcjogI0FGM0M0MztcblxuICAgLyotIHdhcm5pbmcgLSovXG4gICAtLW9yYW5nZS13YXJuaW5nOiAjQzA1ODAwO1xuXG4gICAgLyotIGdyZXkgLSovXG4gIC0tZ3JleS0xOiAjMzg0MDQyO1xuICAtLWdyZXktMjogIzVBNUM1RjtcbiAgLS1ncmV5LTM6ICNjMmM1Y2M7XG4gIC0tZ3JleS00OiAjRTRFNUU3O1xuICAtLWdyZXktNTogI0Y4RjhGODtcblxuICAvKi0gd2hpdGUgLSovXG4gIC0td2hpdGU6ICNGRkZGRkY7XG5cbiAgLyotIGxpbmsgLSovXG4gIC0tbGlua19kZWZhdWx0OiAjMkI0MzgwO1xuICAtLWxpbmtfaG92ZXI6ICMwNTM1RDI7XG4gIC0tbGlua192aXNpdGVkOiAgIzc4MzRCQztcblxufVxuXG4uY29sb3ItLWJyYW5kMSB7XG4gICAgY29sb3I6IHZhcigtLWJsdWUtcHJpbWFyeSk7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbG9yLS1icmFuZDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLXByaW1hcnkpO1xufVxuXG4uY29sb3ItLWJyYW5kMiB7XG4gIGNvbG9yOiB2YXIoLS15ZWxsb3ctcHJpbWFyeSk7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbG9yLS1icmFuZDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctcHJpbWFyeSk7XG59XG5cbi5jb2xvci0tYmFja2dyb3VuZC0td2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuXG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Fzcy9jb25maWdzL2NvbG9yc1wiO1xuXG4uZ2xvYmFsX19tb3J0Z2FnZUNhbGN1bGF0b3JfX3BhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuaWxsdXN0cmF0aW9uX19zZWN0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzogMy4xMjVyZW0gMDsgLy81MHB4IDA7XG4gICAgICAgIGZsZXg6IDEuNTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubW9ydGdhZ2VDYWxjdWxhdG9yX19mb3JtX19zZWN0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cbiAgICAgICAgLm1vcnRnYWdlQ2FsY3VsYXRvcl9fZm9ybS13cmFwcGVye1xuICAgICAgICAgICAgd2lkdGg6IDMwdnc7XG5cbiAgICAgICAgICAgIC5nbG9iYWxfX2hlYWRlcjF7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUtcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjYyNXJlbTsgLy80MnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuODc1cmVtOyAvLzMwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0F2ZXJ0YScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vcnRnYWdlQ2FsY3VsYXRvcl9fZm9ybS10ZXh0e1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07IC8vMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JleS0xKTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0F2ZXJ0YScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5mb3JtX19jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgLmZvcm17XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZWxlbWVudHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC42MjVyZW0gMDsgLy8xMHB4IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuY2FsY3VsYXRlLWJ1dHRvbi1lbGVtZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2xvYmFsX19idXR0b257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC45Mzc1cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXZlcnRhJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuZW5hYmxlLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9SZXNwb25zaXZlIHN0eWxlc1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5pbGx1c3RyYXRpb25fX3NlY3Rpb24tY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubW9ydGdhZ2VDYWxjdWxhdG9yX19mb3JtX19zZWN0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG5cbiAgICAgICAgICAgIC5tb3J0Z2FnZUNhbGN1bGF0b3JfX2Zvcm0td3JhcHBlcntcbiAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgLmlsbHVzdHJhdGlvbl9fc2VjdGlvbi1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb3J0Z2FnZUNhbGN1bGF0b3JfX2Zvcm1fX3NlY3Rpb24tY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxLjg3NXJlbSAwOyAvLzMwcHggMDtcblxuICAgICAgICAgICAgLm1vcnRnYWdlQ2FsY3VsYXRvcl9fZm9ybS13cmFwcGVye1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MortgageCalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mortgage-calculator',
                templateUrl: './mortgage-calculator.component.html',
                styleUrls: ['./mortgage-calculator.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/result-dialog/result-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/result-dialog/result-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: ResultDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultDialogComponent", function() { return ResultDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ResultDialogComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.value);
} }
// reference formula for monthly mortgage rate = "M = P[i(1+i)^n]/[(1+i)^n -1]"
class ResultDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Data object to use for dialog view
        this.finalData = [
            { name: 'Mortgage Amount:', value: `$${this.data.mortgageAmount}` },
            { name: 'Interest Rate:', value: `${this.data.interestRate}%` },
            { name: 'Amortization:', value: `${this.data.amortizationPeriod} Years` },
            { name: 'Total Interest Cost:', value: `$${this.totalInterestCost().toFixed(2)}` }
        ];
    }
    ngOnInit() { }
    //Calculate APR Rate based on selection of paymentFrequency
    aprRate() {
        return ((this.data.interestRate / 100) / this.data.paymentFrequency);
    }
    //Calculate Total Number of Mortgage Payments based on selection of paymentFrequency
    numOfPayments() {
        return (this.data.amortizationPeriod * this.data.paymentFrequency);
    }
    //Calculate term (1+i)^n or interestPayments^numberOfPayments
    interestPayments() {
        return Math.pow(1 + this.aprRate(), this.numOfPayments());
    }
    //Calculate mortgage payment
    mortgagePayment() {
        return (this.data.mortgageAmount * (this.aprRate() * this.interestPayments()) / (this.interestPayments() - 1));
    }
    // Calculate Total Interest Cost
    totalInterestCost() {
        return this.data.totalInterestCost = ((this.mortgagePayment() * this.numOfPayments()) - this.data.mortgageAmount);
    }
    // Closing privacy policy dialog
    onClose() {
        this.dialogRef.close();
    }
}
ResultDialogComponent.ɵfac = function ResultDialogComponent_Factory(t) { return new (t || ResultDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ResultDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultDialogComponent, selectors: [["app-result-dialog"]], decls: 14, vars: 4, consts: [[1, "modal-body", "result-modal-body"], [1, "calculated_payment_section"], [1, "mortgage_details-section"], [1, "mortgage_details-wrapper"], ["class", "mortgage_detail-item", 4, "ngFor", "ngForOf"], ["type", "button", 1, "close_button", 3, "click"], [1, "mortgage_detail-item"]], template: function ResultDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Payment will be:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your Mortgage Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResultDialogComponent_section_11_Template, 5, 2, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultDialogComponent_Template_button_click_12_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.mortgagePayment().toFixed(2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.finalData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["body[_ngcontent-%COMP%] {\n  --primary: ;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  \n  --blue-primary: #006AC3;\n  \n  --yellow-primary: #fedf01;\n  \n  --green-success: #03883B;\n  \n  --red-error: #AF3C43;\n  \n  --orange-warning: #C05800;\n  \n  --grey-1: #384042;\n  --grey-2: #5A5C5F;\n  --grey-3: #c2c5cc;\n  --grey-4: #E4E5E7;\n  --grey-5: #F8F8F8;\n  \n  --white: #FFFFFF;\n  \n  --link_default: #2B4380;\n  --link_hover: #0535D2;\n  --link_visited: #7834BC;\n}\n\n.color--brand1[_ngcontent-%COMP%] {\n  color: var(--blue-primary);\n}\n\n.background-color--brand1[_ngcontent-%COMP%] {\n  background-color: var(--blue-primary);\n}\n\n.color--brand2[_ngcontent-%COMP%] {\n  color: var(--yellow-primary);\n}\n\n.background-color--brand2[_ngcontent-%COMP%] {\n  background-color: var(--yellow-primary);\n}\n\n.color--background--white[_ngcontent-%COMP%] {\n  background-color: var(--white);\n}\n\n.result-modal-body[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.result-modal-body[_ngcontent-%COMP%]   .calculated_payment_section[_ngcontent-%COMP%] {\n  background-color: var(--blue-primary);\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--white);\n}\n\n.result-modal-body[_ngcontent-%COMP%]   .calculated_payment_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  font-size: 1.1rem;\n}\n\n.result-modal-body[_ngcontent-%COMP%]   .calculated_payment_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  font-size: 2.5rem;\n  padding: 1rem 0;\n  margin: 0;\n  letter-spacing: 1px;\n}\n\n.result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Averta\", Helvetica, sans-serif;\n}\n\n.result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%]   .mortgage_details-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin: auto;\n}\n\n.result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%]   .mortgage_details-wrapper[_ngcontent-%COMP%]   .mortgage_detail-item[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  font-size: 1rem;\n  display: flex;\n  min-width: 100%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%]   .mortgage_details-wrapper[_ngcontent-%COMP%]   .mortgage_detail-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.result-modal-body[_ngcontent-%COMP%]   .close_button[_ngcontent-%COMP%] {\n  margin: 0 2rem 1rem 2rem;\n  background-color: var(--yellow-primary);\n  border: none;\n  color: #004e90;\n  margin-left: auto;\n  display: table;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 1rem;\n  line-height: 25px;\n  padding: 15px 45px;\n  width: -webkit-max-content;\n  width: max-content;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;\n  text-align: center;\n  box-shadow: none;\n  border-radius: 15px;\n  font-family: \"Averta\", Helvetica, sans-serif;\n}\n\n@media screen and (max-width: 640px) {\n  .result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%]   .mortgage_details-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%]   .mortgage_details-wrapper[_ngcontent-%COMP%]   .mortgage_detail-item[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%]   .mortgage_details-wrapper[_ngcontent-%COMP%]   .mortgage_detail-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    margin: 5px 0;\n  }\n  .result-modal-body[_ngcontent-%COMP%]   .mortgage_details-section[_ngcontent-%COMP%]   .mortgage_details-wrapper[_ngcontent-%COMP%]   .mortgage_detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Fzcy9jb25maWdzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvcmVzdWx0LWRpYWxvZy9yZXN1bHQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDQTtFQUNJLFdBQUE7QUNqQ0o7O0FEc0NJLFdBQUE7O0FBR0EsYUFBQTs7QUFHQSxjQUFBOztBQUdBLFlBQUE7O0FBR0MsY0FBQTs7QUFHQyxXQUFBOztBQU9GLFlBQUE7O0FBR0EsV0FBQTs7QUFRSjtFQUdFLFdBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7RUFDQSx3QkFBQTtFQUVBLFlBQUE7RUFDQSxvQkFBQTtFQUVDLGNBQUE7RUFDQSx5QkFBQTtFQUVDLFdBQUE7RUFDRixpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ3JFRjs7QUR5RUE7RUFDSSwwQkFBQTtBQ3RFSjs7QUR5RUE7RUFDRSxxQ0FBQTtBQ3RFRjs7QUR5RUE7RUFDRSw0QkFBQTtBQ3RFRjs7QUR5RUE7RUFDRSx1Q0FBQTtBQ3RFRjs7QUR5RUE7RUFDSSw4QkFBQTtBQ3RFSjs7QUF0REE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBeURGOztBQXZERTtFQUNFLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF5REo7O0FBdERNO0VBQ0UsaUJBQUE7QUF3RFI7O0FBckRNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBdURSOztBQWxERTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFvREo7O0FBbERJO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtBQW9ETjs7QUFqREk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQW1ETjs7QUFqRE07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBbURSOztBQWpEUTtFQUNFLGdCQUFBO0FBbURWOztBQTdDRTtFQUNFLHdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQStDSjs7QUE1Q0U7RUFDRTtJQUNFLGFBQUE7RUE4Q0o7RUE3Q0k7SUFDRSxXQUFBO0VBK0NOO0VBOUNNO0lBQ0UsMkJBQUE7RUFnRFI7RUE5Q1E7SUFDRSxhQUFBO0VBZ0RWO0VBN0NRO0lBQ0UsZ0JBQUE7RUErQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC1kaWFsb2cvcmVzdWx0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZvciBjc3MgdmFyaWFibGVzXG5cbiR2YXJzOiAoXG4gIC8qLSBwcmltYXJ5IGJsdWUgLSovXG4gIGJsdWUtcHJpbWFyeTogIzAwNkFDMyxcblxuICAvKi0geWVsbG93IC0qL1xuICB5ZWxsb3ctcHJpbWFyeTogI2ZlZGYwMSxcblxuICAvKi0gc3VjY2VzcyAtKi9cbiAgZ3JlZW4tc3VjY2VzczogIzAzODgzQixcblxuICAvKi0gZXJyb3IgLSovXG4gIHJlZC1lcnJvcjogI0FGM0M0MyxcblxuICAgLyotIHdhcm5pbmcgLSovXG4gICBvcmFuZ2Utd2FybmluZzogI0MwNTgwMCxcblxuICAgIC8qLSBncmV5IC0qL1xuICBncmV5LTE6ICMzODQwNDIsXG4gIGdyZXktMjogIzVBNUM1RixcbiAgZ3JleS0zOiAjYzJjNWNjLFxuICBncmV5LTQ6ICNFNEU1RTcsXG4gIGdyZXktNTogI0Y4RjhGOCxcblxuICAvKi0gd2hpdGUgLSovXG4gIHdoaXRlOiAjRkZGRkZGLFxuXG4gIC8qLSBsaW5rIC0qL1xuICBsaW5rX2RlZmF1bHQ6ICMyQjQzODAsXG4gIGxpbmtfaG92ZXI6ICMwNTM1RDIsXG4gIGxpbmtfdmlzaXRlZDogICM3ODM0QkNcbik7XG5cbmJvZHkge1xuICAgIC0tcHJpbWFyeTogI3ttYXAtZ2V0KCR2YXJzLCBwcmltYXJ5KX07XG4gIH1cblxuLy9Gb3IgU2FzcyBWYXJpYWJsZXNcblxuICAgIC8qLSBibHVlIC0qL1xuICAgICRibHVlLXByaW1hcnk6ICMwMDZBQzM7XG5cbiAgICAvKi0geWVsbG93IC0qL1xuICAgICR5ZWxsb3ctcHJpbWFyeTogI2ZlZGYwMTtcblxuICAgIC8qLSBzdWNjZXNzIC0qL1xuICAgICRncmVlbi1zdWNjZXNzOiAjMDM4ODNCO1xuXG4gICAgLyotIGVycm9yIC0qL1xuICAgICRyZWQtZXJyb3I6ICNBRjNDNDM7XG5cbiAgICAgLyotIHdhcm5pbmcgLSovXG4gICAgICRvcmFuZ2Utd2FybmluZzogI0MwNTgwMDtcblxuICAgICAgLyotIGdyZXkgLSovXG4gICAgJGdyZXktMTogIzM4NDA0MjtcbiAgICAkZ3JleS0yOiAjNUE1QzVGO1xuICAgICRncmV5LTM6ICNjMmM1Y2M7XG4gICAgJGdyZXktNDogI0U0RTVFNztcbiAgICAkZ3JleS01OiAjRjhGOEY4O1xuXG4gICAgLyotIHdoaXRlIC0qL1xuICAgICR3aGl0ZTogI0ZGRkZGRjtcblxuICAgIC8qLSBsaW5rIC0qL1xuICAgICRsaW5rX2RlZmF1bHQ6ICMyQjQzODA7XG4gICAgJGxpbmtfaG92ZXI6ICMwNTM1RDI7XG4gICAgJGxpbmtfdmlzaXRlZDogICM3ODM0QkM7XG5cblxuXG4vLyBDU1MgdmFyaWFibGVzXG46cm9vdCB7XG4gIC8vIE1haW4gQnJhbmQgQ29sb3Vyc1xuXG4gIC8qLSBibHVlIC0qL1xuICAtLWJsdWUtcHJpbWFyeTogIzAwNkFDMztcblxuICAvKi0geWVsbG93IC0qL1xuICAtLXllbGxvdy1wcmltYXJ5OiAjZmVkZjAxO1xuXG4gIC8qLSBzdWNjZXNzIC0qL1xuICAtLWdyZWVuLXN1Y2Nlc3M6ICMwMzg4M0I7XG5cbiAgLyotIGVycm9yIC0qL1xuICAtLXJlZC1lcnJvcjogI0FGM0M0MztcblxuICAgLyotIHdhcm5pbmcgLSovXG4gICAtLW9yYW5nZS13YXJuaW5nOiAjQzA1ODAwO1xuXG4gICAgLyotIGdyZXkgLSovXG4gIC0tZ3JleS0xOiAjMzg0MDQyO1xuICAtLWdyZXktMjogIzVBNUM1RjtcbiAgLS1ncmV5LTM6ICNjMmM1Y2M7XG4gIC0tZ3JleS00OiAjRTRFNUU3O1xuICAtLWdyZXktNTogI0Y4RjhGODtcblxuICAvKi0gd2hpdGUgLSovXG4gIC0td2hpdGU6ICNGRkZGRkY7XG5cbiAgLyotIGxpbmsgLSovXG4gIC0tbGlua19kZWZhdWx0OiAjMkI0MzgwO1xuICAtLWxpbmtfaG92ZXI6ICMwNTM1RDI7XG4gIC0tbGlua192aXNpdGVkOiAgIzc4MzRCQztcblxufVxuXG4uY29sb3ItLWJyYW5kMSB7XG4gICAgY29sb3I6IHZhcigtLWJsdWUtcHJpbWFyeSk7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbG9yLS1icmFuZDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLXByaW1hcnkpO1xufVxuXG4uY29sb3ItLWJyYW5kMiB7XG4gIGNvbG9yOiB2YXIoLS15ZWxsb3ctcHJpbWFyeSk7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbG9yLS1icmFuZDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctcHJpbWFyeSk7XG59XG5cbi5jb2xvci0tYmFja2dyb3VuZC0td2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuXG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Fzcy9jb25maWdzL2NvbG9yc1wiO1xuLnJlc3VsdC1tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuY2FsY3VsYXRlZF9wYXltZW50X3NlY3Rpb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cbiAgICBwe1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1vcnRnYWdlX2RldGFpbHMtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGgyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXZlcnRhJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIC5tb3J0Z2FnZV9kZXRhaWxzLXdyYXBwZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgIC5tb3J0Z2FnZV9kZXRhaWwtaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgc3Ryb25ne1xuICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2xvc2VfYnV0dG9ue1xuICAgIG1hcmdpbjogMCAycmVtIDFyZW0gMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctcHJpbWFyeSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBkYXJrZW4oJGJsdWUtcHJpbWFyeSwgMTAlKTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogMTVweCA0NXB4O1xuICAgIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICAgIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVydGEnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC5tb3J0Z2FnZV9kZXRhaWxzLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIC5tb3J0Z2FnZV9kZXRhaWxzLXdyYXBwZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAubW9ydGdhZ2VfZGV0YWlsLWl0ZW17XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result-dialog',
                templateUrl: './result-dialog.component.html',
                styleUrls: ['./result-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/material-module.ts":
/*!********************************!*\
  !*** ./src/material-module.ts ***!
  \********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");




































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, providers: [], imports: [[
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
                ],
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/snasare/Desktop/Angular_Projects/mortgageCalculator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map