interface Iperson {
    name : string
    alive : boolean

}

interface IclassInfo {
    roll_num : number
    student : boolean
}
/*
let person : Iperson & IclassInfo = {
    name : "Rahul",
    alive : true,
    roll_num : 123,
    student : true
}
console.log(person)
*/

type Tperson = Iperson & IclassInfo

let person : Tperson = {
    name : "Rahul",
    alive : true,
    roll_num : 123,
    student : true
}
console.log(person)