/**
 * Created by Thisum on 7/15/2016.
 */

var fs = require('fs');

var ConfigHandler = function() {
    
}

ConfigHandler.readConfigurations = function() {
    try{
        ConfigHandler.configuration = JSON.parse(fs.readFileSync('config.json'));
        console.log(ConfigHandler.configuration.path);
    }
    catch(err){
        console.error('Error reading configurations: ' + err.message);
    }
}

ConfigHandler.getConfigurations = function() {
    return ConfigHandler.configuration;
}

module.exports = ConfigHandler;

