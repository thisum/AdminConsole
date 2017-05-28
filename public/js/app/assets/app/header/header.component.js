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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCw2QkFBMEIsMEJBQTBCLENBQUMsQ0FBQTtBQUNyRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQU92QztJQUlJLHlCQUFvQixPQUFlLEVBQVUsWUFBMEI7UUFBbkQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnZFLFVBQUssR0FBVyxFQUFFLENBQUM7SUFFc0QsQ0FBQztJQUUxRSxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUF2Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzs7dUJBQUE7SUFxQkYsc0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHVCQUFlLGtCQW9CM0IsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGhpc3VtIG9uIDgvMTIvMjAxNi5cclxuICovXHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2ZyLWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2hlYWRlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBlbWFpbDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2UgOiBBdXRoU2VydmljZSl7fVxyXG5cclxuICAgIGhhc0xvZ2luKCl7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldEVtYWlsKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmhhc0xvZ2dlZEluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dvdXQoKXtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5wZXJmb3JtTG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9zaWduaW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOnZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=
