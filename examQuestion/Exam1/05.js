var sum = 0;
for(var i = 1; i<=1000; i++){
    if(i%15==0){
        sum+=i;
    }else if(i%5==0 || i%3==0){
        sum+=i;
    }
}

console.log(sum)
