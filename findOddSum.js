function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

function getOddNumbersOfAnArray(myNumbers){
    const oddNumbers = [];
    for(let i = 0; i < myNumbers.length; i++){
        const index = i;
        const element = myNumbers[index];
        if(element % 2 === 1){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [10, 14, 87, 65, 99, 88, 67];
console.log('My Array: ', myNumbers);

const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log('Array with Odd Elements: ',oddNumbers);

const sumOfOddNumbers = getSumOfAnArray(oddNumbers);
console.log('Sum of odd elements: ',sumOfOddNumbers);
