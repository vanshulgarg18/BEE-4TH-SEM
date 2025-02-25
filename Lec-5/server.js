const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // Let = userData.push({name:name , email:email, password:password});
    console.log(`User Reg: Name - ${name}, Email - ${email}`);
    // res.send("userData");
    res.send(`registion done, ${name}!`);
});
app.listen(PORT, () => console.log(` Server on http://localhost:${PORT}`));
