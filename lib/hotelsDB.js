"use strict";

let posts = [];

for(var i = 0; i < 10; i++){
    posts.push({
        url: "",
        title: "title "+i,
        subtitle: "subTitle "+i,
        author: "author "+i,
        date: "2016-04-0"+i
    });
}

const mongojs = require("mongojs");

const db = mongojs("localhost:27017/test",["posts"]);

db.posts.insert(posts, (err,result) => {
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});