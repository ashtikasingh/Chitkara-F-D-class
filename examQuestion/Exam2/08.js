var a = prompt("The first side is ? ")
var b = prompt("The second side is ? ")
var c = prompt("The third side is ? ")

if(a==b && b==c && c==a){
    console.log(a+ " "+ b + " " + c + " " + "EQUILATERAL TRIANGLE");
}else if(a==b || b==c || c==a ){
    console.log(a+ " "+ b + " " + c + " " + "ISSOCELEUS TRIANGLE");
}else{
    console.log(a+ " "+ b + " " + c + " " + "SCALENE TRIANGLE");
}