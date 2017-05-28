import {Component, OnInit} from "@angular/core";
import {RequestsInfoService} from "../../services/request.info.service";
import {UsageInfo} from "../../obj/UsageInfo";
/**
 * Created by Thisum on 8/14/2016.
 */
    
@Component({
    moduleId: module.id,
    selector: 'fr-usagesummary',
    templateUrl: 'html/usage-summary.component.html'
})
export class UsageSummaryComponent implements OnInit{

    usageInfo = new UsageInfo("", 0, 0, 0, 0, 0, "");

    constructor(private _infoService: RequestsInfoService){}

    ngOnInit():void {

    }
}
