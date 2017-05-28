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
var core_1 = require('@angular/core');
var auth_service_1 = require("./services/auth.service");
var AppComponent = (function () {
    function AppComponent(_authService) {
        this._authService = _authService;
    }
    AppComponent.prototype.hasLogin = function () {
        return this._authService.hasLoggedIn();
        ;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fr-app',
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyw2QkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQU9wRDtJQUVJLHNCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7SUFFakQsK0JBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQUEsQ0FBQztJQUM1QyxDQUFDO0lBWEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzs7b0JBQUE7SUFTRixtQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksb0JBQVksZUFReEIsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdmci1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSApe31cclxuXHJcbiAgICBoYXNMb2dpbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5oYXNMb2dnZWRJbigpOztcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ==
