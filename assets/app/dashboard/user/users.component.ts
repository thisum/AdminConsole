import {Component, OnInit} from "@angular/core";
import {PurchasePlan} from "../../obj/PurchasePlan";
import {PaymentSchema} from "../../obj/PaymentSchema";
import {UserInfoService} from "../../services/user.info.service";
/**
 * Created by Thisum on 8/14/2016.
 */


@Component({
    moduleId: module.id,
    selector: 'fr-purchase',
    templateUrl: 'html/users.component.html'
})
export class UserInfoComponent implements OnInit{
    
    purchasePlan = new PurchasePlan("", "", 0);
    purchasePlans: PurchasePlan[] = [];
    paymentSchemas: PaymentSchema[] = [];
    
    constructor(private _userInfoService: UserInfoService){}

    public onAdd(){

        
    }


    ngOnInit():void {
       
    }
}