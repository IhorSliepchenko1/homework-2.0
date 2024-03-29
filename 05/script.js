{
     // Filter arr
     const filterRange = (arr, from, to) => {
          return arr.filter((el) => el >= from && el <= to)
     }

     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

     console.log(filterRange(arr, 3, 7));

}
{
     // Sort arr
     const arr = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
     const sortArr = (arr) => {
          return arr.sort((a, b) => {
               return a - b
          });
     }

     // -3242, -454, 0, 4, 22, 23, 324, 544, 32423
     console.log(sortArr(arr));
}
{
     // Sort arr str
     const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
     const sortArr = (arr) => {
          return arr.sort((a, b) => {
               return a.length - b.length
          });
     }
     // '', 'a', ' ', 'bb', '4534', 'sdfds', 'r4rdv-'

     console.log(sortArr(arr));

}
{
     // Calculate average age of users
     // older then 17 and younger then 55

     const arr = [
          { name: "John", age: 25 },
          { name: "Pete", age: 30 },
          { name: "Mary", age: 29 },
          { name: "Taras", age: 25 },
          { name: "Kate", age: 74 },
          { name: "Chris", age: 14 },
          { name: "Alan", age: 5 },
          { name: "Boris", age: 55 },
          { name: "Elizabeth", age: 48 },
     ];

     const averageAge = (arr) => {
          const filter = arr.filter((el) => el.age > 17 && el.age < 55)
          const average = (filter.map((el) => el.age)
               .reduce((a, b) => a + b)) / filter.length
          return average
     }

     console.log(averageAge(arr));

}
{
     // Sort arr by name
     const arr = [
          { name: "John", age: 25 },
          { name: "John", age: 5 },
          { name: "John", age: 2 },
          { name: "John", age: 45 },
          { name: "Pete", age: 30 },
          { name: "Mary", age: 29 },
          { name: "Mary", age: 2 },
          { name: "Taras", age: 25 },
          { name: "Taras", age: 19 },
          { name: "Kate", age: 74 },
          { name: "Chris", age: 14 },
          { name: "Alan", age: 5 },
          { name: "Alan", age: 32 },
          { name: "Boris", age: 55 },
          { name: "Elizabeth", age: 48 },
          { name: "Elizabeth", age: 8 },
     ];

     const sortUsers = (arr) => {
          return arr.sort((a, b) => {
               if (a.name === b.name) {
                    return a.age - b.age
               }
               return a.name.localeCompare(b.name);
          });
     }
     // [
     //   { name: "Alan", age: 5 },
     //   { name: "Alan", age: 32 },
     //   { name: "Boris", age: 55 },
     //   { name: "Chris", age: 14 },
     //   { name: "Elizabeth", age: 8 },
     //   { name: "Elizabeth", age: 48 },
     //   { name: "John", age: 2 },
     //   { name: "John", age: 5 },
     //   { name: "John", age: 25 },
     //   { name: "John", age: 45 },
     //   { name: "Kate", age: 74 },
     //   { name: "Mary", age: 2 },
     //   { name: "Mary", age: 29 },
     //   { name: "Pete", age: 30 },
     //   { name: "Taras", age: 19 },
     //   { name: "Taras", age: 25 },
     // ];

     console.log(sortUsers(arr));
}
{
     // Find min and max
     const arr = [
          { name: "John", age: 25 },
          { name: "Pete", age: 30 },
          { name: "Mary", age: 29 },
          { name: "Taras", age: 25 },
          { name: "Kate", age: 74 },
          { name: "Chris", age: 14 },
          { name: "Alan", age: 5 },
          { name: "Boris", age: 55 },
          { name: "Elizabeth", age: 48 },
     ];
     const minMaxAge = (arr) => {
          const minMaxArray = arr.reduce((acc, val) => {
               const min = acc.min < val.age ? acc.min : val.age;
               const max = acc.max > val.age ? acc.max : val.age;
               return { min: min, max: max };
          });

          return minMaxArray;
     };
     // {min:5, max:74}

     console.log(minMaxAge(arr));
}
{
     // Save only unique values
     const strings = [
          "HELLO",
          "World",
          "JS",
          "Js",
          "HI",
          "Hello",
          "HTML",
          "CSS",
          "js",
     ];

     const unique = (str) => {
          const lowerCaseStrings = str.map(el => el.toLowerCase());
          const uniqueObj = {};

          lowerCaseStrings.forEach((el, index) => {
               if (!uniqueObj[el]) {
                    uniqueObj[el] = str[index];
               }
          });

          const result = Object.values(uniqueObj);

          return result;
     }

     console.log(unique(strings));
     // HELLO, World, JS, HI, HTML, CSS

}
{
     // Find the Longest Consecutive Sequence
     function findLongestConsecutive(arr) {
          const arrCase = []

          for (let i = 0; i <= arr.length; i++) {
               if (arr[i] === i + 1) {
                    arrCase.push(arr[i])
               }
          }

          return arrCase
     }

     const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 5];
     const longestConsecutive = findLongestConsecutive(numbers);
     console.log(longestConsecutive);
     // [1, 2, 3, 4, 5]
}
{
     // Pyramid

     const printPyramid = (n) => {
          for (let i = 1; i <= n; i++) {
               const lattice = '#'.repeat(n - i);
               const stars = '*'.repeat(2 * i - 1);
               console.log(lattice + stars + lattice);
          }
     };

     printPyramid(5)
}

