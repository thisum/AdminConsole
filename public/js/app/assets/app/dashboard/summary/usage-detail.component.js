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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9zdW1tYXJ5L3VzYWdlLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxxQ0FBa0MscUNBQXFDLENBQUMsQ0FBQTtBQUV4RTs7R0FFRztBQU9IO0lBS0ksOEJBQW9CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUFFLENBQUM7SUFFeEQsdUNBQVEsR0FBUjtJQUVBLENBQUM7SUFkTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7OzRCQUFBO0lBY0YsMkJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLDRCQUFvQix1QkFhaEMsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL2Rhc2hib2FyZC9zdW1tYXJ5L3VzYWdlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JlcXVlc3RzSW5mb1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9yZXF1ZXN0LmluZm8uc2VydmljZVwiO1xyXG5pbXBvcnQge1VzYWdlSW5mb30gZnJvbSBcIi4uLy4uL29iai9Vc2FnZUluZm9cIjtcclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGhpc3VtIG9uIDgvMTQvMjAxNi5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2ZyLXVzYWdlZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaHRtbC91c2FnZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2FnZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICB1c2VySW5mb3JtYXRpb246IFVzYWdlSW5mb1tdO1xyXG4gICAgcmVxVHlwZXM6IHN0cmluZ1tdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmZvU2VydmljZTogUmVxdWVzdHNJbmZvU2VydmljZSl7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6dm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19
