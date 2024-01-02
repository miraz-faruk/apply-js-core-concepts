function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const herNumber = isEven(303);
console.log(herNumber);
const myNumber = isEven(12280);
console.log(myNumber);