const express = require("express");
const app = express();

app.get("/getProfile", (req, res) => {
    const { username, age } = req.query;
    res.send(`Profile: ${username} ${age}`);
});

// Route for profile with params
app.get("/profile/:username/:age", (req, res) => {
    const { username, age } = req.params;
    res.send(`Hi ${username}, Age: ${age}`);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

// Corrected usersData array
let usersData = [
    {
        id: 1,
        name: 'yatin',
        address: "punjab"
    },
    {
        id: 2,
        name: 'in',
        address: "pujab"
    },
];

app.get("/addusers", (req, res) => {
    res.send(usersData); 
});

app.get("/getuserbyId", (req, res) => {
    const { id } = req.query;
    // const user = usersData.find(user => user.id === parseInt(id));
    for(let i = 0; i<UserActivation.length;i++){
        if(usersData[i].id==id){
            return res.send(usersData[i])
        }
        else{
            res.send("eror 404 user not found");
        }
    }
    // if (user) {
    //     res.json(user);
    // } else {
    //     res.status(404).send("User not found");
    // }
});
