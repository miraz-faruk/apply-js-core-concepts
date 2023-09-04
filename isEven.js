function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
}

const muNumber = isEven(303);
const myNumber = isEven(12280);