const fs =require('fs');

const readingData=(err,data)=>{
if(err){console.log(err);}
else {
    console.log(data);
}
};


fs.readFile('data.txt',{encoding: 'utf8'},readingData);


console.log("async");
const data2= "hhhhh";
const writeData=(err)=>{
    if(err){console.log(err);}
    else {
        console.log("succ");
    }
};
fs.writeFile('dataAsync.txt', data2, { encoding: 'utf-8' }, writeData);
