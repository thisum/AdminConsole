/**
 * Created by Thisum on 6/27/2016.
 */
var fs = require('fs');
var mongoose = require('mongoose');

var DatabaseConnector = function(){
}

DatabaseConnector.connectDB = function(conf)
{
    try{
        mongoose.connect(conf.db_path);
        var db = mongoose.connection;
        db.on('error', console.error);
        console.log('successfully connected to database');
    }
    catch(err){
        console.error('Error while connecting to the DB ' + err.message);
    }
}

module.exports = DatabaseConnector;
