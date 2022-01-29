//[8 KYU]
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
