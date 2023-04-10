// const parent = {
//     fname : "GOOD",
//     lname : "MORNING",
//     fullname : function abc(){
//         console.log(this.fname+" "+this.lname);
//     }
// }

// const child = {
//     __proto__: parent
// }

// child.fullname();


// const Add ={
//     sum : function(arr){
//         let result = 0;
//         for(let i=0 ; i< arr.length ; i++){
//             result += arr[i];
//         }
//         console.log(result);
//     }
// }
// Add.sum([1,2,3,4,5,6])

// const obj1 = {
//     name: "GOOD"
// }
// const obj2 ={
//     __proto__: obj1,
//     lname : "MORNING",
// }
// const obj3 ={
//     __proto__:obj2,
//     date: "8",
// }

// console.log(obj3.name)
// console.log(obj3.lname)
// console.log(obj3.date)


function first(obj) {
    if (!second(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function second(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(first(new Student("ABHI")));
