const user = {
    username : "pratik",
    price: 999,

    welcommsg: function() {
        console.log(`${this.username}, welcome to website `);
    }

}

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// const chai = () => {
//     let username = "pratik"
//     console.log(this);
// }

// chai()

const addtwo = (num1, num2) => {
    return num1 + num2 
}
console.log(addtwo(4, 6));

const addtwo2 = (num1 , num2) => num1 + num2 

console.log(addtwo2(3, 4));

const addTwo = (num1, num2) => ({username: "pratik"})

console.log((addTwo(3, 4)));

// const MyArray = [2, 4, 5, 6]
// MyArray.forEach(())