const fs = require('fs'); //gives an object
// console.log(fs);

let data =" hi my name is tanisha am doing web development"

//create 
// fs.writeFile('abc.txt',data, {} , function(){})

// fs.writeFile("abc.txt" , data ,
//     {
//         encoding: "utf-8",
//         flag:"w",
//     },

//     function(err) {
//         if(err) {
//             throw err;
//         }

//         console.log("file written successfully")
//     }
// );

// read -> way 1
// fs.readFile("abc.txt",{
//     encoding : "utf-8" //default value of encoding -> null
//     },
//     function(err,data){
//         if(err) {
//             throw err;
//         }

//         console.log(data,"tan");

//     }
// );

// fs.readFile("abc.txt",{
//     // encoding : "utf-8" //default value of encoding -> null
//     },
//     function(err,data){
//         if(err) {
//             throw err;
//         }

//         console.log(data.toString(),"tan");

//     }
// );

//update 
let appendData= "data structures and algo";


fs.appendFile("abc.txt",appendData, {}, 
    function(err){
        if (err) {
            throw err;
        }

        console.log("data appended");
    }
);


delete

fs.unlink("abc.txt", 
    function(err){
        if (err) {
            throw err;
        }

        console.log("data unlinked");
    }
);






