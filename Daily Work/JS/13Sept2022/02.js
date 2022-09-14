addition(2, function(addRes,err){
    if(!err){
        subtraction(addRes, function(subRes, err){
            if(!err){
                multiplication(subRes, function(mulRes,err){
                    console.log(mulRes);
                });
            }
        });
    }
});


function addition(val, callback){
    console.log("ADD START");
 callback(val+5, false);
 console.log("ADD END");
}

function subtraction(val, callback){
    console.log("SUB START");
 callback(val-3, false);
 console.log("SUB END");
}

function multiplication(val, callback){
    console.log("MUL START");
 callback(val*5, false);
 console.log("MUL END");
}