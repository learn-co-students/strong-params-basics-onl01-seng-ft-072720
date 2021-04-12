let intToRoman = function(s) {
    let intToRoman = {
        I: 1,
        V: 5,
        X:10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = '';

    for (key in map) {
        const repeatCounter = Math.floor(num / intToRoman[key]);

        if (repeatCounter !== 0) {
            result += key.repeat(repeatCounter);
        }

        num %= intToRoman[key]

        if (num === 0) {
            return result;
        }
    }
    return result;

}