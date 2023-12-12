var isPalindrome = function(s) {
    if(s  == '')
    {
        return '';
    }

    const str = s.replace(/[^a-z0-9]/gi,'').toLowerCase();

    const pal = str.split('').reverse().join('');

    return str == pal;

};