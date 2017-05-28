import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'fr-dashboard',
    templateUrl: 'html/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor(private router: Router, private _authService: AuthService) { }

    ngOnInit() {

    }

    isAdmin(){
        return this._authService.isAdmin();
    }

}
