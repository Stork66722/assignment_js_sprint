// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    return array.sort().pop();
  },
  
  reversed: function(string){  
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(string){
    string = string.replace(/[^\w\s]/gi, '').replace(/ +(?= )/g,'').split(' ');
    string = string.map(function(el) {
      return el.charAt(0).toUpperCase() + el.slice(1);
    });
    return string.join("_");
  },

  compareArrays: function(){ 
    // your code here (replace the return)
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}