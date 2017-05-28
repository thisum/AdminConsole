/**
 * Created by thisum on 1/18/2017.
 */
var express = require('express');
var router = express.Router();
var tokenGenerator = require('jsonwebtoken');
var frRequest = require('../models/frrequest');
var Device = require('../models/device');
var ConfHandler = require('./../util/confighander');
var Constants = require('./constants');

router.use('/', function (req, res, next) {

    tokenGenerator.verify(req.header('auth-token'), Constants.AUTH_PRIVATE_KEY, function (err, decoded) {
        if (err) {
            return res.status(401).json({status: Constants.RESPONSE_CODE_FAIL, message: "Authentication failed"});
        }
        else if (!decoded.user) {
            return res.status(401).json({status: Constants.RESPONSE_CODE_FAIL, message: "No user found"});
        }

        req.body.user = decoded.user;
        next();
    });
});


router.get('/initdata', function (req, res, next) {

    try{
        var config = ConfHandler.getConfigurations();
        var val = {
            req: config.req_types,
            api: config.api_types
        }
        return res.status(200).json({status: Constants.RESPONSE_CODE_SUCCESS, result: val});
    }
    catch(err){
        res.status(417).json({status: Constants.RESPONSE_CODE_FAIL, message: err});
    }
});


router.get('/search', function (req, res, next) {

    var criteria = createSearchCriteria(req.query);
    var config = ConfHandler.getConfigurations();
    if(config.operation_mode == 'old'){

        frRequest.find(function(err, docs){
            if (err) {
                return res.status(500).json({status: Constants.RESPONSE_CODE_FAIL, message: err});
            }
            else if (!docs) {
                return res.status(500).json({status: Constants.RESPONSE_CODE_FAIL, message: "No Requests Found"});
            }
            else {
                return res.status(200).json({status: Constants.RESPONSE_CODE_SUCCESS, result: docs});
            }
        });

    }
    else{

        frRequest.find(criteria)
            .populate('deviceId')
            .sort({requestTime : -1})
            .exec(function (err, docs) {
                if (err) {
                    return res.status(500).json({status: Constants.RESPONSE_CODE_FAIL, message: err});
                }
                else if (!docs) {
                    return res.status(500).json({status: Constants.RESPONSE_CODE_FAIL, message: "No Requests Found"});
                }
                else {
                    return res.status(200).json({status: Constants.RESPONSE_CODE_SUCCESS, result: docs});
                }
            });

    }

});


function createSearchCriteria(param){
    var criteria = {};
    if( isNotNull(param.api)){
        criteria.api = param.api;
    }
    if( isNotNull(param.reqType)){
        criteria.requestType = param.reqType;
    }
    if( isNotNull(param.reqUser)){
        var regexp = new RegExp("^" + param.reqUser)
        criteria.user = regexp;
    }
    if( isNotNull(param.fromDate) && isNotNull(param.toDate)){
        var fromDate = parseInt(param.fromDate);
        var toDate = parseInt(param.toDate);
        if( fromDate > 0 && toDate > 0 && toDate > fromDate ){
            criteria.requestTime  = {$gte: fromDate, $lte: toDate};
        }
    }

    return criteria;
}

function isNotNull(str) {
    return (str && str!=="undefined" && str.length > 0);
}

module.exports = router;