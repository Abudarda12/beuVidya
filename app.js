const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
// const mongoose = require('mongoose');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// mongoose.connect('mongodb://localhost:27017/express', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));



app.get('/', (req, res) => {
    res.render("home");
});

app.get("/login",(req,res)=>{
     res.render("login")
})
app.get("/register",(req,res)=>{
    res.render("register")
});

app.get("/first", (req, res) => {
    res.render("first");
});

app.get("/cse", (req, res) => {
    res.render("cse");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});