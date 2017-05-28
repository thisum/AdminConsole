import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {SERVER_RESPONSE_STATUS, BASE_URL} from "../util/constants";
import {Device} from "../obj/Device";
import {getHeader} from "../util/request-builder.util";

/**
 * Created by Thisum on 8/24/2016.
 */

@Injectable()
export class SummaryInfoService{

    private baseUrl = BASE_URL + '/device';

    constructor (private _http: Http) {
    }

    public loadDeviceInfo(): Promise<Device[]>{

        const headers = getHeader();
        var url = this.baseUrl + '/deviceinfo';

        return this._http.get( url , {headers : headers, body : {}}).toPromise()
            .then(response => {
                const status = response.json().status;
                if(status == SERVER_RESPONSE_STATUS.SUCCESS)
                {
                    const data = response.json().result;
                    let devices: Device[] = [];

                    for(let obj of data){
                        let device = new Device(obj.user.email, obj.user._id, obj.deviceId, obj.serialNo, obj.lastConnection, obj.enable, obj.name);
                        devices.push(device);
                    }
                    return devices;
                }
                else if( status == SERVER_RESPONSE_STATUS.FAILED)
                {
                    throw new Error(response.json().message);
                }
            })
            .catch(this.handleError);
    }
    
    public updateDeviceStatus(device: Device): Promise<any>{

        const headers = getHeader();
        var url = this.baseUrl + '/updateDevice';

        return this._http.patch( url, JSON.stringify(device), {headers : headers}).toPromise()
            .then(response => {
                const status = response.json().status;
                if(status == SERVER_RESPONSE_STATUS.SUCCESS)
                {
                    let result = response.json().result;
                    return {success: result.nModified!=0, deviceId: result.deviceId, user: result.user};
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

