# A Simple Music Encoder
5 kyu
[link to kata](https://www.codewars.com/kata/58db9545facc51e3db00000a/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>You have been hired by a major MP3 player manufacturer to implement a new music compression standard.
In this kata you will implement the ENCODER, and its companion kata deals with the <a href="https://www.codewars.com/kata/a-simple-music-decoder" data-turbolinks="false" target="_blank">DECODER</a>. It can be considered a harder version of <a href="https://www.codewars.com/kata/range-extraction" data-turbolinks="false" target="_blank">Range Extraction</a>.</p>
<h1 id="specification">Specification</h1>
<p>The input signal is represented as an array of integers. Several cases of regularities can be shortened.</p>
<ul>
<li>A sequence of 2 or more identical numbers is shortened as <code>number*count</code></li>
<li>A sequence of 3 or more consecutive numbers is shortened as <code>first-last</code>. This is true for both ascending and descending order</li>
<li>A sequence of 3 or more numbers with the same interval is shortened as <code>first-last/interval</code>. Note that the interval does NOT need a sign</li>
<li>Compression happens left to right</li>
</ul>
<h1 id="examples">Examples</h1>
<ul>
<li><code>[1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]</code>
is compressed to
<code>"1,3-5,7-11,14,15,17-20"</code></li>
<li><code>[0, 2, 4, 5, 7, 8, 9]</code>
is compressed to
<code>"0-4/2,5,7-9"</code></li>
<li><code>[0, 2, 4, 5, 7, 6, 5]</code>
is compressed to
<code>"0-4/2,5,7-5"</code></li>
<li><code>[0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]</code>
is compressed to
<code>"0-4/2,5,7-5,5*4"</code></li>
</ul>
<h1 id="input">Input</h1>
<p>A non-empty array of integers</p>
<h1 id="output">Output</h1>
<p>A string of comma-separated integers and sequence descriptors</p>
