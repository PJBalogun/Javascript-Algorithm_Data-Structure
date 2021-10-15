//Implement Radix Sort

let getDigit = (digit, i) => {
    let stringDigit = digit.toString();
    if (stringDigit.length - 1 < i)
        return 0;
    else {
        let index = Number(stringDigit[stringDigit.length - i - 1]);
        return index;
    }

}


let digitCount = (num) => {
    if (num === 0)
        return 1;
    return num.toString().length;
}

let mostDigits = (nums) => {
    let maxDigit = 0;
    for (const num of nums) {
        maxDigit = Math.max(maxDigit, digitCount(num));
    }
    return maxDigit;
}

let RadixSort = (arr) => {
    let maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            let indexDigitBucket = getDigit(arr[i], k);

            digitBuckets[indexDigitBucket].push(arr[i]);
        }
        console.log(digitBuckets);
        console.log(arr = [].concat(...digitBuckets));
    }
}

RadixSort([1234, 1345, 1, 67]);

