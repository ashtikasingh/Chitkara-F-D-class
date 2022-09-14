var arr = [10,20,30,40,50,60,70,80,90];
var cut = arr.slice(5,7); //slice(start)
function check(no){
    return no>9;
}

function double(c){
    return c*c;
}



function joinName(as){
    return as.fname+ " "+ as.lname;
}
// console.log(cut);
// console.log(arr);
// var sp = arr.splice(3,2,90,56); //splice(start, length, deleting items)

// console.log(sp);
// console.log(arr);
console.log(arr.some(check)); //print true if any valuse is >9
console.log(arr.every(check)); //print true if all value is >9
console.log(arr.filter(check)); //print all values greater than 9
console.log(arr.map(double));
// console.log(names.map(joinName));

// objects
// key:value
// document.write -> [obeject][object]
// var names = [
//     {fname: "Raj", lname: "Kapoor"},
//     {fname: "Harry", lname: "Ahuja"},
//     {fname: "Jass", lname: "Sandhu"},
//     fullname : fuction(){
//         return this.fname+" "+this.lname;
//     }
// ]

var hello  = {
    hi: "Hola",
    bye: "Boi",
    fullState:function(){
        return this.hi + " "+ this.bye;
    }
}
console.log(hello.fullState());
// console.log(names);
// console.log(names[0].fname);

var kt = [
    a ={fname:"Raj", lname:"Kapoor"},
    {age:20},
    {hobbies:["cricket", "reading"]}  
]

console.log(kt[2].hobbies[0]);