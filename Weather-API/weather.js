/**
 * Example of using API key in API call
Description:
Please, use your API key in each API call.

We do not process API requests without the API key.

API call:
http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
Parameters:
APPID {APIKEY} is your unique API key 
Example of API call:
api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
 */



//weather key: bb389a65d529168be0bd8385fa475f3a

//https module
const https = require('http');
const api = require('./api.json');


const id = 524901; //id for moscow


//print out temp details
//print out error messages

function printWeather(weather) {
     const message = `Current tempreture in ${weather.name} is ${weather.main.temp}F`;

     console.log(message);
}

function get(query){

    try {
        const request = https.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=${api.key}`, (response) => {

            if (response.statusCode == 200) {
                
                let body = '';
                //let status = '';
                response.on('data', (chunk) => {
                    //console.dir(data.toString());

                    body += chunk;
                    //status = chunk.cod;
                    //console.log(status);
                });
        
        
                response.on('end', () => {
                    //console.log(body);
                    
                    //parse data
                    const weather = body; //JSON.parse(body);
                    //print the data
                    //console.log(weather);
                   printWeather(weather);

                });

            } else {
                console.error(response.error);
            }

        
        });
    } catch (e) {
    
        console.error(e.message);
    }


}


module.exports.get = get;

//TODO Handle any errors 