// // increment
// let count = 0;

// console.log(count);
// count++;
// console.log(count);
// ++count;
// console.log(count);
// let a= 5;
// console.log(++a);//a=6
// console.log(a++);//a=6
// console.log(a++);//a=7
// console.log(a++ + a);
// let b= 10;
// console.log(b++ + ++b);


// // derement 
// let c=10;
// console.log(c-- + --c);
// let count1 = 3;
// console.log(count1--);//3
// console.log(count1)//2
// console.log(count1--)
// // typeOF
// let d = 10
// console.log(typeof(d));
// type conversion
// let a = "10"
// console.log(typeof (a));
// let output = Number(a)
// console.log(typeof(output));

// let b= true
// let c=String(b)
// console.log(typeof(c));
// let a= null;
// let output= a.toString(a);
// console.log(typeof(output));
// console.log('5' +5);//55
// console.log('5'-5);//0
// console.log(+'5'+5);//10
// console.log(+'5'+ +'5');//10
// console.log(+5+'10' / '2'-'15');
// console.log(51013);
// let a =[30,20,40,10]
// a.sort()
// console.log(a);
// ["manu","pandu"].forEach(num => console.log(num));
// let nums1 = [10, 20, 30, 40];
// let result = nums.filter(n => n > 20);
// console.log(result); // [30, 40]




console.log("======= BASIC ARRAY METHODS =======");

let arr = [10, 20, 30];

console.log("Original:", arr);

// push()
arr.push(40);
console.log("push:", arr);

// pop()
arr.pop();
console.log("pop:", arr);

// unshift()
arr.unshift(5);
console.log("unshift:", arr);

// shift()
arr.shift();
console.log("shift:", arr);

// concat()
let a = [1, 2];
let b = [3, 4];
console.log("concat:", a.concat(b));

// indexOf()
console.log("indexOf 20:", arr.indexOf(20));

// includes()
console.log("includes 30:", arr.includes(30));

// slice()
console.log("slice(1,3):", arr.slice(1, 3));
console.log("After slice, original:", arr);

// splice()
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1); // remove index 2
console.log("splice remove:", arr2);

arr2.splice(1, 0, 100); // add at index 1
console.log("splice add:", arr2);

// join()
console.log("join with '-':", arr.join("-"));

// reverse()
let r = [1, 2, 3];
r.reverse();
console.log("reverse:", r);

// sort()
let s = [40, 10, 20, 30];
console.log("sort default:", s.sort());
console.log("sort numeric:", s.sort((a, b) => a - b));


console.log("\n======= ADVANCED METHODS =======");

let nums = [10, 20, 30, 40];

// forEach()
nums.forEach(n => console.log("forEach:", n));

// map()
let doubled = nums.map(n => n * 2);
console.log("map doubled:", doubled);

// filter()
let filtered = nums.filter(n => n > 20);
console.log("filter >20:", filtered);

// reduce()
let total = nums.reduce((acc, n) => acc + n, 0);
console.log("reduce sum:", total);

// find()
console.log("find >25:", nums.find(n => n > 25));

// findIndex()
console.log("findIndex >25:", nums.findIndex(n => n > 25));

// some()
console.log("some >35:", nums.some(n => n > 35));

// every()
console.log("every >5:", nums.every(n => n > 5));


console.log("\n======= EXTRA USEFUL METHODS =======");

// findLast()
console.log("findLast >20:", nums.findLast(n => n > 20));

// findLastIndex()
console.log("findLastIndex >20:", nums.findLastIndex(n => n > 20));

// flat()
let flatArr = [1, [2, [3, 4]]];
console.log("flat:", flatArr.flat(2));

// flatMap()
let fm = [1, 2, 3];
console.log("flatMap:", fm.flatMap(x => [x, x * 10]));

// toString()
console.log("toString:", nums.toString());

// at()
console.log("at(-1):", nums.at(-1)); // last element

console.log("\n======= END OF ALL ARRAY METHODS =======");















