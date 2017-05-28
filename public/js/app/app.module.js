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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var mydatepicker_1 = require('mydatepicker');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var signin_component_1 = require("./auth/signin.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var usage_information_component_1 = require("./dashboard/summary/usage-information.component");
var request_info_component_1 = require("./dashboard/request/request.info.component");
var users_component_1 = require("./dashboard/user/users.component");
var http_1 = require("@angular/http");
var auth_service_1 = require("./services/auth.service");
var summary_info_service_1 = require("./services/summary.info.service");
var request_info_service_1 = require("./services/request.info.service");
var user_info_service_1 = require("./services/user.info.service");
var page_not_found_component_1 = require("./error/page-not-found.component");
var header_component_1 = require("./header/header.component");
var usage_summary_component_1 = require("./dashboard/summary/usage-summary.component");
var usage_detail_component_1 = require("./dashboard/summary/usage-detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                mydatepicker_1.MyDatePickerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                signin_component_1.SignInComponent,
                dashboard_component_1.DashboardComponent,
                request_info_component_1.RequestInfoComponent,
                usage_information_component_1.SummaryInfoComponent,
                users_component_1.UserInfoComponent,
                header_component_1.HeaderComponent,
                usage_summary_component_1.UsageSummaryComponent,
                usage_detail_component_1.UsageDetailComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            providers: [
                auth_service_1.AuthService,
                request_info_service_1.RequestsInfoService,
                user_info_service_1.UserInfoService,
                summary_info_service_1.SummaryInfoService,
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBK0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRCw2QkFBbUMsY0FBYyxDQUFDLENBQUE7QUFFbEQsOEJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsNEJBQWtELGVBQWUsQ0FBQyxDQUFBO0FBRWxFLGlDQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELG9DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ25FLDRDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBQ3JGLHVDQUFtQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQ2hGLGdDQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ25FLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyw2QkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQUNwRCxxQ0FBaUMsaUNBQWlDLENBQUMsQ0FBQTtBQUNuRSxxQ0FBa0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNwRSxrQ0FBOEIsOEJBQThCLENBQUMsQ0FBQTtBQUM3RCx5Q0FBb0Msa0NBQWtDLENBQUMsQ0FBQTtBQUN2RSxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCx3Q0FBb0MsNkNBQTZDLENBQUMsQ0FBQTtBQUNsRix1Q0FBbUMsNENBQTRDLENBQUMsQ0FBQTtBQStCaEY7SUFBQTtJQUNBLENBQUM7SUE5QkQ7UUFBQyxlQUFRLENBQXVCO1lBQzVCLE9BQU8sRUFBRTtnQkFDTCxnQ0FBYTtnQkFDYixtQkFBVztnQkFDWCxxQkFBTztnQkFDUCxpQkFBVTtnQkFDVixpQ0FBa0I7YUFDckI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2Ysd0NBQWtCO2dCQUNsQiw2Q0FBb0I7Z0JBQ3BCLGtEQUFvQjtnQkFDcEIsbUNBQWlCO2dCQUNqQixrQ0FBZTtnQkFDZiwrQ0FBcUI7Z0JBQ3JCLDZDQUFvQjtnQkFDcEIsZ0RBQXFCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLDBDQUFtQjtnQkFDbkIsbUNBQWU7Z0JBQ2YseUNBQWtCO2dCQUNsQixpQ0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7O2lCQUFBO0lBRUYsZ0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLGlCQUFTLFlBQ3JCLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5nTW9kdWxlTWV0YWRhdGFUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE15RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ215ZGF0ZXBpY2tlcic7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7cm91dGluZywgYXBwUm91dGluZ1Byb3ZpZGVyc30gICAgICAgIGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG5cclxuaW1wb3J0IHtTaWduSW5Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdW1tYXJ5SW5mb0NvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL3N1bW1hcnkvdXNhZ2UtaW5mb3JtYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UmVxdWVzdEluZm9Db21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC9yZXF1ZXN0L3JlcXVlc3QuaW5mby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VySW5mb0NvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL3VzZXIvdXNlcnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1N1bW1hcnlJbmZvU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvc3VtbWFyeS5pbmZvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZXF1ZXN0c0luZm9TZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9yZXF1ZXN0LmluZm8uc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJJbmZvU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvdXNlci5pbmZvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQYWdlTm90Rm91bmRDb21wb25lbnR9IGZyb20gXCIuL2Vycm9yL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2FnZVN1bW1hcnlDb21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC9zdW1tYXJ5L3VzYWdlLXN1bW1hcnkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNhZ2VEZXRhaWxDb21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC9zdW1tYXJ5L3VzYWdlLWRldGFpbC5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSg8TmdNb2R1bGVNZXRhZGF0YVR5cGU+e1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgcm91dGluZyxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIE15RGF0ZVBpY2tlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBTaWduSW5Db21wb25lbnQsXHJcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcXVlc3RJbmZvQ29tcG9uZW50LFxyXG4gICAgICAgIFN1bW1hcnlJbmZvQ29tcG9uZW50LFxyXG4gICAgICAgIFVzZXJJbmZvQ29tcG9uZW50LFxyXG4gICAgICAgIEhlYWRlckNvbXBvbmVudCxcclxuICAgICAgICBVc2FnZVN1bW1hcnlDb21wb25lbnQsXHJcbiAgICAgICAgVXNhZ2VEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgUmVxdWVzdHNJbmZvU2VydmljZSxcclxuICAgICAgICBVc2VySW5mb1NlcnZpY2UsXHJcbiAgICAgICAgU3VtbWFyeUluZm9TZXJ2aWNlLFxyXG4gICAgICAgIGFwcFJvdXRpbmdQcm92aWRlcnNcclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59Il19
