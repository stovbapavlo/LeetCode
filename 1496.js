

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
/*const positions = new Set()
    let x = 0;
    let y = 0;
    const navigate = {
        "N": { x: 0, y: +1 },
        "S": { x: 0, y: -1 },
        "W": { x: -1, y: 0 },
        "E": { x: +1, y: 0 },
    }
    positions.add("0-0")
    for (const direction of path) {
        x += navigate[direction].x;
        y += navigate[direction].y;

        if (positions.has(`${x}-${y}`)) {
            console.log(positions);
            return true
        }

        positions.add(`${x}-${y}`);
    }

    return false;*/