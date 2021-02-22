const express = require('express')
const mysql = require('mysql')

const app = express()

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"node_db",
    port:"3306"
})

connection.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log("Connected")
    }
})

// connection.query('CREATE TABLE test(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY,thing VARCHAR(255) NOT NULL)',(err,rows)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("Table Created")
//         console.log(rows)
//     }
// })


// connection.query('INSERT INTO test(thing) VALUES ("MicroMax")',(err,rows)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("Data inserted")
//         console.log(rows)
//     }
// })

// connection.query('SELECT * FROM test',(err,rows)=>{
//     if(err){
//         throw err
//     }else{
//         rows.forEach(row => {
//             console.log(`${row.thing} product is ${row.id}`)
//         });
//     }
// })

var prod = 'S3'
connection.query('SELECT * FROM test WHERE thing = ? ',[prod],(err,rows)=>{
    if(err){
        throw err
    }else{
        console.log("Selected")
        console.log(rows)
    }
})

const port = process.env.port || 5000
app.listen(port)
console.log("App is listening on port " + port)

