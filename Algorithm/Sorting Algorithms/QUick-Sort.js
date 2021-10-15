let Partition = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    var swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
}

function QuickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let partitionIndex = Partition(arr, left, right);
        QuickSort(arr, left, partitionIndex - 1);
        QuickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
console.log(QuickSort([3, 1, 4, 6, 5, 8, 7, 9]));
