let points = [[1,1],[3,4],[-1,0]];

counter = 0;

for(let i = 0; i < points.length - 1; i++)
{
    const[x1, y1] = points[i];
    const[x2, y2] = points[i + 1];

    console.log(Math.abs(y2 - y1));
    console.log(Math.abs(x2 - x1));

}