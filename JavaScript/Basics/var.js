//------------------------Scope of King's Territory-----------------------------------------
// let king='sam'

// console.log(king)

// if(true){
//     let king='ram'
//     console.log(king)
// }

// console.log(king)
//---------------------------------------------------------------------------------------
// let nums=[1,2,3]
// console.log(nums.splice(5))
// console.log(nums)

//------------------------------------For-each Loop--------------------------------------
// days=['Mon','Tue','Wed','Thr','Fri','Sat','Sun']
// days.forEach(function(day,ind){
//     console.log(`starts with ${ind+1} -- ${day}`)
// });

//--------------------------------Ternary Operator----------------------------------
// let isRain = true
// isRain?console.log('Raining'):console.log('No')


//--------------------------------Arrow functions and For-of Loop------------------------
// const Change = arr =>{
//     const nArr=[]
//     for(const ele of arr){
//         nArr.push(ele.toUpperCase())
//     }
//     return nArr
// } 

// let nums=['a','b','c','d','e']
// console.log(Change(nums))

// const fun = (fName,sName) => `${fName} ${sName}`
// console.log(fun('san','man'))
//-------------------------------Substr-------------------------------------------------
// let string = 'JavaScript'
// console.log(string.substr(4,6))    // Script
// let country = 'Finland'
// console.log(country.substr(3, 4))
//------------------------------------SpreadOpertorWithArrowFunction--------------------------------------------
// const sumofnums = (...args) =>{
//     let sum=0
//     for(const num of args){
//         sum += num
//     }
//     return sum
// }

// console.log(sumofnums(1,2,3,4,5))
//--------------------------------------------------------------------------------------
arr=[1,2,3,4,5]
// console.time('regular loop')
// let i=0
// while(i < arr.length){
//     console.log(arr[i])
//     i++
// }
// console.timeEnd('regular loop')
console.time('regular loop')
arr.forEach(element => {
    console.log(element)
});
console.timeEnd('regular loop')