import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'fr-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(private _authService: AuthService ){}

    hasLogin(){
        return this._authService.hasLoggedIn();;
    }
    
}
