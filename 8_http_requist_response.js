// To handle HTTP requests and responses in Node.js, you typically use the built-in http module.
// 1. Using the http module
// The HTTP request message consists of a message header and an optional message body separated by a blank line

//#1 import http module
const http = require('http');

const todo = {
    id:1,
    title: "this is the iiii",
    status: " pending",

}

//#2 define requistListener
// res object resposibe for any data that will be shown to the client 
const requistListener = (req, res) =>{
    // res.statusCode = 201; // this is the same of the fun writeHeader
    //res.setHeader('Content-Type', 'application/json'); // in case of contetn is string 
    res.setHeader('Content-Type', 'text/html'); // in case of contetn is html element 
    res.writeHeader(200);
    console.log(req.method); // it gives me the method that the client side is uesing
    //res.write(JSON.stringify(todo));
    res.write("<h1>Hello World!</h1>");
    res.end();
}

//#3 register requistListener to my server
const server = http.createServer(requistListener);

//#4 listen to client request
server.listen(3000,"localhost", ()=>{
     console.log("server is up and running on http://localHost:3000");
});





// Using Express (Recommended for More Complex Applications)