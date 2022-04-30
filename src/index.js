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
    if (number < 10) return oneDigit[number];
    if (number < 20) return twoDigits[number % 10];
    if (number < 100 && number % 10 === 0) return tens[number / 10 - 2];
    if (number < 100 && number % 10 !== 0)
        return `${tens[Math.floor(number / 10) - 2]} ${oneDigit[number % 10]}`;
    if (number < 1000 && number % 100 === 0)
        return `${oneDigit[number / 100]} hundred`;
    if (number < 1000 && number % 100 < 10)
        return `${oneDigit[Math.floor(number / 100)]} hundred ${
            oneDigit[number % 100]
        }`;
    if (number < 1000 && number % 100 < 20)
        return `${oneDigit[Math.floor(number / 100)]} hundred ${
            twoDigits[(number % 100) % 10]
        }`;
    if (number < 1000 && number % 10 === 0)
        return `${oneDigit[Math.floor(number / 100)]} hundred ${
            tens[Math.floor((number % 100) / 10) - 2]
        }`;
    if (number < 1000)
        return `${oneDigit[Math.floor(number / 100)]} hundred ${
            tens[Math.floor((number % 100) / 10) - 2]
        } ${oneDigit[number % 10]}`;
};
