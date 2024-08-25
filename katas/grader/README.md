# Grader
8 kyu
[link to kata](https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>Create a function that takes a number as an argument and returns a grade based on that number.</p>
<table>
<thead>
<tr>
<th>Score</th>
<th>Grade</th>
</tr>
</thead>
<tbody><tr>
<td>Anything greater than 1 or less than 0.6</td>
<td>"F"</td>
</tr>
<tr>
<td>0.9 or greater</td>
<td>"A"</td>
</tr>
<tr>
<td>0.8 or greater</td>
<td>"B"</td>
</tr>
<tr>
<td>0.7 or greater</td>
<td>"C"</td>
</tr>
<tr>
<td>0.6 or greater</td>
<td>"D"</td>
</tr>
</tbody></table>
<p>Examples:</p>
<pre><code>grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"
</code></pre>
