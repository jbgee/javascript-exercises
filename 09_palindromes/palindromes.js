const palindromes = function () {
    const totalText = arguments[0];
    const alphaText = totalText.split("").filter(letter => {
        return /^[a-z]$/i.test(letter.toLowerCase());
    });
    stringLength = alphaText.length;
    halfLength = Math.floor(stringLength/2);
    for(let i= 0; i<stringLength;i++){
        if(alphaText[i].toLowerCase()!==alphaText[stringLength-1-i].toLowerCase())
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
