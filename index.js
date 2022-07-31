console.log('chandu')
let arr=[1,2,3,4]
let arr2=[1,2,3,4]
console.log(arr===arr2)
let obj1={
    name:"ABC",
    rollno:12
}
// let obj2={
//     name:"ABC",
//     rollno:12
// }
let obj2=obj1
console.log(obj1==obj2)
obj2.name="Gungun"
console.log(obj2,obj1)
//obj2 ko change kiya toh 1 b change hoga kyuki 2 ,1 ko refer kr rha h
//golden rule never check object or compare using == never!
//Escape sequence
let check="hello \"world\" "
console.log(check)
let a=2
let b=3
let c=a+b
console.log('The sum of ${a} and ${b}')
console.log('The value is'+c)
console.log(obj2.name.length)
//string to int float to int in js

