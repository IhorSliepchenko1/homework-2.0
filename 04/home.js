console.log(true === !!"hello");
console.log(42 === +"42");
console.log(47 === "42" - -5);
console.log('1010' === "10" + 5 * 2);
console.log('52' === "10" - 5 + "2");

let x = 10;
let y = 5;
console.log(15 === (x++ + y));
console.log(15 === --y + x);

console.log(44 === x-- * y);
console.log(2 === x % y);
console.log(10000 === x ** y);
console.log(32 === 2 * x + 3 * y);
console.log(84 === ((x + y) * (x - y)));
console.log((14 === (x += y))); // x=x+y
console.log(8 === (y *= 2));
console.log("x is greater" === (x > y ? "x is greater" : "y is greater"));
console.log("y is greater" === (y > x ? "x is greater" : "y is greater"));
console.log(true === (x > y && y > 0));
console.log(true === (x > y || y > 0));
console.log(false === !x);
console.log(false === !(x > y));

const a = 10;
const b = 5;
const c = "5";
const d = true;
console.log(false === (a > b && c === b && d != c));
console.log(false === ((a < b || d !== c) && c + b == a));
console.log(true === (!(a % b) && d));
console.log(20 === (a - -b * 2));
console.log('550' === (c + a * b));
console.log(true === (d || a / b > c));

const w1 = 8;
const x1 = 10;
const y1 = 5;
console.log(true === (x1 > y1 && x1 > w1));
console.log(true === (x1 > y1 || x1 > w1));
console.log(false === !(x1 > y1) && x1 > w1);
console.log(true === (!(x1 > y1) || x1 > w1));
console.log(false === (!(x1 > y1) && !(x1 > w1)));
console.log(false === (!(x1 > y1) || !(x1 > w1)));

const a1 = 20;
const b1 = 15;
const c1 = 10;
const d1 = true;
const e1 = false;
console.log(true === (a1 > b1 || c1 > b1) && d1);
console.log(true === (a1 > b1 || c1 > b1) && !e1);
console.log(false === (a1 < b1 && c1 > b1) || d1 === e1);
console.log(false === (a1 < b1 && c1 > b1) || e1);
console.log(true === (!(a1 > b1 && c1 > b1) && d1));
console.log(true === (!(a1 > b1 && c1 > b1) && !e1));

console.log(0 === (1 && 2 && 0 && 7));
console.log(1 === (0 || false || "" || null || 1));

console.log(1 === (1 > 0 ? ("greater" ? 1 : 0) : "lesser" ? 0 : 1));
