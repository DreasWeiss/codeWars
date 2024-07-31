# Find the missed number
6 kyu
[link to kata](https://www.codewars.com/kata/5a1d86dbba2a142e040000ee/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>In this kata, you will be given a string containing numbers from <strong>a</strong> to <strong>b</strong>, one number can be missing from these numbers, then the string will be shuffled, you're expected to return an array of all possible missing numbers.</p>
<h2 id="examples-input--output">Examples (input =&gt; output)</h2>
<p>Here's a string with numbers from 1 - 21, its missing one number and the string is then shuffled, your'e expected to return a list of possible missing numbers.</p>
<pre><code>1, 21, "2198765123416171890101112131415"  =&gt; [ 12, 21 ]
</code></pre>
<p>You won't be able to tell if its <code>21</code> or <code>12</code>, you must return all possible values in an array.</p>
<h2 id="another-example">Another Example</h2>
<pre><code>5, 10, "578910" =&gt; [ 6 ]
</code></pre>
<h4 id="documentation">Documentation:</h4>
<p>The parameters will be in order two numbers and a string:</p>
<ul>
<li>start  <strong>=&gt;</strong> from</li>
<li>stop   <strong>=&gt;</strong>  to</li>
<li>string <strong>=&gt;</strong>  numbers from <strong>start</strong> to <strong>stop</strong> in string form (shuffled), but missing one number</li>
</ul>
<p>Note:</p>
<ul>
<li>if there're no missing numbers return an empty list</li>
</ul>
<p>Too easy ? Try <a href="https://www.codewars.com/kata/5b6b67a5ecd0979e5b00000e" data-turbolinks="false" target="_blank">Range of Integers in an Unsorted String</a></p>
