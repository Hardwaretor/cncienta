(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/guille/cncienta/src/main.ts */"zUnb");


/***/ }),

/***/ "01Ks":
/*!****************************************!*\
  !*** ./src/app/iot/iot.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW90L2lvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9pb3QvaW90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "0jZI":
/*!************************************!*\
  !*** ./src/app/_models/counter.ts ***!
  \************************************/
/*! exports provided: Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return Counter; });
var Counter = /** @class */ (function () {
    function Counter() {
    }
    return Counter;
}());



/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "J9tS");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, route, router, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.imageSrc = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)],
            web: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)],
            country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)],
            profesion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)],
            skills: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)],
            stacks: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)],
            birthdate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)],
            jobseeker: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)],
            eosaccount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(12)],
            photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,],
            gridCheck1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gridCheck2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.accountService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            _this.router.navigate(['./home'], { relativeTo: _this.route });
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        file = file[0].getAsDataURL();
    };
    RegisterComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.url = reader.result;
        console.log(this.imageSrc);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({ template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "2ZcO":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n\n  <meta name=\"Checkout\" content=\"Author: Guillermo Galindo,\n    Illustrator: Guillermo Galindo\">\n\n</head>\n\n<div class=\"row\">\n  <div class=\"col-8\">\n\n    <div class=\"iotlogin-card\">\n      <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Products <button style=\"float: right!important;\" href=\"./home\" class=\"btn btn-primary\">Back to shopping</button></h1>\n\n      <div class=\"card-body\">\n\n        <app-checkout-list></app-checkout-list>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"col-4\">\n\n             <div class=\"iotlogin-card\">\n      <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Payment</h1>\n      <div class=\"card-body\">\n\n        <app-payment></app-payment>\n\n        </div>\n\n      </div>\n    </div>\n\n\n</div>");

/***/ }),

/***/ "2vIj":
/*!********************************************************!*\
  !*** ./src/app/machine-list/machine-list.component.ts ***!
  \********************************************************/
/*! exports provided: MachineListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineListComponent", function() { return MachineListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_machine_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./machine-list.component.html */ "cwcy");
/* harmony import */ var _machine_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./machine-list.component.scss */ "f3Ob");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "J9tS");






var MachineListComponent = /** @class */ (function () {
    function MachineListComponent(accountService) {
        this.accountService = accountService;
        this.machines = null;
    }
    MachineListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAllmachines()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (machines) { return _this.machines = machines; });
    };
    MachineListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        var machine = this.machines.find(function (x) { return x.id === id; });
        machine.isDeleting = true;
        this.accountService.delete(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function () {
            _this.machines = _this.machines.filter(function (x) { return x.id !== id; });
        });
    };
    MachineListComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }
    ]; };
    MachineListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-machine-list',
            template: _raw_loader_machine_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_machine_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"]])
    ], MachineListComponent);
    return MachineListComponent;
}());



/***/ }),

/***/ "4TYj":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/camera/camera.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center\">\n  <div>\n  <webcam [height]=\"400\" [width]=\"400\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\n  [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\" [videoOptions]=\"videoOptions\" (cameraSwitched)=\"cameraWasSwitched($event)\"\n  (initError)=\"handleInitError($event)\"></webcam>\n  <br/>\n  \n  <div class=\"btn btn-primary\" (click)=\"triggerSnapshot();\" title=\"Take Picture\">Take Snapshot</div>\n  <div class=\"btn btn-primary\" (click)=\"showNextWebcam(true);\" title=\"Switch Camera\">Change Camera</div>\n\n  </div>\n  </div>\n  <h4 *ngIf=\"errors.length > 0\">Messages:</h4>\n  <ul *ngFor=\"let error of errors\">\n  <li>{{error | json}}</li>\n  </ul>\n");

/***/ }),

/***/ "4khp":
/*!********************************************************!*\
  !*** ./src/app/device-list/device-list.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1saXN0L2RldmljZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "5TFM":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "5ZPe":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "AytR");







var AccountService = /** @class */ (function () {
    function AccountService(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
        this.productSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('product')));
        this.product = this.productSubject.asObservable();
        this.machineSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('machine')));
        this.machine = this.machineSubject.asObservable();
        this.deviceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('device')));
        this.device = this.deviceSubject.asObservable();
        this.camSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('cam')));
        this.cam = this.camSubject.asObservable();
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('cart')));
        this.cart = this.cartSubject.asObservable();
        this.counterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('counter')));
        this.counter = this.counterSubject.asObservable();
    }
    Object.defineProperty(AccountService.prototype, "userValue", {
        get: function () {
            return this.userSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "productValue", {
        get: function () {
            return this.productSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "machineValue", {
        get: function () {
            return this.machineSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "deviceValue", {
        get: function () {
            return this.deviceSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "camValue", {
        get: function () {
            return this.camSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "cartValue", {
        get: function () {
            return this.cartSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "counterValue", {
        get: function () {
            return this.counterSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AccountService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/authenticate", { username: username, password: password, })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (ref) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(ref));
            _this.userSubject.next(ref);
            return ref;
        }));
    };
    AccountService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    };
    AccountService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/register", user);
    };
    AccountService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users");
    };
    AccountService.prototype.getUser = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/user");
    };
    AccountService.prototype.getAllmachines = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/machines");
    };
    AccountService.prototype.getAlldevices = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/devices");
    };
    AccountService.prototype.getAllcams = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/cams");
    };
    AccountService.prototype.getAllproducts = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/products");
    };
    AccountService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/" + id);
    };
    AccountService.prototype.getmachineById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/machines/" + id);
    };
    AccountService.prototype.getdevicesById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/mmachine/" + id);
    };
    AccountService.prototype.update = function (id, params) {
        var _this = this;
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/" + id, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
            // update stored user if the logged in user updated their own record
            if (id == _this.userValue.id) {
                // update local storage
                var user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.userValue), params);
                localStorage.setItem('user', JSON.stringify(user));
                // publish updated user to subscribers
                _this.userSubject.next(user);
            }
            return x;
        }));
    };
    AccountService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
            // auto logout if the logged in user deleted their own record
            if (id == _this.userValue.id) {
                _this.logout();
            }
            return x;
        }));
    };
    AccountService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "71F7":
/*!******************************************************!*\
  !*** ./src/app/device-list/device-list.component.ts ***!
  \******************************************************/
/*! exports provided: DeviceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListComponent", function() { return DeviceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_device_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./device-list.component.html */ "WhEe");
/* harmony import */ var _device_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device-list.component.scss */ "4khp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "J9tS");






var DeviceListComponent = /** @class */ (function () {
    function DeviceListComponent(accountService) {
        this.accountService = accountService;
        this.devices = null;
    }
    DeviceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAlldevices()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (devices) { return _this.devices = devices; });
    };
    DeviceListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        var device = this.devices.find(function (x) { return x.id === id; });
        device.isDeleting = true;
        this.accountService.delete(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function () {
            _this.devices = _this.devices.filter(function (x) { return x.id !== id; });
        });
    };
    DeviceListComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }
    ]; };
    DeviceListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-device-list',
            template: _raw_loader_device_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_device_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"]])
    ], DeviceListComponent);
    return DeviceListComponent;
}());



/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.component.html */ "5TFM");
/* harmony import */ var _about_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component.scss */ "ijUo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.ctorParameters = function () { return []; };
    AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about',
            template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "8I51":
/*!**********************************************!*\
  !*** ./src/app/machine/machine.component.ts ***!
  \**********************************************/
/*! exports provided: MachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineComponent", function() { return MachineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_machine_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./machine.component.html */ "SzpU");
/* harmony import */ var _machine_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./machine.component.scss */ "riG1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var MachineComponent = /** @class */ (function () {
    function MachineComponent() {
        this.gaugeType = "semi";
        this.gaugeForm = "thick";
        this.gaugeValue = 75;
        this.gaugeLabel1 = "Cut Speed";
        this.gaugeAppendText1 = "m/mn";
        this.gaugeLabel2 = "Head Temp";
        this.gaugeAppendText2 = "º";
        this.gaugeLabel3 = "Head Speed";
        this.gaugeAppendText3 = "r/mn";
        this.gaugeLabel4 = "Drivers Temp";
        this.gaugeAppendText4 = "º";
        this.thresholdConfig = {
            '0': { color: 'green' },
            '40': { color: 'orange' },
            '75.5': { color: 'red' }
        };
    }
    MachineComponent.prototype.ngOnInit = function () {
    };
    MachineComponent.ctorParameters = function () { return []; };
    MachineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-machine',
            template: _raw_loader_machine_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_machine_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MachineComponent);
    return MachineComponent;
}());



/***/ }),

