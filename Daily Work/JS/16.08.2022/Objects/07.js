function sub(str){
    var subset = [];
    for(var i = 0; i<str.length;i++){
        for(var j = i+1; j<str.length+1; j++){
            subset.push(str.slice(i,j))
        }
    }
    // console.log(subset);
}

var str = "dog";
sub(str);