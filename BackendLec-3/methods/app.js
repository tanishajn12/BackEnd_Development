const express= require('express'); //fn
const app = express() //obj

// -------------------------------------
//METHODS
// app.get('/', (req,res)=> {
//     console.log("request sent");
//     res.send("<h1>Result bhi bhej dia white screen dekho</h1>")
// })

// middleware -> string matching
// app.use("/dog", (req,res) => {
//     res.send("<h1>mai middle = /dog pe aya hua hu </h1>")
// });

// app.use("/dog/cat", (req,res) => {
//     res.send("<h1>mai middle = /dog pe aya hua hu </h1>")
// });

// --------------------------------------------
//this app.use will always run
// app.use("/",(req,res)=>{
//     res.send("bhagwan hu mai")
// });

// app.get('/', (req,res)=> {
//     res.send("<h1> / path hu mai </h1>")
// });

// app.get('/dog', (req,res)=> {
//     res.send("<h1>/dog path hu mai</h1>")
// });

// app.get('/dog/cat', (req,res)=> {
//     res.send("<h1>/dog/cat path hu mai</h1>")
// });


//---------------------------------------------

app.get('/', (req,res)=> {
    res.send("<h1> / path hu mai </h1>")
});

app.get('/dog', (req,res)=> {
    res.send("<h1>/dog path hu mai</h1>")
});

app.get('/dog/cat', (req,res)=> {
    res.send("<h1>/dog/cat path hu mai</h1>")
});

// this use method helps my website from crashing -> app.use ko last mei likhkr
// app.use("/",(req,res)=>{
//     res.send("bhagwan hu mai")
// });


//more ethical way than app.use
app.get('*', (req,res)=>{
    res.send("<h1>Page Not Found</h1>")
});
//this should be at bottom only otherwise all paths will be as page not found





const PORT = 8080;
app.listen(PORT, function() {
    console.log(`Server connected at port ${PORT}`);
});

