var arr=[23,67,45,89];

var sum = 0;
var product = 1;

for (i=0;i<arr.length;i++)
{
    sum+=arr[i];
    product*=arr[i];
}

console.log(sum);
console.log(product);