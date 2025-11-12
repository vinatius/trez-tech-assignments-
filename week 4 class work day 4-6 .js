class name {
    var name="";
    var score= 0;
    Bool idCard;
    monthNumber=0;


//challenge 1
let age=18
let idCard=true

        if(age>=18 && idCard === true){
            console.log("you can Enter the Club")
    } else{
        console.log("You Cannot Enter the Club")
    }



// challenge 2
let score= 100
if(score>=100 && score<=90){
    console.log("Excellent");
} 
elseif(score>= && score<=){
    console.log("very Good");
}
elseif(score>=50 && score<=70){
    console.log("Pass");
}
else (score<50){
    console.log("Fail")
}


// challenge 3
let monthNumber=10
switch(monthNumber){
    case 1: "january";
    break;

    case 2: "February";
    break;

    case 3: "march";
    break;

    case 4: "April"
    break;

    case 5: "May";
    break;

    case 6: "june";
    break;

    case 7: "July";
    break;

    case 8: "August";
    break;

    case 9: "September"
    break;

    case 10: "October";
    break;

    case 11: "November";
    break;

    case 12: "December"
    break;

    default: "invalid input enter a number between 1-12";
}
}


/// DAY 2

// QUESTION 1 

let string = "javascript";
let length = 0;
for(let i=string.length-1; i>=0; i--){
    console.log(i);
}

// QUESTION 2

    let s="Javascript is fun";
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.length.indexOf(vowels) !== -1) {
            count++;
        }
        console.log(count);
    }


// QUESTION 3

let numb= [12,3,45,7,22];
let maxNumb="";

for(let i=0; i>=numb; i++){
    if(i>maxNumb) maxNumb=i
    console.log(maxNumb);

}

// DAY 3

// QUESTION 1 

function greet(name){
    console.log("hello"+name);
}
/*test greet("amina")
OUTOUT: hello amina */


// QUESTION 2

function addNumbers(a,b){
    return a+b;
}
/*TEST: addNumbrers(2,8)
OUTPUT: 10 */

//QUESTION 3

function isEven(number){
    if(number % 2 == 0){
        console.log(number+"is an Even Number");
    } else{
        console.log(number + "is an Odd Number")
    }
}

