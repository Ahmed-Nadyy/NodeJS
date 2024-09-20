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

console.log(process.argv);