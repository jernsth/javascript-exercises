const reverseString = function(string) {
    let arr = Array.from(String(string));
    arr.reverse();
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
