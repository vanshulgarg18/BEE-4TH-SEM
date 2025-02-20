const express = require("express");
const app = express();
app.use(m1);
app.get("/",(req,res)=>{
    console.log("running /");
    res.send("home");
});

app.use(m2);

app.get("/about",m3,(req,res)=>{
    console.log("running about..");
    res.send("about page");
});

function m1(req,res,next){
    console.log("running middleware 1");
}