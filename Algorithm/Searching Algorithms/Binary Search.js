// Recursion   Searching

function RecursiveSearch(arr, key,min,max){

    // Middle index of the array
    let mid = Math.floor((max+min)/2);

    // Check to see if max is less than min 
    // Since the min can only be less or equal to the max.
    // But the increase in min(i.e mid+1) when key is greater mid can state otherwise
    if(max < min)
    return -1;

    //when key equals middle element
    if(key === arr[mid])
    return mid;
    
    //when key lesser than middle element
    if(key < arr[mid])
    return Search(arr, key,min,mid-1);

     //when key greater than middle element
    if(key > arr[mid])
    return Search(arr, key,mid+1,max);


    // when key has no match
    return -1;  
}


// Iterative Search

function IterativeSearch(arr, key,min,max){

    while(max >= min){

        // Middle index of the array
     let mid = Math.floor((max+min)/2);

        //when key equals middle element
    if(key === arr[mid])
    return mid;
    
    //when key lesser than middle element
    if(key < arr[mid])
     max = mid-1;

     //when key greater than middle element
    if(key > arr[mid])
    min = mid + 1;
  
    }

    return -1;
}
function BinarySearch(arr , key){
    let max = arr.length-1;
    
    let index = IterativeSearch(arr, key , 0, max);

    if(index !== -1){
        index++;
        console.log("Found at position "+ index);// position start from1 not 0
        
    }

    else
    console.log("Not Found");
}

let arr = [2,4,6,8,10,12,14];
BinarySearch(arr, 4);