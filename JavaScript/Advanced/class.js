class Person{
    constructor(fName,lName,age,gender,curClass){
        this.fName=fName
        this.lName=lName
        this.age=age
        this.gender=gender
        this.curClass=curClass
    }
    get FullName(){
        return this.fName+" "+this.lName
    }
}
class Student extends Person{
    constructor(fName,lName,age,gender,curClass,favSub){
        super(fName,lName,age,gender,curClass)
            this.favSub=favSub
    }
    set SetAge(num){
        this.age=num
    }
    get GetAge(){
        return this.age
    }
    get FavSub(){
        return this.favSub
    }
}

var perObj = new Person('Ram','Charan',25,'M',7,'CS')
var stuObj = new Student('Sandy','Maddy',12,'M',5,'CS')
// console.log(obj.GetAge)
// obj.SetAge=67
// console.log(obj.GetAge)
console.log(perObj)
console.log(stuObj)