//

let arr = [1,2,3,4,100,6,7,8,9];

function Search(key){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === key)
        return i;
    }
 
    return -1;
}

function LinearSearch(key){
    let value = Search(key);

    if(value !== -1){

    value++;
    console.log("Found in position "+ value);// position start from1 not 0


    }
    else
    console.log("Not Found");
}

LinearSearch(100);