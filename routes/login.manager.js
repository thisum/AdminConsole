/**
 * Created by Thisum on 8/15/2016.
 */
var User = require('./../models/user');
var passwordHash = require('password-hash');
var tokenGenerator = require('jsonwebtoken');
var express = require('express');
var Constants = require('./constants');
var router = express.Router();

router.post('/signin', function(req, res, next){


    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            return res.status(404).json({status: Constants.RESPONSE_CODE_FAIL, message: "Error occurred while sign in"});
        }
        else if(!user){
            return res.status(404).json({status: Constants.RESPONSE_CODE_FAIL, message: "User could not be found"});
        }
        else if(!passwordHash.verify(req.body.password, user.password)){
            return res.status(404).json({status: Constants.RESPONSE_CODE_FAIL, message: "Invalid password"});
        }
        else if(!user.admin){
            return res.status(400).json({status: Constants.RESPONSE_CODE_FAIL, message: "Not Authorised"});
        }

        var token = tokenGenerator.sign({user: user}, Constants.AUTH_PRIVATE_KEY, {expiresIn: 7200});
        res.status(200).json({status: Constants.RESPONSE_CODE_SUCCESS, token: token, email: user.email, admin: user.admin});
    });

});

module.exports = router;