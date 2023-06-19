# Object extend
5 kyu
[link to kata](https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb/train/javascript)
<br>
[my solution](./kata.js)

Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.

Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).
```
extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}
```