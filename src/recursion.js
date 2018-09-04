/* jshint esversion: 6 */
// Solve the following prompts using recursion.
/////
// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  //base case
  if(n < 0) {  //is n = 5, 0? no =>
    return null;
  }
  //passing test cases
  if(n === 0) {
    return 1;
  }
  //how we get to the base case
  return n * factorial(n - 1)
};



// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  //if array length < 1, return 0
  //if array length === 1, return array[0]
  //return array[0] + sum(array.slice(1))
  if(array.length < 1) {
    return 0;
  }
  if(array.length === 1) {
    return array[0];
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // base case
  var sum = 0;
    for (var i = 0; i < array.length; i++) {
      if(typeof array[i] === 'number') {
        sum += array[i];
        } else {
        sum += arraySum(array[i]);
      }
    }
  return sum;

};

//[1,[2,3]] for(var i =0; i < array.length; i++)
// write some inner function with an array sum --> this becomes out recursive function

// this function loops through a given array; checks to see if array is a number, if so; add it.

// when we run into an array that is not a number, we invoke our recursive function again.

// 4. Check if a number is even.
var isEven = function(n) {
  if(n < 0) {
    n = Math.abs(n);
  }
  if(n === 1) {
    return false;
  }
  if(n === 0) {
    return true;
  }
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45 // 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0 = 45
// sumBelow(7); // 21

var sumBelow = function(n) {
    //base case
  if(n === 0) {
    return 0;
  }
    //for negative numbers
  if(n < 0) {
    return sumBelow(n + 1) + n + 1;
  };

  return sumBelow(n - 1) + n - 1;
  };

// 6. Get the integers within a range (x, y).
// range(2,9); // [2,3,4,5,6,7,8]
var range = function(x, y) {
  if ( x > y ) {
    if( x - y <= 1) {
      return [];
    }
    return range(x, y + 1).concat([y + 1]);
  }

  if ( y - x <= 1 ) {
    return [];
  }
  return range(x, y - 1).concat([y - 1]);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case
  if ( exp === 0) {
    return 1;
  }
  //case for negative numbers
  if ( exp < 0) {
    return (1/base) * exponent(base, exp + 1).toFixed(5);
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base case
 if (n === 2 || n === 1){
  return true;
 }
 if (n === 0) {
  return false;
 }

 if (n % 2 === 0) {
  n  = (n / 2);
 } else {
  return false;
 }
 return powerOfTwo(n);
};

// 9. Write a function that reverses a string.
var reverse = function(string) { // g n i r t s

  //base case
  if (string === '') {
    return ''
  }
  return string.charAt(string.length -1).concat(reverse(string.slice(0, -1)))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  if (string === '' || string.length === 1) {
    return true
  }
  if (string.charAt(0) === string.charAt(string.length - 1)) {
    return palindrome(string.substr(1, string.length -2));
  }
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
/*
expect(modulo(-79, 82)).to.equal(-79 % 82);
expect(modulo(-275, -502)).to.equal(-275 % -502);
expect(modulo(-275, -274)).to.equal(-275 % -274);
expect(modulo(-4, 2)).to.equal(-4 % 2);
*/


////-7 % -2         -1
////-7 % -8         -7
var modulo = function(x, y) {
  if(y === 0) {
    return NaN;
  }

  if(x === 0) {
    return 0;
  }

  if(x < 0 && y < 0) {
    if(x > y) {
      return x;
    }
    return modulo(x - y, y)
  }

  if(x < 0 && y > 0) {
    if(x + y > 0) {
      return x;
    }
    return modulo(x + y, y)
  }
  if(x < y) {
    return x;

  }

  return modulo(x - y, y);
};
//There are TOO MANY conditions



// 12. Write a function that multiplies two numbers without using the operator or
// Math methods.

var multiply = function(x, y) {
  if(y === 0) {
    return 0;
  }
  if(y < 0 && x < 0) {
    return (0 - x) + multiply(0 - x, 0 - y - 1);
  }
  if(y < 0 && x > 0) {
    if(x === 0) {
      return 0;
    }
    return y + multiply(y, x - 1)
  }
  if(y > 0 && x < 0) {
    return x + multiply(x, y - 1);
  }
  return x + multiply(x, y - 1);
};
// not passing for negatives (questions during JS:Advanced)

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

/*
expect(divide(2, 1)).to.equal(~~(2 / 1));
expect(divide(17, 5)).to.equal(~~(17 / 5));
expect(divide(78, 453)).to.equal(
);
expect(divide(-79, 82)).to.equal(~~(-79 / 82));
expect(divide(-275, -582)).to.equal(~~(-275 / -582));
expect(divide(0, 32)).to.equal(~~(0 / 32));
expect(divide(0, 0)).to.be.NaN;
*/

var divide = function(x, y) {
  if(y === 0) {
    return NaN;
  }

  if(x === 0) {
    return 0;
  }

  if(x < 0 && y < 0) {
    if(x > y) {
      return 0;
    }
  }
  if(x < 0 && y > 0) {
    if(x + y > 0) {
      return 0;
    }
    return 1 + divide(x + y, y)
  }
  if(x < y) {
    return 0;
  }
  return 1 + divide(x - y, y);
};

//need help for division accumulator

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recx ursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
/*

expect(gcd(4,36)).to.equal(4);
expect(gcd(24,88)).to.equal(8);
expect(gcd(339,17)).to.equal(1);
expect(gcd(126,900)).to.equal(18);

*/
var gcd = function(x, y) {
  //base
  if (x < 0 || y < 0) {
    return null;
  }

  if (! y) {
    return x
  }

  return gcd(y, x % y)
}

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //basecase
   if (str1.length === 0 && str2.length === 0) {
    return true;
   }

   if (str1.charAt(0) === str2.charAt(0)) {
    return compareStr(str1.slice(1), str2.slice(1))
   } else {
    return false;
   }

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
// base case
  if(str.length === 0) {
    return [];
  }
  if ( str.length >= 1) {
    return [str.charAt(0)].concat(createArray(str.slice(1)));
  }


};

// 17. Reverse the order of an array
var reverseArr = function(array) {
   if (array.length === 0) {
    return [];
  }
  return [array[array.length -1]].concat(reverseArr(array.slice(0, array.length -1)));

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base case
  if (length === 0) {
    return [];
  }
  //recursive
  if (length > 0) {
    return [value].concat(buildList(value, length - 1));
  }

};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  // base case
  if (n === 0){
    return [];
  }
  //if statement for 3 && 5
  if(n % 5 === 0 && n % 3 === 0) {
    return fizzBuzz(n-1).concat('FizzBuzz');
  }

  //if statement for 3
  if(n % 3 === 0) {
    return fizzBuzz(n-1).concat('Fizz');
  }

  //if statement for 5's
  if(n % 5 === 0) {
    return fizzBuzz(n-1).concat('Buzz');
  }

  //given fizzBuzz(5)
  return fizzBuzz(n - 1 ).concat(JSON.stringify(n));
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
     //base case
     if (array.length === 0){
      return 0;
     }

     if(array[0] === value) {
      return 1 + countOccurrence(array.slice(1, array.length), value)
     } else {
      return countOccurrence(array.slice(1, array.length), value)
     }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //base
  if (array.length === 0) {
    return [];
  }

  return [callback(array[0])].concat(rMap(array.slice(1, array.length), callback))
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  if(typeof obj[key] === 'object') {
    return countKeysInObj(obj[key])
  }
  if(obj.hasOwnProperty(key)) {
    return 1 + countKeysInObj();
  }
  else{
    return countKeysInObj()
  }
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
