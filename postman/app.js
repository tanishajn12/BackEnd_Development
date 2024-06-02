const express = require('express');
const app = express();

//middleware used otherwise data would be undefined
app.use(express.json()) //for parsing json

app.get('/', (req,res)=>{
    res.send("hi welcome to postman")
})

app.post('/', (req,res)=> {
    const data = req.body;
    console.log('data',data);
    res.send("posting on server")
})
let PORT = 8080;
app.listen(PORT, ()=> {
    console.log(`server connected at port ${PORT}`)
})

