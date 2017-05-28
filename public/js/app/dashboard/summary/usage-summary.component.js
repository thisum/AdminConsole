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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9zdW1tYXJ5L3VzYWdlLXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUNBQWtDLHFDQUFxQyxDQUFDLENBQUE7QUFDeEUsMEJBQXdCLHFCQUFxQixDQUFDLENBQUE7QUFDOUM7O0dBRUc7QUFPSDtJQUlJLCtCQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFGckQsY0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVNLENBQUM7SUFFeEQsd0NBQVEsR0FBUjtJQUVBLENBQUM7SUFiTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7OzZCQUFBO0lBVUYsNEJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDZCQUFxQix3QkFTakMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvc3VtbWFyeS91c2FnZS1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UmVxdWVzdHNJbmZvU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3JlcXVlc3QuaW5mby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNhZ2VJbmZvfSBmcm9tIFwiLi4vLi4vb2JqL1VzYWdlSW5mb1wiO1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBUaGlzdW0gb24gOC8xNC8yMDE2LlxyXG4gKi9cclxuICAgIFxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2ZyLXVzYWdlc3VtbWFyeScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2h0bWwvdXNhZ2Utc3VtbWFyeS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzYWdlU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICB1c2FnZUluZm8gPSBuZXcgVXNhZ2VJbmZvKFwiXCIsIDAsIDAsIDAsIDAsIDAsIFwiXCIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luZm9TZXJ2aWNlOiBSZXF1ZXN0c0luZm9TZXJ2aWNlKXt9XHJcblxyXG4gICAgbmdPbkluaXQoKTp2b2lkIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19
