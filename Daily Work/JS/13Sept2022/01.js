// CALLBACK
let object = [
    {name:'abc', age:20},
    {name:'bcd', age:50}
]

function print(){
    setTimeout(()=>{
        object.forEach((x)=>{
            console.log(x.name)
        })
    },5000);
   
}

// function pushObject(){
//     setTimeout(function(){
//         object.push({name:"mih", age:15})
//     },4000) 
//     print();  
// }

function newName(newData,func){
    setTimeout(()=>{
    object.push(newData);
    console.log("NEW NAME ENDED");
    func();
},8000)
}
// print();
newName({name: "HELLLOO", age: 50},print);
// pushObject();
// print();