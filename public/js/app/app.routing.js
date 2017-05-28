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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELG9DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ25FLDRDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBQ3JGLHlDQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLHVDQUFtQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQ2hGLGdDQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBRW5FLElBQU0sU0FBUyxHQUFXO0lBQ3RCO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsTUFBTTtLQUNwQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsa0NBQWU7S0FDN0I7SUFDRDtRQUNJLElBQUksRUFBRSxXQUFXO1FBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7UUFDN0IsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFNBQVMsRUFBRSxNQUFNO2FBQ3BCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSw2Q0FBb0I7YUFDbEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsa0RBQW9CO2FBQ2xDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLG1DQUFpQjthQUMvQjtTQUNKO0tBQ0o7SUFDRDtRQUNJLElBQUksRUFBRSxJQUFJO1FBQ1YsU0FBUyxFQUFFLGdEQUFxQjtLQUNuQztDQUNKLENBQUM7QUFFVyxlQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFMUMsMkJBQW1CLEdBQVUsRUFFekMsQ0FBQyIsImZpbGUiOiJhcHAucm91dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRoaXN1bSBvbiA4LzEyLzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7U2lnbkluQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ25pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3VtbWFyeUluZm9Db21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC9zdW1tYXJ5L3VzYWdlLWluZm9ybWF0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1BhZ2VOb3RGb3VuZENvbXBvbmVudH0gZnJvbSBcIi4vZXJyb3IvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UmVxdWVzdEluZm9Db21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC9yZXF1ZXN0L3JlcXVlc3QuaW5mby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VySW5mb0NvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL3VzZXIvdXNlcnMuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICByZWRpcmVjdFRvOiAnL3NpZ25pbicsXHJcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3NpZ25pbicsXHJcbiAgICAgICAgY29tcG9uZW50OiBTaWduSW5Db21wb25lbnRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ2Rhc2hib2FyZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvOiAncmVxdWVzdHMnLFxyXG4gICAgICAgICAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3JlcXVlc3RzJyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUmVxdWVzdEluZm9Db21wb25lbnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3N1bW1hcnknLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBTdW1tYXJ5SW5mb0NvbXBvbmVudFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAndXNlcnMnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBVc2VySW5mb0NvbXBvbmVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnKionLFxyXG4gICAgICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50XHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwUm91dGluZ1Byb3ZpZGVyczogYW55W10gPSBbXHJcblxyXG5dOyJdfQ==
