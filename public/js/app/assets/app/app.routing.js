"use strict";
/**
 * Created by Thisum on 8/12/2016.
 */
var router_1 = require('@angular/router');
var signin_component_1 = require("./auth/signin.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var usage_information_component_1 = require("./dashboard/summary/usage-information.component");
var page_not_found_component_1 = require("./error/page-not-found.component");
var request_info_component_1 = require("./dashboard/request/request.info.component");
var users_component_1 = require("./dashboard/user/users.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: signin_component_1.SignInComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'requests',
                pathMatch: 'full'
            },
            {
                path: 'requests',
                component: request_info_component_1.RequestInfoComponent
            },
            {
                path: 'summary',
                component: usage_information_component_1.SummaryInfoComponent
            },
            {
                path: 'users',
                component: users_component_1.UserInfoComponent
            }
        ]
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.appRoutingProviders = [];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELG9DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ25FLDRDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBQ3JGLHlDQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLHVDQUFtQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQ2hGLGdDQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBRW5FLElBQU0sU0FBUyxHQUFXO0lBQ3RCO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsTUFBTTtLQUNwQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsa0NBQWU7S0FDN0I7SUFDRDtRQUNJLElBQUksRUFBRSxXQUFXO1FBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7UUFDN0IsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFNBQVMsRUFBRSxNQUFNO2FBQ3BCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSw2Q0FBb0I7YUFDbEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsa0RBQW9CO2FBQ2xDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLG1DQUFpQjthQUMvQjtTQUNKO0tBQ0o7SUFDRDtRQUNJLElBQUksRUFBRSxJQUFJO1FBQ1YsU0FBUyxFQUFFLGdEQUFxQjtLQUNuQztDQUNKLENBQUM7QUFFVyxlQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFMUMsMkJBQW1CLEdBQVUsRUFFekMsQ0FBQyIsImZpbGUiOiJhc3NldHMvYXBwL2FwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGhpc3VtIG9uIDgvMTIvMjAxNi5cclxuICovXHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTaWduSW5Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdW1tYXJ5SW5mb0NvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL3N1bW1hcnkvdXNhZ2UtaW5mb3JtYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UGFnZU5vdEZvdW5kQ29tcG9uZW50fSBmcm9tIFwiLi9lcnJvci9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSZXF1ZXN0SW5mb0NvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL3JlcXVlc3QvcmVxdWVzdC5pbmZvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1VzZXJJbmZvQ29tcG9uZW50fSBmcm9tIFwiLi9kYXNoYm9hcmQvdXNlci91c2Vycy5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIHJlZGlyZWN0VG86ICcvc2lnbmluJyxcclxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnc2lnbmluJyxcclxuICAgICAgICBjb21wb25lbnQ6IFNpZ25JbkNvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnZGFzaGJvYXJkJyxcclxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VG86ICdyZXF1ZXN0cycsXHJcbiAgICAgICAgICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAncmVxdWVzdHMnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBSZXF1ZXN0SW5mb0NvbXBvbmVudFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnc3VtbWFyeScsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFN1bW1hcnlJbmZvQ29tcG9uZW50XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICd1c2VycycsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFVzZXJJbmZvQ29tcG9uZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcqKicsXHJcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnRcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBSb3V0aW5nUHJvdmlkZXJzOiBhbnlbXSA9IFtcclxuXHJcbl07Il19
