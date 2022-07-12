function secondlargestele(arr){
    let largestnum = arr[0];
    let secondlargest = arr[0];

    for (let i=0; i<arr.length; i++){
        if (arr[i] > largestnum){
            secondlargest = largestnum;
            largestnum = aarr[i]; 
        }else if (arr[i] > secondlargest){
            secondlargest = arr[i];
        }
    }

    return secondlargest;

}

let arr = [1,2,3,4,5,6,7,8]
secondlargestele(arr)
