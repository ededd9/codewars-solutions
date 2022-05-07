///////////////[8 KYU PROBLEMS]
/*[Prompt Name] Correct the mistakes of the character recognition software
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/
function correct(string) {
  let obj = {
    0: 'O',
    1: 'I',
    5: 'S',
  };
  //simple regex to replace keys[0 1 5] with associated values in obj
  return string.replace(/[015]/g, character => obj[character]);
}

/*[Prompt Name] Grasshopper - Personalized Message
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/
function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

/*[Prompt Name] Total amount of points
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/
function points(games) {
  let points = 0;
  //for each loop to go through each game in games array, compare game[0] which is (x) with game[2] which is (y)
  //and add points based on rules
  games.forEach(game =>
    game[0] > game[2] ? (points += 3) : game[0] === game[2] ? points++ : points
  );
  return points;
}
/*[Prompt Name] Cat years,Dog years
/*I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/
var humanYearsCatYearsDogYears = function (humanYears) {
  let dogYears = 15;
  let catYears = 15;
  if (humanYears >= 2) {
    dogYears += 9;
    catYears += 9;
  }
  let i = 2;
  while (i < humanYears) {
    dogYears += 5;
    catYears += 4;
    i++;
  }
  return [humanYears, catYears, dogYears];
};
/*[Prompt Name] Sort and Star
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
function twoSort(s) {
  //sorts array of string alphabetically, takes first element in array
  //and splits each char individually to join them together with ***
  return s.sort()[0].split('').join('***');
}
/*[Promp Name] Difference of Volumes of Cuboids
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.
*/
function findDifference(a, b) {
  return Math.abs(b[0] * b[1] * b[2] - a[0] * a[1] * a[2]);
  // return Math.abs(b.reduce((a,b) => a*b) - a.reduce((a,b) => a*b));
}

/*[Prompt Name] Find the first non-consecutive number
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.
*/

function firstNonConsecutive(arr) {
  let first;
  for (let i = 0; i < arr.length; i++) {
    //checking if consecutive number(arr[i+1]) is equal to its previous(arr[i] + 1)
    if (arr[i + 1] === arr[i] + 1) {
      continue;
    } else {
      //once first non-consecutive number is found, var first is set equal then loop breaks
      first = arr[i + 1];
      break;
    }
  }
  //returs first if it's not undefined else return null
  return first !== undefined ? first : null;
}
/*[Prompt Name] All Star Code Challenge #18
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
*/
function strCount(str, letter) {
  //('Hello',l) -> ['He','','o'] -> 3 - 1 -> 2
  return str.split(letter).length - 1;
}

/*[Prompt Name] Thinkful - Logic Drills: Traffic light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.
*/

function updateLight(current) {
  let obj = {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  };
  return obj[current];
}

/*[Prompt Name] If you can't sleep, just count sheep!!
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
var countSheep = function (num) {
  let newstr = '';
  for (let i = 0; i < num; i++) {
    newstr += `${i + 1} sheep...`;
  }
  return newstr;
};

///////////////[7 KYU PROBLEMS]
/*[Prompt Name] Find the capitals
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/
var capitals = function (word) {
  let arr = [];
  for (const letter of word) {
    if (letter === letter.toUpperCase()) {
      arr.push(word.indexOf(letter));
    }
  }
  return arr;
};
/*[Prompt Name] Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s) {
  let news = s.split(' ');
  let newarr = [];
  for (let i = 0; i < news.length; i++) {
    newarr.push(news[i].length);
  }
  return newarr.sort((a, b) => a - b)[0];
}
/*[Prompt Name] Make a funciton that does arithmetic!
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
*/
function arithmetic(a, b, operator) {
  let dict = {
    divide: a / b,
    multiply: a * b,
    add: a + b,
    subtract: a - b,
  };
  return dict[operator];
}

