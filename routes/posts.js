const express = require('express');
// Initialize app
const router = express.Router();
const Post = require('../models/Post');

router.get('/', function (req, res) {
    Post.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            console.log("posts:", posts)
            res.json(posts);
        }
    });
});

module.exports = router;