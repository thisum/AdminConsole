/**
 * Created by Thisum on 8/12/2016.
 */
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
var auth_service_1 = require("../services/auth.service");
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.email = "";
    }
    HeaderComponent.prototype.hasLogin = function () {
        this.email = this._authService.getEmail();
        return this._authService.hasLoggedIn();
    };
    HeaderComponent.prototype.onLogout = function () {
        this._authService.performLogout();
        this._router.navigateByUrl('/signin');
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fr-header',
            templateUrl: 'header.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCw2QkFBMEIsMEJBQTBCLENBQUMsQ0FBQTtBQUNyRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQU92QztJQUlJLHlCQUFvQixPQUFlLEVBQVUsWUFBMEI7UUFBbkQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnZFLFVBQUssR0FBVyxFQUFFLENBQUM7SUFFc0QsQ0FBQztJQUUxRSxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUF2Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzs7dUJBQUE7SUFxQkYsc0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHVCQUFlLGtCQW9CM0IsQ0FBQSIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRoaXN1bSBvbiA4LzEyLzIwMTYuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdmci1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdoZWFkZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgZW1haWw6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlIDogQXV0aFNlcnZpY2Upe31cclxuXHJcbiAgICBoYXNMb2dpbigpe1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLl9hdXRoU2VydmljZS5nZXRFbWFpbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5oYXNMb2dnZWRJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9nb3V0KCl7XHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UucGVyZm9ybUxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvc2lnbmluJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTp2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG59Il19
