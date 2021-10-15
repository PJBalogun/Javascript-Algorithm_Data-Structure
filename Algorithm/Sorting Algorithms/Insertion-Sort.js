//Insertion sort

function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var temp = arr[i];  //number to be inserted into sorted area.
        for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;// Note var j is a global variable so it can outside the loop.
        //console.log(arr);
    }
    console.log(arr);
}
