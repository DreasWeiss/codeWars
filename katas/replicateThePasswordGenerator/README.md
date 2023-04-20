# Replicate the password generator
Beta
[link to kata](https://www.codewars.com/kata/63b1dec789ef8a3719a75ded/train/javascript)
<br>
[my solution](./kata.js)

> I broke my head with this kata and used to cheat to see the right answer [my tries is here](./try.js)

You are a respected criminal hired to break into a safe box. After some struggle you are finally in front of it.

The safe box is protected against multiple attempts so you have to input the exact password within the first tries otherwise the alarm will go off.

After some recon you discover that the owner uses his own password generator function (taking 3 arguments: a number key, a string and the password length) to create his own passwords and in order to get the correct password you have to replicate this function.

Task

Create a function genPasswd that accepts the following arguments key, str, pwLen.

The function must return the password value that matches the safe box password, use the examples bellow for better understanding.

Examples

Example No. 1
```
const key = 5;
const str = '0123456789';
const pwLen = 12;

const password = genPasswd(key, str, pwLen);
//Should return '546372819009'
```
Example No. 2
```
const key = 0;
const str = '0123456789#';
const pwLen = 15;

const password = genPasswd(key, str, pwLen);
//Should return '0#1928374655647'
```
As you can see in the examples above, the pasword length is delimited by the variable pwLen, the password is hash of str and it is determinated somehow by key.