/***/ "8PEf":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  display: flex;\n  background-color: white;\n  margin: 0;\n  color: black;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  padding: 0%;\n}\n\nheader .brand {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\nheader .brand img {\n  height: 35px;\n  border-radius: 50%;\n  margin-right: 17px;\n}\n\nheader .brand h5 {\n  font-family: 'Lobster', cursive;\n  font-size: 23px;\n  margin: 0;\n  letter-spacing: 1px;\n  color: #34badb;\n  background: linear-gradient(90deg, rgba(52, 186, 219, 0.987833) 44%, #00ffbe 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nheader ul {\n  list-style: none;\n  padding-left: 0;\n  display: flex;\n}\n\nheader ul li {\n  display: flex;\n  align-items: center;\n  position: relative;\n  vertical-align: middle;\n}\n\nheader ul li .img1 {\n  width: 100px;\n  vertical-align: middle;\n}\n\nheader ul li .img2 {\n  width: 40px !important;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n\nheader ul li .badge {\n  height: 20px;\n  width: 20px;\n  font-size: 13px;\n  color: white;\n  background-color: #000000;\n  display: flex;\n  justify-content: center;\n  vertical-align: bottom;\n  align-items: center;\n  position: absolute;\n  top: 10px;\n  right: -5px;\n  border-radius: 50%;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.navbar-dark .navbar-brand {\n  color: black;\n}\n\n.navbar-nav {\n  display: flex;\n  flex-direction: row;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0%;\n  margin: 0%;\n  width: 100%;\n  margin-bottom: 0% !important;\n}\n\nnav-link {\n  display: block;\n  padding: .5rem 1rem;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: black;\n}\n\n.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n  color: black;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.bg-light {\n  background-color: #f8f9fa00 !important;\n}\n\nheader[_ngcontent-c1] ul[_ngcontent-c1] li[_ngcontent-c1] img[_ngcontent-c1] {\n  width: 100px !important;\n  padding-left: 50% !important;\n}\n\n.logocart {\n  width: 20% !important;\n}\n\na {\n  color: #000000;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFlBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxXQUFXO0FBQ2I7O0FBUEE7RUFTSSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtBQUV2Qjs7QUFiQTtFQWNNLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBR3hCOztBQW5CQTtFQW9CTSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsY0FBd0I7RUFDeEIsa0ZBSUM7RUFDRCxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUQxQzs7QUEvQkE7RUFxQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0FBRmpCOztBQXJDQTtFQTBDTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFENUI7O0FBNUNBO0VBZ0RRLFlBQVk7RUFDWixzQkFBc0I7QUFBOUI7O0FBakRBO0VBcURRLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQTFCOztBQXZEQTtFQTREUSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7QUFEMUI7O0FBT0E7RUFDRSx5QkFBeUI7QUFKM0I7O0FBT0E7RUFDRSxZQUFtQjtBQUpyQjs7QUFPQTtFQUVFLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFKbEI7O0FBT0E7RUFDRSxrQkFBa0I7RUFFbEIsYUFBYTtFQUViLGVBQWU7RUFFZixtQkFBbUI7RUFFbkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLDRCQUE0QjtBQUo5Qjs7QUFPQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFKckI7O0FBT0E7RUFDRSxZQUFtQjtBQUpyQjs7QUFRQTtFQUNFLFlBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFMeEI7O0FBU0E7RUFDRSxzQ0FBcUM7QUFOdkM7O0FBU0E7RUFDRSx1QkFBdUI7RUFDdkIsNEJBQTRCO0FBTjlCOztBQVNBO0VBRUUscUJBQXFCO0FBUHZCOztBQVdBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFSL0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwJTtcblxuICAuYnJhbmQge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTdweDtcbiAgICB9XG5cbiAgICBoNSB7XG4gICAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGNvbG9yOiByZ2IoNTIsIDE4NiwgMjE5KTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgOTBkZWcsXG4gICAgICAgIHJnYmEoNTIsIDE4NiwgMjE5LCAwLjk4NzgzMjYzMzA1MzIyMTMpIDQ0JSxcbiAgICAgICAgcmdiYSgwLCAyNTUsIDE5MCwgMSkgMTAwJVxuICAgICAgKTtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAuaW1nMSB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cblxuICAgICAgLmltZzIge1xuICAgICAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICAuYmFkZ2Uge1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAlO1xuICBtYXJnaW46IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcbn1cblxubmF2LWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsIC5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIFxufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhMDAhaW1wb3J0YW50O1xufVxuXG5oZWFkZXJbX25nY29udGVudC1jMV0gdWxbX25nY29udGVudC1jMV0gbGlbX25nY29udGVudC1jMV0gaW1nW19uZ2NvbnRlbnQtYzFdIHtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNTAlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvY2FydCB7XG5cbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuXG59XG5cbmEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService) {
        this.productService = productService;
        this.loading = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "AytR":
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
    production: false,
    apiUrl: 'http://localhost:4001'
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

/***/ "ByK8":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





// array in local storage for registered users
var users = JSON.parse(localStorage.getItem('users')) || [];
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var url = request.url, method = request.method, headers = request.headers, body = request.body;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            var username = body.username, password = body.password;
            var user = users.find(function (x) { return x.username === username && x.password === password; });
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'jwtToken'
            });
        }
        function register() {
            var user = body;
            if (users.find(function (x) { return x.username === user.username; })) {
                return error('Username "' + user.username + '" is already taken');
            }
            user.id = users.length ? Math.max.apply(Math, users.map(function (x) { return x.id; })) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        function getUserById() {
            if (!isLoggedIn())
                return unauthorized();
            var user = users.find(function (x) { return x.id === idFromUrl(); });
            return ok(user);
        }
        function updateUser() {
            if (!isLoggedIn())
                return unauthorized();
            var params = body;
            var user = users.find(function (x) { return x.id === idFromUrl(); });
            // only update password if entered
            if (!params.password) {
                delete params.password;
            }
            // update and save user
            Object.assign(user, params);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        function deleteUser() {
            if (!isLoggedIn())
                return unauthorized();
            users = users.filter(function (x) { return x.id !== idFromUrl(); });
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer';
        }
        function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    };
    FakeBackendInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());



/***/ }),

/***/ "DI59":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment.component.html */ "Fm4u");
/* harmony import */ var _payment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.component.scss */ "Ta4t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");





var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(accountService) {
        this.accountService = accountService;
        this.user = this.accountService.userValue;
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
    ]; };
    PaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-payment',
            template: _raw_loader_payment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_payment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "Dgtq":
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "Fm4u":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-user\">\n\n    <h4>{{user.username}}</h4>\n    <h6>{{user.web}}</h6>\n    <h6>{{user.country}}</h6>\n    <h6>{{user.email}}</h6>\n    \n  </div>\n");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<head>\n\n  <meta name=\"Home\" content=\"Author: Guillermo Galindo,\n    Illustrator: Guillermo Galindo\">\n\n</head>\n\n<!doctype html>\n<html lang=\"en\">\n\n<div>\n  \n  <div class=\"home\">\n\n     <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n         <ol class=\"carousel-indicators\">\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\"  class=\"active\"></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\" ></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"5\"></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"6\"></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"7\"></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"8\"></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"9\"></li>\n           <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"10\"></li>\n         </ol>\n \n         <div class=\"carousel-inner\">\n           <div class=\"carousel-item active\">\n             <img class=\"d-block w-100\" src=\"assets/home/1.png\" alt=\"1\">\n           </div>\n           <div class=\"carousel-item\">\n             <img class=\"d-block w-100\" src=\"assets/home/2.png\" alt=\"2\">\n           </div>\n           <div class=\"carousel-item\">\n             <img class=\"d-block w-100\" src=\"assets/home/3.png\" alt=\"3\">\n           </div>\n           <div class=\"carousel-item\">\n             <img class=\"d-block w-100\" src=\"assets/home/4.png\" alt=\"4\">\n           </div>\n           <div class=\"carousel-item\">\n             <img class=\"d-block w-100\" src=\"assets/home/5.png\" alt=\"5\">\n           </div>\n           <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/home/6.png\" alt=\"6\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/home/7.png\" alt=\"7\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/home/8.png\" alt=\"8\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/home/9.png\" alt=\"9\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/home/10.png\" alt=\"10\">\n          </div>\n         </div>\n \n         <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n           <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n           <span class=\"sr-only\">Previous</span>\n         </a>\n         <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n           <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n           <span class=\"sr-only\">Next</span>\n         </a>\n       </div>\n     </div>\n\n    \n\n<main>\n <section class=\"banners\">\n   <div>\n    <img src=\"/assets/home/Our products.png\" alt=\"Our Products\"/>\n   </div>\n   <div>\n    <img src=\"/assets/home/Our products.png\" alt=\"Home Art\"/>\n   </div>\n   <div>\n     <img src=\"/assets/home/Our products.png\" alt=\"Aluminium Profiles\"/>\n   </div>\n   <div>\n     <img src=\"/assets/home/Our products.png\" alt=\"Arduino Components\"/>\n   </div>\n   <div>\n    <img src=\"/assets/home/Our products.png\" alt=\"CNC & 3D Printer Components\" />\n  </div>\n </section>\n\n <section class=\"product-area\">\n\n\n   <app-product-list></app-product-list>\n\n </section>\n</main>\n\n</div>\n\n<cookie-law learnMore=\"/assets/CNCienta.com Privacy Policy.pdf\"></cookie-law>\n\n</html>");

/***/ }),

/***/ "GoWa":
/*!************************************!*\
  !*** ./src/app/_models/product.ts ***!
  \************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "GrDo":
/*!**********************************************!*\
  !*** ./src/app/device/device.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9kZXZpY2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\n<html lang=\"en\">\n\n\n<body>\n\n\n  <footer id=\"footer\" class=\"footer-1\">\n    <div class=\"main-footer widgets-dark typo-light\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-xs-12 col-sm-6 col-md-3\">\n            <div class=\"widget subscribe no-box\">\n              <h3 class=\"widget-title\">CNCienta.com<span></span></h3>\n              <p>Your DIY Shop</p>\n              <p><a href=\"/assets/CNCienta.com Registration Agreement.pdf\">Privaticy Policy</a></p>\n              <p><a href=\"/assets/CNCienta.com Registration Agreement.pdf\">Registration Agreement</a></p>\n              \n            </div>\n          </div>\n\n          <div class=\"col-xs-12 col-sm-6 col-md-3\">\n            <div class=\"widget no-box\">\n              <h3 class=\"widget-title\">QUICK LINKS<span></span></h3>\n              <ul class=\"thumbnail-widget\">\n\n                <li>\n                  <div class=\"thumb-content\"><a href=\"./home\">Home</a></div>\n                </li>\n                <li>\n                  <div class=\"thumb-content\"><a href=\"./iot\">IOT Portal</a></div>\n                </li>\n                <li>\n                  <div class=\"thumb-content\"><a href=\"./services\">Services</a></div>\n                </li>\n                <li>\n                  <div class=\"thumb-content\"><a href=\"./register\">SingUp</a></div>\n                </li>\n                <li>\n                  <div class=\"thumb-content\"><a href=\"./login\">Login</a></div>\n                </li>\n                <li>\n                  <div class=\"thumb-content\"><a href=\"./checkout\">CheckOut</a></div>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"col-xs-12 col-sm-6 col-md-3\">\n            <div class=\"widget no-box\">\n              <h3 class=\"widget-title\">GET STARTED<span></span></h3>\n              <p>Get access to your full project features and work enviroment</p>\n              <a class=\"btn\" href=\"/register\" target=\"_blank\">Register Now</a>\n            </div>\n          </div>\n\n          <div class=\"col-xs-12 col-sm-6 col-md-3\">\n\n            <div class=\"widget no-box\">\n              <h3 class=\"widget-title\">CONTACT US<span></span></h3>\n\n              <p><a href=\"mailto:support@cncienta.com\">support@cncienta.com</a></p>\n\n              <div class=\"row iconbar\" style=\" padding-top: 1%;\">\n\n                <div class=\"footericons\">\n                  <a class=\"padding-top-subtitle\" rel=\"noopener\"  href=\"https://github.com/CADEOS\" target=\"_blank\">\n                    <img srcset=\"\" alt=\"github\" src=\"/assets/logos/GitHub.svg\" class=\"footericons\">\n                  </a>\n                  \n                </div>\n                <div class=\"footericons\">\n                  <a class=\"padding-top-subtitle\" rel=\"noopener\" href=\"https://web.facebook.com/cadeos.io\"\n                    target=\"_blank\">\n                    <img srcset=\"\" alt=\"faceook\" src=\"/assets/logos/facebook.svg\" class=\"footericons\">\n                  </a>\n        \n                </div>\n                <div class=\"footericons\">\n                  <a class=\"padding-top-subtitle\" rel=\"noopener\" href=\"https://twitter.com/cadeosi\" target=\"_blank\">\n                    <img srcset=\"\" alt=\"twitter\" src=\"/assets/logos/Twitter.svg\" class=\"footericons\">\n                  </a>\n        \n        \n                </div>\n                <div class=\"footericons\">\n                  <a class=\"padding-top-subtitle\" rel=\"noopener\" href=\"https://t.me/cadeos\" target=\"_blank\">\n                    <img srcset=\"\" alt=\"telegram\" src=\"/assets/logos/telegram.svg\" class=\"footericons\">\n                  </a>\n        \n                </div>\n                <div class=\"footericons\">\n                  <a class=\"padding-top-subtitle\" rel=\"noopener\" href=\"https://medium.com/cadeos-io\" target=\"_blank\">\n                    <img srcset=\"\" alt=\"medium\" src=\"/assets/logos/medium.svg\" class=\"footericons\">\n                  </a>\n        \n                </div>\n                <div class=\"footericons\">\n                  <a class=\"padding-top-subtitle\" rel=\"noopener\" href=\"\" target=\"_blank\">\n                    <img srcset=\"\" alt=\"blockchain\" src=\"/assets/logos/blockchain.svg\" class=\"footericons\">\n                  </a>\n        \n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n            <p>Copyright CNCienta.com © 2020. All rights reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</body>\n\n</html>");

/***/ }),

