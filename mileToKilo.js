function milesToKilo(miles){
    const kiloMeter = miles * 1.609;
    return kiloMeter;
}

const dhakaToKhulnaMiles = 250;
const dhakaToKhulnaKilo = milesToKilo(dhakaToKhulnaMiles);

console.log("Dhaka to Khulna", dhakaToKhulnaKilo, "Kilometer");