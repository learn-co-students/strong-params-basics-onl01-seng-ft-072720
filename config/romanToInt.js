let romanToInt = function(S) {
    let romanToInt = {
        I: 1,
        V: 5,
        X:10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000

    };

    let total = 0;

    for (let i = o; i < s.length; i++) {

        let currentInt = romanToInt[s.charAt(i)];
        let nextInt = romanToInt[s.charAt(i + 1)];

        if (nextInt) {
            if (currentInt >= nextInt) {
                total += currentInt
            } else {
                total += (nextInt - currentInt)
                i++;
            }
        } else {
            total += currentInt;
        }
    }
    return total;
};