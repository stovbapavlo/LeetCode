var closeStrings = function(word1, word2) {
    if(word1.length!==word2.length)return false
    if (word1 == word2) return true
    let ar1=Array(26).fill(0)
    let ar2=Array(26).fill(0)
    for(i=0;i<word1.length;i++)
    {
        ar1[word1.charCodeAt(i) - 97]++
        ar2[word2.charCodeAt(i) - 97]++
    }
    for(let i=0;i<ar1.length;i++){
        if((ar1[i]==0 && ar2[i]>0) ||  (ar1[i]>0 && ar2[i]==0))return false
    }
    return  ar1.sort().join("") === ar2.sort().join("")
};