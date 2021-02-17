const express = require('express')
const Post = require('../models/Posts')
const router = express.Router()

//Routes
router.get('/',async(req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.json(err)
    }
})

router.post('/',async(req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try{
    const savedPost = await post.save()
    res.json(savedPost)
    }catch(err){
        res.json(err)
    }
    
})

router.get('/:postId',async(req,res)=>{
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)    
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:postId',async(req,res)=>{
    try {
        const post = await Post.remove({_id:req.params.postId})
        res.json(post)    
    } catch (error) {
        res.json(error)
    }
})

module.exports = router