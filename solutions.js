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
