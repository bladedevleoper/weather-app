//./ will mean we want a file in the current directory


//const path = require('path');
//console.log(path);
const profile = require( "./profile.js");

//which ever one has finished first gets displayed and then the others follow once their are finished, this is non-blocking doing it's job

//console.log(process.argv.slice);
//const users = ['jamesjones21', 'kylecuthbert', 'alenaholligan'];
const users = process.argv.slice(2);

//becuase of one parameter we can have all the file on one line
//or we can just let the getProfile method within the forEach function due to the getProfile only receiving one parameter
users.forEach(profile.get);

//if we wanted to pass parameters into the terminal after declaring node <filename> parameters
//just like a global object in js is window, in node there is a global object named process.



