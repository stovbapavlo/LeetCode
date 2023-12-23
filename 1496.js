

let path = "NESWW"

function isPathCrossing(path){
    const visited = new Set();

    let x = 0;
    let y = 0;

    visited.add(`${x},${y}`)

    for(let i = 0; i < path.length; i++){

        switch (path[i]){
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case'E':
                x++;
                break;
            case'W':
                x--;
                break;
        }
        const currentCoordinate = `${x},${y}`;

        if(visited.has(currentCoordinate)){
            return true;
        }

        visited.add(currentCoordinate);
    }
    return false;

}
console.log(isPathCrossing(path));