# Maximum Length Difference
7 kyu
[link to kata](https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>You are given two arrays <code>a1</code> and <code>a2</code> of strings. Each string is composed with letters from <code>a</code> to <code>z</code>.
Let <code>x</code> be any string in the first array and <code>y</code> be any string in the second array. </p>
<p>  <code>Find max(abs(length(x) − length(y)))</code></p>
<p>If <code>a1</code> and/or <code>a2</code> are empty return <code>-1</code> in each language
except in Haskell (F#) where you will return <code>Nothing</code> (None).</p>
<h4 id="example">Example:</h4>
<pre><code>a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --&gt; 13
</code></pre>
<h4 id="bash-note">Bash note:</h4>
<ul>
<li>input : 2 strings with substrings separated by <code>,</code></li>
<li>output: number as a string</li>
</ul>
