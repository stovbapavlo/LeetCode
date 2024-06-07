/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    sentence = sentence.split(" ");

    for(let i = 0; i < sentence.length;i++){
        for(let root of dictionary){
            if(root === sentence[i].slice(0, root.length)){
                sentence[i] = root
            }
        }
    }
    return sentence.join(" ")
}