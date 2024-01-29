const palindromes = function (original) {
    original=original.toLowerCase().replace(/[^a-z0-9]/g,"");
    return (original===original.split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
