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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth.service");
var User_1 = require("../obj/User");
/**
 * Created by Thisum on 8/1/2016.
 */
var SignInComponent = (function () {
    function SignInComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.model = new User_1.User("", "");
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        this._authService.signin(this.model)
            .then(function (result) { _this._router.navigateByUrl('/dashboard'); })
            .catch(function (error) { return console.log(error); });
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.hasLogin = function () {
        var signedIn = this._authService.hasLoggedIn();
        if (signedIn) {
            this._router.navigateByUrl('/dashboard');
        }
        return signedIn;
    };
    SignInComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "fr-signin",
            templateUrl: 'html/signin.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3JELHFCQUFtQixhQUFhLENBQUMsQ0FBQTtBQUdqQzs7R0FFRztBQU9IO0lBRUkseUJBQXFCLE9BQWUsRUFBVSxZQUF5QjtRQUFsRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFdkUsVUFBSyxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUZpRCxDQUFDO0lBSTNFLGtDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUpHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDL0IsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFLLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDO2FBQzFELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFHRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDNUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUE7SUFDbkIsQ0FBQztJQTlCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDRCQUE0QjtTQUM1QyxDQUFDOzt1QkFBQTtJQTZCRixzQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksdUJBQWUsa0JBNEIzQixDQUFBIiwiZmlsZSI6ImFzc2V0cy9hcHAvYXV0aC9zaWduaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPbkluaXQsIENvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9vYmovVXNlclwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRoaXN1bSBvbiA4LzEvMjAxNi5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJmci1zaWduaW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiAnaHRtbC9zaWduaW4uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UgKXt9XHJcblxyXG4gICAgbW9kZWwgPSBuZXcgVXNlcihcIlwiLCBcIlwiKTtcclxuICAgIFxyXG4gICAgb25TdWJtaXQoKXtcclxuXHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbmluKHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7dGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9kYXNoYm9hcmQnKX0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFzTG9naW4oKXtcclxuICAgICAgICBjb25zdCBzaWduZWRJbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmhhc0xvZ2dlZEluKCk7XHJcbiAgICAgICAgaWYoc2lnbmVkSW4pe1xyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Rhc2hib2FyZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaWduZWRJblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG59Il19
