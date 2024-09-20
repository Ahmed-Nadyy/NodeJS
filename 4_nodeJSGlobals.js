// console.log(); --> available global class 

/*********************************/  //notGlobal

/**
 fs (File System module)
fs provides APIs for interacting with the file system (reading, writing, deleting files, etc.).

const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

 */

/*********************************/ //notGlobal

/**
 os (Operating System module)
The os module provides operating system-related utilities, like information about CPU, memory, and uptime.

const os = require('os');
console.log(os.cpus());  // Information about CPUs
console.log(os.totalmem());  // Total memory in bytes

 */

/*********************************/ //notGlobal

/**
 http and https (from http/https module)
These modules provide functionality to create HTTP and HTTPS servers, and to make HTTP/HTTPS requests.

const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

 */
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

/*********************************/ //notGlobal

/**
 crypto (from crypto module)
 The crypto module provides cryptographic functionalities for encryption, hashing, and signing data.
 const crypto = require('crypto');
 const hash = crypto.createHash('sha256');
 hash.update('password123');
 console.log(hash.digest('hex'));  // Prints hashed output

 */
 const crypto = require('crypto');
 const hash = crypto.createHash('sha256');
 hash.update('password123');
 console.log(hash.digest('bin'));  // Prints hashed output
 

/*********************************/ //notGlobal

/**
const querystring = require('querystring');
const parsed = querystring.parse('name=John&age=30');
console.log(parsed.name);  // 'John'

 */
const querystring = require('querystring');
const parsed = querystring.parse('name=John&age=30');
console.log(parsed.name);  // 'John'


/*********************************/

// _dirname --> if I print it it gives me the path of current file

/*********************************/

// _filename --> if I print it gives me the file name

/*********************************/

/*
process --->> 
An object providing information about the current Node.js process.
It includes properties like process.argv, process.env, and methods like process.exit().
*/
/*
ex --> 
console.log(process.env.NODE_ENV); // Prints environment variable
process.argv: Use this to access command-line arguments passed to your Node.js script.
process.env: Use this to access environment variables, often used for configuration.
process.exit(): Use this to terminate the process manually with an exit code, indicating success (0) or failure (non-zero code).
*/

/*********************************/

/*
setTimeout()
It schedules a function to be executed after a specified delay (in milliseconds).
*/

/*********************************/
/*
clearTimeout()
Cancels a setTimeout() operation.
const timer = setTimeout(() => console.log('Will not run'), 5000);
clearTimeout(timer);
*/

/*********************************/

/*
setInterval()
This schedules a function to be repeatedly executed at regular intervals.

setInterval(() => {
  console.log('Repeats every 3 seconds');
}, 3000);
*/

/*********************************/

/*
clearInterval()
Cancels a setInterval() operation.
const interval = setInterval(() => console.log('Running...'), 1000);
clearInterval(interval); // Stops the interval
*/

/*********************************/

/* 
Buffer
The Buffer class is used for handling binary data directly in Node.js.
const buffer = Buffer.from('Hello World');
console.log(buffer.toString());

*/

/*********************************/ //notGlobal

/*
URL (from url module)
The URL class is used to parse and manipulate URLs.
const { URL } = require('url');
const myURL = new URL('https://example.com/path?name=John&age=30');
console.log(myURL.hostname);  // 'example.com'
console.log(myURL.searchParams.get('name'));  // 'John'

*/

/*********************************/

/**
 global.myVar = 'This is a global variable';
console.log(myVar);  // 'This is a global variable'

 */

/*********************************/

/**
 setImmediate()
It schedules a function to be executed immediately after I/O events, but before setTimeout and setInterval.

setImmediate(() => {
  console.log('Executed immediately after I/O events');
});

 */

/*********************************/

/**
 clearImmediate()
 Cancels a setImmediate() operation.
 const immediate = setImmediate(() => console.log('Will not run'));
 clearImmediate(immediate);

 */

/*********************************/

/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************//*********************************/

