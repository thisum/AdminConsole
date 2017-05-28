/**
 * Created by Thisum on 8/16/2016.
 */

var express = require('express');
var router = express.Router();
var User = require('./../models/user');
var tokenGenerator = require('jsonwebtoken');
var Constants = require('./constants');


router.use('/', function(req, res, next) {

    tokenGenerator.verify(req.header('auth-token'), Constants.AUTH_PRIVATE_KEY, function(err, decoded) {
        if (err) {
            return res.status(401).json({status: Constants.RESPONSE_CODE_FAIL, message: "Authentication failed"});
        }
        else if(!decoded.user){
            return res.status(401).json({status: Constants.RESPONSE_CODE_FAIL, message: "No user found"});
        }

        req.body.user = decoded.user;
        next();
    });
});

router.get('/usagesummary', function(req, res, next) {

    try{
        if(!Boolean(req.body.user.admin)){

            PurchasedInfo.aggregate([
                {$match: {email: req.body.user.email}},
                {$group : {_id : {email: "$email", reqType:"$reqType"},totalAmt: { $sum: "$purchasedAmt" }}},
                {$lookup:{from: "users",localField: "_id.email",foreignField: "email",as: "details"}},
                {$match:{details: {$ne: []}}} ], function(err, purchasedInfo){
                loadPurchasedRecords(err, purchasedInfo, req, res, next);
            })
        }
        else{
            PurchasedInfo.aggregate([{$group : {_id : {email: "$email", reqType:"$reqType"},totalAmt: { $sum: "$purchasedAmt" }}},
                {$lookup:{from: "users",localField: "_id.email",foreignField: "email",as: "details"}},
                {$match:{details: {$ne: []}}}], function(err, purchasedInfo){
                loadPurchasedRecords(err, purchasedInfo, req, res, next);
            })
        }
    }
    catch(err){
        res.json({status: Constants.RESPONSE_CODE_FAIL, message: "err"});
    }

});

router.get('/usagedetail', function(req, res, next) {

    var filter = {};

    if(!Boolean(req.body.user.admin)){
        filter.user = req.body.user;
    }

    TransInformation.find(filter).populate('user', 'email').exec(function(err, results) {
        if(err){
            res.json({status: Constants.RESPONSE_CODE_FAIL, message: err});
        }
        else if(!results){
            res.json({status: Constants.RESPONSE_CODE_FAIL, message: "No results found"});
        }
        else{
            res.json({status: Constants.RESPONSE_CODE_SUCCESS, result: results});
        }
    });
});


function loadPurchasedRecords(err, purchasedInfo, req, res, next){

    if(err){
        res.json({status: Constants.RESPONSE_CODE_FAIL, message: "Cannot find results"});
    }
    else if(!purchasedInfo){
        res.json({status: Constants.RESPONSE_CODE_FAIL, message: "No results found"});
    }
    else{

        try{
            var results = processRecords(purchasedInfo);
            res.json({status: Constants.RESPONSE_CODE_SUCCESS, result: results});
        }
        catch(err){
            res.json({status: Constants.RESPONSE_CODE_FAIL, message: err});
        }
    }
}

function processRecords(purchasedInfo) {

    var results = [];

    purchasedInfo.forEach(function(purchInfo, idx) {

        if(purchInfo.details && purchInfo.details[0].accounting){
            var remainingAmt = 0;
            if(Array.isArray(purchInfo.details[0].accounting)){
                remainingAmt = purchInfo.details[0].accounting[0][purchInfo._id.reqType];
            }
            else{
                remainingAmt = purchInfo.details[0].accounting[purchInfo._id.reqType];
            }

            var record = {email: purchInfo._id.email, reqType: purchInfo._id.reqType, purchased: purchInfo.totalAmt, remaining: remainingAmt};
            results.push(record);
        }
    });

    return results;
}


module.exports = router;