/***/ "Hsdx":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list.component.html */ "fFTC");
/* harmony import */ var _product_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component.scss */ "NcJX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models */ "nPby");







var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(accountService) {
        this.accountService = accountService;
        this.products = null;
        this.inCart = false;
    }
    ProductListComponent.prototype.addToCart = function (cart) {
        var oldProducts = JSON.parse(localStorage.getItem('cart')) || [];
        var newProduct = { cart: cart };
        oldProducts.push(newProduct);
        localStorage.setItem('cart', JSON.stringify(oldProducts));
        var counter = JSON.parse(localStorage.cart).length;
        localStorage.setItem('counter', JSON.stringify(counter));
    };
    ProductListComponent.prototype.removeToCart = function (cart) {
        localStorage.removeItem('cart');
        this.inCart = false;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAllproducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (products) { return _this.products = products; });
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }
    ]; };
    ProductListComponent.propDecorators = {
        product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-product-list',
            template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_product_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.component.html */ "2ZcO");
/* harmony import */ var _checkout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.component.scss */ "q7H1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(productService) {
        this.productService = productService;
        this.loading = false;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["CheckoutService"] }
    ]; };
    CheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-checkout',
            template: _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_checkout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["CheckoutService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "J9tS":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AccountService, AlertService, AuthenticationService, UserService, ProductsService, CheckoutService, MachinesService, DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ "5ZPe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "f5O9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "pW6c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "VITL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });

/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.service */ "JZ3y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]; });

/* harmony import */ var _checkout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout.service */ "kgHL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return _checkout_service__WEBPACK_IMPORTED_MODULE_5__["CheckoutService"]; });

/* harmony import */ var _machines_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./machines.service */ "vrKY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MachinesService", function() { return _machines_service__WEBPACK_IMPORTED_MODULE_6__["MachinesService"]; });

/* harmony import */ var _devices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devices.service */ "wHU4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return _devices_service__WEBPACK_IMPORTED_MODULE_7__["DevicesService"]; });











/***/ }),

/***/ "JZ3y":
/*!***********************************************!*\
  !*** ./src/app/_services/products.service.ts ***!
  \***********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/products");
    };
    ProductsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "KfLr":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./services.component.html */ "b44A");
/* harmony import */ var _services_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.component.scss */ "mMT2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent.ctorParameters = function () { return []; };
    ServicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-services',
            template: _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_services_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "NcJX":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-actions__add, .product-actions__remove {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n}\n\n.product-actions__add:hover, .product-actions__remove:hover {\n  transform: scale(1.5);\n}\n\n.product-actions__add img, .product-actions__remove img {\n  width: 20px;\n  height: 20px;\n}\n\n.product {\n  box-shadow: 0 1px 1px 0 black;\n  border-radius: 5px;\n  margin: 1%;\n  border-color: black;\n  border-width: 2px;\n}\n\n.product:hover {\n  transform: scale(1.05);\n  border: #00000000;\n  background-color: transparent;\n}\n\n.product:hover .product-actions {\n  display: flex;\n}\n\n.product-image {\n  max-width: 100%;\n  width: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.product-details {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 15px;\n}\n\n.product-details__price {\n  font-weight: 500;\n  opacity: 0.7;\n  letter-spacing: 1px;\n  margin: 0;\n}\n\n.product-details__name {\n  opacity: 0.8;\n  font-weight: 500;\n  margin: 0;\n}\n\n.product-description {\n  padding: 10px 15px;\n}\n\n.product-description p {\n  opacity: 0.6;\n  margin: 0;\n}\n\n.product-actions {\n  display: none;\n  justify-content: flex-end;\n  padding: 0 15px;\n  margin: 1%;\n}\n\n.product-actions__add {\n  border: 2px solid rgba(0, 0, 0, 0);\n  background-color: black;\n  border-radius: 50%;\n}\n\n.product-actions__remove {\n  border: 2px solid rgba(0, 0, 0, 0);\n  background-color: #f14545;\n  border-radius: 50%;\n}\n\n.table {\n  width: 100%;\n  color: #212529;\n  font-weight: bold;\n  font-size: small;\n  background-color: rgba(255, 255, 255, 0.652);\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(197, 197, 197, 0.679);\n}\n\ntr {\n  vertical-align: inherit;\n  border-color: black;\n  float: left !important;\n  width: 14.28% !important;\n}\n\n.table td, .table th {\n  padding: 1%;\n  vertical-align: top;\n  margin: 0.5%;\n  border-top: 1px solid #000000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFBakI7O0FBSUU7RUFDRSxxQkFBcUI7QUFEekI7O0FBS0U7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUZoQjs7QUFPQTtFQUNFLDZCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFKbkI7O0FBREE7RUFVSSxzQkFBc0I7RUFDdEIsaUJBQWtCO0VBQ2xCLDZCQUE2QjtBQUxqQzs7QUFQQTtFQWVNLGFBQWE7QUFKbkI7O0FBUUU7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFMckI7O0FBUUU7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUxyQjs7QUFPSTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7QUFKZjs7QUFPSTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsU0FBUztBQUpmOztBQVFFO0VBQ0Usa0JBQWtCO0FBTHRCOztBQUlHO0VBSUcsWUFBWTtFQUNaLFNBQVM7QUFKZjs7QUFRRTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFVBQVU7QUFMZDs7QUFRSTtFQUVFLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBTnhCOztBQVVJO0VBRUUsa0NBQWtDO0VBQ2xDLHlCQUFrQztFQUNsQyxrQkFBa0I7QUFSeEI7O0FBY0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLGNBQWM7RUFDZCxpQkFBaUI7QUFYbkI7O0FBZUE7RUFDRSw0Q0FBNEM7QUFaOUM7O0FBZ0JBO0VBRUUsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBcUI7RUFDckIsd0JBQXVCO0FBZHpCOztBQWtCQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDZCQUE2QjtBQWYvQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiVidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgXG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgIFxuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgfVxufVxuXG4ucHJvZHVjdCB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYigwLCAwLCAwKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDElO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDJweDtcblxuXG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBib3JkZXI6ICAjMDAwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAucHJvZHVjdC1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cbiAgJi1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgXG4gICYtZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG5cbiAgICAmX19wcmljZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmX19uYW1lIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgJi1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuXG4gICAgcCB7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgJi1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIG1hcmdpbjogMSU7XG5cblxuICAgICZfX2FkZCB7XG4gICAgICBAZXh0ZW5kICVidXR0b247XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICB9XG5cbiAgICAmX19yZW1vdmUge1xuICAgICAgQGV4dGVuZCAlYnV0dG9uO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDY5LCA2OSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1Mik7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcblxufVxuXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDE5NywgMTk3LCAwLjY3OSk7XG4gXG59XG5cbnRyIHtcbiAgXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBmbG9hdDogbGVmdCFpbXBvcnRhbnQ7IFxuICB3aWR0aDogMTQuMjglIWltcG9ydGFudDtcblxufVxuXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDElO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW46IDAuNSU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwO1xuXG59XG5cbiJdfQ== */");

/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n\n    <meta name=\"Register\" content=\"Author: Guillermo Galindo,\n      Illustrator: Guillermo Galindo\">\n  \n  </head>\n\n<!doctype html>\n<html>\n    \n  <div class=\"register-card\">\n      <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Create User</h1>\n      <div class=\"card-body\">\n\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n              <div class=\"form-row\">\n                  <div class=\"col-md-4 mb-3\">\n                      <label for=\"firstName\">First Name</label>\n                      <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                      <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-4 mb-3\">\n                      <label for=\"lastName\">Last Name</label>\n                      <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                      <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-4 mb-3\">\n                      <label for=\"username\">Username</label>\n                      <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                      <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-4 mb-3\">\n                      <label for=\"password\">Password</label>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                          <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-4 mb-3\">\n                      <label for=\"email\">Email</label>\n                      <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-4 mb-3\">\n                      <label for=\"address\">Shipment Address</label>\n                      <input type=\"web\" formControlName=\"address\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.web.errors }\" />\n                      <div *ngIf=\"submitted && f.web.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.web.errors.required\">Web is required</div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-4 mb-3\">\n                      <label for=\"city\">City</label>\n                      <input type=\"text\" formControlName=\"city\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" />\n                      <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.city.errors.required\">City is required</div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-4 mb-3\">\n                    <label for=\"postal\">Postal Code</label>\n                    <input type=\"text\" formControlName=\"postal\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.postal.errors }\" />\n                    <div *ngIf=\"submitted && f.postal.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.postal.errors.required\">Postal Code is required</div>\n                    </div>\n                </div>\n\n\n                  <div class=\"col-md-4 mb-3\">\n                      <label for=\"country\">Country</label>\n                      <input type=\"text\" formControlName=\"country\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\" />\n                      <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.country.errors.required\">Country is required</div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"form-group \">\n                  <div class=\"form_check1\" ng-controller=\"ExampleController\">\n                      <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck2\" ng-true-value=\"'YES'\" ng-false-value=\"'NO'\" ng-model=\"checkboxModel.value1\">\n                      <label class=\"form-check-label\" for=\"gridCheck2\">\n                          CNCienta.com could send me emails with personalized offers, support updates, and event\n                          news.\n                      </label>\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"form_check2\" ng-controller=\"ExampleController\">\n                      <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck1\" ng-true-value=\"'YES'\" ng-false-value=\"'NO'\" ng-model=\"checkboxModel.value1\">\n                      <label class=\"form-check-label\" for=\"gridCheck1\">\n                          By clicking SUBSCRIBE, you agree to the CNCienta.com Privacy Statement.\n                      </label>\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                      <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                      Register\n                  </button>\n                  <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n              </div>\n\n          </form>\n      </div>\n</div>\n\n</html>");

/***/ }),

/***/ "OXFE":
/*!************************************************!*\
  !*** ./src/app/cam-list/cam-list.component.ts ***!
  \************************************************/
/*! exports provided: CamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamListComponent", function() { return CamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cam_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cam-list.component.html */ "n1ys");
/* harmony import */ var _cam_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cam-list.component.scss */ "aGwG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "J9tS");






var CamListComponent = /** @class */ (function () {
    function CamListComponent(accountService) {
        this.accountService = accountService;
        this.cams = null;
    }
    CamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAllcams()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (cams) { return _this.cams = cams; });
    };
    CamListComponent.prototype.deleteCam = function (user_id) {
        var _this = this;
        var cam = this.cams.find(function (x) { return x.id === user_id; });
        cam.isDeleting = true;
        this.accountService.delete(user_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function () {
            _this.cams = _this.cams.filter(function (x) { return x.id !== user_id; });
        });
    };
    CamListComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }
    ]; };
    CamListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cam-list',
            template: _raw_loader_cam_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cam_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"]])
    ], CamListComponent);
    return CamListComponent;
}());



/***/ }),

