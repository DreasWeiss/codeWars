# Sort with a sorting array
7 kyu
[link to kata](https://www.codewars.com/kata/59dc8288fc3c49cc3f000039/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>Sort an array according to the indices in another array.<br>It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.</p>
<pre><code class="language-javascript">    <span class="cm-variable">sort</span>([<span class="cm-string">'x'</span>, <span class="cm-string">'y'</span>, <span class="cm-string">'z'</span>], [<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">0</span>]) <span class="cm-operator">=&gt;</span> [<span class="cm-string">'z'</span>, <span class="cm-string">'x'</span>, <span class="cm-string">'y'</span>]
    
    <span class="cm-variable">sort</span>([<span class="cm-string">'z'</span>, <span class="cm-string">'x'</span>, <span class="cm-string">'y'</span>], [<span class="cm-number">0</span>, <span class="cm-number">2</span>, <span class="cm-number">1</span>]) <span class="cm-operator">=&gt;</span> [<span class="cm-string">'z'</span>, <span class="cm-string">'y'</span>, <span class="cm-string">'x'</span>]
</code></pre>
