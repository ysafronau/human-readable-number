const oneDigit = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

const twoDigits = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

const tens = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    // [0 - 9]
    if (number < 10) return oneDigit[number];
    // [10 - 19]
    if (number < 20) return twoDigits[number % 10];
    // [20,30,40,50,60,70,80,90]
    if (number < 100 && number % 10 === 0) return tens[number / 10 - 2];
    // [21-29,31-39,41-49,51-59,61-69,71-79,81-89,91-99]
    if (number < 100 && number % 10 !== 0)
        return `${tens[Math.floor(number / 10) - 2]} ${oneDigit[number % 10]}`;
    // [100,200,300,400,500,600,700,800,900]
    if (number < 1000 && number % 100 === 0)
        return `${oneDigit[number / 100]} hundred`;
    // [101-109,201-209,301-309,401-409,501-509,601-609,701-709,801-809,901-909]
    if (number < 1000 && number % 100 < 10)
        return `${oneDigit[Math.floor(number / 100)]} hundred ${
            oneDigit[number % 100]
        }`;
    // [110-119,210-219,310-319,410-419,510-519,610-619,710-719,810-819,910-919]
    if (number < 1000 && number % 100 < 20)
        return `${oneDigit[Math.floor(number / 100)]} hundred ${
            twoDigits[(number % 100) % 10]
        }`;
    // [120,130,140,150,160,170,180,190,220, ... 950,960,970,980,990]
    if (number < 1000 && number % 10 === 0)
        return `${oneDigit[Math.floor(number / 100)]} hundred ${
            tens[Math.floor((number % 100) / 10) - 2]
        }`;
    // [...others]
    if (number < 1000)
        return `${oneDigit[Math.floor(number / 100)]} hundred ${
            tens[Math.floor((number % 100) / 10) - 2]
        } ${oneDigit[number % 10]}`;
};
