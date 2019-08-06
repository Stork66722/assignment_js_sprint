// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
    largestEl: function (array) {
        return Math.max.apply(Math, array);
    },

    reversed: function (string) {
        return string.split("").reverse().join("");
    },

    loudSnakeCase: function (string) {
        string = string.replace(/[^\w\s]/gi, '').replace(/ +(?= )/g, '').split(' ');
        string = string.map(function (el) {
            return el.charAt(0).toUpperCase() + el.slice(1);
        });
        return string.join("_");
    },

    compareArrays: function (arrayOne, arrayTwo) {
        let works = false
        if (arrayOne.length === arrayTwo.length) {
            for (i = 0; i < arrayOne.length; i++) {
                if (arrayOne[i] != arrayTwo[i]) {
                    break
                } else if (i === (arrayOne.length - 1)) {
                    result = true
                }
            }
        }
        return works
    },

    fizzBuzz: function () {
        // your code here
    },

    myMap: function () {
        // your code here
    },

    primes: function () {
        // your code here
    },
}
