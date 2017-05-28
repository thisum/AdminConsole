/**
 * Created by Thisum on 8/12/2016.
 */
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from "./auth/signin.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SummaryInfoComponent} from "./dashboard/summary/usage-information.component";
import {PageNotFoundComponent} from "./error/page-not-found.component";
import {RequestInfoComponent} from "./dashboard/request/request.info.component";
import {UserInfoComponent} from "./dashboard/user/users.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: SignInComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'requests',
                pathMatch: 'full'
            },
            {
                path: 'requests',
                component: RequestInfoComponent
            },
            {
                path: 'summary',
                component: SummaryInfoComponent
            },
            {
                path: 'users',
                component: UserInfoComponent
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);

export const appRoutingProviders: any[] = [

];