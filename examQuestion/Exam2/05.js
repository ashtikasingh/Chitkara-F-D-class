
    var str = prompt("In which str you want to swap your letters?")
    // console.log(swap('The Quick Brown Fox')); 
    function swap(str) {
        let newL = '';
        for (let i = 0; i < str.length; i++) {
                if (str[i] == str[i].toUpperCase()) {
                    newL += str[i].toLowerCase();
                } else {
                    newL += str[i].toUpperCase();
                }
            }
            return newL;
        }
    console.log(swap(str));