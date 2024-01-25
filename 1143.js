let text1 = "abcde", text2 = "ace"

let res = '';

for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
        if(text1[i] === text2[j]){
            res += text1[i] ;
            break;
        }

    }

}

console.log(res.length)