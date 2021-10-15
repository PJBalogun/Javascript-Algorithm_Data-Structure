// Using the built in Sort method

let arr = [13, 45, 23, 10, 3, -2, -45, 5, 8];
// Some element are sorted while other are not.
//This works for string but not always number because it sorts by unicode.
console.log(arr.sort());


// b-a means sort in ascending order while a-b is otherwise.
// b.lenth - a.length for sorting according to string length.
let sortedArray = arr.sort((a, b) => b - a);
