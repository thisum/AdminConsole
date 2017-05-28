"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Thisum on 8/12/2016.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
var constants_1 = require("../util/constants");
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.baseUrl = constants_1.BASE_URL + '/auth';
    }
    AuthService.prototype.signup = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.baseUrl + '/signup', JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(function (response) {
            var status = response.json().status;
            if (status == constants_1.SERVER_RESPONSE_STATUS.SUCCESS) {
                return true;
            }
            else if (status == constants_1.SERVER_RESPONSE_STATUS.FAILED) {
                throw new Error(response.json().message);
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.signin = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.baseUrl + '/signin', JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(function (response) {
            var status = response.json().status;
            if (status == constants_1.SERVER_RESPONSE_STATUS.SUCCESS) {
                var data = response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', data.email);
                localStorage.setItem('admin', data.admin);
                return true;
            }
            else if (status == constants_1.SERVER_RESPONSE_STATUS.FAILED) {
                throw new Error(response.json().message);
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.hasLoggedIn = function () {
        return localStorage.getItem('token') != null;
    };
    AuthService.prototype.performLogout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('admin');
    };
    AuthService.prototype.getEmail = function () {
        return localStorage.getItem('email') === null ? "" : localStorage.getItem('email');
    };
    AuthService.prototype.isAdmin = function () {
        return localStorage.getItem('admin') === "true";
    };
    AuthService.prototype.handleError = function (error) {
        console.error('Error occurred : ' + error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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XHJcbiAqIENyZWF0ZWQgYnkgVGhpc3VtIG9uIDgvMTIvMjAxNi5cclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLy4uL29iai9Vc2VyXCI7XHJcbmltcG9ydCB7U0VSVkVSX1JFU1BPTlNFX1NUQVRVUywgQkFTRV9VUkx9IGZyb20gXCIuLi91dGlsL2NvbnN0YW50c1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYmFzZVVybCA9IEJBU0VfVVJMICsgJy9hdXRoJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBzaWdudXAodXNlcjogVXNlcik6IFByb21pc2U8Qm9vbGVhbj4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCggdGhpcy5iYXNlVXJsICsgJy9zaWdudXAnLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnN0YXR1cztcclxuICAgICAgICAgICAgICAgIGlmKHN0YXR1cyA9PSBTRVJWRVJfUkVTUE9OU0VfU1RBVFVTLlNVQ0NFU1MpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKCBzdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5GQUlMRUQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbih1c2VyOiBVc2VyKTogUHJvbWlzZTxCb29sZWFuPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoIHRoaXMuYmFzZVVybCArICcvc2lnbmluJywgSlNPTi5zdHJpbmdpZnkodXNlciksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBpZihzdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5TVUNDRVNTKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgZGF0YS5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FkbWluJywgZGF0YS5hZG1pbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKCBzdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5GQUlMRUQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZXJmb3JtTG9nb3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdlbWFpbCcpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhZG1pbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFbWFpbCgpe1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSA9PT0gbnVsbCA/IFwiXCIgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNBZG1pbigpe1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWRtaW4nKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCA6ICcgK2Vycm9yICk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG59Il19
