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
/**
 * Created by Thisum on 8/14/2016.
 */
var UsageDetailComponent = (function () {
    function UsageDetailComponent(_infoService) {
        this._infoService = _infoService;
    }
    UsageDetailComponent.prototype.ngOnInit = function () {
    };
    UsageDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fr-usagedetail',
            templateUrl: 'html/usage-detail.component.html'
        }), 
        __metadata('design:paramtypes', [request_info_service_1.RequestsInfoService])
    ], UsageDetailComponent);
    return UsageDetailComponent;
}());
exports.UsageDetailComponent = UsageDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9zdW1tYXJ5L3VzYWdlLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxxQ0FBa0MscUNBQXFDLENBQUMsQ0FBQTtBQUV4RTs7R0FFRztBQU9IO0lBS0ksOEJBQW9CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUFFLENBQUM7SUFFeEQsdUNBQVEsR0FBUjtJQUVBLENBQUM7SUFkTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7OzRCQUFBO0lBY0YsMkJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLDRCQUFvQix1QkFhaEMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvc3VtbWFyeS91c2FnZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSZXF1ZXN0c0luZm9TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcmVxdWVzdC5pbmZvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2FnZUluZm99IGZyb20gXCIuLi8uLi9vYmovVXNhZ2VJbmZvXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRoaXN1bSBvbiA4LzE0LzIwMTYuXHJcbiAqL1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdmci11c2FnZWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2h0bWwvdXNhZ2UtZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNhZ2VEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgdXNlckluZm9ybWF0aW9uOiBVc2FnZUluZm9bXTtcclxuICAgIHJlcVR5cGVzOiBzdHJpbmdbXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5mb1NlcnZpY2U6IFJlcXVlc3RzSW5mb1NlcnZpY2Upe31cclxuXHJcbiAgICBuZ09uSW5pdCgpOnZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
