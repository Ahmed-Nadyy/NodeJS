// Synchronous
// Asynchronous

// setTimeout --> take a function , then take time that u want to run this function after this time is end
/* in fact, this is so helpful in async mode that making node js non-blocking code WHEN i  use heavy fun like
 processHeavyLoad() function.
 */

const a =10;
setTimeout(()=>(console.log(a)),1000);
console.log("done");
