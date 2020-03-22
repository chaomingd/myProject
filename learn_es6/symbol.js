// class MyClass {
//   [Symbol.hasInstance](foo) {
//     return foo instanceof Array;
//   }
// }

// [1, 2, 3] instanceof new MyClass()

let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
console.log(arr1[Symbol.isConcatSpreadable]) // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e')