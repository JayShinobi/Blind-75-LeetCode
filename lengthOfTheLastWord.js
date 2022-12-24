/* leet code length of last word 

*/
var lengthOfLastWord = function(s) {
    s=s.trim().split(" ")
    return s.slice(-1).join("").length
};

