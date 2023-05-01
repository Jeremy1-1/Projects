const anArray = ['d', 3, 4, 't', 'e', 9, 8, 'p'];

function sortedItems(array){
    let evens = [];
    let odds = [];
    let chars = [];

    for(i = 0; i < array.length; i++){
        if(anArray[i] % 2 === 0){
            evens.push(anArray[i])
        }
        else if(anArray[i] % 2 === 1){
            odds.push(anArray[i])
        }
        else {
            chars.push(anArray[i])
        }
    }

    return {
        even : evens.sort(),
        odd : odds.sort(),
        char : chars.sort()
    }
}

console.log(sortedItems(anArray));