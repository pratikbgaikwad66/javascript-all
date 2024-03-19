const name = "pratik"
const repocount = 50 

// console.log(name + repocount + "value");

// console.log(`hello my name is ${name} and my repo count is ${repocount}`);


const gameName = new String('pratik-fb')

// console.log(gameName[4]);
// console.log(gameName,__proto__);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newstringone = "   pratik   "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', `-`))
console.log(url.includes('sundar'));

console.log(gameName.split('-'));