/***/ "PY1i":
/*!**************************************!*\
  !*** ./src/app/iot/iot.component.ts ***!
  \**************************************/
/*! exports provided: IotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotComponent", function() { return IotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_iot_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./iot.component.html */ "oUpz");
/* harmony import */ var _iot_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iot.component.scss */ "01Ks");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "J9tS");







var IotComponent = /** @class */ (function () {
    function IotComponent(formBuilder, route, router, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.webcamImage = null;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    IotComponent.prototype.handleImage = function (webcamImage) {
        this.webcamImage = webcamImage;
    };
    IotComponent.prototype.ngOnInit = function () {
    };
    IotComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
    ]; };
    IotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-iot',
            template: _raw_loader_iot_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_iot_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], IotComponent);
    return IotComponent;
}());



/***/ }),

/***/ "RunO":
/*!********************************!*\
  !*** ./src/app/_models/cam.ts ***!
  \********************************/
/*! exports provided: Cam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cam", function() { return Cam; });
var Cam = /** @class */ (function () {
    function Cam() {
    }
    return Cam;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services */ "J9tS");





var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.authenticationService.user.subscribe(function (x) { return _this.user = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "SzpU":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/machine/machine.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n\n  <div class=\"row\"> \n    <div class=\"col-3\"> \n\n      <section class=\"preference\">\n         <h3>Light</h3>\n         <div>\n            <button class=\"btn btn-primary\" onclick=\"toggle(1)\">ON</button>\n            <button class=\"btn btn-primary\" onclick=\"toggle(0)\">OFF</button>\n         </div>\n     </section>\n\n     <section class=\"preference\">\n      <h3>Vacuum</h3>\n      <div>\n         <button class=\"btn btn-primary\" onclick=\"toggle1(1)\">ON</button>\n         <button class=\"btn btn-primary\" onclick=\"toggle1(0)\">OFF</button>\n      </div>\n  </section>\n\n  <section class=\"preference\">\n    <h3>Water</h3>\n    <div>\n       <button class=\"btn btn-primary\" onclick=\"toggle2(1)\">ON</button>\n       <button class=\"btn btn-primary\" onclick=\"toggle2(0)\">OFF</button>\n    </div>\n</section>\n\n<section class=\"preference\">\n  <h3>Extractor</h3>\n  <div>\n     <button class=\"btn btn-primary\" onclick=\"toggle3(1)\">ON</button>\n     <button class=\"btn btn-primary\" onclick=\"toggle3(0)\">OFF</button>\n  </div>\n</section>\n\n<section class=\"preference\">\n  <h3>Extractor</h3>\n  <div>\n     <button class=\"btn btn-primary\" onclick=\"toggle3(1)\">ON</button>\n     <button class=\"btn btn-primary\" onclick=\"toggle3(0)\">OFF</button>\n  </div>\n</section>\n\n</div>\n\n<div class=\"col-3\">\n\n  <section class=\"preference\">\n    <div>\n       <button class=\"btn btn-primary\" onclick=\"selectx(1)\">X</button>\n       <button class=\"btn btn-primary\" onclick=\"Selecty(1)\">Y</button>\n       <button class=\"btn btn-primary\" onclick=\"selectz(1)\">Z</button>\n       <button class=\"btn btn-primary\" onclick=\"selecta(1)\">A</button>\n    </div>\n  </section>\n\n  <section class=\"preference\" style=\"margin-top: 20%;\">\n    <div>\n       <button class=\"btn btn-default\" onclick=\"moveplus(1)\"><img src=\"../../assets/logos/Up.png\" width=\"100px\" /></button>\n       <button class=\"btn btn-default\" onclick=\"moveless(1)\"><img src=\"../../assets/logos/Down.png\" width=\"100px\" /></button>\n       \n       <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inlineFormInputName2\" placeholder=\"Speed meters/minute\" style=\"margin-top: 10%;\">\n\n    </div>\n  </section>\n\n</div>\n\n\n\n<div class=\"col-3\">\n  <div style=\"margin-top: 10%; height: 80px;\">\n\n    <ngx-gauge [type]=\"gaugeType\"\n           [form]=\"gaugeForm\"  \n           [value]=\"gaugeValue\" \n           [label]=\"gaugeLabel1\"\n           [append]=\"gaugeAppendText1\"\n           [thresholds]=\"thresholdConfig\"\n           >\n</ngx-gauge>\n\n</div>\n\n\n<div style=\"margin-top: 40%; height: 80px;\">\n  \n  <ngx-gauge [type]=\"gaugeType\"\n  [form]=\"gaugeForm\"  \n  [value]=\"gaugeValue\" \n  [label]=\"gaugeLabel3\"\n  [append]=\"gaugeAppendText3\"\n  [thresholds]=\"thresholdConfig\"\n  >\n</ngx-gauge>\n\n</div>\n\n</div>\n\n\n<div class=\"col-3\">\n  <div style=\"margin-top: 10%; height: 80px;\">\n\n    <ngx-gauge [type]=\"gaugeType\"\n           [form]=\"gaugeForm\"\n           [value]=\"gaugeValue\" \n           [label]=\"gaugeLabel4\"\n           [append]=\"gaugeAppendText4\"\n           [thresholds]=\"thresholdConfig\"\n           >\n</ngx-gauge>\n\n</div>\n\n<div style=\"margin-top: 40%; height: 80px;\">\n\n  <ngx-gauge [type]=\"gaugeType\"\n  [form]=\"gaugeForm\"\n  [value]=\"gaugeValue\" \n  [label]=\"gaugeLabel2\"\n  [append]=\"gaugeAppendText2\"\n  [thresholds]=\"thresholdConfig\"\n  >\n</ngx-gauge>\n\n</div>\n\n\n</div>\n\n\n</div>\n");

/***/ }),

/***/ "Ta4t":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users");
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header></app-header>\n<img class=\"background\" src=\"assets/backgrounds/wireframe.jpg\" alt=\"background\" >\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "WhEe":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device-list/device-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-striped\">\n  <thead>\n      <tr>\n          <th style=\"width: 15%\">Name</th>\n          <th style=\"width: 15%\">City</th>\n          <th style=\"width: 30%\">URL</th>\n          <th style=\"width: 10%\">Status</th>\n          <th style=\"width: 10%\">Description</th>\n          <th style=\"width: 20%\"></th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let device of devices\">\n          <td>{{device.name}}</td>\n          <td>{{device.city}}</td>\n          <td>{{device.url}}</td>\n          <td>{{device.status}}</td>\n          <td>{{device.description}}</td>\n          <td style=\"white-space: nowrap\">\n              <a routerLink=\"updateDevice/{{device.name}}\" class=\"btn btn-sm btn-primary mr-1\">Edit</a>\n              <button (click)=\"deleteDevice(device.name)\" class=\"btn btn-sm btn-danger btn-delete-user\" [disabled]=\"device.isDeleting\">\n                  <span *ngIf=\"device.isDeleting\" class=\"spinner-border spinner-border-sm\"></span>\n                  <span *ngIf=\"!device.isDeleting\">Delete</span>\n              </button>\n          </td>\n      </tr>\n      <tr *ngIf=\"!devices\">\n          <td colspan=\"4\" class=\"text-center\">\n              <span class=\"spinner-border spinner-border-lg align-center\"></span>\n          </td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "Wjci":
/*!********************************************!*\
  !*** ./src/app/device/device.component.ts ***!
  \********************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_device_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./device.component.html */ "ufoZ");
/* harmony import */ var _device_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device.component.scss */ "GrDo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var DeviceComponent = /** @class */ (function () {
    function DeviceComponent() {
    }
    DeviceComponent.prototype.ngOnInit = function () {
    };
    DeviceComponent.ctorParameters = function () { return []; };
    DeviceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-device',
            template: _raw_loader_device_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_device_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "XgRA":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, appInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "p3Fh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "nSnL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "jfvi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "ByK8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });

/* harmony import */ var _app_initializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.initializer */ "uP2u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appInitializer", function() { return _app_initializer__WEBPACK_IMPORTED_MODULE_4__["appInitializer"]; });








/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list/product-list.component */ "Hsdx");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-cookie-law */ "5soC");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers */ "XgRA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/services.component */ "KfLr");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _iot_iot_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./iot/iot.component */ "PY1i");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _machine_list_machine_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./machine-list/machine-list.component */ "2vIj");
/* harmony import */ var _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./device-list/device-list.component */ "71F7");
/* harmony import */ var _cam_list_cam_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cam-list/cam-list.component */ "OXFE");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./camera/camera.component */ "nXW4");
/* harmony import */ var _machine_machine_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./machine/machine.component */ "8I51");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./device/device.component */ "Wjci");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-gauge */ "Mumg");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _checkout_list_checkout_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./checkout-list/checkout-list.component */ "pQTq");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./payment/payment.component */ "DI59");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_15__["ServicesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_27__["CheckoutComponent"],
                _iot_iot_component__WEBPACK_IMPORTED_MODULE_17__["IotComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _machine_machine_component__WEBPACK_IMPORTED_MODULE_24__["MachineComponent"],
                _machine_list_machine_list_component__WEBPACK_IMPORTED_MODULE_19__["MachineListComponent"],
                _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_20__["DeviceListComponent"],
                _cam_list_cam_list_component__WEBPACK_IMPORTED_MODULE_21__["CamListComponent"],
                _camera_camera_component__WEBPACK_IMPORTED_MODULE_23__["CameraComponent"],
                _device_device_component__WEBPACK_IMPORTED_MODULE_25__["DeviceComponent"],
                _checkout_list_checkout_list_component__WEBPACK_IMPORTED_MODULE_28__["CheckoutListComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_29__["PaymentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular2_cookie_law__WEBPACK_IMPORTED_MODULE_10__["CookieLawModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_22__["WebcamModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                ngx_gauge__WEBPACK_IMPORTED_MODULE_26__["NgxGaugeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

;


/***/ }),

/***/ "aGwG":
/*!**************************************************!*\
  !*** ./src/app/cam-list/cam-list.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbS1saXN0L2NhbS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "b44A":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  width: 90%;\n  margin: auto;\n  padding: 20px 20px;\n}\n\nmain .banners {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nmain .banners div {\n  width: 15%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\nmain .banners div img {\n  height: 150px;\n  width: 100%;\n  max-width: 100%;\n  border-radius: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: rgba(0, 0, 0, 0);\n  background-clip: border-box;\n  border: 1px solid rgba(255, 255, 255, 0);\n  border-radius: .25rem;\n  width: 500px;\n  margin-top: 1%;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: .375rem .75rem;\n  font-size: 2rem;\n  font-weight: bold;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBSkE7RUFNSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUUzQjs7QUFWQTtFQVdNLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtBQUdyQjs7QUFoQkE7RUFnQlEsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFJekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFFbEIsYUFBYTtFQUViLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQywyQkFBMkI7RUFDM0Isd0NBQXdDO0VBQ3hDLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHFFQUFxRTtBQUF2RSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuXG4gIC5iYW5uZXJze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGRpdntcbiAgICAgIHdpZHRoOiAxNSU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuXG4gICAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLXRvcDogMSU7XG5cbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbn0iXX0= */");

/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cwcy":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/machine-list/machine-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<table class=\"table table-striped\">\n    <thead>\n        <tr>\n            <th style=\"width: 15%\">Name</th>\n            <th style=\"width: 15%\">City</th>\n            <th style=\"width: 30%\">URL</th>\n            <th style=\"width: 10%\">Status</th>\n            <th style=\"width: 10%\">Description</th>\n            <th style=\"width: 20%\"></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let machine of machines\">\n            <td>{{machine.name}}</td>\n            <td>{{machine.city}}</td>\n            <td>{{machine.url}}</td>\n            <td>{{machine.status}}</td>\n            <td>{{machine.description}}</td>\n            <td style=\"white-space: nowrap\">\n                <a routerLink=\"updateMachine/{{machine.name}}\" class=\"btn btn-sm btn-primary mr-1\">Edit</a>\n                <button (click)=\"deleteMachine(machine.name)\" class=\"btn btn-sm btn-danger btn-delete-user\" [disabled]=\"machine.isDeleting\">\n                    <span *ngIf=\"machine.isDeleting\" class=\"spinner-border spinner-border-sm\"></span>\n                    <span *ngIf=\"!machine.isDeleting\">Delete</span>\n                </button>\n            </td>\n        </tr>\n        <tr *ngIf=\"!machines\">\n            <td colspan=\"4\" class=\"text-center\">\n                <span class=\"spinner-border spinner-border-lg align-center\"></span>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n");

/***/ }),

