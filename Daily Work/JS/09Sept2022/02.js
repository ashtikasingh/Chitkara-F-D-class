// var s = hello;
// s.toLowerCase();
// for(var i = 0; i<s.length; i++){
//     if(s[i]=='a'|| s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u' ||)
// }

// var input = prompt("Enter any text here").toLowerCase();
var input = "byehekjwejwij";
var vowels = 0;
var consonants = 0;

for (var count = 0; count <= input.length; count++){
   if((input.charAt(count) == 'a' || input.charAt(count) == 'e' || input.charAt(count) == 'i' || input.charAt(count) == 'o' || input.charAt(count) == 'u' )){       
     vowels++;
    }else{
    consonants++;
   }
}
 console.log ("vowels: " + vowels);
 console.log ("consonants: " + consonants);