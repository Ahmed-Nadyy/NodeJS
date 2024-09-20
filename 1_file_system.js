// console.log("Hello node.JS");
// REPL
// Read .... Evaluate .... Print .... loop  
// modules 1- file system 
   // import : using keyword --> require
const fs=require('fs'); 
   // Reading txt file 
const data = fs.readFileSync('data.txt',{encoding: 'utf8'}); 
//  console.log(data);
   // write txt file 
fs.writeFileSync('data2.txt',data,{encoding: 'utf8'});
const data2 = fs.readFileSync('data.txt',{encoding: 'utf8'}); 
//  console.log(data2);