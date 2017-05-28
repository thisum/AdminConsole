import {NgModule, NgModuleMetadataType} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { BusyModule } from 'angular2-busy';

import { AppComponent }   from './app.component';
import {routing, appRoutingProviders}        from './app.routing';

import {SignInComponent} from "./auth/signin.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SummaryInfoComponent} from "./dashboard/summary/usage-information.component";
import {RequestInfoComponent} from "./dashboard/request/request.info.component";
import {UserInfoComponent} from "./dashboard/user/users.component";
import {HttpModule} from "@angular/http";

import {AuthService} from "./services/auth.service";
import {SummaryInfoService} from "./services/summary.info.service";
import {RequestsInfoService} from "./services/request.info.service";
import {UserInfoService} from "./services/user.info.service";
import {PageNotFoundComponent} from "./error/page-not-found.component";
import {HeaderComponent} from "./header/header.component";
import {UsageSummaryComponent} from "./dashboard/summary/usage-summary.component";
import {UsageDetailComponent} from "./dashboard/summary/usage-detail.component";

@NgModule(<NgModuleMetadataType>{
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        MyDatePickerModule,
        BusyModule
    ],
    declarations: [
        AppComponent,
        SignInComponent,
        DashboardComponent,
        RequestInfoComponent,
        SummaryInfoComponent,
        UserInfoComponent,
        HeaderComponent,
        UsageSummaryComponent,
        UsageDetailComponent,
        PageNotFoundComponent
    ],
    providers: [
        AuthService,
        RequestsInfoService,
        UserInfoService,
        SummaryInfoService,
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}