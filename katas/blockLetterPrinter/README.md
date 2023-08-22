# Block Letter Printer
6 kyu
[link to kata](https://www.codewars.com/kata/6375587af84854823ccd0e90/train/javascript)
<br>
[my solution](./kata.js)

Write a function that accepts a string consisting only of ASCII letters and space(s) and returns that string in block letters of 5 characters width and 7 characters height, with one space between characters.

The string should be formatted in a way that when passed to Javascripts' console.log() function shows the desired output (see below for example).

There's a preloaded map called alpha which you can use. Keys are lower case letters and the space.

The block letters should consist of corresponding capital letters.
It's irrelevant whether input consists of lower or upper case letters.
Any leading and/or trailing spaces in input should be ignored.
Empty strings or such containing only spaces should return an empty string.
The remaining spaces (between letters and/or words) are to be treated as any other character. This means that there will be six spaces in output for a space in input, or a multiple of six, if there were more spaces - plus the one from preceding character!
Trailing spaces should be removed in the resulting string.
console.log(blockPrint("heLLo WorLD"));
should result in an output that looks like this:
```
H   H EEEEE L     L      OOO        W   W  OOO  RRRR  L     DDDD
H   H E     L     L     O   O       W   W O   O R   R L     D   D
H   H E     L     L     O   O       W   W O   O R   R L     D   D
HHHHH EEEEE L     L     O   O       W W W O   O RRRR  L     D   D
H   H E     L     L     O   O       W W W O   O R R   L     D   D
H   H E     L     L     O   O       W W W O   O R  R  L     D   D
H   H EEEEE LLLLL LLLLL  OOO         W W   OOO  R   R LLLLL DDDD
```
As most of the characters can be printed in many different ways (think of Q, F or W), here is what they're expected to look like:
```
 AAA  BBBB   CCC  DDDD  EEEEE FFFFF  GGG  H   H IIIII JJJJJ K   K L     M   M N   N  OOO  PPPP   QQQ  RRRR   SSS  TTTTT U   U V   V W   W X   X Y   Y ZZZZZ
A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     MM MM NN  N O   O P   P Q   Q R   R S   S   T   U   U V   V W   W X   X Y   Y     Z
A   A B   B C     D   D E     F     G     H   H   I       J K K   L     M M M N   N O   O P   P Q   Q R   R S       T   U   U V   V W   W  X X   Y Y     Z
AAAAA BBBB  C     D   D EEEEE FFFFF G GGG HHHHH   I       J KK    L     M   M N N N O   O PPPP  Q   Q RRRR   SSS    T   U   U V   V W W W   X     Y     Z
A   A B   B C     D   D E     F     G   G H   H   I       J K K   L     M   M N   N O   O P     Q Q Q R R       S   T   U   U V   V W W W  X X    Y    Z
A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     M   M N  NN O   O P     Q  QQ R  R  S   S   T   U   U  V V  W W W X   X   Y   Z
A   A BBBB   CCC  DDDD  EEEEE F      GGG  H   H IIIII JJJJ  K   K LLLLL M   M N   N  OOO  P      QQQQ R   R  SSS    T    UUU    V    W W  X   X   Y   ZZZZZ
```
Please leave a rating if you liked this kata!