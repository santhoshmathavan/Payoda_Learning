// let myFirstPromise = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("Success")
//     },0)
// })

// myFirstPromise.then((message)=>{
//     console.log("Yay"+message)
// })

let p = new Promise((resolve,reject)=>{
    let a = 1+3
    if(a==2){
        resolve("success")
    }
    else{
        reject("failed")
    }
})

p.then((message)=>{
    console.log("This is the then "+message)
}).catch((message)=>{
    console.log("This is the catch "+message)
}).finally((message)=>{
    console.log("We will run")
})