/***/ "dyNa":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-list/checkout-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<table class=\"table table-striped\" >\n     \n\n    <tbody >\n        <tr *ngFor=\"let cart of cart\">           \n\n            <td><img src={{cart.cart.image}} [alt]=\"cart.name\" class=\"cart-image\"></td>\n            <td >{{cart.cart.name}}</td>\n            <td style=\"width: 10%\">{{cart.cart.price}}</td>\n            <td style=\"width: 30%\">{{cart.cart.description}}</td>\n\n   \n            <div class=\"row\" style=\" vertical-align: bottom;  float: right!important; margin: 1%;\">\n\n            <button class=\"cart-actions__add\" (click)=\"addToCart(cart)\" *ngIf=\"!inCart\"> <img src=\"/assets/logos/addcart.png\" alt=\"add to cart\" /> </button>\n            \n          </div>\n\n          <div class=\"row\" style=\" vertical-align: bottom;  float: right!important; margin: 1%;\">\n            \n          <button class=\"cart-actions__remove\" (click)=\"removeToCart(cart)\" *ngIf=\"!inCart\"><img src=\"/assets/logos/addcart.png\" alt=\"remove from cart\" /></button>\n\n        </div>\n\n\n        <tr *ngIf=\"!cart\">\n            <td colspan=\"4\" class=\"text-center\">\n                <span class=\"spinner-border spinner-border-lg align-center\"></span>\n            </td>\n\n    </tbody>\n\n</table>\n  ");

/***/ }),

/***/ "f3Ob":
/*!**********************************************************!*\
  !*** ./src/app/machine-list/machine-list.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hY2hpbmUtbGlzdC9tYWNoaW5lLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "f3Rx":
/*!***********************************!*\
  !*** ./src/app/_models/device.ts ***!
  \***********************************/
/*! exports provided: Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
var Device = /** @class */ (function () {
    function Device() {
    }
    return Device;
}());



/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models */ "nPby");





var AlertService = /** @class */ (function () {
    function AlertService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    AlertService.prototype.onAlert = function (id) {
        if (id === void 0) { id = this.defaultId; }
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) { return x && x.id === id; }));
    };
    // convenience methods
    AlertService.prototype.success = function (message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, message: message })));
    };
    AlertService.prototype.error = function (message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, message: message })));
    };
    AlertService.prototype.info = function (message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, message: message })));
    };
    AlertService.prototype.warn = function (message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, message: message })));
    };
    // main alert method    
    AlertService.prototype.alert = function (alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    };
    // clear alerts
    AlertService.prototype.clear = function (id) {
        if (id === void 0) { id = this.defaultId; }
        this.subject.next(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ id: id }));
    };
    AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "8PEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(accountService) {
        this.accountService = accountService;
        this.counter = this.accountService.counterValue;
        this.user = this.accountService.userValue;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
    ]; };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "fFTC":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <table class=\"table table-striped\" >\n     \n      <tbody >\n          <tr *ngFor=\"let product of products\">           \n\n              <td><img src={{product.image}} [alt]=\"product.name\" class=\"product-image\"></td>\n              <td class=\"row\">{{product.name}}</td>\n              <td class=\"row\">{{product.price}}</td>\n              <td class=\"row\">{{product.description}}</td>\n\n              <div class=\"row\" style=\"white-space: nowrap; vertical-align: bottom; float: right!important; margin: 5%;\">\n\n                <button\n                class=\"product-actions__remove\"\n                (click)=\"removeToCart(product)\"\n                *ngIf=\"!inCart\"\n              >\n                <img src=\"/assets/logos/addcart.png\" alt=\"remove to cart\" />\n              </button>\n\n                <button\n                class=\"product-actions__add\"\n                (click)=\"addToCart(product)\"\n                *ngIf=\"!inCart\"\n              >\n                <img src=\"/assets/logos/addcart.png\" alt=\"add to cart\" />\n              </button>\n\n\n          </div>\n          \n          </tr>\n\n          <tr *ngIf=\"!products\">\n              <td colspan=\"4\" class=\"text-center\">\n                  <span class=\"spinner-border spinner-border-lg align-center\"></span>\n              </td>\n\n      </tbody>\n  \n  </table>\n\n");

/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "pUeC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "ijUo":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<head>\n\n    <meta name=\"Login\" content=\"Author: Guillermo Galindo,\n      Illustrator: Guillermo Galindo\">\n  \n  </head>\n\n  <!doctype html>\n  <html>\n\n          <div class=\"login-page\">\n  <div class=\"login-card\">\n      <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Login</h1>\n      <div class=\"card-body\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                      <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                      Login\n                  </button>\n                  <a routerLink=\"../register\" class=\"btn btn-link\">Register</a>\n              </div>\n          </form>\n      </div>\n\n  </div>\n  </div>\n  </html>");

/***/ }),

/***/ "jZhJ":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "jfvi":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "J9tS");




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(accountService) {
        this.accountService = accountService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add auth header with jwt if user is logged in and request is to the api url
        var user = this.accountService.userValue;
        var isLoggedIn = user && user.token;
        var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + user.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
    ]; };
    JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "kgHL":
/*!***********************************************!*\
  !*** ./src/app/_services/checkout.service.ts ***!
  \***********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




var CheckoutService = /** @class */ (function () {
    function CheckoutService(http) {
        this.http = http;
    }
    CheckoutService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/cart");
    };
    CheckoutService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CheckoutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<meta name=\"Header\" content=\"width=device-width, initial-scale=1\">\n\n<head>\n\n  <meta name=\"Header\" content=\"Author: Guillermo Galindo,\n    Illustrator: Guillermo Galindo\">\n\n</head>\n\n<!doctype html>\n<html lang=\"en\">\n<header>\n  \n \n  <nav class=\"mb-1 navbar navbar-expand-lg navbar-light bg-light lighten-1\">\n    <a href=\"./home\"><img id=\"logosup\" class=\"header\" src= \"assets/logos/LOGO simple psyco.svg\" alt=\"logoheader\"></a>\n    <a class=\"navbar-brand\" ></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-555\"\n      aria-controls=\"navbarSupportedContent-555\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-555\">\n\n      \n      <ul class=\"navbar-nav \">\n        <li class=\"nav-item \">\n          <a href=\"./iot\"><img class=\"img1\" src=\"/assets/logos/iot logo.png\" alt=\"iot\"></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"./services\" >Services</a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"./about\" >AboutUs</a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"./login\" >Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"./checkout\"><img class=\"img2\" src=\"/assets/logos/addcartheader.png\" alt=\"cart\"></a>\n          <span class=\"badge\" *ngIf=\"counter > 0 \" >{{ counter }}</span>\n        </li>\n\n        <li>\n        <div class=\"col-user\">\n\n          <h4>{{user.username}}</h4>\n          <h6>{{user.web}}</h6>\n          <h6>{{user.country}}</h6>\n          <h6>{{user.email}}</h6>\n          \n        </div>\n      </li>\n\n        \n      </ul>\n\n    </div>\n\n  </nav>\n  \n</header>\n\n</html>\n\n\n");

/***/ }),

/***/ "mMT2":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "n1ys":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cam-list/cam-list.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-striped\">\n  <thead>\n      <tr>\n          <th style=\"width: 15%\">Name</th>\n          <th style=\"width: 15%\">City</th>\n          <th style=\"width: 30%\">URL</th>\n          <th style=\"width: 10%\">Status</th>\n          <th style=\"width: 10%\">Description</th>\n          <th style=\"width: 20%\"></th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let cam of cams\">\n          <td>{{cam.name}}</td>\n          <td>{{cam.city}}</td>\n          <td>{{cam.url}}</td>\n          <td>{{cam.status}}</td>\n          <td>{{cam.description}}</td>\n          <td style=\"white-space: nowrap\">\n              <a routerLink=\"updateCam/{{cam.name}}\" class=\"btn btn-sm btn-primary mr-1\">Edit</a>\n              <button (click)=\"deleteCam(cam.name)\" class=\"btn btn-sm btn-danger btn-delete-user\" [disabled]=\"cam.isDeleting\">\n                  <span *ngIf=\"cam.isDeleting\" class=\"spinner-border spinner-border-sm\"></span>\n                  <span *ngIf=\"!cam.isDeleting\">Delete</span>\n              </button>\n          </td>\n      </tr>\n      <tr *ngIf=\"!cams\">\n          <td colspan=\"4\" class=\"text-center\">\n              <span class=\"spinner-border spinner-border-lg align-center\"></span>\n          </td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "nPby":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType, User, Product, Machine, Device, Cam, Cart, Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "Dgtq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "jZhJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });

/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "GoWa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _product__WEBPACK_IMPORTED_MODULE_2__["Product"]; });

/* harmony import */ var _machine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./machine */ "nf8B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return _machine__WEBPACK_IMPORTED_MODULE_3__["Machine"]; });

/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device */ "f3Rx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _device__WEBPACK_IMPORTED_MODULE_4__["Device"]; });

/* harmony import */ var _cam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cam */ "RunO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cam", function() { return _cam__WEBPACK_IMPORTED_MODULE_5__["Cam"]; });

/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart */ "y7cQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return _cart__WEBPACK_IMPORTED_MODULE_6__["Cart"]; });

/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter */ "0jZI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return _counter__WEBPACK_IMPORTED_MODULE_7__["Counter"]; });











/***/ }),

/***/ "nSnL":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(accountService) {
        this.accountService = accountService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.accountService.logout();
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
    ]; };
    ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "nXW4":
/*!********************************************!*\
  !*** ./src/app/camera/camera.component.ts ***!
  \********************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_camera_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./camera.component.html */ "4TYj");
/* harmony import */ var _camera_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera.component.scss */ "xyi4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webcam */ "QKVY");






