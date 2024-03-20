
function loginusername(username ="partik") {
    if (!username){
        // console.log("please inter your user name");
        return;
    }
    return `${username} just logged in `
}
// console.log(loginusername("gaikwad"));


function calculateitem (val1, val2, ...num1){
    return num1
}
// console.log(calculateitem(200, 400, 500, 2000));



const user = { 
    username : "pratik",
    price : 199
}


function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handelobject(user)



const mynewArray = [200, 400, 100, 600 ]
function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(mynewArray));
console.log(returnSecondvalue([200, 400, 100, 600]));