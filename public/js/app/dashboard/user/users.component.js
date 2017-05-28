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
var PurchasePlan_1 = require("../../obj/PurchasePlan");
var user_info_service_1 = require("../../services/user.info.service");
/**
 * Created by Thisum on 8/14/2016.
 */
var UserInfoComponent = (function () {
    function UserInfoComponent(_userInfoService) {
        this._userInfoService = _userInfoService;
        this.purchasePlan = new PurchasePlan_1.PurchasePlan("", "", 0);
        this.purchasePlans = [];
        this.paymentSchemas = [];
    }
    UserInfoComponent.prototype.onAdd = function () {
    };
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fr-purchase',
            templateUrl: 'html/users.component.html'
        }), 
        __metadata('design:paramtypes', [user_info_service_1.UserInfoService])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC91c2VyL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELDZCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBRXBELGtDQUE4QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ2pFOztHQUVHO0FBUUg7SUFNSSwyQkFBb0IsZ0JBQWlDO1FBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFKckQsaUJBQVksR0FBRyxJQUFJLDJCQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBb0IsRUFBRSxDQUFDO0lBRWtCLENBQUM7SUFFakQsaUNBQUssR0FBWjtJQUdBLENBQUM7SUFHRCxvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQXJCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDOzt5QkFBQTtJQWtCRix3QkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlkseUJBQWlCLG9CQWlCN0IsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvdXNlci91c2Vycy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1B1cmNoYXNlUGxhbn0gZnJvbSBcIi4uLy4uL29iai9QdXJjaGFzZVBsYW5cIjtcclxuaW1wb3J0IHtQYXltZW50U2NoZW1hfSBmcm9tIFwiLi4vLi4vb2JqL1BheW1lbnRTY2hlbWFcIjtcclxuaW1wb3J0IHtVc2VySW5mb1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLmluZm8uc2VydmljZVwiO1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBUaGlzdW0gb24gOC8xNC8yMDE2LlxyXG4gKi9cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2ZyLXB1cmNoYXNlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaHRtbC91c2Vycy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgXHJcbiAgICBwdXJjaGFzZVBsYW4gPSBuZXcgUHVyY2hhc2VQbGFuKFwiXCIsIFwiXCIsIDApO1xyXG4gICAgcHVyY2hhc2VQbGFuczogUHVyY2hhc2VQbGFuW10gPSBbXTtcclxuICAgIHBheW1lbnRTY2hlbWFzOiBQYXltZW50U2NoZW1hW10gPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXNlckluZm9TZXJ2aWNlOiBVc2VySW5mb1NlcnZpY2Upe31cclxuXHJcbiAgICBwdWJsaWMgb25BZGQoKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6dm9pZCB7XHJcbiAgICAgICBcclxuICAgIH1cclxufSJdfQ==
