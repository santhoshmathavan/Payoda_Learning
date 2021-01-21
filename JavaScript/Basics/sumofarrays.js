let SumofArray=function(dum){
    let res=0
    for(let i=0;i<dum.length;i++){
        res += dum[i]
    }
    return res
}

let nums=[1,2,3,4,5]
console.log(SumofArray(nums))