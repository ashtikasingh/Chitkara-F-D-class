var a = 5;
var b = 12;
var flag = false;

for(var i = a; i<=b; i++){
    for(var j = 2; j*j<=i; j++){
        if(i%j==0){
            flag = true;
            break;
        }else{
            flag = false;
        }
    }
    if(!flag){
        console.log(i);
    }
}