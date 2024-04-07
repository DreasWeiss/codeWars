# Cogs 2
7 kyu
[link to kata](https://www.codewars.com/kata/59e72bdcfc3c4974190000d9/train/javascript)
<br>
[my solution](./kata.js)

Kata Task

You are given a list of cogs in a [gear train](https://en.wikipedia.org/wiki/Gear_train)

Each element represents the number of teeth of that cog

e.g. ```[100, 50, 25]``` means

- 1st cog has 100 teeth
- 2nd cog has 50 teeth
- 3rd cog has 25 teeth

If the nth cog rotates clockwise at 1 RPM what is the RPM of the cogs at each end of the gear train?

Notes

- no two cogs share the same shaft
- return an array whose two elements are RPM of the first and last cogs respectively
- use negative numbers for anti-clockwise rotation
- for convenience ```n``` is zero-based
- For C and NASM coders, the returned array will be ```free```'d.