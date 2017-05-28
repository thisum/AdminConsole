/**
 * Created by thisum on 2/13/2017.
 */
"use strict";
var RequestInfo = (function () {
    function RequestInfo(user, image, reqType, response, reqTime, resTime) {
        this.user = user;
        this.image = image;
        this.reqType = reqType;
        this.response = response;
        this.reqTime = reqTime;
        this.resTime = resTime;
        this._remarks = [];
    }
    RequestInfo.prototype._getRemarks = function () {
        return this._remarks;
    };
    RequestInfo.prototype._setRemarks = function (remarks) {
        this._remarks = remarks;
    };
    return RequestInfo;
}());
exports.RequestInfo = RequestInfo;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iai9SZXF1ZXN0SW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtJQUlJLHFCQUNXLElBQVksRUFDWixLQUFhLEVBQ2IsT0FBZSxFQUNmLFFBQWdCLEVBQ2hCLE9BQWUsRUFDZixPQUFlO1FBTGYsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVJsQixhQUFRLEdBQWEsRUFBRSxDQUFDO0lBUzlCLENBQUM7SUFFSSxpQ0FBVyxHQUFsQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxpQ0FBVyxHQUFsQixVQUFtQixPQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLG1CQUFXLGNBb0J2QixDQUFBIiwiZmlsZSI6ImFzc2V0cy9hcHAvb2JqL1JlcXVlc3RJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdGhpc3VtIG9uIDIvMTMvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWVzdEluZm97XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVtYXJrczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlcjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpbWFnZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZXFUeXBlOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlc3BvbnNlOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlcVRpbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVzVGltZTogc3RyaW5nXHJcbiAgICApe31cclxuXHJcbiAgICBwdWJsaWMgX2dldFJlbWFya3MoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW1hcmtzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfc2V0UmVtYXJrcyhyZW1hcmtzOiBzdHJpbmdbXSl7XHJcbiAgICAgICAgdGhpcy5fcmVtYXJrcyA9IHJlbWFya3M7XHJcbiAgICB9XHJcbn0iXX0=
