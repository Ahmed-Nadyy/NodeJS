// Private variables and functions (not exposed)
let privateVar = "This is private";
function privateMethod() {
  console.log("Private method");
}

// Public API
const publicVar = "This is public";
function publicMethod() {
  console.log("Public method");
  privateMethod(); // Accessing private method
}

// Exposing the public API
module.exports = {
  publicVar,
  publicMethod,
  
};
