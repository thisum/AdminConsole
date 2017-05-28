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
var request_builder_util_1 = require("../util/request-builder.util");
/**
 * Created by Thisum on 8/16/2016.
 */
var RequestsInfoService = (function () {
    function RequestsInfoService(_http) {
        this._http = _http;
        this.baseUrl = constants_1.BASE_URL + '/request';
    }
    RequestsInfoService.prototype.loadInitData = function () {
        var headers = request_builder_util_1.getHeader();
        var url = this.baseUrl + '/initdata';
        return this._http.get(url, { headers: headers, body: {} }).toPromise()
            .then(function (response) {
            var status = response.json().status;
            if (status == constants_1.SERVER_RESPONSE_STATUS.SUCCESS) {
                return response.json().result;
            }
            else if (status == constants_1.SERVER_RESPONSE_STATUS.FAILED) {
                throw new Error(response.json().message);
            }
        })
            .catch(this.handleError);
    };
    RequestsInfoService.prototype.searchRequestInfo = function (searchCriteria) {
        var headers = request_builder_util_1.getHeader();
        var url = this.baseUrl + '/search';
        var params = new http_1.URLSearchParams();
        params.set("reqType", searchCriteria.reqType);
        params.set("fromDate", String(searchCriteria.fromDate));
        params.set("toDate", String(searchCriteria.toDate));
        params.set("reqUser", searchCriteria.reqUser);
        params.set("api", searchCriteria.api);
        return this._http.get(url, { headers: headers, body: {}, search: params }).toPromise()
            .then(function (response) {
            var status = response.json().status;
            if (status == constants_1.SERVER_RESPONSE_STATUS.SUCCESS) {
                return response.json().result;
            }
            else if (status == constants_1.SERVER_RESPONSE_STATUS.FAILED) {
                throw new Error(response.json().message);
            }
        })
            .catch(this.handleError);
    };
    RequestsInfoService.prototype.handleError = function (error) {
        console.error('Error occurred : ' + error);
        return Promise.reject(error.message || error);
    };
    RequestsInfoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RequestsInfoService);
    return RequestsInfoService;
}());
exports.RequestsInfoService = RequestsInfoService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3JlcXVlc3QuaW5mby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBRTdELDBCQUE4RixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2xILHFDQUF3Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBSXZEOztHQUVHO0FBR0g7SUFHSSw2QkFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFEeEIsWUFBTyxHQUFHLG9CQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ0wsQ0FBQztJQUVwQywwQ0FBWSxHQUFaO1FBRUksSUFBTSxPQUFPLEdBQUcsZ0NBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRyxFQUFFLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUNqRSxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksa0NBQXNCLENBQUMsT0FBTyxDQUFDLENBQzVDLENBQUM7Z0JBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDbEMsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBRSxNQUFNLElBQUksa0NBQXNCLENBQUMsTUFBTSxDQUFDLENBQ2pELENBQUM7Z0JBQ0csTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLCtDQUFpQixHQUF4QixVQUF5QixjQUF5QztRQUU5RCxJQUFNLE9BQU8sR0FBRyxnQ0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFHLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBRSxJQUFJLEVBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUNuRixJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksa0NBQXNCLENBQUMsT0FBTyxDQUFDLENBQzVDLENBQUM7Z0JBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDbEMsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBRSxNQUFNLElBQUksa0NBQXNCLENBQUMsTUFBTSxDQUFDLENBQ2pELENBQUM7Z0JBQ0csTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLHlDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRSxLQUFLLENBQUUsQ0FBQztRQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF2REw7UUFBQyxpQkFBVSxFQUFFOzsyQkFBQTtJQXlEYiwwQkFBQztBQUFELENBeERBLEFBd0RDLElBQUE7QUF4RFksMkJBQW1CLHNCQXdEL0IsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9yZXF1ZXN0LmluZm8uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIZWFkZXJzLCBIdHRwLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7VXNhZ2VJbmZvfSBmcm9tIFwiLi4vb2JqL1VzYWdlSW5mb1wiO1xyXG5pbXBvcnQge1NFUlZFUl9SRVNQT05TRV9TVEFUVVMsIFNDSEVNQV9UWVBFX0ZSRUUsIFNDSEVNQV9UWVBFX1ZBTFVFX1VOTElNSVRFRCwgQkFTRV9VUkx9IGZyb20gXCIuLi91dGlsL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge2dldEhlYWRlcn0gZnJvbSBcIi4uL3V0aWwvcmVxdWVzdC1idWlsZGVyLnV0aWxcIjtcclxuaW1wb3J0IHtSZXF1ZXN0SW5mb1NlYXJjaENyaXRlcmlhfSBmcm9tIFwiLi4vb2JqL1JlcXVlc3RJbmZvU2VhcmNoQ3JpdGVyaWFcIjtcclxuaW1wb3J0IHtSZXF1ZXN0SW5mb30gZnJvbSBcIi4uL29iai9SZXF1ZXN0SW5mb1wiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGhpc3VtIG9uIDgvMTYvMjAxNi5cclxuICovXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0c0luZm9TZXJ2aWNle1xyXG5cclxuICAgIHByaXZhdGUgYmFzZVVybCA9IEJBU0VfVVJMICsgJy9yZXF1ZXN0JztcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGxvYWRJbml0RGF0YSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcigpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL2luaXRkYXRhJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCB1cmwsIHtoZWFkZXJzOiBoZWFkZXJzLCBib2R5IDoge319KS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuU1VDQ0VTUylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoIHN0YXR1cyA9PSBTRVJWRVJfUkVTUE9OU0VfU1RBVFVTLkZBSUxFRClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaFJlcXVlc3RJbmZvKHNlYXJjaENyaXRlcmlhOiBSZXF1ZXN0SW5mb1NlYXJjaENyaXRlcmlhKTogUHJvbWlzZTxhbnlbXT57XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXIoKTtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5iYXNlVXJsICsgJy9zZWFyY2gnO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zLnNldChcInJlcVR5cGVcIiwgc2VhcmNoQ3JpdGVyaWEucmVxVHlwZSk7XHJcbiAgICAgICAgcGFyYW1zLnNldChcImZyb21EYXRlXCIsIFN0cmluZyhzZWFyY2hDcml0ZXJpYS5mcm9tRGF0ZSkpO1xyXG4gICAgICAgIHBhcmFtcy5zZXQoXCJ0b0RhdGVcIiwgU3RyaW5nKHNlYXJjaENyaXRlcmlhLnRvRGF0ZSkpO1xyXG4gICAgICAgIHBhcmFtcy5zZXQoXCJyZXFVc2VyXCIsIHNlYXJjaENyaXRlcmlhLnJlcVVzZXIpO1xyXG4gICAgICAgIHBhcmFtcy5zZXQoXCJhcGlcIiwgc2VhcmNoQ3JpdGVyaWEuYXBpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCB1cmwgLCB7aGVhZGVycyA6IGhlYWRlcnMsIGJvZHkgOiB7fSwgc2VhcmNoOiBwYXJhbXN9KS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuU1VDQ0VTUylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoIHN0YXR1cyA9PSBTRVJWRVJfUkVTUE9OU0VfU1RBVFVTLkZBSUxFRClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCA6ICcgK2Vycm9yICk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0=
