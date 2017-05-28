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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N1bW1hcnkuaW5mby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLDBCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ25FLHVCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQyxxQ0FBd0IsOEJBQThCLENBQUMsQ0FBQTtBQUV2RDs7R0FFRztBQUdIO0lBSUksNEJBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRnhCLFlBQU8sR0FBRyxvQkFBUSxHQUFHLFNBQVMsQ0FBQztJQUd2QyxDQUFDO0lBRU0sMkNBQWMsR0FBckI7UUFFSSxJQUFNLE9BQU8sR0FBRyxnQ0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFFdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRyxFQUFDLE9BQU8sRUFBRyxPQUFPLEVBQUUsSUFBSSxFQUFHLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQ25FLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDVixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxrQ0FBc0IsQ0FBQyxPQUFPLENBQUMsQ0FDNUMsQ0FBQztnQkFDRyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUNwQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7Z0JBRTNCLEdBQUcsQ0FBQSxDQUFZLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLENBQUM7b0JBQWhCLElBQUksR0FBRyxhQUFBO29CQUNQLElBQUksTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1SCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ25CLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUUsTUFBTSxJQUFJLGtDQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUNqRCxDQUFDO2dCQUNHLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsTUFBYztRQUVwQyxJQUFNLE9BQU8sR0FBRyxnQ0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQ2pGLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDVixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxrQ0FBc0IsQ0FBQyxPQUFPLENBQUMsQ0FDNUMsQ0FBQztnQkFDRyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUNwQyxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQztZQUN4RixDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFFLE1BQU0sSUFBSSxrQ0FBc0IsQ0FBQyxNQUFNLENBQUMsQ0FDakQsQ0FBQztnQkFDRyxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBR08sd0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQTdETDtRQUFDLGlCQUFVLEVBQUU7OzBCQUFBO0lBOERiLHlCQUFDO0FBQUQsQ0E3REEsQUE2REMsSUFBQTtBQTdEWSwwQkFBa0IscUJBNkQ5QixDQUFBIiwiZmlsZSI6ImFzc2V0cy9hcHAvc2VydmljZXMvc3VtbWFyeS5pbmZvLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtTRVJWRVJfUkVTUE9OU0VfU1RBVFVTLCBCQVNFX1VSTH0gZnJvbSBcIi4uL3V0aWwvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7RGV2aWNlfSBmcm9tIFwiLi4vb2JqL0RldmljZVwiO1xyXG5pbXBvcnQge2dldEhlYWRlcn0gZnJvbSBcIi4uL3V0aWwvcmVxdWVzdC1idWlsZGVyLnV0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRoaXN1bSBvbiA4LzI0LzIwMTYuXHJcbiAqL1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3VtbWFyeUluZm9TZXJ2aWNle1xyXG5cclxuICAgIHByaXZhdGUgYmFzZVVybCA9IEJBU0VfVVJMICsgJy9kZXZpY2UnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWREZXZpY2VJbmZvKCk6IFByb21pc2U8RGV2aWNlW10+e1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyKCk7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuYmFzZVVybCArICcvZGV2aWNlaW5mbyc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCggdXJsICwge2hlYWRlcnMgOiBoZWFkZXJzLCBib2R5IDoge319KS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuU1VDQ0VTUylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGV2aWNlczogRGV2aWNlW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBvYmogb2YgZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXZpY2UgPSBuZXcgRGV2aWNlKG9iai51c2VyLmVtYWlsLCBvYmoudXNlci5faWQsIG9iai5kZXZpY2VJZCwgb2JqLnNlcmlhbE5vLCBvYmoubGFzdENvbm5lY3Rpb24sIG9iai5lbmFibGUsIG9iai5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlcy5wdXNoKGRldmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2VzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiggc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuRkFJTEVEKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5qc29uKCkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHVwZGF0ZURldmljZVN0YXR1cyhkZXZpY2U6IERldmljZSk6IFByb21pc2U8YW55PntcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcigpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL3VwZGF0ZURldmljZSc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBhdGNoKCB1cmwsIEpTT04uc3RyaW5naWZ5KGRldmljZSksIHtoZWFkZXJzIDogaGVhZGVyc30pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBpZihzdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5TVUNDRVNTKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXNwb25zZS5qc29uKCkucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3VjY2VzczogcmVzdWx0Lm5Nb2RpZmllZCE9MCwgZGV2aWNlSWQ6IHJlc3VsdC5kZXZpY2VJZCwgdXNlcjogcmVzdWx0LnVzZXJ9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiggc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuRkFJTEVEKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5qc29uKCkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIDogJyArZXJyb3IgKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
