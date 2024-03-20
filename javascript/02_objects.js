
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "summery"
tinderUser.isloggedin = false

// console.log(tinderUser);

const regularuser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname: "chodhary"
        }
    }
}

// console.log(regularuser.fullname.userfullname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
    {
        id : 1,
        email : "pratikg@mail.com"
    },
    {
        id : 1,
        email : "pratikg@mail.com"
    },
    {
        id : 1,
        email : "pratikg@mail.com"
    },
    {
        id : 1,
        email : "pratikg@mail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("islggedin"));


// object d-struchering

const course = {
    coursename : "js in  hindi",
    price : "999",
    courseInstructor: "hitesh"
}

const { courseInstructor : instructor} = course 

// console.log(courseInstructor);

console.log(instructor);