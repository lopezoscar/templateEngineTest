"use strict";


const mongojs = require("mongojs");

const db = mongojs("localhost:27017/test",["posts"]);


function BlogDB(){

    return {
        getPosts:function(blog_id,cb){
            var query = {blog:blog_id};
            db.posts.find(query,function(err,docs){
                if(err){
                    cb(err,null);
                }else{
                    cb(null,docs);
                }
            });
        }
    }
}

module.exports = new BlogDB();