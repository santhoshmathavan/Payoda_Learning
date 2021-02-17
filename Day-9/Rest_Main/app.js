const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

//Import routes
const postRoutes = require('./routes/posts')
app.use('/posts',postRoutes)

//Connect to DB
mongoose.connect('mongodb://localhost:27017/rest',{ useUnifiedTopology: true, useNewUrlParser: true },()=>console.log('Connected to DB'))

app.listen(3000)