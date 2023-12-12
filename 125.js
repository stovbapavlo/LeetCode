let s = "A man, a plan, a canal: Panama";

const str = s.replace(/[^\w\s]/g, '').replace(/\s+/g, '').toLowerCase();

const pal = str.split('').reverse().join('')

console.log(pal);