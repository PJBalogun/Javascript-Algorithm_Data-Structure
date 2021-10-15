//Implement selection sort.
function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest])
                smallest = j;
        }
        if (i !== smallest) { // To avoid smallest swapping with itself. When no other element is larger than it.
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        }
    }
    console.log(arr);
}

