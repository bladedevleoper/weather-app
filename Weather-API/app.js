const weather = require('./weather.js');

//Join multiple valuies passes as arguments and replace all spaces with underscores
const query = process.argv.slice(2).join("_").replace(',', "_");


//query: 90201
//query: Cleveland_OH
//query: London_England


weather.get(query);