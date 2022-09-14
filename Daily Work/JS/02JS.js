var myaccess = 0;
const read = 1;
const write = 2;
const execute = 4;

// myaccess = myaccess | read;
// console.log(myaccess);
// myaccess = myaccess | read | write;
// console.log(myaccess);
// var msg = (myaccess & read)?"Yes": "No";
// console.log(msg);

// var a = 40;

// if(a<20){
//     console.log("Smaller than 20");
// }else if(a==20){
//     console.log("Eqaul to 20");
// }else{
//     console.log("Greater than 20");
// }

// var x = Math.round(Math.random()*10);
// switch(x){
//     case 1:
//         console.log("YOU WON A ROLEX WATCH!!CONGRATSSS!!!!");
//         break;
//     case 3:
//         console.log("YOU WON A FERARIIIII!!CONGRATSSS!!!!");
//         break;
//     case 3:
//         console.log("YOU WON A IPHONE 15 PRO MAX!!CONGRATSSS!!!!");
//         break;
//     case 4:
//         console.log("YOU WON A CURVED TELEVISON!!CONGRATSSS!!!!");
//         break;
//     default:
//         console.log("BETTER LUCK NEXT TIME!!!")
// }

var person = {
    fname : "XYZ",
    lname : "abc",
    age : "20"
}

var a = 0;
var x = " ";

for(let a in person){
    x+=person[a];
    // console.log(x);
}

console.log(x);

// no is +ve/-ve

// var p = -5;

// if(p>=0){
//     console.log("POSITIVE");
// }else{
//     console.log("NEGATIVE");
// }

//even/ odd

var p = Math.round(Math.random()*10);

if(p%2==0){
    console.log(p + " EVEN");
}else{
    console.log(p + " ODD");
}

// triangle equi/isSecureContext

var a = Math.round(Math.random()*10);
var b = Math.round(Math.random()*10);
var c = Math.round(Math.random()*10);

if(a==b && b==c && c==a){
    console.log(a+ " "+ b + " " + c + " " + "EQUILATERAL TRIANGLE");
}else if(a==b || b==c || c==a ){
    console.log(a+ " "+ b + " " + c + " " + "ISSOCELEUS TRIANGLE");
}else{
    console.log(a+ " "+ b + " " + c + " " + "SCALENE TRIANGLE");
}

var n = Math.round(Math.random()*100)*Math.round(Math.random()*100);
if(n%4==0 && n%100!=0 || n%400==0){
    console.log(n + " leap year");
}else{
    console.log(n + " not a leap year");
}

var n1 = Math.round(Math.random()*10);
if((n1 & 1) == 0){
    console.log(n1 + " Even");
}else{
    console.log(n1 + " Odd");
}