var CameraComponent = /** @class */ (function () {
    function CameraComponent() {
        this.pictureTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    CameraComponent.prototype.ngOnInit = function () {
        var _this = this;
        ngx_webcam__WEBPACK_IMPORTED_MODULE_5__["WebcamUtil"].getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    };
    CameraComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    CameraComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    CameraComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    CameraComponent.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    CameraComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        this.pictureTaken.emit(webcamImage);
    };
    CameraComponent.prototype.cameraWasSwitched = function (deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    };
    Object.defineProperty(CameraComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CameraComponent.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    CameraComponent.propDecorators = {
        pictureTaken: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    CameraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-camera',
            template: _raw_loader_camera_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_camera_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], CameraComponent);
    return CameraComponent;
}());



/***/ }),

/***/ "nf8B":
/*!************************************!*\
  !*** ./src/app/_models/machine.ts ***!
  \************************************/
/*! exports provided: Machine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return Machine; });
var Machine = /** @class */ (function () {
    function Machine() {
    }
    return Machine;
}());



/***/ }),

/***/ "oUpz":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/iot.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n\n    <meta name=\"Login\" content=\"Author: Guillermo Galindo,\n      Illustrator: Guillermo Galindo\">\n  \n  </head>\n\n  <!doctype html>\n  <html>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n\n          <div class=\"iotlogin-card\">\n            <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Cams</h1>\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">\n              <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n              Add Cam\n          </button>\n            \n            <div class=\"card-body\">\n      \n              <app-cam-list></app-cam-list>\n      \n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"col-6\">\n\n                   <div class=\"iotlogin-card\">\n            <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Web Cam</h1>\n            <div class=\"card-body\">\n      \n              <app-camera (pictureTaken)=\"handleImage($event)\"></app-camera>\n              <div class=\"snapshot\" *ngIf=\"webcamImage\">\n              <img [src]=\"webcamImage.imageAsDataUrl\" />\n              </div>\n      \n            </div>\n          </div>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-6\">\n\n        <div class=\"iotlogin-card\">\n          <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Machines</h1>\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Add Machine\n        </button>\n          <div class=\"card-body\">\n    \n            <app-machine-list></app-machine-list>\n    \n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"col-6\">\n\n      <div class=\"iotlogin-card\">\n          <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Machine Control</h1>\n          <div class=\"card-body\">\n    \n            <app-machine></app-machine>\n            \n    \n          </div>\n        </div>\n      </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n\n      <div class=\"iotlogin-card\">\n        <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Devices</h1>\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n          Add Device\n      </button>\n        <div class=\"card-body\">\n  \n          <app-device-list></app-device-list>\n  \n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-6\">\n\n               <div class=\"iotlogin-card\">\n        <h1 class=\"card-header\" style=\" color: rgb(0, 0, 0); \">Device Control</h1>\n        <div class=\"card-body\">\n  \n          <app-device></app-device>\n  \n        </div>\n      </div>\n    </div>\n\n</div>\n\n</div>\n\n  </html>");

/***/ }),

/***/ "p3Fh":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "J9tS");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var user = this.accountService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "pQTq":
/*!**********************************************************!*\
  !*** ./src/app/checkout-list/checkout-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutListComponent", function() { return CheckoutListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout-list.component.html */ "dyNa");
/* harmony import */ var _checkout_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-list.component.scss */ "ts8z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");






var CheckoutListComponent = /** @class */ (function () {
    function CheckoutListComponent(accountService, checkoutService) {
        this.accountService = accountService;
        this.checkoutService = checkoutService;
        this.loading = false;
        this.cart = this.accountService.cartValue;
    }
    CheckoutListComponent.prototype.ngOnInit = function () {
    };
    CheckoutListComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["CheckoutService"] }
    ]; };
    CheckoutListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-checkout-list',
            template: _raw_loader_checkout_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_checkout_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["CheckoutService"]])
    ], CheckoutListComponent);
    return CheckoutListComponent;
}());



/***/ }),

