var myArray = ['James', 'Jones'];
console.log('Hello world!!');
console.error('oop something went wrong'); // if we want to log out erros

console.dir({name: 'James', location: 'blackwood'}); //this will read objects in a human readable language
console.dir(myArray);

//Native Ojects
//Ojects that are provided by the JS programming language, Such as:
/**
 * String
 * Array
 * Date
 * Math
 */

//Host Objects
//Provided by the environment, such as
/**
 * Window
 * Document
 * History
 * XMLHttpRequest
 */

 //Node.js Host Objects
 /**
  * http
  * https
  * fs
  * url
  * os
  */

//blocking = languages that cue requests and processes them one at a time, which are known as blocking languages, since it blocks the handling of other requests. To get around this, developers scale more than one application, which are known as workers.

//non blocking = node on the other hand works more sufficient and carries on with other stuff while it waits for other processes to finish. When requests are sent to node.js we don't need as much system resources to complete the same task.

//need help visit node.js documentation
//stick to stable and locked in the node.js api.


//The four P's of problem Solving

/**
 * Prepare - diagnose the problem and propose a solution, go out nad look for tools that will help us with the soluton.
 * Plan - where we plan the solution, use of comments in our js file.
 * Perform - write the code from the planning phase.
 * Perfect - where we continuously improve our application.
 */