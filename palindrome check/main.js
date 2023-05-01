const words = ['toys', 'books', 'racecar', 'simple', 'civic'];

function palindrome(words){
    for(i = 0; i < words.length; i++){
        let reversedWord = words[i].split('').reverse().join('');
   
         if(reversedWord === words[i]) {
            return words[i];
         } else {
            return '';
         }
    }
}

console.log(palindrome(words))
