const temperatures = [73,74,75,71,69,72,76,73];

let res = [];
let stack = []

for(let i = 0; i < temperatures.length; i++){
    while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
        let idx = stack.pop();
        res[idx] = i - idx;
    }
    stack.push(i);
}

while(stack.length > 0) {
    res[stack.pop()]= 0;
}
console.log(res);