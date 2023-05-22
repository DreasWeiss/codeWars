# Reverse a number in any base
7 kyu
[link to kata](https://www.codewars.com/kata/6469e4c905eaefffd44b6504/train/javascript)
<br>
[my solution](./kata.js)

Task

Write a function which when given a non-negative integer n and an arbitrary base b, returns the number reversed in that base.

Examples

n=12 and b=2 return 3, because 12 in binary is "1100", which reverses to "0011", equivalent to 3 in decimal.
n=10 and b=5 return 2, because 10 in base-5 is "20", which reverses to "02", equivalent to 2 in decimal.
n=45 and b=30 return 451, because 45 in base-30 is "1F", which reverses to "F1", equivalent to 451 in decimal.
n=3 and b=4 return 3, because 3 in base-4 is "3", which reverses to "3", equivalent to 3 in decimal.
n=5 and b=1 return 5, because 5 in unary is "|||||", which reverses to "|||||", equivalent to 5 in decimal.
Note

The function should return an integer.
The base b will be greater or equal to 1.
Edge case: Base-1 is also used in this kata to represent the unary numeral system. Think of it as a system of tally marks. For example:
3 (decimal) -> ||| (unary)
5 (decimal) -> ||||| (unary)