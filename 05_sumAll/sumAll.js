const sumAll = function(numOne,numTwo) {
    if (typeof numOne != 'number' || typeof numTwo != 'number')
        return 'ERROR';
    if (numOne <0 || numTwo <0)
        return 'ERROR';
    
    if (numOne < numTwo){
        loopStart = numOne;
        loopEnd = numTwo;
    }   
    else{
        loopStart = numTwo;
        loopEnd = numOne;
    }
    sum = 0;
    for (i = loopStart;i <= loopEnd; i ++)
        sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
