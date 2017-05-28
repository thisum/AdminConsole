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
/**
 * Created by thisum on 2/13/2017.
 */
var core_1 = require('@angular/core');
var request_info_service_1 = require("../../services/request.info.service");
var NameCodeObj_1 = require("../../obj/NameCodeObj");
var RequestInfoSearchCriteria_1 = require("../../obj/RequestInfoSearchCriteria");
var RequestInfo_1 = require("../../obj/RequestInfo");
var RequestInfoComponent = (function () {
    function RequestInfoComponent(_userInfoService) {
        this._userInfoService = _userInfoService;
        this.t = 1000 * 60 * 60 * 24 - 1;
        this.reqTypes = [];
        this.apiTypes = [];
        this.criteria = new RequestInfoSearchCriteria_1.RequestInfoSearchCriteria();
        this.requestInfo = [];
        this.timeOptions = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        this.datePickerOptions = {
            // other options...
            dateFormat: 'yyyy-mmm-dd',
            markCurrentDay: true,
            inline: false,
            height: '22px',
            width: '100%',
            selectionTxtFontSize: '12px'
        };
    }
    RequestInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userInfoService.loadInitData().then(function (results) {
            var req = results.req;
            _this.reqTypes = [];
            _this.setNameCodePairs(req, _this.reqTypes);
            var api = results.api;
            _this.apiTypes = [];
            _this.setNameCodePairs(api, _this.apiTypes);
        }, function (error) {
            console.error(error);
        });
    };
    RequestInfoComponent.prototype.setNameCodePairs = function (obj, list) {
        list.push(new NameCodeObj_1.NameCodeObj("--Select--", ""));
        for (var i = 0; i < obj.length; i++) {
            var schema = new NameCodeObj_1.NameCodeObj(obj[i].name, obj[i].code);
            list.push(schema);
        }
    };
    RequestInfoComponent.prototype.onDateChangedFrom = function (event) {
        this.criteria.fromDate = event.jsdate ? event.jsdate.getTime() : -1;
    };
    RequestInfoComponent.prototype.onDateChangedTo = function (event) {
        this.criteria.toDate = event.jsdate ? (event.jsdate.getTime() + this.t) : -1;
    };
    RequestInfoComponent.prototype.onSearch = function () {
        var _this = this;
        this._userInfoService.searchRequestInfo(this.criteria).then(function (data) {
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var reqTime = new Date(data[i].requestTime).toLocaleString('en-GB', _this.timeOptions);
                var resTime = (data[i].responseTime === -1) ? "-" : new Date(data[i].responseTime).toLocaleString('en-GB', _this.timeOptions);
                var reqType = _this.getRequestType(data[i].requestType);
                var user = data[i].user;
                var request = new RequestInfo_1.RequestInfo(user, data[i].image, reqType, data[i].response, reqTime, resTime);
                request._setRemarks(_this.createRemarks(data[i]));
                objs.push(request);
            }
            _this.requestInfo = objs;
        }, function (error) {
            console.error(error);
        });
    };
    RequestInfoComponent.prototype.createRemarks = function (obj) {
        var remark = [];
        remark.push("Response status: " + obj.responseStatus);
        if (obj.api == null || obj.api.length == 0) {
            remark.push("CS Question: " + obj.question);
            if (!obj.responded) {
                remark.push("Waiting for response");
            }
            else {
                remark.push("Responded By: " + obj.respondedBy);
            }
        }
        else {
            remark.push("API used: " + this.getApiType(obj.api));
        }
        return remark;
    };
    RequestInfoComponent.prototype.getApiType = function (apiType) {
        var name = "";
        for (var _i = 0, _a = this.apiTypes; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o.code == apiType) {
                name = o.name;
            }
        }
        return name;
    };
    RequestInfoComponent.prototype.getRequestType = function (reqType) {
        var name = "";
        for (var _i = 0, _a = this.reqTypes; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o.code == reqType) {
                name = o.name;
            }
        }
        return name;
    };
    RequestInfoComponent.prototype.setReqType = function (val) {
        this.criteria.reqType = val;
    };
    RequestInfoComponent.prototype.setApiType = function (val) {
        this.criteria.api = val;
    };
    RequestInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fr-requestdetail',
            templateUrl: 'html/request.detail.component.html'
        }), 
        __metadata('design:paramtypes', [request_info_service_1.RequestsInfoService])
    ], RequestInfoComponent);
    return RequestInfoComponent;
}());
exports.RequestInfoComponent = RequestInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9yZXF1ZXN0L3JlcXVlc3QuaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHFDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLDRCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBQ2xELDBDQUF3QyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzlFLDRCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBUWxEO0lBMEJJLDhCQUFvQixnQkFBcUM7UUFBckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQXhCekQsTUFBQyxHQUFXLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFHLElBQUkscURBQXlCLEVBQUUsQ0FBQztRQUMzQyxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBRztZQUNsQixHQUFHLEVBQUcsU0FBUztZQUNmLEtBQUssRUFBRyxPQUFPO1lBQ2YsSUFBSSxFQUFHLFNBQVM7WUFDaEIsSUFBSSxFQUFFLFNBQVM7WUFDZixNQUFNLEVBQUUsU0FBUztZQUNqQixNQUFNLEVBQUUsU0FBUztTQUNwQixDQUFDO1FBRU0sc0JBQWlCLEdBQWU7WUFDcEMsbUJBQW1CO1lBQ25CLFVBQVUsRUFBRSxhQUFhO1lBQ3pCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsTUFBTTtZQUNiLG9CQUFvQixFQUFFLE1BQU07U0FDL0IsQ0FBQztJQUV5RCxDQUFDO0lBRTVELHVDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUs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SSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUF2SUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLG9DQUFvQztTQUNwRCxDQUFDOzs0QkFBQTtJQXFJRiwyQkFBQztBQUFELENBcElBLEFBb0lDLElBQUE7QUFwSVksNEJBQW9CLHVCQW9JaEMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvcmVxdWVzdC9yZXF1ZXN0LmluZm8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdGhpc3VtIG9uIDIvMTMvMjAxNy5cclxuICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmVxdWVzdHNJbmZvU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3JlcXVlc3QuaW5mby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TmFtZUNvZGVPYmp9IGZyb20gXCIuLi8uLi9vYmovTmFtZUNvZGVPYmpcIjtcclxuaW1wb3J0IHtSZXF1ZXN0SW5mb1NlYXJjaENyaXRlcmlhfSBmcm9tIFwiLi4vLi4vb2JqL1JlcXVlc3RJbmZvU2VhcmNoQ3JpdGVyaWFcIjtcclxuaW1wb3J0IHtSZXF1ZXN0SW5mb30gZnJvbSBcIi4uLy4uL29iai9SZXF1ZXN0SW5mb1wiO1xyXG5pbXBvcnQge0lNeU9wdGlvbnMsIElNeURhdGVNb2RlbH0gZnJvbSAnbXlkYXRlcGlja2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZnItcmVxdWVzdGRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2h0bWwvcmVxdWVzdC5kZXRhaWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0SW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgdDogbnVtYmVyID0gMTAwMCo2MCo2MCoyNCAtIDE7XHJcbiAgICByZXFUeXBlczogTmFtZUNvZGVPYmpbXSA9IFtdO1xyXG4gICAgYXBpVHlwZXM6IE5hbWVDb2RlT2JqW10gPSBbXTtcclxuICAgIGNyaXRlcmlhID0gbmV3IFJlcXVlc3RJbmZvU2VhcmNoQ3JpdGVyaWEoKTtcclxuICAgIHJlcXVlc3RJbmZvOiBSZXF1ZXN0SW5mb1tdID0gW107XHJcbiAgICBwcml2YXRlIHRpbWVPcHRpb25zID0ge1xyXG4gICAgICAgIGRheSA6ICdudW1lcmljJyxcclxuICAgICAgICBtb250aCA6ICdzaG9ydCcsXHJcbiAgICAgICAgeWVhciA6ICdudW1lcmljJyxcclxuICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXHJcbiAgICAgICAgc2Vjb25kOiAnbnVtZXJpYydcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRlUGlja2VyT3B0aW9uczogSU15T3B0aW9ucyA9IHtcclxuICAgICAgICAvLyBvdGhlciBvcHRpb25zLi4uXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogJ3l5eXktbW1tLWRkJyxcclxuICAgICAgICBtYXJrQ3VycmVudERheTogdHJ1ZSxcclxuICAgICAgICBpbmxpbmU6IGZhbHNlLFxyXG4gICAgICAgIGhlaWdodDogJzIycHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgc2VsZWN0aW9uVHh0Rm9udFNpemU6ICcxMnB4J1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VySW5mb1NlcnZpY2U6IFJlcXVlc3RzSW5mb1NlcnZpY2Upe31cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgICAgICB0aGlzLl91c2VySW5mb1NlcnZpY2UubG9hZEluaXREYXRhKCkudGhlbihcclxuICAgICAgICAgICAgcmVzdWx0cyA9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcSA9IHJlc3VsdHMucmVxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXFUeXBlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXROYW1lQ29kZVBhaXJzKHJlcSwgdGhpcy5yZXFUeXBlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBpID0gcmVzdWx0cy5hcGk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaVR5cGVzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE5hbWVDb2RlUGFpcnMoYXBpLCB0aGlzLmFwaVR5cGVzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXROYW1lQ29kZVBhaXJzKG9iajogYW55LCBsaXN0OiBOYW1lQ29kZU9ialtdKXtcclxuXHJcbiAgICAgICAgbGlzdC5wdXNoKG5ldyBOYW1lQ29kZU9iaihcIi0tU2VsZWN0LS1cIiwgXCJcIikpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPG9iai5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBzY2hlbWEgPSBuZXcgTmFtZUNvZGVPYmoob2JqW2ldLm5hbWUsIG9ialtpXS5jb2RlKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHNjaGVtYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZUNoYW5nZWRGcm9tKGV2ZW50OiBJTXlEYXRlTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmNyaXRlcmlhLmZyb21EYXRlID0gZXZlbnQuanNkYXRlID8gZXZlbnQuanNkYXRlLmdldFRpbWUoKSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZUNoYW5nZWRUbyhldmVudDogSU15RGF0ZU1vZGVsKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY3JpdGVyaWEudG9EYXRlID0gZXZlbnQuanNkYXRlID8gKGV2ZW50LmpzZGF0ZS5nZXRUaW1lKCkgKyB0aGlzLnQpOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaCgpe1xyXG4gICAgICAgIHRoaXMuX3VzZXJJbmZvU2VydmljZS5zZWFyY2hSZXF1ZXN0SW5mbyh0aGlzLmNyaXRlcmlhKS50aGVuKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmpzOiBSZXF1ZXN0SW5mb1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxVGltZSA9IG5ldyBEYXRlKGRhdGFbaV0ucmVxdWVzdFRpbWUpLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHRoaXMudGltZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNUaW1lID0gKGRhdGFbaV0ucmVzcG9uc2VUaW1lID09PSAtMSkgPyBcIi1cIiA6IG5ldyBEYXRlKGRhdGFbaV0ucmVzcG9uc2VUaW1lKS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB0aGlzLnRpbWVPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxVHlwZSA9IHRoaXMuZ2V0UmVxdWVzdFR5cGUoZGF0YVtpXS5yZXF1ZXN0VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBkYXRhW2ldLnVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdEluZm8odXNlciwgZGF0YVtpXS5pbWFnZSwgcmVxVHlwZSwgZGF0YVtpXS5yZXNwb25zZSwgcmVxVGltZSwgcmVzVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5fc2V0UmVtYXJrcyh0aGlzLmNyZWF0ZVJlbWFya3MoZGF0YVtpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ianMucHVzaChyZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdEluZm8gPSBvYmpzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlbWFya3Mob2JqOiBhbnkpOiBzdHJpbmdbXXtcclxuICAgICAgICBsZXQgcmVtYXJrOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIHJlbWFyay5wdXNoKFwiUmVzcG9uc2Ugc3RhdHVzOiBcIiArIG9iai5yZXNwb25zZVN0YXR1cyk7XHJcbiAgICAgICAgaWYoIG9iai5hcGkgPT0gbnVsbCB8fCBvYmouYXBpLmxlbmd0aCA9PSAwICl7XHJcbiAgICAgICAgICAgIHJlbWFyay5wdXNoKFwiQ1MgUXVlc3Rpb246IFwiICsgb2JqLnF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgaWYoIW9iai5yZXNwb25kZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVtYXJrLnB1c2goXCJXYWl0aW5nIGZvciByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlbWFyay5wdXNoKFwiUmVzcG9uZGVkIEJ5OiBcIiArIG9iai5yZXNwb25kZWRCeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmVtYXJrLnB1c2goXCJBUEkgdXNlZDogXCIgKyB0aGlzLmdldEFwaVR5cGUob2JqLmFwaSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlbWFyaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFwaVR5cGUoYXBpVHlwZTogc3RyaW5nKTogc3RyaW5ne1xyXG4gICAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgICAgICBmb3IobGV0IG8gb2YgdGhpcy5hcGlUeXBlcyl7XHJcbiAgICAgICAgICAgIGlmKG8uY29kZSA9PSBhcGlUeXBlKXtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBvLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgZ2V0UmVxdWVzdFR5cGUocmVxVHlwZTogc3RyaW5nKTogc3RyaW5ne1xyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgZm9yKGxldCBvIG9mIHRoaXMucmVxVHlwZXMpe1xyXG4gICAgICAgICAgICBpZihvLmNvZGUgPT0gcmVxVHlwZSl7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gby5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSZXFUeXBlKHZhbCl7XHJcbiAgICAgICAgdGhpcy5jcml0ZXJpYS5yZXFUeXBlID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRBcGlUeXBlKHZhbCl7XHJcbiAgICAgICAgdGhpcy5jcml0ZXJpYS5hcGkgPSB2YWw7XHJcbiAgICB9XHJcblxyXG59Il19
