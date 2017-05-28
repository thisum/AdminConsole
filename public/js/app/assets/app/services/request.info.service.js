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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3JlcXVlc3QuaW5mby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBRTdELDBCQUE4RixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2xILHFDQUF3Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBSXZEOztHQUVHO0FBR0g7SUFHSSw2QkFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFEeEIsWUFBTyxHQUFHLG9CQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ0wsQ0FBQztJQUVwQywwQ0FBWSxHQUFaO1FBRUksSUFBTSxPQUFPLEdBQUcsZ0NBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRyxFQUFFLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUNqRSxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksa0NBQXNCLENBQUMsT0FBTyxDQUFDLENBQzVDLENBQUM7Z0JBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDbEMsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBRSxNQUFNLElBQUksa0NBQXNCLENBQUMsTUFBTSxDQUFDLENBQ2pELENBQUM7Z0JBQ0csTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLCtDQUFpQixHQUF4QixVQUF5QixjQUF5QztRQUU5RCxJQUFNLE9BQU8sR0FBRyxnQ0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFHLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBRSxJQUFJLEVBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUNuRixJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksa0NBQXNCLENBQUMsT0FBTyxDQUFDLENBQzVDLENBQUM7Z0JBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDbEMsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBRSxNQUFNLElBQUksa0NBQXNCLENBQUMsTUFBTSxDQUFDLENBQ2pELENBQUM7Z0JBQ0csTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLHlDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRSxLQUFLLENBQUUsQ0FBQztRQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF2REw7UUFBQyxpQkFBVSxFQUFFOzsyQkFBQTtJQXlEYiwwQkFBQztBQUFELENBeERBLEFBd0RDLElBQUE7QUF4RFksMkJBQW1CLHNCQXdEL0IsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL3NlcnZpY2VzL3JlcXVlc3QuaW5mby5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0hlYWRlcnMsIEh0dHAsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtVc2FnZUluZm99IGZyb20gXCIuLi9vYmovVXNhZ2VJbmZvXCI7XHJcbmltcG9ydCB7U0VSVkVSX1JFU1BPTlNFX1NUQVRVUywgU0NIRU1BX1RZUEVfRlJFRSwgU0NIRU1BX1RZUEVfVkFMVUVfVU5MSU1JVEVELCBCQVNFX1VSTH0gZnJvbSBcIi4uL3V0aWwvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7Z2V0SGVhZGVyfSBmcm9tIFwiLi4vdXRpbC9yZXF1ZXN0LWJ1aWxkZXIudXRpbFwiO1xyXG5pbXBvcnQge1JlcXVlc3RJbmZvU2VhcmNoQ3JpdGVyaWF9IGZyb20gXCIuLi9vYmovUmVxdWVzdEluZm9TZWFyY2hDcml0ZXJpYVwiO1xyXG5pbXBvcnQge1JlcXVlc3RJbmZvfSBmcm9tIFwiLi4vb2JqL1JlcXVlc3RJbmZvXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBieSBUaGlzdW0gb24gOC8xNi8yMDE2LlxyXG4gKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RzSW5mb1NlcnZpY2V7XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlVXJsID0gQkFTRV9VUkwgKyAnL3JlcXVlc3QnO1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgbG9hZEluaXREYXRhKCkge1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyKCk7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuYmFzZVVybCArICcvaW5pdGRhdGEnO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoIHVybCwge2hlYWRlcnM6IGhlYWRlcnMsIGJvZHkgOiB7fX0pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBpZihzdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5TVUNDRVNTKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiggc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuRkFJTEVEKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5qc29uKCkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoUmVxdWVzdEluZm8oc2VhcmNoQ3JpdGVyaWE6IFJlcXVlc3RJbmZvU2VhcmNoQ3JpdGVyaWEpOiBQcm9taXNlPGFueVtdPntcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcigpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL3NlYXJjaCc7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMuc2V0KFwicmVxVHlwZVwiLCBzZWFyY2hDcml0ZXJpYS5yZXFUeXBlKTtcclxuICAgICAgICBwYXJhbXMuc2V0KFwiZnJvbURhdGVcIiwgU3RyaW5nKHNlYXJjaENyaXRlcmlhLmZyb21EYXRlKSk7XHJcbiAgICAgICAgcGFyYW1zLnNldChcInRvRGF0ZVwiLCBTdHJpbmcoc2VhcmNoQ3JpdGVyaWEudG9EYXRlKSk7XHJcbiAgICAgICAgcGFyYW1zLnNldChcInJlcVVzZXJcIiwgc2VhcmNoQ3JpdGVyaWEucmVxVXNlcik7XHJcbiAgICAgICAgcGFyYW1zLnNldChcImFwaVwiLCBzZWFyY2hDcml0ZXJpYS5hcGkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoIHVybCAsIHtoZWFkZXJzIDogaGVhZGVycywgYm9keSA6IHt9LCBzZWFyY2g6IHBhcmFtc30pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBpZihzdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5TVUNDRVNTKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiggc3RhdHVzID09IFNFUlZFUl9SRVNQT05TRV9TVEFUVVMuRkFJTEVEKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5qc29uKCkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIDogJyArZXJyb3IgKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==
