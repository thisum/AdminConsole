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
        this.busy = this._userInfoService.loadInitData().then(function (results) {
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
        this.busy = this._userInfoService.searchRequestInfo(this.criteria).then(function (data) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9yZXF1ZXN0L3JlcXVlc3QuaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHFDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLDRCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBQ2xELDBDQUF3QyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzlFLDRCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBUWxEO0lBMkJJLDhCQUFvQixnQkFBcUM7UUFBckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQXhCekQsTUFBQyxHQUFXLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFHLElBQUkscURBQXlCLEVBQUUsQ0FBQztRQUMzQyxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBRztZQUNsQixHQUFHLEVBQUcsU0FBUztZQUNmLEtBQUssRUFBRyxPQUFPO1lBQ2YsSUFBSSxFQUFHLFNBQVM7WUFDaEIsSUFBSSxFQUFFLFNBQVM7WUFDZixNQUFNLEVBQUUsU0FBUztZQUNqQixNQUFNLEVBQUUsU0FBUztTQUNwQixDQUFDO1FBRU0sc0JBQWlCLEdBQWU7WUFDcEMsbUJBQW1CO1lBQ25CLFVBQVUsRUFBRSxhQUFhO1lBQ3pCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsTUFBTTtZQUNiLG9CQUFvQixFQUFFLE1BQU07U0FDL0IsQ0FBQztJQUV5RCxDQUFDO0lBRTVELHVDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLGdC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QUM7SUFFTSx5Q0FBVSxHQUFqQixVQUFrQixHQUFHO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBeElMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxvQ0FBb0M7U0FDcEQsQ0FBQzs7NEJBQUE7SUFzSUYsMkJBQUM7QUFBRCxDQXJJQSxBQXFJQyxJQUFBO0FBcklZLDRCQUFvQix1QkFxSWhDLENBQUEiLCJmaWxlIjoiYXNzZXRzL2FwcC9kYXNoYm9hcmQvcmVxdWVzdC9yZXF1ZXN0LmluZm8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdGhpc3VtIG9uIDIvMTMvMjAxNy5cclxuICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmVxdWVzdHNJbmZvU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3JlcXVlc3QuaW5mby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TmFtZUNvZGVPYmp9IGZyb20gXCIuLi8uLi9vYmovTmFtZUNvZGVPYmpcIjtcclxuaW1wb3J0IHtSZXF1ZXN0SW5mb1NlYXJjaENyaXRlcmlhfSBmcm9tIFwiLi4vLi4vb2JqL1JlcXVlc3RJbmZvU2VhcmNoQ3JpdGVyaWFcIjtcclxuaW1wb3J0IHtSZXF1ZXN0SW5mb30gZnJvbSBcIi4uLy4uL29iai9SZXF1ZXN0SW5mb1wiO1xyXG5pbXBvcnQge0lNeU9wdGlvbnMsIElNeURhdGVNb2RlbH0gZnJvbSAnbXlkYXRlcGlja2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZnItcmVxdWVzdGRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2h0bWwvcmVxdWVzdC5kZXRhaWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0SW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgYnVzeTogUHJvbWlzZTxhbnk+O1xyXG4gICAgdDogbnVtYmVyID0gMTAwMCo2MCo2MCoyNCAtIDE7XHJcbiAgICByZXFUeXBlczogTmFtZUNvZGVPYmpbXSA9IFtdO1xyXG4gICAgYXBpVHlwZXM6IE5hbWVDb2RlT2JqW10gPSBbXTtcclxuICAgIGNyaXRlcmlhID0gbmV3IFJlcXVlc3RJbmZvU2VhcmNoQ3JpdGVyaWEoKTtcclxuICAgIHJlcXVlc3RJbmZvOiBSZXF1ZXN0SW5mb1tdID0gW107XHJcbiAgICBwcml2YXRlIHRpbWVPcHRpb25zID0ge1xyXG4gICAgICAgIGRheSA6ICdudW1lcmljJyxcclxuICAgICAgICBtb250aCA6ICdzaG9ydCcsXHJcbiAgICAgICAgeWVhciA6ICdudW1lcmljJyxcclxuICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXHJcbiAgICAgICAgc2Vjb25kOiAnbnVtZXJpYydcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRlUGlja2VyT3B0aW9uczogSU15T3B0aW9ucyA9IHtcclxuICAgICAgICAvLyBvdGhlciBvcHRpb25zLi4uXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogJ3l5eXktbW1tLWRkJyxcclxuICAgICAgICBtYXJrQ3VycmVudERheTogdHJ1ZSxcclxuICAgICAgICBpbmxpbmU6IGZhbHNlLFxyXG4gICAgICAgIGhlaWdodDogJzIycHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgc2VsZWN0aW9uVHh0Rm9udFNpemU6ICcxMnB4J1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VySW5mb1NlcnZpY2U6IFJlcXVlc3RzSW5mb1NlcnZpY2Upe31cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgICAgICB0aGlzLiBidXN5ID0gdGhpcy5fdXNlckluZm9TZXJ2aWNlLmxvYWRJbml0RGF0YSgpLnRoZW4oXHJcbiAgICAgICAgICAgIHJlc3VsdHMgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXEgPSByZXN1bHRzLnJlcTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxVHlwZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TmFtZUNvZGVQYWlycyhyZXEsIHRoaXMucmVxVHlwZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwaSA9IHJlc3VsdHMuYXBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlUeXBlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXROYW1lQ29kZVBhaXJzKGFwaSwgdGhpcy5hcGlUeXBlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TmFtZUNvZGVQYWlycyhvYmo6IGFueSwgbGlzdDogTmFtZUNvZGVPYmpbXSl7XHJcblxyXG4gICAgICAgIGxpc3QucHVzaChuZXcgTmFtZUNvZGVPYmooXCItLVNlbGVjdC0tXCIsIFwiXCIpKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxvYmoubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgc2NoZW1hID0gbmV3IE5hbWVDb2RlT2JqKG9ialtpXS5uYW1lLCBvYmpbaV0uY29kZSk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChzY2hlbWEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRhdGVDaGFuZ2VkRnJvbShldmVudDogSU15RGF0ZU1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5jcml0ZXJpYS5mcm9tRGF0ZSA9IGV2ZW50LmpzZGF0ZSA/IGV2ZW50LmpzZGF0ZS5nZXRUaW1lKCkgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRhdGVDaGFuZ2VkVG8oZXZlbnQ6IElNeURhdGVNb2RlbCkge1xyXG5cclxuICAgICAgICB0aGlzLmNyaXRlcmlhLnRvRGF0ZSA9IGV2ZW50LmpzZGF0ZSA/IChldmVudC5qc2RhdGUuZ2V0VGltZSgpICsgdGhpcy50KTogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2goKXtcclxuICAgICAgICB0aGlzLiBidXN5ID0gdGhpcy5fdXNlckluZm9TZXJ2aWNlLnNlYXJjaFJlcXVlc3RJbmZvKHRoaXMuY3JpdGVyaWEpLnRoZW4oXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IFJlcXVlc3RJbmZvW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXFUaW1lID0gbmV3IERhdGUoZGF0YVtpXS5yZXF1ZXN0VGltZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLUdCJywgdGhpcy50aW1lT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc1RpbWUgPSAoZGF0YVtpXS5yZXNwb25zZVRpbWUgPT09IC0xKSA/IFwiLVwiIDogbmV3IERhdGUoZGF0YVtpXS5yZXNwb25zZVRpbWUpLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHRoaXMudGltZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXFUeXBlID0gdGhpcy5nZXRSZXF1ZXN0VHlwZShkYXRhW2ldLnJlcXVlc3RUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRhdGFbaV0udXNlcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0SW5mbyh1c2VyLCBkYXRhW2ldLmltYWdlLCByZXFUeXBlLCBkYXRhW2ldLnJlc3BvbnNlLCByZXFUaW1lLCByZXNUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Ll9zZXRSZW1hcmtzKHRoaXMuY3JlYXRlUmVtYXJrcyhkYXRhW2ldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW5mbyA9IG9ianM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVtYXJrcyhvYmo6IGFueSk6IHN0cmluZ1tde1xyXG4gICAgICAgIGxldCByZW1hcms6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgcmVtYXJrLnB1c2goXCJSZXNwb25zZSBzdGF0dXM6IFwiICsgb2JqLnJlc3BvbnNlU3RhdHVzKTtcclxuICAgICAgICBpZiggb2JqLmFwaSA9PSBudWxsIHx8IG9iai5hcGkubGVuZ3RoID09IDAgKXtcclxuICAgICAgICAgICAgcmVtYXJrLnB1c2goXCJDUyBRdWVzdGlvbjogXCIgKyBvYmoucXVlc3Rpb24pO1xyXG4gICAgICAgICAgICBpZighb2JqLnJlc3BvbmRlZCl7XHJcbiAgICAgICAgICAgICAgICByZW1hcmsucHVzaChcIldhaXRpbmcgZm9yIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVtYXJrLnB1c2goXCJSZXNwb25kZWQgQnk6IFwiICsgb2JqLnJlc3BvbmRlZEJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZW1hcmsucHVzaChcIkFQSSB1c2VkOiBcIiArIHRoaXMuZ2V0QXBpVHlwZShvYmouYXBpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVtYXJrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QXBpVHlwZShhcGlUeXBlOiBzdHJpbmcpOiBzdHJpbmd7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGZvcihsZXQgbyBvZiB0aGlzLmFwaVR5cGVzKXtcclxuICAgICAgICAgICAgaWYoby5jb2RlID09IGFwaVR5cGUpe1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IG8ubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBnZXRSZXF1ZXN0VHlwZShyZXFUeXBlOiBzdHJpbmcpOiBzdHJpbmd7XHJcblxyXG4gICAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgICAgICBmb3IobGV0IG8gb2YgdGhpcy5yZXFUeXBlcyl7XHJcbiAgICAgICAgICAgIGlmKG8uY29kZSA9PSByZXFUeXBlKXtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBvLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJlcVR5cGUodmFsKXtcclxuICAgICAgICB0aGlzLmNyaXRlcmlhLnJlcVR5cGUgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEFwaVR5cGUodmFsKXtcclxuICAgICAgICB0aGlzLmNyaXRlcmlhLmFwaSA9IHZhbDtcclxuICAgIH1cclxuXHJcbn0iXX0=
