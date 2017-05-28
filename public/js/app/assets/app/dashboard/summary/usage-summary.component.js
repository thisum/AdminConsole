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
var request_info_service_1 = require("../../services/request.info.service");
var UsageInfo_1 = require("../../obj/UsageInfo");
/**
 * Created by Thisum on 8/14/2016.
 */
var UsageSummaryComponent = (function () {
    function UsageSummaryComponent(_infoService) {
        this._infoService = _infoService;
        this.usageInfo = new UsageInfo_1.UsageInfo("", 0, 0, 0, 0, 0, "");
    }
    UsageSummaryComponent.prototype.ngOnInit = function () {
    };
    UsageSummaryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fr-usagesummary',
            templateUrl: 'html/usage-summary.component.html'
        }), 
        __metadata('design:paramtypes', [request_info_service_1.RequestsInfoService])
    ], UsageSummaryComponent);
    return UsageSummaryComponent;
}());
exports.UsageSummaryComponent = UsageSummaryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9zdW1tYXJ5L3VzYWdlLXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUNBQWtDLHFDQUFxQyxDQUFDLENBQUE7QUFDeEUsMEJBQXdCLHFCQUFxQixDQUFDLENBQUE7QUFDOUM7O0dBRUc7QUFPSDtJQUlJLCtCQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFGckQsY0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVNLENBQUM7SUFFeEQsd0NBQVEsR0FBUjtJQUVBLENBQUM7SUFiTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7OzZCQUFBO0lBVUYsNEJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDZCQUFxQix3QkFTakMsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL2Rhc2hib2FyZC9zdW1tYXJ5L3VzYWdlLXN1bW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSZXF1ZXN0c0luZm9TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcmVxdWVzdC5pbmZvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2FnZUluZm99IGZyb20gXCIuLi8uLi9vYmovVXNhZ2VJbmZvXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRoaXN1bSBvbiA4LzE0LzIwMTYuXHJcbiAqL1xyXG4gICAgXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZnItdXNhZ2VzdW1tYXJ5JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaHRtbC91c2FnZS1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNhZ2VTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIHVzYWdlSW5mbyA9IG5ldyBVc2FnZUluZm8oXCJcIiwgMCwgMCwgMCwgMCwgMCwgXCJcIik7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5mb1NlcnZpY2U6IFJlcXVlc3RzSW5mb1NlcnZpY2Upe31cclxuXHJcbiAgICBuZ09uSW5pdCgpOnZvaWQge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
