// function doubleFun(){
//     let element = document.querySelector(".hello");
//     element.className = "fontSi";
// }

// let x = setTimeout(change, 3000); //loop mai nahi chanlta hai
//arrow function
function startTime(){
    let x = setTimeout(()=> {
        document.getElementById("demo").style.width = "200px";
        console.log("Sucess")
        }, 3000)
}

// clearTimeout // to clear set time out

// function change(){
//     document.getElementById("demo").style.width = "200px";
//     console.log("Sucess")
// }

function stop(){
    clearTimeout(x);
    console.log("STOP");
}
function startThis(){
    let w = 100;
    let x1 = setInterval(()=>{
    w+=10;
    document.getElementById("demo2").style.width = w + "px";
}, 1000)
}

function stop1(){
    clearInterval(x1);
    console.log("STOP");
}