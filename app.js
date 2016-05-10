"use strict";

const express = require("express");
const app = express();

const exphbs  = require('express-handlebars');

const blogDB = require("./lib/blogDB");

app.engine('.hbs', exphbs({
    extname:".hbs",
    partialsDir:["views/modules","views/partials"]
    }
));
app.set('view engine', '.hbs');

app.use(express.static("public"));

app.get("/", (req,res) => {

    blogDB.getPosts(req.query.blog_id,function(err,posts){
        res.render("index.hbs",{layout:"layout.hbs", posts:posts});
    })
});

app.get("/results", (req,res) => {
   res.render("results.hbs",{layout:"layout.hbs",results:[]});
});

app.listen(3000,function (){
    console.log("SERVER UP");
});