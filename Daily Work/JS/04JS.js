// Arrays

// var a = [10,20,30];
// var b =[3,5];
// console.log(a.concat(b));
// console.log(b.concat(a));
// console.log(b);
// console.log(a.join("-"));
// console.log(a.push(8));
// console.log(a)
// console.log(a.pop());
// console.log(a)
// console.log(a.unshift(23));
// console.log(a);
// console.log(a.shift());
// console.log(a)

// concat() -> number
// join() -> Nstring
// var attend = [];
// for(var i = 0; i<5; i++){
//     var a = prompt("What is Your Name : ");
//     attend.push(a);
// 

// console.log(attend);
// console.log(attend.sort());
// attend.reverse()
// console.log(attend);

// Mutidimensional array


// console.log(arr)
var arr = [
    ["Harry", 20, true],
    ["Sejal", 20, false],
    ["Arsh", 16, true]
]


document.write("<table border='1'>");
    for(var i = 0; i<arr.length; i++){
        document.write("<tr>");
            for(var j = 0; j<3; j++){
                document.write("<td>");
                document.write(arr[i][j]);
                document.write("</td>");
            };
            document.write("</tr>");
            document.write("<br>");
        };
document.write("</table>")

