function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 60;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet:', nanaFeet);