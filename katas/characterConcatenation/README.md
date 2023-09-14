# Character Concatenation
7 kyu
[link to kata](https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript)
<br>
[my solution](./kata.js)

Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

```
charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
```