/*[Prompt Name] Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
/*[Prompt Name] Find the middle element
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
*/
function gimme(triplet) {
  //used .splice to create a shallow copy
  let newarr = triplet.splice();
  //sorted so can easily call the middle element
  newarr.sort((a, b) => a - b);
  //returns index of middle element from original array
  return triplet.indexOf(newarr[1]);
}
///////////////[6 KYU PROBLEMS]
/*[Prompt Name] Sort th odd
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
function sortArray(array) {
  //used two important methods, .filter to filter the odd numbers in the array 'array'
  //used .sort to sort the odd numbers in an ascending order into the array 'oddarray
  let oddarray = array
    .filter(x => x % 2 === 1 || x % 2 === -1)
    .sort((a, b) => a - b);
  //.map to return a new version of the origin array where if the current num is even then keep the same value if not, shift a num from the oddarray
  return array.map(num => (num % 2 === 0 ? num : oddarray.shift()));
}
/*[Prompt Name] Who likes it?
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}
/*[Prompt Name] Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string) {
  var newstring = string.split(' ');
  let newarr = [];
  for (let i = 0; i < newstring.length; i++) {
    if (newstring[i].length >= 5) {
      newarr.push(reverseStr(newstring[i]));
    } else {
      newarr.push(newstring[i]);
    }
  }
  return newarr.join(' ');
}
// helper function to reverse string
function reverseStr(str) {
  let newstr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}
/*[Prompt Name] Highest Scoring Word
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/
function high(x) {
  x = x.split(' ');
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    let total = 0;
    for (let j = 0; j < x[i].length; j++) {
      total += x[i].charCodeAt(j) - 96;
    }
    arr.push(total);
  }
  let highest = Math.max(...arr);
  //   return arr.indexOf(highest)
  return x[arr.indexOf(highest)];

  /*[Prompt Name] Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
  function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  /*[Prompt Name] Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
  function isPangram(string) {
    //created an array with all lower case characters and used .match method
    //in order to have the array consisting of only alphabet characters
    let letters = string.toLowerCase().match(/[a-z]/g);
    //Created a set to limit each alphabet characters appearance by 1 time
    //and used brackets and spread in order to convert the set into an array
    let alphabet = [...new Set(letters)];
    //Lastly, the alphabets length is equal to 26, return true
    return alphabet.length == 26;
  }
  /*[Prompt Name] Find the odd int
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
  function findOdd(A) {
    let obj = {};
    //looped through parameter A to check if number exists in obj, if T add to its count, if F set count to 1
    A.forEach(num => {
      obj[num] ? obj[num]++ : (obj[num] = 1);
    });
    console.log(obj);
    //looped through obj to check for an odd value, once found, returns its key
    for (const [key, value] of Object.entries(obj)) {
      if (value % 2 === 1) {
        return key;
      }
    }
  }
  /*[Prompt Name] Playing with digits
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³+ 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/
  function digPow(n, p) {
    let numbers = n.toString();
    let sum = 0;
    //used a loop to iterate through each number in n and add it to the sum
    //with each number being multipled with p + i
    for (let i = 0; i < numbers.length; i++) {
      sum += Math.pow(numbers[i], p + i);
    }
    //returns "k" if sum % n is divisible, -1 if not
    if (sum % n === 0) return parseInt(sum / n);
    return -1;
  }
  /*[Prompt Name] Find the unique number
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
*/
  function findUniq(arr) {
    //returns the number that is only found once in the array arr
    //as finding a number with its first occurence and last occurence being equal makes it a unique number
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }

  /*[Prompt Name] Counting Duplicates
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
  function duplicateCount(text) {
    //set all characters to lower case to avoid any case sensitive problems
    //set each element in 'text' to a string with .split('')
    text = text.toLowerCase().split('');
    let count = 0;
    let dict = {};
    //created an object to keep track the count of characters in 'text'
    text.forEach(char => (!dict[char] ? (dict[char] = 1) : dict[char]++));
    //looped through object to check for values > 1, if so, add to count
    for (const [key, value] of Object.entries(dict)) {
      if (value > 1) {
        count++;
      }
    }
    return count;
  }
  /*[Prompt Name] Unique In Order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
  var uniqueInOrder = function (iterable) {
    let newarr = [];
    for (let i = 0; i < iterable.length; i++) {
      //checking if current element is not equal to next element, in other words, checking if
      //current element is unique, if true, then push current element into new array else do nothing
      if (iterable[i] !== iterable[i + 1]) {
        newarr.push(iterable[i]);
      }
    }
    return newarr;
  };

  /*[Prompt Name] Two Sum
Write a function that takes an array of numbers (integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value.
 The indices of these items should then be returned in a tuple like so: (index1, index2).
*/
  function twoSum(numbers, target) {
    //nested forloops to find indexes that equal target
    //ex: numbers = [1,2,3] , target = [4]
    //[1 = i, 2 = j, 3] => i(1) + j(2) != 4 so NEXT
    //[1 = i, 2 , 3 = j] => i(1) + j(3) == 4 so return [i,j]
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i, j];
        }
      }
    }
  }
}
///////////////[5 KYU PROBLEMS]
/*[Prompt Name] String incrementer
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/
function incrementString(strng) {
  //.replace method to replace any num to ''
  var chars = strng.replace(/[0-9]/g, '');
  //.slice method to return a copy of the strng array that only contain numbers
  var str = strng.slice(chars.length) || '0';
  //calculating difference between lengths to know how many 0's must be added to the var str
  var lenDif = strng.length - chars.length;
  str = (parseInt(str) + 1).toString();
  //as long as the current length of the str value(always starts at 1) it not greater than the difference in lengths between the numbers
  //and character then keep adding a "0" to the front of the str value
  //example: while(1 < 3) => "1" = "0" + "1" => str = "01", while(2 < 3) => "01" = "0" + "1" => str = "001", END LOOP SINCE 3 < 3 condition is not true
  while (str.length < lenDif) {
    str = '0' + str;
  }
  return chars.concat(str);
}
