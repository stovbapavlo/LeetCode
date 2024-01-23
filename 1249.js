function isEquals(str1 , str2) {
    return str1 === str2;

}

function isUnique(str) {
    let set = new Set(str);
    return set.size === str.length;
}

function generateSubsequences(arr, current, index){
    if(index === arr.length) {

        if(isUnique(current) && current.length > maxLength) {
            maxLength = current.length
        }
        return maxLength;
    }
    generateSubsequences(arr, current, index + 1);

    generateSubsequences(arr, current+ arr[index], index + 1);

    return maxLength;
}
let arr = ["un","iq","ue"];