/***/ "pUeC":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Main Footer */\nfooter .main-footer {\n  padding: 20px 0;\n  background: #ffffff;\n}\nfooter ul {\n  padding-left: 0;\n  list-style: none;\n}\n/* Copy Right Footer */\n.footer-copyright {\n  background: #360038;\n  padding: 5px 0;\n}\n.footer-copyright .logo {\n  display: inherit;\n}\n.footer-copyright nav {\n  float: right;\n  margin-top: 5px;\n}\n.footer-copyright nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.footer-copyright nav ul li {\n  border-left: 1px solid #505050;\n  display: inline-block;\n  line-height: 12px;\n  margin: 0;\n  padding: 0 8px;\n}\n.footer-copyright nav ul li a {\n  color: #969696;\n}\n.footer-copyright nav ul li:first-child {\n  border: medium none;\n  padding-left: 0;\n}\n.footer-copyright p {\n  color: #969696;\n  margin: 2px 0 0;\n}\n/* Footer Top */\n.footer-top {\n  background: #ffffff;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  border-bottom: 3px solid #222;\n}\n/* Footer transparent */\nfooter.transparent .footer-top, footer.transparent .main-footer {\n  background: transparent;\n}\nfooter.transparent .footer-copyright {\n  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3);\n}\n/* Footer light */\nfooter.light .footer-top {\n  background: #f9f9f9;\n}\nfooter.light .main-footer {\n  background: #f9f9f9;\n}\nfooter.light .footer-copyright {\n  background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3);\n}\n/* Footer 4 */\n.footer- .logo {\n  display: inline-block;\n}\n/*==================== \n    Widgets \n====================== */\n.widget {\n  padding: 20px;\n  margin-bottom: 40px;\n}\n.widget.widget-last {\n  margin-bottom: 0px;\n}\n.widget.no-box {\n  padding: 0;\n  background-color: transparent;\n  margin-bottom: 40px;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  -ms-box-shadow: none;\n  -o-box-shadow: none;\n}\n.widget.subscribe p {\n  margin-bottom: 18px;\n  color: #3e004b;\n}\n.widget li a {\n  color: #3e004b;\n}\n.widget li a:hover {\n  color: #8c00a8;\n}\n.widget-title {\n  margin-bottom: 20px;\n}\n.widget-title span {\n  background: #839FAD none repeat scroll 0 0;\n  display: block;\n  height: 1px;\n  margin-top: 25px;\n  position: relative;\n  width: 20%;\n}\n.widget-title span::after {\n  background: inherit;\n  content: \"\";\n  height: inherit;\n  position: absolute;\n  top: -4px;\n  width: 50%;\n}\n.widget-title.text-center span, .widget-title.text-center span::after {\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n}\n.widget .badge {\n  float: right;\n  background: #7f7f7f;\n}\n.typo-light h1,\n.typo-light h2,\n.typo-light h3,\n.typo-light h4,\n.typo-light h5,\n.typo-light h6,\n.typo-light p,\n.typo-light div,\n.typo-light span,\n.typo-light small {\n  color: black;\n}\nul.social-footer2 {\n  margin: 0;\n  padding: 0;\n  width: auto;\n}\nul.social-footer2 li {\n  display: inline-block;\n  padding: 0;\n}\nul.social-footer2 li a:hover {\n  background-color: #3e004b;\n}\nul.social-footer2 li a {\n  display: block;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n}\n.btn {\n  background-color: #3e004b;\n  color: #fff;\n}\n.btn:hover, .btn:focus, .btn.active {\n  background: #fc34f2;\n  color: #fff;\n  -ms-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n  transition: all 250ms ease-in-out 0s;\n}\n.footericons {\n  width: 35%;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  margin: 1%;\n  padding: 0%;\n}\n.iconbar {\n  align-content: center;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  margin: 0%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQUNBO0VBQXdCLGVBQWU7RUFBSyxtQkFBbUI7QUFHL0Q7QUFGQTtFQUFZLGVBQWU7RUFBSyxnQkFBZ0I7QUFPaEQ7QUFMQSxzQkFBQTtBQUNBO0VBQW9CLG1CQUEwQjtFQUFJLGNBQWM7QUFVaEU7QUFUQTtFQUE2QixnQkFBZ0I7QUFhN0M7QUFaQTtFQUEyQixZQUFZO0VBQUssZUFBZTtBQWlCM0Q7QUFoQkE7RUFBNEIsZ0JBQWdCO0VBQUksU0FBUztFQUFHLFVBQVU7QUFzQnRFO0FBckJBO0VBQWdDLDhCQUE4QjtFQUFFLHFCQUFxQjtFQUFHLGlCQUFpQjtFQUFHLFNBQVM7RUFBRyxjQUFjO0FBNkJ0STtBQTVCQTtFQUFnQyxjQUFjO0FBZ0M5QztBQS9CQTtFQUE0QyxtQkFBbUI7RUFBSyxlQUFlO0FBb0NuRjtBQW5DQTtFQUF3QixjQUFjO0VBQUUsZUFBZTtBQXdDdkQ7QUF0Q0EsZUFBQTtBQUNBO0VBQWdCLG1CQUFtQjtFQUFLLG9CQUFvQjtFQUFJLG1CQUFtQjtFQUFLLDZCQUE2QjtBQTZDckg7QUEzQ0EsdUJBQUE7QUFDQTtFQUFvRSx1QkFBdUI7QUErQzNGO0FBOUNBO0VBQXdDLHFEQUFxRDtBQWtEN0Y7QUFoREEsaUJBQUE7QUFDQTtFQUE0QixtQkFBbUI7QUFvRC9DO0FBbkRBO0VBQTRCLG1CQUFtQjtBQXVEL0M7QUF0REE7RUFBZ0MsMkRBQTJEO0FBMEQzRjtBQXhEQSxhQUFBO0FBQ0E7RUFBb0IscUJBQXFCO0FBNER6QztBQTFEQTs7d0JBOER3QjtBQTNEeEI7RUFBWSxhQUFhO0VBQUcsbUJBQW1CO0FBK0QvQztBQTlEQTtFQUF3QixrQkFBa0I7QUFrRTFDO0FBakVBO0VBQWdCLFVBQVU7RUFBRSw2QkFBNkI7RUFBRyxtQkFBbUI7RUFDM0UsZ0JBQWdCO0VBQUUsd0JBQXdCO0VBQUUscUJBQXFCO0VBQUUsb0JBQW9CO0VBQUUsbUJBQW1CO0FBMkVoSDtBQTFFQTtFQUF3QixtQkFBbUI7RUFBRSxjQUFjO0FBK0UzRDtBQTlFQTtFQUFnQixjQUFjO0FBa0Y5QjtBQWpGQTtFQUFvQixjQUFjO0FBcUZsQztBQXBGQTtFQUFlLG1CQUFtQjtBQXdGbEM7QUF2RkE7RUFBb0IsMENBQTBDO0VBQUMsY0FBYztFQUFFLFdBQVc7RUFBQyxnQkFBZ0I7RUFBQyxrQkFBa0I7RUFBQyxVQUFVO0FBZ0d6STtBQS9GQTtFQUEyQixtQkFBbUI7RUFBQyxXQUFXO0VBQUMsZUFBZTtFQUFLLGtCQUFrQjtFQUFDLFNBQVM7RUFBQyxVQUFVO0FBd0d0SDtBQXZHQTtFQUFzRSxpQkFBaUI7RUFBQyxrQkFBaUI7RUFBQyxPQUFPO0VBQUMsUUFBUTtBQThHMUg7QUE3R0E7RUFBZ0IsWUFBWTtFQUFJLG1CQUFtQjtBQWtIbkQ7QUFoSEE7Ozs7Ozs7Ozs7RUFTb0IsWUFBbUI7QUFvSHZDO0FBbEhBO0VBQW9CLFNBQVM7RUFBQyxVQUFVO0VBQUksV0FBVztBQXdIdkQ7QUF2SEE7RUFBc0IscUJBQXFCO0VBQUMsVUFBVTtBQTRIdEQ7QUEzSEE7RUFBOEIseUJBQXdCO0FBK0h0RDtBQTlIQTtFQUF3QixjQUFjO0VBQUUsWUFBVztFQUFDLFdBQVc7RUFBQyxrQkFBa0I7QUFxSWxGO0FBcElBO0VBQUsseUJBQXlCO0VBQUUsV0FBVTtBQXlJMUM7QUF4SUE7RUFBcUMsbUJBQW1CO0VBQUMsV0FBVztFQUdwRSw4Q0FBOEM7RUFDOUMsNkNBQTZDO0VBQzdDLDBDQUEwQztFQUsxQyxvQ0FBb0M7QUE2SXBDO0FBeklBO0VBRUksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0FBMklmO0FBeElJO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7QUEySWxCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1haW4gRm9vdGVyICovXG5mb290ZXIgLm1haW4tZm9vdGVyeyAgICBwYWRkaW5nOiAyMHB4IDA7ICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7fVxuZm9vdGVyIHVseyAgcGFkZGluZy1sZWZ0OiAwOyAgICBsaXN0LXN0eWxlOiBub25lO31cblxuLyogQ29weSBSaWdodCBGb290ZXIgKi9cbi5mb290ZXItY29weXJpZ2h0IHsgYmFja2dyb3VuZDogcmdiKDU0LCAwLCA1Nik7ICAgcGFkZGluZzogNXB4IDA7fVxuLmZvb3Rlci1jb3B5cmlnaHQgLmxvZ28geyAgICBkaXNwbGF5OiBpbmhlcml0O31cbi5mb290ZXItY29weXJpZ2h0IG5hdiB7ICAgIGZsb2F0OiByaWdodDsgICAgbWFyZ2luLXRvcDogNXB4O31cbi5mb290ZXItY29weXJpZ2h0IG5hdiB1bCB7ICBsaXN0LXN0eWxlOiBub25lOyAgIG1hcmdpbjogMDsgIHBhZGRpbmc6IDA7fVxuLmZvb3Rlci1jb3B5cmlnaHQgbmF2IHVsIGxpIHsgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1MDUwNTA7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgIGxpbmUtaGVpZ2h0OiAxMnB4OyAgbWFyZ2luOiAwOyAgcGFkZGluZzogMCA4cHg7fVxuLmZvb3Rlci1jb3B5cmlnaHQgbmF2IHVsIGxpIGF7ICBjb2xvcjogIzk2OTY5Njt9XG4uZm9vdGVyLWNvcHlyaWdodCBuYXYgdWwgbGk6Zmlyc3QtY2hpbGQgeyAgIGJvcmRlcjogbWVkaXVtIG5vbmU7ICAgIHBhZGRpbmctbGVmdDogMDt9XG4uZm9vdGVyLWNvcHlyaWdodCBwIHsgICBjb2xvcjogIzk2OTY5NjsgbWFyZ2luOiAycHggMCAwO31cblxuLyogRm9vdGVyIFRvcCAqL1xuLmZvb3Rlci10b3B7ICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7ICAgIHBhZGRpbmctYm90dG9tOiAzMHB4OyAgIG1hcmdpbi1ib3R0b206IDMwcHg7ICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMjIyO31cblxuLyogRm9vdGVyIHRyYW5zcGFyZW50ICovXG5mb290ZXIudHJhbnNwYXJlbnQgLmZvb3Rlci10b3AsIGZvb3Rlci50cmFuc3BhcmVudCAubWFpbi1mb290ZXJ7ICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O31cbmZvb3Rlci50cmFuc3BhcmVudCAuZm9vdGVyLWNvcHlyaWdodHsgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMCwgMCwgMCwgMC4zKSA7fVxuXG4vKiBGb290ZXIgbGlnaHQgKi9cbmZvb3Rlci5saWdodCAuZm9vdGVyLXRvcHsgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O31cbmZvb3Rlci5saWdodCAubWFpbi1mb290ZXJ7ICBiYWNrZ3JvdW5kOiAjZjlmOWY5O31cbmZvb3Rlci5saWdodCAuZm9vdGVyLWNvcHlyaWdodHsgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgO31cblxuLyogRm9vdGVyIDQgKi9cbi5mb290ZXItIC5sb2dvIHsgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO31cblxuLyo9PT09PT09PT09PT09PT09PT09PSBcbiAgICBXaWRnZXRzIFxuPT09PT09PT09PT09PT09PT09PT09PSAqL1xuLndpZGdldHsgICAgcGFkZGluZzogMjBweDsgIG1hcmdpbi1ib3R0b206IDQwcHg7fVxuLndpZGdldC53aWRnZXQtbGFzdHsgICAgbWFyZ2luLWJvdHRvbTogMHB4O31cbi53aWRnZXQubm8tYm94eyBwYWRkaW5nOiAwOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTsgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyAtbW96LWJveC1zaGFkb3c6IG5vbmU7IC1tcy1ib3gtc2hhZG93OiBub25lOyAtby1ib3gtc2hhZG93OiBub25lO31cbi53aWRnZXQuc3Vic2NyaWJlIHB7ICAgIG1hcmdpbi1ib3R0b206IDE4cHg7IGNvbG9yOiAjM2UwMDRiO31cbi53aWRnZXQgbGkgYXsgICBjb2xvcjogIzNlMDA0Yjt9XG4ud2lkZ2V0IGxpIGE6aG92ZXJ7IGNvbG9yOiAjOGMwMGE4O31cbi53aWRnZXQtdGl0bGUge21hcmdpbi1ib3R0b206IDIwcHg7fVxuLndpZGdldC10aXRsZSBzcGFuIHtiYWNrZ3JvdW5kOiAjODM5RkFEIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7ZGlzcGxheTogYmxvY2s7IGhlaWdodDogMXB4O21hcmdpbi10b3A6IDI1cHg7cG9zaXRpb246IHJlbGF0aXZlO3dpZHRoOiAyMCU7fVxuLndpZGdldC10aXRsZSBzcGFuOjphZnRlciB7YmFja2dyb3VuZDogaW5oZXJpdDtjb250ZW50OiBcIlwiO2hlaWdodDogaW5oZXJpdDsgICAgcG9zaXRpb246IGFic29sdXRlO3RvcDogLTRweDt3aWR0aDogNTAlO31cbi53aWRnZXQtdGl0bGUudGV4dC1jZW50ZXIgc3Bhbiwud2lkZ2V0LXRpdGxlLnRleHQtY2VudGVyIHNwYW46OmFmdGVyIHttYXJnaW4tbGVmdDogYXV0bzttYXJnaW4tcmlnaHQ6YXV0bztsZWZ0OiAwO3JpZ2h0OiAwO31cbi53aWRnZXQgLmJhZGdleyBmbG9hdDogcmlnaHQ7ICAgYmFja2dyb3VuZDogIzdmN2Y3Zjt9XG5cbi50eXBvLWxpZ2h0IGgxLCBcbi50eXBvLWxpZ2h0IGgyLCBcbi50eXBvLWxpZ2h0IGgzLCBcbi50eXBvLWxpZ2h0IGg0LCBcbi50eXBvLWxpZ2h0IGg1LCBcbi50eXBvLWxpZ2h0IGg2LFxuLnR5cG8tbGlnaHQgcCxcbi50eXBvLWxpZ2h0IGRpdixcbi50eXBvLWxpZ2h0IHNwYW4sXG4udHlwby1saWdodCBzbWFsbHsgIGNvbG9yOiByZ2IoMCwgMCwgMCk7fVxuXG51bC5zb2NpYWwtZm9vdGVyMiB7IG1hcmdpbjogMDtwYWRkaW5nOiAwOyAgIHdpZHRoOiBhdXRvO31cbnVsLnNvY2lhbC1mb290ZXIyIGxpIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzogMDt9XG51bC5zb2NpYWwtZm9vdGVyMiBsaSBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiMzZTAwNGI7fVxudWwuc29jaWFsLWZvb3RlcjIgbGkgYSB7ZGlzcGxheTogYmxvY2s7IGhlaWdodDozMHB4O3dpZHRoOiAzMHB4O3RleHQtYWxpZ246IGNlbnRlcjt9XG4uYnRue2JhY2tncm91bmQtY29sb3I6ICMzZTAwNGI7IGNvbG9yOiNmZmY7fVxuLmJ0bjpob3ZlciwgLmJ0bjpmb2N1cywgLmJ0bi5hY3RpdmUge2JhY2tncm91bmQ6ICNmYzM0ZjI7Y29sb3I6ICNmZmY7XG4td2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi1tb3otYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuLW1zLWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi1vLWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbmJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xuLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMHM7XG4tbXMtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xuLW8tdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xudHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xuXG59XG5cbi5mb290ZXJpY29ucyB7XG5cbiAgICB3aWR0aDogMzUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMSU7XG4gICAgcGFkZGluZzogMCU7XG4gICAgfVxuXG4gICAgLmljb25iYXIge1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCU7XG4gICAgfSJdfQ== */");

/***/ }),

