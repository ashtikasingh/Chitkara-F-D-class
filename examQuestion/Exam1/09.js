function isHappyNumber(num){  
        var rem = 0, sum = 0;  

        while(num > 0){  
            rem = num%10;  
            sum = sum + (rem*rem);  
            num = num/10;  
        }  
        return sum;  
    }  

console.log("List of happy numbers between 1 and 5: ");  
var count = 0;
        for(var i = 1; i <= 100; i++){  
            var result = i;  

            while(result != 1 && result != 5){  
                result = isHappyNumber(result);  
            }  
              
            if(result == 1){
                console.log(i + " ");  
                count++;
            }  
                
            if(count==5){
                break;
            }
        }  