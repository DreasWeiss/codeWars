# String cleaning
8 kyu
[link to kata](https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.</p>
<h3 id="examples-input---output">Examples (input -&gt; output)</h3>
<pre><code>'! !'                 -&gt; '! !'
'123456789'           -&gt; ''
'This looks5 grea8t!' -&gt; 'This looks great!'
</code></pre>
<p>Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters <code>~#$%^&amp;!@*():;"'.,?</code> all intact.</p>
