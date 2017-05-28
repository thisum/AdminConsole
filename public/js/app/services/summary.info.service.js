"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var constants_1 = require("../util/constants");
var Device_1 = require("../obj/Device");
var request_builder_util_1 = require("../util/request-builder.util");
/**
 * Created by Thisum on 8/24/2016.
 */
var SummaryInfoService = (function () {
    function SummaryInfoService(_http) {
        this._http = _http;
        this.baseUrl = constants_1.BASE_URL + '/device';
    }
    SummaryInfoService.prototype.loadDeviceInfo = function () {
        var headers = request_builder_util_1.getHeader();
        var url = this.baseUrl + '/deviceinfo';
        return this._http.get(url, { headers: headers, body: {} }).toPromise()
            .then(function (response) {
            var status = response.json().status;
            if (status == constants_1.SERVER_RESPONSE_STATUS.SUCCESS) {
                var data = response.json().result;
                var devices = [];
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var obj = data_1[_i];
                    var device = new Device_1.Device(obj.user.email, obj.user._id, obj.deviceId, obj.serialNo, obj.lastConnection, obj.enable, obj.name);
                    devices.push(device);
                }
                return devices;
            }
            else if (status == constants_1.SERVER_RESPONSE_STATUS.FAILED) {
                throw new Error(response.json().message);
            }
        })
            .catch(this.handleError);
    };
    SummaryInfoService.prototype.updateDeviceStatus = function (device) {
        var headers = request_builder_util_1.getHeader();
        var url = this.baseUrl + '/updateDevice';
        return this._http.patch(url, JSON.stringify(device), { headers: headers }).toPromise()
            .then(function (response) {
            var status = response.json().status;
            if (status == constants_1.SERVER_RESPONSE_STATUS.SUCCESS) {
                var result = response.json().result;
                return { success: result.nModified != 0, deviceId: result.deviceId, user: result.user };
            }
            else if (status == constants_1.SERVER_RESPONSE_STATUS.FAILED) {
                throw new Error(response.json().message);
            }
        })
            .catch(this.handleError);
    };
    SummaryInfoService.prototype.handleError = function (error) {
        console.error('Error occurred : ' + error);
        return Promise.reject(error.message || error);
    };
    SummaryInfoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SummaryInfoService);
    return SummaryInfoService;
}());
exports.SummaryInfoService = SummaryInfoService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N1bW1hcnkuaW5mby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLDBCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ25FLHVCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQyxxQ0FBd0IsOEJBQThCLENBQUMsQ0FBQTtBQUV2RDs7R0FFRztBQUdIO0lBSUksNEJBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRnhCLFlBQU8sR0FBRyxvQkFBUSxHQUFHLFNBQVMsQ0FBQztJQUd2QyxDQUFDO0lBRU0sMkNBQWMsR0FBckI7UUFFSSxJQUFNLE9BQU8sR0FBRyxnQ0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFFdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRyxFQUFDLE9BQU8sRUFBRyxPQUFPLEVBQUUsSUFBSSxFQUFHLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQ25FLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDVixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxrQ0FBc0IsQ0FBQyxPQUFPLENBQUMsQ0FDNUMsQ0FBQztnQkFDRyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUNwQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7Z0JBRTNCLEdBQUcsQ0FBQSxDQUFZLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLENBQUM7b0JBQWhCLElBQUksR0FBRyxhQUFBO29CQUNQLElBQUksTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1SCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ25CLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUUsTUFBTSxJQUFJLGtDQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUNqRCxDQUFDO2dCQUNHLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsTUFBYztRQUVwQyxJQUFNLE9BQU8sR0FBRyxnQ0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQ2pGLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDVixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxrQ0FBc0IsQ0FBQyxPQUFPLENBQUMsQ0FDNUMsQ0FBQztnQkFDRyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUNwQyxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQztZQUN4RixDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFFLE1BQU0sSUFBSSxrQ0FBc0IsQ0FBQyxNQUFNLENBQUMsQ0FDakQsQ0FBQztnQkFDRyxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBR08sd0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQTdETDtRQUFDLGlCQUFVLEVBQUU7OzBCQUFBO0lBOERiLHlCQUFDO0FBQUQsQ0E3REEsQUE2REMsSUFBQTtBQTdEWSwwQkFBa0IscUJBNkQ5QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3N1bW1hcnkuaW5mby5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7U0VSVkVSX1JFU1BPTlNFX1NUQVRVUywgQkFTRV9VUkx9IGZyb20gXCIuLi91dGlsL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSBcIi4uL29iai9EZXZpY2VcIjtcclxuaW1wb3J0IHtnZXRIZWFkZXJ9IGZyb20gXCIuLi91dGlsL3JlcXVlc3QtYnVpbGRlci51dGlsXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBieSBUaGlzdW0gb24gOC8yNC8yMDE2LlxyXG4gKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN1bW1hcnlJbmZvU2VydmljZXtcclxuXHJcbiAgICBwcml2YXRlIGJhc2VVcmwgPSBCQVNFX1VSTCArICcvZGV2aWNlJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkRGV2aWNlSW5mbygpOiBQcm9taXNlPERldmljZVtdPntcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcigpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL2RldmljZWluZm8nO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoIHVybCAsIHtoZWFkZXJzIDogaGVhZGVycywgYm9keSA6IHt9fSkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnN0YXR1cztcclxuICAgICAgICAgICAgICAgIGlmKHN0YXR1cyA9PSBTRVJWRVJfUkVTUE9OU0VfU1RBVFVTLlNVQ0NFU1MpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRldmljZXM6IERldmljZVtdID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgb2JqIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGV2aWNlID0gbmV3IERldmljZShvYmoudXNlci5lbWFpbCwgb2JqLnVzZXIuX2lkLCBvYmouZGV2aWNlSWQsIG9iai5zZXJpYWxObywgb2JqLmxhc3RDb25uZWN0aW9uLCBvYmouZW5hYmxlLCBvYmoubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZXMucHVzaChkZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoIHN0YXR1cyA9PSBTRVJWRVJfUkVTUE9OU0VfU1RBVFVTLkZBSUxFRClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyB1cGRhdGVEZXZpY2VTdGF0dXMoZGV2aWNlOiBEZXZpY2UpOiBQcm9taXNlPGFueT57XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXIoKTtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5iYXNlVXJsICsgJy91cGRhdGVEZXZpY2UnO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wYXRjaCggdXJsLCBKU09OLnN0cmluZ2lmeShkZXZpY2UpLCB7aGVhZGVycyA6IGhlYWRlcnN9KS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuU1VDQ0VTUylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzcG9uc2UuanNvbigpLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N1Y2Nlc3M6IHJlc3VsdC5uTW9kaWZpZWQhPTAsIGRldmljZUlkOiByZXN1bHQuZGV2aWNlSWQsIHVzZXI6IHJlc3VsdC51c2VyfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoIHN0YXR1cyA9PSBTRVJWRVJfUkVTUE9OU0VfU1RBVFVTLkZBSUxFRClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCA6ICcgK2Vycm9yICk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
