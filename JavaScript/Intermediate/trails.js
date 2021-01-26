arr=[['one','1'],['two','2'],['three','3']]
var map=new Map(arr)
map.forEach((value,key) => {
    console.log(`${key} ${ value}`)
});