/***/ "pW6c":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "AytR");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.user = this.userSubject.asObservable();
        this.productSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.product = this.productSubject.asObservable();
        this.machineSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.machine = this.machineSubject.asObservable();
        this.deviceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.device = this.deviceSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "userValue", {
        get: function () {
            return this.userSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "iotuserValue", {
        get: function () {
            return this.productSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "machineValue", {
        get: function () {
            return this.machineSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "deviceValue", {
        get: function () {
            return this.deviceSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/authenticate", { username: username, password: password }, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            _this.userSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/revoke-token", {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    };
    AuthenticationService.prototype.refreshToken = function () {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/refresh-token", {}, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            _this.userSubject.next(user);
            _this.startRefreshTokenTimer();
            return user;
        }));
    };
    AuthenticationService.prototype.startRefreshTokenTimer = function () {
        var _this = this;
        // parse json object from base64 encoded jwt token
        var jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));
        // set a timeout to refresh the token a minute before it expires
        var expires = new Date(jwtToken.exp * 1000);
        var timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(function () { return _this.refreshToken().subscribe(); }, timeout);
    };
    AuthenticationService.prototype.stopRefreshTokenTimer = function () {
        clearTimeout(this.refreshTokenTimeout);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "q7H1":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iotlogin-card {\n  word-wrap: break-word;\n  background-color: rgba(255, 255, 255, 0.844);\n  background-clip: border-box;\n  border: 2px solid black;\n  width: 80%;\n  max-height: 100%;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  margin-left: 10%;\n  margin-right: 10%;\n  align-content: center;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsNENBQTRDO0VBQzVDLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb3Rsb2dpbi1jYXJkIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0NCk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuIH1cblxuICJdfQ== */");

/***/ }),

/***/ "riG1":
/*!************************************************!*\
  !*** ./src/app/machine/machine.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hY2hpbmUvbWFjaGluZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ts8z":
/*!************************************************************!*\
  !*** ./src/app/checkout-list/checkout-list.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart-actions__add, .cart-actions__remove {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n}\n\n.cart-actions__add:hover, .cart-actions__remove:hover {\n  transform: scale(1.1);\n}\n\n.cart-actions__add img, .cart-actions__remove img {\n  width: 30px;\n  height: 30px;\n  border-radius: 30%;\n}\n\n.cart {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0);\n  border-radius: 5px;\n  margin: 1%;\n  border-color: rgba(0, 0, 0, 0);\n  border-width: 2px;\n}\n\n.cart:hover {\n  transform: scale(1.05);\n  border: 1px solid #000000;\n}\n\n.cart:hover .cart-actions {\n  display: flex;\n}\n\n.cart-image {\n  max-width: 450px;\n  width: 450px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.cart-details {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 15px;\n}\n\n.cart-details__price {\n  font-weight: 500;\n  opacity: 0.7;\n  letter-spacing: 1px;\n  margin: 0;\n}\n\n.cart-details__name {\n  opacity: 0.8;\n  font-weight: 500;\n  margin: 0;\n}\n\n.cart-description {\n  padding: 10px 15px;\n}\n\n.cart-description p {\n  opacity: 0.6;\n  margin: 0;\n}\n\n.cart-actions {\n  display: none;\n  justify-content: flex-end;\n  padding: 0 15px;\n}\n\n.cart-actions__add {\n  border: 2px solid black;\n  background-color: black;\n  margin: 1%;\n  margin-top: -150%;\n}\n\n.cart-actions__remove {\n  border: 2px solid indianred;\n  background-color: #ff3434;\n  margin: 1%;\n  margin-top: -150%;\n}\n\n.table {\n  width: 100%;\n  color: #212529;\n  font-weight: bold;\n  font-size: large;\n  background-color: rgba(255, 255, 255, 0.652);\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(197, 197, 197, 0.679);\n}\n\ntr {\n  vertical-align: inherit;\n  border-color: black;\n  float: left !important;\n  width: 100% !important;\n  height: 220px;\n}\n\n.table td, .table th {\n  padding: 1%;\n  vertical-align: top;\n  border-top: 1px solid #000000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQtbGlzdC9jaGVja291dC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQURuQjs7QUFJSTtFQUNFLHFCQUFxQjtBQUQzQjs7QUFLSTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBRnhCOztBQU9FO0VBQ0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUpyQjs7QUFERTtFQVVJLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFML0I7O0FBTkU7RUFjTSxhQUFhO0FBSnJCOztBQVFJO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0FBTHZCOztBQVFJO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFMdkI7O0FBT007RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixTQUFTO0FBSmpCOztBQU9NO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0FBSmpCOztBQVFJO0VBQ0Usa0JBQWtCO0FBTHhCOztBQUlLO0VBSUcsWUFBWTtFQUNaLFNBQVM7QUFKakI7O0FBUUk7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7QUFMckI7O0FBT007RUFFRSx1QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpQkFBaUI7QUFMekI7O0FBUU07RUFFRSwyQkFBMkI7RUFDM0IseUJBQWtDO0VBQ2xDLFVBQVU7RUFDVixpQkFBaUI7QUFOekI7O0FBV0U7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNENBQTRDO0FBUmhEOztBQWFFO0VBQ0UsNENBQTRDO0FBVmhEOztBQWNFO0VBRUUsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGFBQWE7QUFaakI7O0FBZ0JFO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFiakMiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC1saXN0L2NoZWNrb3V0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIFxuICAgIH1cbiAgXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xuICBcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXJ0IHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDElO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgXG4gIFxuICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBcbiAgICAgIC5jYXJ0LWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgJi1pbWFnZSB7XG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgXG4gICAgJi1kZXRhaWxzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgXG4gICAgICAmX19wcmljZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICBcbiAgICAgICZfX25hbWUge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICYtZGVzY3JpcHRpb24ge1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICBcbiAgICAgIHAge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICYtYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgXG4gICAgICAmX19hZGQge1xuICAgICAgICBAZXh0ZW5kICVidXR0b247XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMSU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xNTAlO1xuICAgICAgfVxuICBcbiAgICAgICZfX3JlbW92ZSB7XG4gICAgICAgIEBleHRlbmQgJWJ1dHRvbjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgaW5kaWFucmVkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA1MiwgNTIpO1xuICAgICAgICBtYXJnaW46IDElO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTUwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUyKTtcblxuICBcbiAgfVxuICBcbiAgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDE5NywgMTk3LCAwLjY3OSk7XG4gICBcbiAgfVxuICBcbiAgdHIge1xuICAgIFxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgZmxvYXQ6IGxlZnQhaW1wb3J0YW50OyBcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgXG4gIH1cbiAgXG4gIC50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "uP2u":
/*!*********************************************!*\
  !*** ./src/app/_helpers/app.initializer.ts ***!
  \*********************************************/
/*! exports provided: appInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitializer", function() { return appInitializer; });
function appInitializer(authenticationService) {
    return function () { return new Promise(function (resolve) {
        // attempt to refresh token on app start up to auto authenticate
        authenticationService.refreshToken()
            .subscribe()
            .add(resolve);
    }); };
}


/***/ }),

/***/ "ufoZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <div class=\"row\"> \n    <div class=\"col-4\"> \n\n      <section class=\"preference\">\n         <h3>Light</h3>\n         <div>\n            <button class=\"btn btn-primary\" onclick=\"toggle(1)\">ON</button>\n            <button class=\"btn btn-primary\" onclick=\"toggle(0)\">OFF</button>\n         </div>\n     </section>\n\n     <section class=\"preference\">\n      <h3>Vacuum</h3>\n      <div>\n         <button class=\"btn btn-primary\" onclick=\"toggle1(1)\">ON</button>\n         <button class=\"btn btn-primary\" onclick=\"toggle1(0)\">OFF</button>\n      </div>\n  </section>\n\n  <section class=\"preference\">\n    <h3>Water</h3>\n    <div>\n       <button class=\"btn btn-primary\" onclick=\"toggle2(1)\">ON</button>\n       <button class=\"btn btn-primary\" onclick=\"toggle2(0)\">OFF</button>\n    </div>\n</section>\n\n<section class=\"preference\">\n  <h3>Extractor</h3>\n  <div>\n     <button class=\"btn btn-primary\" onclick=\"toggle3(1)\">ON</button>\n     <button class=\"btn btn-primary\" onclick=\"toggle3(0)\">OFF</button>\n  </div>\n</section>\n\n<section class=\"preference\">\n  <h3>Extractor</h3>\n  <div>\n     <button class=\"btn btn-primary\" onclick=\"toggle3(1)\">ON</button>\n     <button class=\"btn btn-primary\" onclick=\"toggle3(0)\">OFF</button>\n  </div>\n</section>\n\n</div>\n\n<div class=\"col-4\">\n\n  <section class=\"preference\">\n    <div>\n       <button class=\"btn btn-primary\" onclick=\"selectx(1)\">X</button>\n       <button class=\"btn btn-primary\" onclick=\"Selecty(1)\">Y</button>\n       <button class=\"btn btn-primary\" onclick=\"selectz(1)\">Z</button>\n       <button class=\"btn btn-primary\" onclick=\"selecta(1)\">A</button>\n    </div>\n  </section>\n\n  <section class=\"preference\" >\n    <div>\n       <button class=\"btn btn-default\" onclick=\"moveplus(1)\"><img src=\"../../assets/logos/Up.png\" width=\"140\" /></button>\n       <button class=\"btn btn-default\" onclick=\"moveless(1)\"><img src=\"../../assets/logos/Down.png\" width=\"140\" /></button>\n\n    </div>\n  </section>\n\n</div>\n\n\n\n<div class=\"col-4\">\n  <div style=\"margin: 2%;\">\n  <canvas data-type=\"radial-gauge\"\n  width=\"180\" \n  height=\"180\"\n  data-major-ticks=\"0,20,40,60,80,100\"\n  data-highlights='[\n      { \"from\": 0, \"to\": 20, \"color\": \"rgba(0,255,0,.15)\" },\n      { \"from\": 20, \"to\": 40, \"color\": \"#20c997\" },\n      { \"from\": 40, \"to\": 60, \"color\": \"#28a745\" },\n      { \"from\": 60, \"to\": 80, \"color\": \"#ffc107\" },\n      { \"from\": 80, \"to\": 100, \"color\": \"#dc3545\" }\n  ]'\n></canvas>\n</div>\n\n<div style=\"margin: 2%;\">\n<canvas data-type=\"radial-gauge\"\nwidth=\"180\" \nheight=\"180\"\ndata-major-ticks=\"0,20,40,60,80,100\"\ndata-highlights='[\n    { \"from\": 0, \"to\": 20, \"color\": \"rgba(0,255,0,.15)\" },\n    { \"from\": 20, \"to\": 40, \"color\": \"#20c997\" },\n    { \"from\": 40, \"to\": 60, \"color\": \"#28a745\" },\n    { \"from\": 60, \"to\": 80, \"color\": \"#ffc107\" },\n    { \"from\": 80, \"to\": 100, \"color\": \"#dc3545\" }\n]'\n></canvas>\n</div>\n\n\n</div>\n</div>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "KfLr");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _iot_iot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./iot/iot.component */ "PY1i");










var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"] },
    { path: 'iot', component: _iot_iot_component__WEBPACK_IMPORTED_MODULE_9__["IotComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vrKY":
/*!***********************************************!*\
  !*** ./src/app/_services/machines.service.ts ***!
  \***********************************************/
/*! exports provided: MachinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesService", function() { return MachinesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




var MachinesService = /** @class */ (function () {
    function MachinesService(http) {
        this.http = http;
    }
    MachinesService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/machines");
    };
    MachinesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MachinesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MachinesService);
    return MachinesService;
}());



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "J9tS");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.accountService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({ template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "wHU4":
/*!**********************************************!*\
  !*** ./src/app/_services/devices.service.ts ***!
  \**********************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




var DevicesService = /** @class */ (function () {
    function DevicesService(http) {
        this.http = http;
    }
    DevicesService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/devices");
    };
    DevicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DevicesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DevicesService);
    return DevicesService;
}());



/***/ }),

/***/ "xyi4":
/*!**********************************************!*\
  !*** ./src/app/camera/camera.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".actionBtn {\n  font-size: 4em;\n  cursor: pointer;\n}\n\n.snapshot {\n  text-align: right;\n}\n\n.snapshot img {\n  max-width: 400px;\n  max-height: 400px;\n}\n\nul.links {\n  padding-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0FBQ25COztBQUNBO0VBQ0ksaUJBQWlCO0FBRXJCOztBQUhBO0VBR1EsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUl6Qjs7QUFEQTtFQUNJLG9CQUFvQjtBQUl4QiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYS9jYW1lcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uQnRuIHtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc25hcHNob3R7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgaW1ne1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICB9XG59XG51bC5saW5rc3tcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "y7cQ":
/*!*********************************!*\
  !*** ./src/app/_models/cart.ts ***!
  \*********************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
var Cart = /** @class */ (function () {
    function Cart() {
    }
    return Cart;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map