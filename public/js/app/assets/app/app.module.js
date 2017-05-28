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
var angular2_busy_1 = require('angular2-busy');
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
                mydatepicker_1.MyDatePickerModule,
                angular2_busy_1.BusyModule
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBK0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRCw2QkFBbUMsY0FBYyxDQUFDLENBQUE7QUFDbEQsOEJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDhCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELDRCQUFrRCxlQUFlLENBQUMsQ0FBQTtBQUVsRSxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxvQ0FBaUMsaUNBQWlDLENBQUMsQ0FBQTtBQUNuRSw0Q0FBbUMsaURBQWlELENBQUMsQ0FBQTtBQUNyRix1Q0FBbUMsNENBQTRDLENBQUMsQ0FBQTtBQUNoRixnQ0FBZ0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNuRSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsNkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFDcEQscUNBQWlDLGlDQUFpQyxDQUFDLENBQUE7QUFDbkUscUNBQWtDLGlDQUFpQyxDQUFDLENBQUE7QUFDcEUsa0NBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QseUNBQW9DLGtDQUFrQyxDQUFDLENBQUE7QUFDdkUsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsd0NBQW9DLDZDQUE2QyxDQUFDLENBQUE7QUFDbEYsdUNBQW1DLDRDQUE0QyxDQUFDLENBQUE7QUFnQ2hGO0lBQUE7SUFDQSxDQUFDO0lBL0JEO1FBQUMsZUFBUSxDQUF1QjtZQUM1QixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsbUJBQVc7Z0JBQ1gscUJBQU87Z0JBQ1AsaUJBQVU7Z0JBQ1YsaUNBQWtCO2dCQUNsQiwwQkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGtDQUFlO2dCQUNmLHdDQUFrQjtnQkFDbEIsNkNBQW9CO2dCQUNwQixrREFBb0I7Z0JBQ3BCLG1DQUFpQjtnQkFDakIsa0NBQWU7Z0JBQ2YsK0NBQXFCO2dCQUNyQiw2Q0FBb0I7Z0JBQ3BCLGdEQUFxQjthQUN4QjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCwwQ0FBbUI7Z0JBQ25CLG1DQUFlO2dCQUNmLHlDQUFrQjtnQkFDbEIsaUNBQW1CO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDOztpQkFBQTtJQUVGLGdCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxpQkFBUyxZQUNyQixDQUFBIiwiZmlsZSI6ImFzc2V0cy9hcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5nTW9kdWxlTWV0YWRhdGFUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE15RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ215ZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IEJ1c3lNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1idXN5JztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHtyb3V0aW5nLCBhcHBSb3V0aW5nUHJvdmlkZXJzfSAgICAgICAgZnJvbSAnLi9hcHAucm91dGluZyc7XHJcblxyXG5pbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWduaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N1bW1hcnlJbmZvQ29tcG9uZW50fSBmcm9tIFwiLi9kYXNoYm9hcmQvc3VtbWFyeS91c2FnZS1pbmZvcm1hdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSZXF1ZXN0SW5mb0NvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL3JlcXVlc3QvcmVxdWVzdC5pbmZvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1VzZXJJbmZvQ29tcG9uZW50fSBmcm9tIFwiLi9kYXNoYm9hcmQvdXNlci91c2Vycy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3VtbWFyeUluZm9TZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zdW1tYXJ5LmluZm8uc2VydmljZVwiO1xyXG5pbXBvcnQge1JlcXVlc3RzSW5mb1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3JlcXVlc3QuaW5mby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNlckluZm9TZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy91c2VyLmluZm8uc2VydmljZVwiO1xyXG5pbXBvcnQge1BhZ2VOb3RGb3VuZENvbXBvbmVudH0gZnJvbSBcIi4vZXJyb3IvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1VzYWdlU3VtbWFyeUNvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL3N1bW1hcnkvdXNhZ2Utc3VtbWFyeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2FnZURldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL3N1bW1hcnkvdXNhZ2UtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKDxOZ01vZHVsZU1ldGFkYXRhVHlwZT57XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICByb3V0aW5nLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsXHJcbiAgICAgICAgTXlEYXRlUGlja2VyTW9kdWxlLFxyXG4gICAgICAgIEJ1c3lNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgU2lnbkluQ29tcG9uZW50LFxyXG4gICAgICAgIERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICBSZXF1ZXN0SW5mb0NvbXBvbmVudCxcclxuICAgICAgICBTdW1tYXJ5SW5mb0NvbXBvbmVudCxcclxuICAgICAgICBVc2VySW5mb0NvbXBvbmVudCxcclxuICAgICAgICBIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgVXNhZ2VTdW1tYXJ5Q29tcG9uZW50LFxyXG4gICAgICAgIFVzYWdlRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIFBhZ2VOb3RGb3VuZENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIFJlcXVlc3RzSW5mb1NlcnZpY2UsXHJcbiAgICAgICAgVXNlckluZm9TZXJ2aWNlLFxyXG4gICAgICAgIFN1bW1hcnlJbmZvU2VydmljZSxcclxuICAgICAgICBhcHBSb3V0aW5nUHJvdmlkZXJzXHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufSJdfQ==
