let n = 7;
let matches = 0;
let teams = 0;

while(n > 1)
{
    matches += Math.floor(n / 2);

    teams = Math.round(n / 2);
    n = teams;
    console.log(n);
}
console.log(matches);


