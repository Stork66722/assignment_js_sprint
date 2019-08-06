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

    fizzBuzz: function (numbers) {
        let numbers = [];
        let index = 1;
        while (index <= number) {
            if (index % 3 === 0 && index % 5 !== 0) {
                numbers.push("FIZZ");
            } else if (index % 5 === 0 && index % 3 !== 0) {
                numbers.push("BUZZ");
            } else if (index % 3 === 0 && index % 5 === 0) {
                numbers.push("FIZZBUZZ");
            } else {
                numbers.push(index);
            }
            index += 1;
        }
        return numbers;
    },

    myMap: function () {
        // your code here
    },

    primes: function () {
        // your code here
    },
}
