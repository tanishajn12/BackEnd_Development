const express= require('express');
const app= express();


app.get("/r/:subreddit", (req,res) => {
    //console.log(req.params)
    let {subreddit} = req.params;
    res.send(subreddit);
});

app.get("/search",(req,res)=>{
    console.log(req.query);
    let {firstName, lastName, mentor } = req.query;
    res.send({firstName, lastName, mentor});
});


app.listen(8080, function() {
    console.log(`Server connected at port 8080`);
});