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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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dGVkIGJ5IFRoaXN1bSBvbiA4LzEyLzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi8uLi9vYmovVXNlclwiO1xyXG5pbXBvcnQge1NFUlZFUl9SRVNQT05TRV9TVEFUVVMsIEJBU0VfVVJMfSBmcm9tIFwiLi4vdXRpbC9jb25zdGFudHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGJhc2VVcmwgPSBCQVNFX1VSTCArICcvYXV0aCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgc2lnbnVwKHVzZXI6IFVzZXIpOiBQcm9taXNlPEJvb2xlYW4+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoIHRoaXMuYmFzZVVybCArICcvc2lnbnVwJywgSlNPTi5zdHJpbmdpZnkodXNlciksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBpZihzdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5TVUNDRVNTKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiggc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuRkFJTEVEKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5qc29uKCkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW4odXNlcjogVXNlcik6IFByb21pc2U8Qm9vbGVhbj4ge1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCB0aGlzLmJhc2VVcmwgKyAnL3NpZ25pbicsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuU1VDQ0VTUylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIGRhdGEuZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZG1pbicsIGRhdGEuYWRtaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiggc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuRkFJTEVEKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5qc29uKCkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVyZm9ybUxvZ291dCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZW1haWwnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWRtaW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RW1haWwoKXtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykgPT09IG51bGwgPyBcIlwiIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQWRtaW4oKXtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FkbWluJykgPT09IFwidHJ1ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgOiAnICtlcnJvciApO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH1cclxufSJdfQ==
