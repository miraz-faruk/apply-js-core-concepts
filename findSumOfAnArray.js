function findSumOfAnArray(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const numbers = [10, 32, 256, 29, 45, 71, 90, 50, 24];
findSumOfAnArray(numbers);