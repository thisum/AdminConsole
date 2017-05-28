/**
 * Created by Thisum on 8/17/2016.
 */
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

import {SERVER_RESPONSE_STATUS, BASE_URL} from "../util/constants";
import {PaymentSchema} from "../obj/PaymentSchema";
import {getHeader} from "../util/request-builder.util";


@Injectable()
export class UserInfoService{

    private baseUrl = BASE_URL + '/admin';

    constructor (private _http: Http) {

    }

    public loadPaymentSchema(): Promise<PaymentSchema[]>{

        const headers = getHeader();
        var url = this.baseUrl + '/getschema';
        
        return this._http.get( url , {headers : headers, body : {}}).toPromise()
            .then(response => {
                const status = response.json().status;
                if(status == SERVER_RESPONSE_STATUS.SUCCESS)
                {
                    const data = response.json().result;
                    let objs: any[] = [];
                    for(let i=0; i<data.length; i++){
                        let schema = new PaymentSchema(data[i].service, data[i].type, data[i].name);
                        objs.push(schema);
                    }
                    return objs;
                }
                else if( status == SERVER_RESPONSE_STATUS.FAILED)
                {
                    throw new Error(response.json().message);
                }
            })
            .catch(this.handleError);
    }

    public addPaymentSchema(schema: PaymentSchema): Promise<PaymentSchema>{

        const headers = getHeader();
        var url = this.baseUrl + '/addschema';

        return this._http.post( url, schema, {headers : headers}).toPromise()
            .then(response => {
                const obj = response.json();
                if(obj.status == SERVER_RESPONSE_STATUS.SUCCESS)
                {
                    let schema = new PaymentSchema(obj.result.service, obj.result.type, obj.result.name);
                    return schema;
                }
                else if( obj.status == SERVER_RESPONSE_STATUS.FAILED)
                {
                    throw new Error(response.json().message);
                }
            })
            .catch(this.handleError);
        
    }

    public deleteSchema(ps: PaymentSchema){

    }
    
    public editSchema(ps: PaymentSchema){

    }

    public getServiceDetails(): Promise<JSON>{

        const headers = getHeader();
        var url = this.baseUrl + '/getservices';

        return this._http.get( url, {headers : headers, body : {}}).toPromise()
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