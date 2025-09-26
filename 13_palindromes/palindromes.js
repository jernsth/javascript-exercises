const palindromes = function (string) {
    // remove whitespaces and dots.
    let strArr = string.toLowerCase().split("");
    strArr = strArr.filter((item) => item.match(/[a-z0-9]/));
    console.log(strArr);

    // Take two pointers starting at the left and the right of the array
    let pointer1 = 0;
    let pointer2 = strArr.length-1;

    // Let them run through array and check if they are the same
    result = true;
    for(let i = 0; i<Math.ceil(((strArr.length-1) / 2)); i++) {
        console.log(strArr[pointer1] + strArr[pointer2])
        if(strArr[pointer1] == strArr[pointer2]) {
            result = true;
            pointer1++;
            pointer2--;
        }
        else {
            return false;
        }
    }
    return result;
};

console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;
