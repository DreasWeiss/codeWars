# Block Dude
7 kyu
[link to kata](https://www.codewars.com/kata/64ef45cbcb89751e91ddbf9f/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>In <strong>Block Dude</strong>, the main character can climb boxes, but only if they are stacked in a particular way so that he is able to climb them one at a time. More specifically, he can only climb UP or DOWN one box at a time.</p>
<p>Let <code>1</code> represent the boxes, and <code>0</code> represent the background. Write a function that returns <code>True</code> if block dude can travel from the left side to the right side of the screen given his constraints and <code>False</code> otherwise.</p>
<pre><code class="language-python">[
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>],
  [<span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>]
] <span class="cm-variable">➞</span> <span class="cm-keyword">True</span>
<span class="cm-comment"># Since block dude can travel across these boxes </span>
<span class="cm-comment"># Note: X's are just to show walking path and are not part of the actual input.</span>

[
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>]
] <span class="cm-variable">➞</span> <span class="cm-keyword">False</span>
<span class="cm-comment"># stuck at column 3, being unable to climb 2 boxes at once.</span>

[
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>]
] <span class="cm-variable">➞</span> <span class="cm-keyword">False</span>
<span class="cm-comment"># Block dude can't jump down 2 blocks.</span>

[
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-variable">X</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>]
] <span class="cm-variable">➞</span> <span class="cm-keyword">True</span>
<span class="cm-comment"># First column can have a starting box</span>

[
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>]
] <span class="cm-variable">➞</span> <span class="cm-keyword">False</span>
<span class="cm-comment"># Block dude cannot climb first column if it has more than one boxes</span>

[
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>],
  [<span class="cm-variable">X</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>],
  [<span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>]
]  <span class="cm-variable">➞</span> <span class="cm-keyword">True</span>
<span class="cm-comment"># Last column can have more than one boxes.</span>


[              <span class="cm-variable">X</span> 
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
  [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">0</span>, <span class="cm-variable">X</span>],
  [<span class="cm-variable">X</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-variable">X</span>, <span class="cm-number">1</span>],
  [<span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>, <span class="cm-number">1</span>]
]  <span class="cm-variable">➞</span> <span class="cm-keyword">True</span>
<span class="cm-comment"># Block dude can jump over a box on the top layer.</span>
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>First column can have a starting box</li>
<li>Block dude cannot climb first column if it has more than one boxes</li>
<li>Last column can have more than one boxes.</li>
<li>Block dude can jump over a box on the top layer.</li>
</ul>
