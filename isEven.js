function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

const muNumber = isEven(303);
const myNumber = isEven(12280);