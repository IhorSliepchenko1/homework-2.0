// //Задачки на приведення до типів
console.log('32', "3" + 2);
console.log('3true', "3" + true);
console.log('3undefined', "3" + undefined);
console.log('3null', "3" + null);
console.log('NaN', 35 * "hello");
console.log('5', 5 + null);
console.log('5null', "5" + null);
console.log('3', "5" - 2);
console.log('10', "5" * "2");
console.log('20abc', 20 + "abc");
console.log('100', "10" * "10");
console.log('NaN10abc', 2 - "x" + "10abc");
console.log('5', 3 + "2");
console.log('5', "10" / "2");
console.log('2', 1 + true);
console.log('1', 1 + false);
console.log('NaN', 1 + undefined);
console.log('1', true + null);
console.log('NaN', true + undefined);
console.log('22', 23 - true);
console.log('1', true - null);
console.log('NaN', false + undefined);
console.log('2556', "25" + 56);
console.log('25null', "25" + null);
console.log('10undefined', "10" + undefined);
console.log('abcundefined', "abc" + undefined);
console.log('25false', "25" + false);

//Задачки на логічне і
console.log(22, 11 && 22);
console.log(0, 0 && 22);
console.log(null, 22 && null);
console.log(null, null && undefined);
console.log(null, null && undefined && true);
console.log(false, 11 && 22 && false);
console.log("null1", "-15" && -22 && "sdsd" && null + 1 && "null1");

//Задачки на логічне або
console.log(22, 11 || 22);
console.log(22, 0 || 22);
console.log(22, 22 || null);
console.log(undefined, null || undefined);
console.log(true, null || undefined || true);
console.log(11, 11 || 22 || false);

//Задачки на логічне і та або
console.log(1, 1 || (22 && !false) || 17);
console.log(22, (1 && 22) || false || 17);
console.log(true, (true || false || (undefined && null) || "abc"));

//Задачки на логічне і та або + тринарний оператор
let condition1 = true ? 11 - 22 <= 0 && "abc" : "232" - 1 + "abc";
console.log("abc", condition1);

let condition2 =
     undefined || (null && 27) || (14 && "")
          ? ("" && "abc") || 0
          : 0 || undefined || condition1;
console.log("abc", condition2);