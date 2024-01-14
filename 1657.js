

function swap(str, index1, index2){
    let strArray = str.split('');
    let temp = strArray[index1];
    strArray[index1] = strArray[index2];
    strArray[index2] = temp;

    return strArray.join('');

}
function transform(str, char1, char2){
    let strArray = str.split('');
    for (let i in strArray) {
        if (strArray[i] === char1) {
            strArray[i] = char2;
        } else if (strArray[i] === char2) {
            strArray[i] = char1;
        }
    }
    return strArray.join('');
}