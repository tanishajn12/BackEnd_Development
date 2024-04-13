const express= require('express');
const { truncate } = require('fs');
const app = express();
const path = require("path");


let commentsArray =[ 
    {
    id: 0,
    author: "Tanisha", 
    comments: "web dev pdh lo"},
    
    {
    id: 1,
    author: "Shruti", 
    comments: "nice project"
    },

    {
    id: 2,
    author: "Naman", 
    comments: "collg jaa rha hu"
    },

];


//ejs btana pdega
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, 'public')))


//body parsing middlewares
//app.ise(express.json()) //for parsing application/json
app.use(express.urlencoded({extended:true}));  //for parsing application/x-www-form-urlencoded


//root route
app.get("/", (req,res) => {
    res.send("lets start the work : root route hit");

})

//task 1 -> get all comments
app.get("/comments", (req,res)=> {
    res.render("index",{commentsArray});
});

//task 2 -> display form
app.get("/comment/new", (req,res)=> {
    res.render("new");
});

//task 3 -> actually add in DB/arrays
app.post("/comments",(req,res)=>{
    // console.log(req.body,"req.body");
    let {author, comments} = req.body;
    comments.push({id: commentsArray.length, author, comments});


    // res.send(req.body);
    res.redirect
})


//task 4 -> show information about one blog
app.get("/comments/:idd", (req,res)=>{
    // console.log(req.params);
    // res.send(res.params);
    let {idd} = req.params;
    let foundComment = commentsArray.find(
        // (everyComment) => parseInt(idd)===everyComment.id
        (everyComment) => idd == everyComment.id
    );

    console.log(foundComment);
    res.send(foundComment);
})

//task 5 -> show form to edit the comment

app.listen(8080,function() {
    console.log("server connected at port 8080")
});







