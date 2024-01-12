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


