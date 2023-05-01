function ageGroups(){
    let yearOfBirth = prompt("Please enter your year of birth");
    let currentYear = new Date().getFullYear();
    
    let age = currentYear - yearOfBirth;

    if(age < 18 && age > -1){
        console.log('You are a minor.');
    }
    else if(age >= 18 && age <= 36){
        console.log('You are a youth.');
    }
    else if(age > 36){
        console.log('You are an elder.');
    }
    else{
        console.log('Please enter a valid year of birth next time');
    }

    
}

ageGroups();