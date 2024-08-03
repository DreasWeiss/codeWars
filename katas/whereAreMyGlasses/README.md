# Where Are My Glasses?
7 kyu
[link to kata](https://www.codewars.com/kata/6512c786a07f6a000fe7a274/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p><em>Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!</em></p>
<p>Please help me out by showing me the <strong>index</strong> in the list which contains my glasses. They look like two capital Os, with at least one dash in between!</p>
<ul>
<li>This means that both <code>O--O</code> and <code>O------------O</code> are valid glasses, but not <code>O----#--O</code> for example!</li>
<li>Search thoroughly, you might find my glasses in places such as <code>'dustO-Odust'</code></li>
</ul>
<h3 id="examples">Examples</h3>
<pre><code class="language-python">[<span class="cm-string">"phone"</span>, <span class="cm-string">"O-O"</span>, <span class="cm-string">"coins"</span>, <span class="cm-string">"keys"</span>] <span class="cm-variable">➞</span> <span class="cm-number">1</span>

[<span class="cm-string">"OO"</span>, <span class="cm-string">"wallet"</span>, <span class="cm-string">"O##O"</span>, <span class="cm-string">"O----O"</span>] <span class="cm-variable">➞</span> <span class="cm-number">3</span>

[<span class="cm-string">"O--#--O"</span>, <span class="cm-string">"dustO---Odust"</span>, <span class="cm-string">"more dust"</span>] <span class="cm-variable">➞</span> <span class="cm-number">1</span>
</code></pre>
<h3 id="notes">Notes</h3>
<ul>
<li>All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...</li>
<li>All elements in the list are strings.</li>
</ul>
