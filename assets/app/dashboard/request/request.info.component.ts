/**
 * Created by thisum on 2/13/2017.
 */
import { Component, OnInit } from '@angular/core';
import {RequestsInfoService} from "../../services/request.info.service";
import {NameCodeObj} from "../../obj/NameCodeObj";
import {RequestInfoSearchCriteria} from "../../obj/RequestInfoSearchCriteria";
import {RequestInfo} from "../../obj/RequestInfo";
import {IMyOptions, IMyDateModel} from 'mydatepicker';

@Component({
    moduleId: module.id,
    selector: 'fr-requestdetail',
    templateUrl: 'html/request.detail.component.html'
})
export class RequestInfoComponent implements OnInit {

    busy: Promise<any>;
    t: number = 1000*60*60*24 - 1;
    reqTypes: NameCodeObj[] = [];
    apiTypes: NameCodeObj[] = [];
    criteria = new RequestInfoSearchCriteria();
    requestInfo: RequestInfo[] = [];
    private timeOptions = {
        day : 'numeric',
        month : 'short',
        year : 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    private datePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'yyyy-mmm-dd',
        markCurrentDay: true,
        inline: false,
        height: '22px',
        width: '100%',
        selectionTxtFontSize: '12px'
    };

    constructor(private _userInfoService: RequestsInfoService){}
    
    ngOnInit():void {
        this. busy = this._userInfoService.loadInitData().then(
            results =>{
                const req = results.req;
                this.reqTypes = [];
                this.setNameCodePairs(req, this.reqTypes);

                const api = results.api;
                this.apiTypes = [];
                this.setNameCodePairs(api, this.apiTypes);
            },
            error => {
                console.error(error);
            }
        )
    }

    private setNameCodePairs(obj: any, list: NameCodeObj[]){

        list.push(new NameCodeObj("--Select--", ""));
        for(let i=0; i<obj.length; i++){
            let schema = new NameCodeObj(obj[i].name, obj[i].code);
            list.push(schema);
        }
    }

    onDateChangedFrom(event: IMyDateModel) {
        this.criteria.fromDate = event.jsdate ? event.jsdate.getTime() : -1;
    }

    onDateChangedTo(event: IMyDateModel) {

        this.criteria.toDate = event.jsdate ? (event.jsdate.getTime() + this.t): -1;
    }

    onSearch(){
        this. busy = this._userInfoService.searchRequestInfo(this.criteria).then(
            data => {
                let objs: RequestInfo[] = [];
                for(let i=0; i<data.length; i++){
                    let reqTime = new Date(data[i].requestTime).toLocaleString('en-GB', this.timeOptions);
                    let resTime = (data[i].responseTime === -1) ? "-" : new Date(data[i].responseTime).toLocaleString('en-GB', this.timeOptions);
                    let reqType = this.getRequestType(data[i].requestType);
                    let user = data[i].user;
                    let request = new RequestInfo(user, data[i].image, reqType, data[i].response, reqTime, resTime);
                    request._setRemarks(this.createRemarks(data[i]));
                    objs.push(request);
                }
                this.requestInfo = objs;
            },
            error => {
                console.error(error);
            }
        )
    }

    private createRemarks(obj: any): string[]{
        let remark: string[] = [];
        remark.push("Response status: " + obj.responseStatus);
        if( obj.api == null || obj.api.length == 0 ){
            remark.push("CS Question: " + obj.question);
            if(!obj.responded){
                remark.push("Waiting for response");
            }
            else {
                remark.push("Responded By: " + obj.respondedBy);
            }
        }
        else{
            remark.push("API used: " + this.getApiType(obj.api));
        }

        return remark;
    }

    private getApiType(apiType: string): string{
        let name = "";
        for(let o of this.apiTypes){
            if(o.code == apiType){
                name = o.name;
            }
        }
        return name;
    }
    
    private getRequestType(reqType: string): string{

        let name = "";
        for(let o of this.reqTypes){
            if(o.code == reqType){
                name = o.name;
            }
        }
        return name;
    }

    public setReqType(val){
        this.criteria.reqType = val;
    }

    public setApiType(val){
        this.criteria.api = val;
    }

}