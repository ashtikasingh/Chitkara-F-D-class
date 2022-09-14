function happyNum(number) 
{
    var a, b ;
    var arr = [] ;
     while(number != 1 && arr[number] !== true) 
    {
        arr[number] = true ;
        a = 0 ;
        while (number > 0) {
            b = number % 10 ;
            a += b * b ;
            number = (number  - b) / 10 ;
        }
        number = a ;
    }
    return (number == 1) ;
}
 var count = 5;
var number = 1;
var fiveNum = ''; 
while(count > 0) 
{
    while(!happyNum(number))
        number++ ;
fiveNum = fiveNum+(number + ", ") ;

    number++ ;
    count--;
}
console.log('First 5 happy numbers are : '+fiveNum);