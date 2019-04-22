//The four P's of problem Solving

/**
 * Prepare - diagnose the problem and propose a solution, go out nad look for tools that will help us with the soluton.
 * Plan - where we plan the solution, use of comments in our js file.
 * Perform - write the code from the planning phase.
 * Perfect - where we continuously improve our application.
 */

//API - Application Programming Interface

//Problem: We need a simple way to look at a user's badge count and Javascript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out.

//to use https in our code we will need to get it using the require function to call https module
const https = require('https');
//to use STATUS_CODE property within http module, must required http:

const http = require('http');
//const userName = 'jamesjones21';


//When it comes to handling errors, we can create a simple function that handles these errors.

//we may also have statusCode errors which are received from the server.
//- we may have a 200 - ok
// - 500 - internal server error, which means that there is something wrong with the code on the server
// - 301 - moved permanently.
 // 404 - http status code of not found 

//Print Error Messages
function printError(error){
  console.log(error.message);
}


//print message to console
function printMessage (userName, badgeCount, points) {

  const message = `${userName} has ${badgeCount} total badge(s) and ${points} points in Javascript`;

    console.log(message);

}


function get(userName){
    
  /*
    *error handling 1.0
    If there is an incorrect web domain such as the https / http protocol is missing from the url then we would need to add a try catch block 

    see error handling 1.1 where the catch block
  */

    try {
        //1. Connect to the API URL (https://teamtreehouse.com/jamesjones21.json)
        
        const request = https.get(`https://teamtreehouse.com/${userName}.json`, (response) => {

          if (response.statusCode === 200 ) {
          
         
          //console.log(response.statusCode);
          //2. Read the data
          //this is a data event
          //to format the body of the data that comes in
            let body = '';
            response.on('data', (data) => {
              
                //this comes back as buffer type, it is a common data type in node, from the network and file events
                //to convert the data from the buffer to string, then call the toString() method on the data
                body += data.toString();
      
            });

            //this is called to end the event once the data has finished being streamed
            response.on('end', () => {
                
                  //try catch block around the JSON.parse, if the username cannot be found, as JSON starts with a curly brace, and if not found is returned then JSON.parse will not work as it is not a JSON object.
                try {
                  //3. Parse the data, as it's format is JSON
                  const profile = JSON.parse(body);
                  //  console.dir(profile);

                  
                    //4. Print out the data.
                    printMessage(userName, profile.badges.length, profile.points.JavaScript);
                    //console.dir(profile);

                  } catch (error) {
                    printError(error);
                }
                
            });

          //if status code isn't 200
          } else {

            //the https module has a status code property that reads the server code error in human readable format
            const message = `There was an error getting the profile for ${userName} (${http.STATUS_CODES[response.statusCode]})`;
            const statusCodeError = new Error(message);
            //print error message
            printError(statusCodeError);
          }
        });


        //on means on(event), this will mean that the on method will listen out for an error event, which we then pass an error object into the callback
        //all error object have a message property
        request.on('error', (error) => {
          console.error(`Problem with request: ${error.message}`);
        });

    } catch (error) {
      //error handling 1.1
      //this code will then catch the error if the domain is not correct
      printError(error);
    }

    
}


/**
 * If we want users to access our function get() then we must use the module keyword
 */

 //module.exports.get = <name of function without parenthesis>, but on return the function we pointed at is named get.
 module.exports.get = get;