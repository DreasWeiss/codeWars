# Basic JS - Building a calculator
7 kyu
[link to kata](https://www.codewars.com/kata/529f2d1c403a58f660000656/train/javascript)
<br>
[my solution](./kata.js)

Let's build a calculator.

This is very basic Javascript kata.

The test expects you to provide a Calculator object with the following methods:
```
Calculator.add()
Calculator.subtract()
Calculator.multiply()
Calculator.divide()
```
Each method expects two arguments, so for instance:
```
Calculator.add(1,4) should return 5.
```
Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.