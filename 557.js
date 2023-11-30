let s = "Let's take LeetCode contest";

console.log(s.split(' ').map(word => word.split('').reverse().join('')).join(' '));