// try{
//     let fname='sandy'
//     let lname=firstname
// }
// catch(err){
//     console.error(err.name)
// }
// finally{
//     console.log('it will work')
// }
const throwErroExampleFun = () => {
    let message
    //let x = prompt('Enter a number: ')
    let x=''
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErroExampleFun()