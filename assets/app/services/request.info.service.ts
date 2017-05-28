import {Injectable} from "@angular/core";
import {Headers, Http, URLSearchParams} from "@angular/http";
import {UsageInfo} from "../obj/UsageInfo";
import {SERVER_RESPONSE_STATUS, SCHEMA_TYPE_FREE, SCHEMA_TYPE_VALUE_UNLIMITED, BASE_URL} from "../util/constants";
import {getHeader} from "../util/request-builder.util";
import {RequestInfoSearchCriteria} from "../obj/RequestInfoSearchCriteria";
import {RequestInfo} from "../obj/RequestInfo";

/**
 * Created by Thisum on 8/16/2016.
 */

@Injectable()
export class RequestsInfoService{

    private baseUrl = BASE_URL + '/request';
    constructor (private _http: Http) {}

    loadInitData() {

        const headers = getHeader();
        var url = this.baseUrl + '/initdata';

        return this._http.get( url, {headers: headers, body : {}}).toPromise()
            .then(response => {
                const status = response.json().status;
                if(status == SERVER_RESPONSE_STATUS.SUCCESS)
                {
                    return response.json().result;
                }
                else if( status == SERVER_RESPONSE_STATUS.FAILED)
                {
                    throw new Error(response.json().message);
                }
            })
            .catch(this.handleError);
    }

    public searchRequestInfo(searchCriteria: RequestInfoSearchCriteria): Promise<any[]>{

        const headers = getHeader();
        var url = this.baseUrl + '/search';
        let params = new URLSearchParams();
        params.set("reqType", searchCriteria.reqType);
        params.set("fromDate", String(searchCriteria.fromDate));
        params.set("toDate", String(searchCriteria.toDate));
        params.set("reqUser", searchCriteria.reqUser);
        params.set("api", searchCriteria.api);

        return this._http.get( url , {headers : headers, body : {}, search: params}).toPromise()
            .then(response => {
                const status = response.json().status;
                if(status == SERVER_RESPONSE_STATUS.SUCCESS)
                {
                    return response.json().result;
                }
                else if( status == SERVER_RESPONSE_STATUS.FAILED)
                {
                    throw new Error(response.json().message);
                }
            })
            .catch(this.handleError);
    }

    private handleError(error: any){
        console.error('Error occurred : ' +error );
        return Promise.reject(error.message || error);
    }
    
}