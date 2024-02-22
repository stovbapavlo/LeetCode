let n = 3;
let trust = [[1,3],[2,3],[3,1]]


let findJudge = function(n , trust){
    if(trust.length === 1){
        return trust[0][1]
    }

    let trustPerson = trust[0][1]



    for(let i = 1; i < trust.length - 1; i++){
        if(trustPerson === trust[i][1]) {
            n--;
        }
        else if(n === 1){
            return trustPerson;
        }

    }
}

console.log(findJudge(3, [[1,3],[2,3],[3,1]]))
