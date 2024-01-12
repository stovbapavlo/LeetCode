/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {

    let a = s.slice(0,s.length/2), b = s.slice(s.length/2);
    let count = 0, vowels = "aeiouAEIOU";

    for (let i = 0; i < a.length; i++) {
        if (vowels.includes(a[i])) count++;
        if (vowels.includes(b[i])) count--;
    }

    return count === 0;
};

/*
let  s = "textbook";
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

let a = s.slice(0, s.length / 2);
let b = s.slice(s.length / 2, s.length);

let counterA = 0;
let counterB = 0;

for(const words of vowels){
    for(const char of a){
        if(char === words){
            counterA++;
        }
    }
    for(const char of b){
        if(char === words){
            counterB++
        }
    }
}


*/
