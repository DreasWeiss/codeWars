# Are we alternate?
6 kyu
[link to kata](https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>Create a function <code>isAlt()</code> that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.</p>
<pre><code class="language-javascript"><span class="cm-variable">isAlt</span>(<span class="cm-string">"amazon"</span>)
<span class="cm-comment">// true</span>
<span class="cm-variable">isAlt</span>(<span class="cm-string">"apple"</span>)
<span class="cm-comment">// false</span>
<span class="cm-variable">isAlt</span>(<span class="cm-string">"banana"</span>)
<span class="cm-comment">// true</span>
</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">isAlt</span> <span class="cm-string">"amazon"</span> <span class="cm-keyword">-&gt;</span> <span class="cm-builtin">True</span>
<span class="cm-variable">isAlt</span> <span class="cm-string">"apple"</span>  <span class="cm-keyword">-&gt;</span> <span class="cm-builtin">False</span>
<span class="cm-variable">isAlt</span> <span class="cm-string">"banana"</span> <span class="cm-keyword">-&gt;</span> <span class="cm-builtin">True</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">is_alt</span>(<span class="cm-string">"amazon"</span>)  <span class="cm-comment"># True</span>
<span class="cm-variable">is_alt</span>(<span class="cm-string">"apple"</span>)   <span class="cm-comment"># False</span>
<span class="cm-variable">is_alt</span>(<span class="cm-string">"banana"</span>)  <span class="cm-comment"># True</span>
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-variable">Kata</span>.<span class="cm-variable">IsAlt</span>(<span class="cm-string">"amazon"</span>)
<span class="cm-comment">// true</span>
<span class="cm-variable">Kata</span>.<span class="cm-variable">IsAlt</span>(<span class="cm-string">"apple"</span>)
<span class="cm-comment">// false</span>
<span class="cm-variable">Kata</span>.<span class="cm-variable">IsAlt</span>(<span class="cm-string">"banana"</span>)
<span class="cm-comment">// true</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">isAlt</span> <span class="cm-string">'amazon'</span>
<span class="cm-comment"># true</span>
<span class="cm-variable">isAlt</span> <span class="cm-string">'apple'</span>
<span class="cm-comment"># false</span>
<span class="cm-variable">isAlt</span> <span class="cm-string">'banana'</span>
<span class="cm-comment"># true</span>
</code></pre>
<p>Arguments consist of only lowercase letters.</p>
