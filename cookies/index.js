const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('hiiamyoursecretteacher')); //middleware 

app.get('/' , (req,res)=>{
    // console.log(req.cookies); //signed cookies are not displayed
    // res.send(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);


})

//cookies server bhejta -> router -> server send krwaye cookies to client
//server kya send krta hai -> response
app.get('/setcookies',(req,res)=>{
    res.cookie('mode','dark');
    res.cookie('location', 'delhi');
    res.cookie('username','tanisha');
    res.cookie('age',20);
    res.cookie('pass','webdevelopment cookies', {signed:true}); //signed cookies -> secure

    // res.cookie({'favColor' : 'red', 'phone' : 'samsung'}) 
    //never do in object format -> not recommended


    res.send("maine cookies bhj di")
})

app.get('/getcookies',(req,res)=>{
    // console.log(req.cookies); //get
    let {username, age} = req.cookies;

    res.send(`hi i am ${username} and my age is ${age}`);

})

app.listen(5050, ()=>{
    console.log("Server connected at 5050");
})