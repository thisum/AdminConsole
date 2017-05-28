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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iai9SZXF1ZXN0SW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtJQUlJLHFCQUNXLElBQVksRUFDWixLQUFhLEVBQ2IsT0FBZSxFQUNmLFFBQWdCLEVBQ2hCLE9BQWUsRUFDZixPQUFlO1FBTGYsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVJsQixhQUFRLEdBQWEsRUFBRSxDQUFDO0lBUzlCLENBQUM7SUFFSSxpQ0FBVyxHQUFsQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxpQ0FBVyxHQUFsQixVQUFtQixPQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLG1CQUFXLGNBb0J2QixDQUFBIiwiZmlsZSI6Im9iai9SZXF1ZXN0SW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRoaXN1bSBvbiAyLzEzLzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RJbmZve1xyXG5cclxuICAgIHByaXZhdGUgX3JlbWFya3M6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXI6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaW1hZ2U6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVxVHlwZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZXNwb25zZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZXFUaW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlc1RpbWU6IHN0cmluZ1xyXG4gICAgKXt9XHJcblxyXG4gICAgcHVibGljIF9nZXRSZW1hcmtzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVtYXJrcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX3NldFJlbWFya3MocmVtYXJrczogc3RyaW5nW10pe1xyXG4gICAgICAgIHRoaXMuX3JlbWFya3MgPSByZW1hcmtzO1xyXG4gICAgfVxyXG59Il19
