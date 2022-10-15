const fibonacci = function() {
    let fibonacci = [1,1];
    const index = Number(arguments[0]);
    if (index < 0){
        return "OOPS";
    }
    else {
        let sequenceLength = fibonacci.length;
        while(fibonacci.length <= index){
            sequenceLength = fibonacci.length;

            fibonacci.push(fibonacci[sequenceLength-1]+fibonacci[sequenceLength-2]);
        }
        return fibonacci[sequenceLength-1];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
