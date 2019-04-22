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
const id = 524901; //id for moscow
try {
    const request = https.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=bb389a65d529168be0bd8385fa475f3a`, (response) => {


        response.on('data', (data) => {
            console.dir(data.toString());
        });


    });
} catch (e) {

    console.error(e.message);
}