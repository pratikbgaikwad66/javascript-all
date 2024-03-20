const myheros = ["spide","james","bond"]
const marvels = ["ironman","thanose","groot"]


const all_newheros = [...myheros,...marvels];
console.log(all_newheros);


let scroe = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(scroe,score2,score3));

const another_array = [1,2,3, [4, 5, 6],7 , [6, 7, [4, 5]]]

const real_new_array = another_array.flat(Infinity);

console.log(real_new_array);

console.log(Array.isArray("pratik"));
console.log(Array.from("pratik"));
console.log(Array.from({name: "pratik"}));  // important

