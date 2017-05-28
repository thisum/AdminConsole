import {Component, OnInit} from "@angular/core";
import {RequestsInfoService} from "../../services/request.info.service";
import {UsageInfo} from "../../obj/UsageInfo";
/**
 * Created by Thisum on 8/14/2016.
 */

@Component({
    moduleId: module.id,
    selector: 'fr-usagedetail',
    templateUrl: 'html/usage-detail.component.html'
})
export class UsageDetailComponent implements OnInit{

    userInformation: UsageInfo[];
    reqTypes: string[];
    
    constructor(private _infoService: RequestsInfoService){}

    ngOnInit():void {
        
    }



}
