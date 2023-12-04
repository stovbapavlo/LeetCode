let num = "6777133339";

let counter = 0;
let i = 0;
while(counter !== 2){
    if(num[i] === num[i + 1]){
        counter++;
    }
    console.log(num[i])
    console.log(counter + `\n`)
    i++;
}
console.log(num[i].repeat(3));

