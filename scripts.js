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

    compareArrays: function (arr1, arr2) {
        let index = 0;
        let equal = true;
        while (index < arr1.length) {
            if (arr1[index] !== arr2[index]) {
                equal = false;
            }
            index += 1;
        }
        return equal;
    },

    fizzBuzz: function (num) {
        string = [1];
        for (i = 2; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                string[(i - 1)] = "FIZZBUZZ";
            } else if (i % 3 === 0) {
                string[(i - 1)] = "FIZZ";
            } else if (i % 5 === 0) {
                string[(i - 1)] = "BUZZ";
            } else {
                string[(i - 1)] = i;
            }
        }
        return string;
    },

    myMap: function (array) {
        var newArray = [];
        for (i = 0; i < array.length; i++) {
            newArray[i] = (array[i] * 2);
        }
        return newArray
    },

    primes: function (number) {
        var string = [];
        for (i = 2; i < number; i++) {
            var factors = 0;

            for (e = 1; e <= i; e++) {
                if (i % e === 0) {
                    factors++;
                }
            }

            if (factors === 2) {
                string.push(i);
            }
        }
        return string;
    },
}
