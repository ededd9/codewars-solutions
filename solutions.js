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
