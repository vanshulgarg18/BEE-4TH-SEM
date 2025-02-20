const express = require("express");
const app = express();

// app.get("/profile",(req,res)=>{
//     const {username,age} = req.query;
//     console.log(username);
//     console.log(age);
//     res.send("profile page of"+"  "+username+"   "+age);
// });

app.get("/profile/:id/:username",(req,res)=>{
    const {id,username} = req.params;
    res.send("profile page of"+"  "+id+"  "+username);
});

app.get("/profile/:id",(req,res)=>{
    const {id} = req.params;
    res.send("profile page of"+"  "+id);
});

app.listen(1812,(req,res)=>{
    console.log("server started...");
});