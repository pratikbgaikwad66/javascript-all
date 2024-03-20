


const mySym = Symbol("key1")

const jsuser = {
    name:  "pratik",
    "full name" :  "pratik gaikwad",
    [mySym] : "mykey1",
    age : 18,
    location : "sangli",
    email : "pratigaikwad100.com",
    isloggedin: false,
}

// console.log(jsuser. email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"])
// console.log(typeof jsuser.mySym)


jsuser.email = "pratik@google.com"
// Object.freeze(jsuser)
// jsuser.email = "pratikg@microsoft.com"
// console.log(jsuser);


jsuser.greeting = function (){
    console.log("hello js user");
}

jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());