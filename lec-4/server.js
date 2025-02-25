const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let userData = [
    {
        id: 1,
        name: "Yatin",
        address: "Punjab"
    },
    {
        id: 2,
        name: "In",
        address: "Pujab"
    }
];

let idCounter = 3; // Start from 3, assuming there are 2 users already

// ✅ Route to get all users
app.get("/allusers", (req, res) => {
    res.status(200).json(userData);
});

// ✅ Route to add a new user
app.get("/adduser", (req, res) => {
    const { name, address } = req.body;
    
    if (!name || !address) {
        return res.status(400).json({ message: "Name and Address are required!" });
    }

    const newUser = {
        id: idCounter++, // Increment the ID
        name: name,
        address: address
    };

    userData.push(newUser);
    res.status(201).json({ message: "User added successfully", user: newUser });
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
