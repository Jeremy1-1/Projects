function fizzBuzz(x,y) {
    const combined = x.length + y.length;
    
    if(combined % 3 === 0 && combined % 5 === 0){
        return 'FizzBuzz';
    }
    else if(combined % 3 === 0){
            return 'Fizz';
    }
    else if(combined % 5 === 0){
        return 'Buzz';
    }
    else {
        return "Neither Fizz nor Buzz";
    }
}

let fizzBuzz = fizzBuzz("trees","friendship");