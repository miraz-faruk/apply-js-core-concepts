function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
    return true;
}
    else{
        return false;
    }
}

const year1 = isLeapYear(2000);
console.log(year1);
const year2 = isLeapYear(2009);
console.log(year2);
const year3 = isLeapYear(1952);
console.log(year3);
const year4 = isLeapYear(1971);
console.log(year4);
const year5 = isLeapYear(2024);
console.log(year5);