const express=  require("express"); //function
const app = express(); //object
const path = require('path');
const methodOverride = require('method-override') //for put/patch/delete methods

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views')); //templates
app.use(express.static(path.join(__dirname, "public"))); //static files

//body parsing middlewares
// app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for-form-urlencoded
app.use(methodOverride('_method')) //method overridding

//TAKS 1 -> show all the comment in the db/array
let comments = [//array of objects
    {
        id:0,
        username : "Rohit",
        comment : "Amazing job, keep it up!"
    },
    {
        id:1,
        username : "Tanisha",
        comment : "Really interesting read."

    },
    
    {
        id:2,
        username : "Akshat",
        comment : "This made my day!"
    },
    {
        id:3,
        username : "Somya",
        comment : "Incredible work!"
    }
]

app.get("/comments", (req,res)=>{
    res.render('index',{comments})
})

//Task 2 -> show form for new comment
app.get("/comment/new",(req,res)=>{
    res.render('new.ejs');
})

//Task 3 Actually add the comment in the array or database
app.post('/comments',(req,res)=>{
    // console.log(req.body); //by default it is undefined -> to change i use middlewares

    let {username,comment} = req.body;
    //destructing
    //when key value are same -> can write only one
    // comments.push({username: username, comment:comment, id:comments.length});
    comments.push({username, comment, id:comments.length});
    // res.send(req.body);
    res.redirect('/comments');
    // you can either send/render/redirect the response
})


//Task 4 : show info about single blog -> req.params
app.get('/comments/:id', (req,res)=> {
    // console.log(req.params);
    let {id} = req.params;

    // return the found comment
    let foundComment=comments.find((comment)=>{
        // console.log(comment.id);
        // console.log(id);
        // return comment.id === id // this is wrong
        // return comment.id == id //correct way - 1
        return comment.id === parseInt(id) // correct way - 2
    })

    // console.log(foundComment);
    // res.send(req.params);


    res.render('show',{foundComment});
    

})

//Task 5 show edit form of one comment
app.get('/comments/:id/edit',(req,res)=>{
    let {id} = req.params;
    let foundComment=comments.find((comment)=>{
        return comment.id === parseInt(id) 
    })

    res.render('edit',{foundComment})
})


//task 6 : actually edit the comment in the array
app.patch('/comments/:id', (req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find((comment)=>{
        return comment.id === parseInt(id); 
    })

    let {comment} = req.body; //post request required
    foundComment.comment = comment; //change in array

    res.redirect('/comments')
})


//Task 7 -> Delete a particular comment from the array
app.delete('/comments/:id', (req,res)=>{
    let {id} = req.params;
    let newComments = comments.filter((comment)=> {return comment.id != id});
    comments = newComments;
    // this filter stores all the true values and removes falsy values

    res.redirect('/comments');
})


let PORT = 8080;
app.listen(PORT, ()=> {
    console.log(`server connected at port: ${PORT}`);
})