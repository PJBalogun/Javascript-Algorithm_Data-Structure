//Implement Bubble Sort

//Create a nested loop
const BubbleSort = (arr) => {
    let noSwap = null;  // To optimize the algorithm: This help to avoid continuing looping when array has been sorted
    let n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        noSwap = true;
        for (let j = 0; j < n - i; j++) {  // minus i from n to avoid swap is sorted area
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // swap with destructuring assignment
                noSwap = false;
            }
        }
        if (noSwap)
            break;
    }
    console.log(arr);
}
