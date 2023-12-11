let arr = [1,2,3,3]
let counter = 1;

let maxCounter = 1;
let maxElement = arr[0];


for(let i = 0; i < arr.length; i++){

    if(arr[i] == arr[i - 1]){
        counter++
    }
    else{
        if(maxCounter < counter){
            maxCounter = counter;
            maxElement = arr[i - 1];

        }
        counter = 1;
    }
}
if(maxCounter < counter){
    maxElement = arr[arr.length -1]
}

console.log(maxElement);