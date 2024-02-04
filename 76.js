let count = Object.keys(map).length;

while (right <= s.length) {
    // found a valid substring
    if (count == 0) {

        // try to shift left boudary to the right, this means the very left character will be removed
        // because of this, we need to check whats the affect by removing that character,
        let current = s[left];

        // if this chacter is in our map, it means we ll need to find another one in the future
        if (map[current] != null) map[current]++;

        // * we must have the condition `>0` because for case like "BBBA...", count for B could be negative
        if (map[current] > 0) count++;

        let temp = s.substring(left, right+1)
        if (min == "") min = temp;
        else min = min.length<temp.length?min:temp;

        left++;
    } else {
        right++;
        let current = s[right];

        // decrease the count for this character
        if (map[current] != null) map[current]--;

        if (map[current] == 0) count--;
    }
}
return min;