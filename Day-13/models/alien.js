const mongoose  = require('mongoose')

const alienSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        // ref:'Alien'
    },
    tech:{
        type:String,
        // ref:'Alien'
        required:true
    },
    sub:{
        type:Boolean,
        // ref:'Alien'
        required:true,
        default:false
    }
})

module.exports = mongoose.model('Alien',alienSchema)