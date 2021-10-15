const Merge = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            mergedArray.push(arr2[j])
            j++;
        }
        else {
            mergedArray.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

const MergeSort = (arr) => {
    if (arr.length <= 1)
        return arr;
    let mid = Math.floor(arr.length / 2);
    let leftArray = MergeSort(arr.slice(0, mid));
    let rightArray = MergeSort(arr.slice(mid));

    return Merge(leftArray, rightArray);
}


MergeSort([12, 1, 14, 89, 24, 4, 76, 19]);