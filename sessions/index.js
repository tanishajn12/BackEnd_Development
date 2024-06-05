const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true } //http -> https
}))

app.get('/', (req,res)=>{
    res.send('welcome to sessions');
})

app.get('/viewcount', (req,res)=>{
    if(req.session.count) {
        req.session.count +=1;
    }
    else{
        req.session.count = 1;
    }

    res.send(`count: ${req.session.count }`);
})

app.get('/setname', (req,res)=>{
    req.session.username = 'tanisha';
    res.send('session added');
})

app.get('/greet', (req,res)=>{
    let {username = 'anonymous'} = req.session;
    res.send(`hi from ${username}`);
})
app.listen(5050, ()=>{
    console.log("Server connected at 5050");
})