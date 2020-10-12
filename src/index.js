module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }
    let strToReturn = '';
    let numbersAsText = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const decadesAsText = {
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety'
    };
    const hundreds = Math.floor(number / 100);
    if (hundreds !== 0) {
        strToReturn += numbersAsText[hundreds - 1] + ' hundred ';
    }

    number = number % 100;

    if (number > 0) {
        if (number < 20) {
            strToReturn += numbersAsText[number - 1];
            return strToReturn;
        } else {
            const decades = Math.floor(number / 10);
            strToReturn += decadesAsText[decades]  + ' ';
            number = number % 10;
        }
    }

    if (number > 0) {
        strToReturn += numbersAsText[number - 1];
    }

    return strToReturn.trim();
};
