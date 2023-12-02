function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log(year, 'is leap year');
    }
    else{
        console.log(year, 'is not leap year');
    }
}

isLeapYear(2000);
isLeapYear(2009);
isLeapYear(1952);
isLeapYear(1971);