const express= require('express');
const app = express();
const path = require("path");

// app.set("views" , __dirname , + '/views');
app.set("views" , path.join(__dirname , 'views'));  //better way
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req,res)=> {
    // res.send("hello all");
    let rn = Math.floor(Math.random()*24+5)
    res.render("index",{rn}); 
    // rn will be sent as object

});

let todos=["shopping" , "study at 10"];

app.get("/product", (req,res)=> {
    res.render("product",{todos});
});






app.listen(8080,function() {
    console.log("server connected at port 8080")
});

















