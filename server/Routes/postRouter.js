const express = require('express');
const postModel = require('../models/postSchema');

const postRouter = express.Router();

//Create Post
postRouter.post('/create',async (req, res) => {
    const post = req.body
    try {
        let existPostWithTitle = await postModel.findOne({ title: post.title})
        if(existPostWithTitle){
            res.status(400).send({
                message: "Title already taken"
            });
        } else {
            let newPost = await postModel.create(post)
            return res.send(newPost);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

//Update Post
postRouter.put('/:id',async (req, res) => {
   try {
    const post = await postModel.findById(req.params.id)
    if(post.username === req.body.username){
        try {
            const updatedPost = await postModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set : req.body
                },
                {new : true}
            )
            res.send({
                status : true,
                data : updatedPost
            })
        } catch (error) {
            res.status(500).send(error);
        }
    } else {
        res.status(400).send({message: "You can update only your post!"});
    }
   } catch (error) {
    res.status(500).send(error);
   }
})

//Delete Post
postRouter.delete('/:id',async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        if(post.username === req.body.username){
            try {
                const deletedPost = await postModel.findByIdAndDelete(req.params.id);
                res.send({
                    message : "Post has been deleted...",
                    data : deletedPost
                })
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.status(400).send({message: "You can delete only your post!"});
        }
       } catch (error) {
        res.status(500).send(error);
       }
})

//Get Post
postRouter.get("/:id", async (req, res) => {
    try {
        let post = await postModel.findById(req.params.id);
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
})

//Get All Posts
postRouter.get("/", async (req, res) => {
    const username = req.query.user;
    const category = req.query.cat;
    try {
        let posts;
        if(username){
            posts = await postModel.find({username});
        } else if(category){
            posts = await postModel.find({categories:{
                $in : [category]
            }});
        }
        else {
            posts = await postModel.find();
        }
        res.send({
            status: true,
            data : posts
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = postRouter