const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/',async(req,res)=>{
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (err) {
        res.send('Cannot fetch')
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch (err) {
        res.send('Cannot fetch')
    }
})

router.post('/',async(req,res)=>{
    try {
        const alien = new Alien({
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        });
        console.log('Before save')
        const a1 =  await alien.save()
        console.log(a1)
        console.log('after save')
        res.json(a1)
    } catch (err) {
        res.send('errr'+err)
    }
})

router.patch('/:id',async(req,res)=>{
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send('Cannot fetch')
    }
})

module.exports = router