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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC91c2VyL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELDZCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBRXBELGtDQUE4QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ2pFOztHQUVHO0FBUUg7SUFNSSwyQkFBb0IsZ0JBQWlDO1FBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFKckQsaUJBQVksR0FBRyxJQUFJLDJCQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBb0IsRUFBRSxDQUFDO0lBRWtCLENBQUM7SUFFakQsaUNBQUssR0FBWjtJQUdBLENBQUM7SUFHRCxvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQXJCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDOzt5QkFBQTtJQWtCRix3QkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlkseUJBQWlCLG9CQWlCN0IsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL2Rhc2hib2FyZC91c2VyL3VzZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHVyY2hhc2VQbGFufSBmcm9tIFwiLi4vLi4vb2JqL1B1cmNoYXNlUGxhblwiO1xyXG5pbXBvcnQge1BheW1lbnRTY2hlbWF9IGZyb20gXCIuLi8uLi9vYmovUGF5bWVudFNjaGVtYVwiO1xyXG5pbXBvcnQge1VzZXJJbmZvU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuaW5mby5zZXJ2aWNlXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRoaXN1bSBvbiA4LzE0LzIwMTYuXHJcbiAqL1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZnItcHVyY2hhc2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdodG1sL3VzZXJzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBcclxuICAgIHB1cmNoYXNlUGxhbiA9IG5ldyBQdXJjaGFzZVBsYW4oXCJcIiwgXCJcIiwgMCk7XHJcbiAgICBwdXJjaGFzZVBsYW5zOiBQdXJjaGFzZVBsYW5bXSA9IFtdO1xyXG4gICAgcGF5bWVudFNjaGVtYXM6IFBheW1lbnRTY2hlbWFbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VySW5mb1NlcnZpY2U6IFVzZXJJbmZvU2VydmljZSl7fVxyXG5cclxuICAgIHB1YmxpYyBvbkFkZCgpe1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG59Il19
