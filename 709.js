LeetCode Logo
Problem List
0

avatar
Premium
Description
Description
Accepted
Editorial
Editorial
Solutions
Solutions
Submissions
Submissions
Code
Code Sample
Code Sample


Testcase
Test Result
Test Result
JavaScript
Auto





12345678910111213141516
} else {
    result += s.charAt(i);
}
}
return result;
};
Saved

1
"Hello"
"here"
"LOVELY"
All Submissions

Accepted
Pavlo
Pavlo
submitted at May 28, 2024 10:22

Editorial

Solution
Runtime
53
ms
Beats
49.91%
of users with JavaScript
    Memory
48.94
MB
Beats
36.86%
of users with JavaScript
    Code
JavaScript
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            result += String.fromCharCode(ascii + 32);
        } else {
            result += s.charAt(i);
        }
    }
    return result;
};
View more
More challenges
2129. Capitalize the Title
Write your notes here
Select related tags
0/5

Tag
