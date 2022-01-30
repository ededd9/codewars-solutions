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
///////////////[6 KYU PROBLEMS]
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
