const pat=new RegExp('[^a-z][a-z]$')
const word = '1231'
let res=pat.test(word)
console.log(res)
