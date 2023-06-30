# Color to Grayscale
7 kyu
[link to kata](https://www.codewars.com/kata/649c4012aaad69003f1299c1/train/javascript)
<br>
[my solution](./kata.js)

Grayscale colors in RGB color model are colors that have the same values for Red, Green and Blue. For example, #606060 is a grayscale color, while #FF0055 is not.

In order to correctly convert a color to grayscale, one has to use luminance Y for Red, Green and Blue components. One can calculate luminance Y through the formula introduced in the NTSC standard:
```
Y = 0.299 * R + 0.587 * G + 0.114 * B
```
This formula closely represents the average person's relative perception of the brightness of red, green, and blue light.

Given a color in 6-digit hexidecimal notation #RRGGBB in upper case, convert it to grayscale #YYYYYY. The answer should be a string representing the color code in 6-digit hexidecimal notation in upper or lower case.

Round the value of luminance Y to the closest integer.

All inputs will be valid.