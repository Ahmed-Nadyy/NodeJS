const myModule = require('./6_1_module1');

console.log(myModule.publicVar);   // Output: "This is public"
myModule.publicMethod();           // Output: "Public method"
                                   // Output: "Private method"

