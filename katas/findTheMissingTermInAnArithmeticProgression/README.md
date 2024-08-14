# Find the missing term in an Arithmetic Progression
6 kyu
[link to kata](https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP.  Find the missing term.  </p>
<p>You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.</p>
<h2 id="example">Example</h2>
<pre><code class="language-php"><span class="cm-variable">findMissing</span>([<span class="cm-number">1</span>, <span class="cm-number">3</span>, <span class="cm-number">5</span>, <span class="cm-number">9</span>, <span class="cm-number">11</span>]) <span class="cm-operator">==</span> <span class="cm-number">7</span>
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-variable">Kata</span>.<span class="cm-variable">FindMissing</span>(<span class="cm-keyword">new</span> <span class="cm-variable">List</span><span class="cm-operator">&lt;</span><span class="cm-type">int</span><span class="cm-operator">&gt;</span> {<span class="cm-number">1</span>, <span class="cm-number">3</span>, <span class="cm-number">5</span>, <span class="cm-number">9</span>, <span class="cm-number">11</span>}) <span class="cm-operator">=&gt;</span> <span class="cm-number">7</span>
</code></pre>
<pre style="display: none;"><code class="language-fsharp"><span class="cm-variable">findMissing</span> [<span class="cm-operator">|</span> <span class="cm-number">1</span>; <span class="cm-number">3</span>; <span class="cm-number">5</span>; <span class="cm-number">9</span>; <span class="cm-number">11</span> <span class="cm-operator">|</span>] <span class="cm-operator">=</span> <span class="cm-number">7</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">find_missing</span>([<span class="cm-number">1</span>, <span class="cm-number">3</span>, <span class="cm-number">5</span>, <span class="cm-number">9</span>, <span class="cm-number">11</span>]) <span class="cm-operator">==</span> <span class="cm-number">7</span>
</code></pre>
<pre style="display: none;"><code class="language-swift"><span class="cm-variable">find_missing</span><span class="cm-punctuation">(</span><span class="cm-punctuation">[</span><span class="cm-number">1</span><span class="cm-punctuation">,</span> <span class="cm-number">3</span><span class="cm-punctuation">,</span> <span class="cm-number">5</span><span class="cm-punctuation">,</span> <span class="cm-number">9</span><span class="cm-punctuation">,</span> <span class="cm-number">11</span><span class="cm-punctuation">]</span><span class="cm-punctuation">)</span> <span class="cm-operator">=</span><span class="cm-operator">=</span> <span class="cm-number">7</span>
</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">findMissing</span>([<span class="cm-number">1</span>, <span class="cm-number">3</span>, <span class="cm-number">5</span>, <span class="cm-number">9</span>, <span class="cm-number">11</span>]) <span class="cm-operator">==</span> <span class="cm-number">7</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-variable">find_missing</span>((<span class="cm-keyword">const</span> <span class="cm-type">int</span>[]){<span class="cm-number">1</span>,<span class="cm-number">3</span>,<span class="cm-number">5</span>,<span class="cm-number">9</span>,<span class="cm-number">11</span>}, <span class="cm-number">5</span>)  <span class="cm-operator">=&gt;</span> <span class="cm-number">7</span>
</code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="cm-tag">nums:</span>  <span class="cm-tag">dw</span>  <span class="cm-number">1</span>,<span class="cm-number">3</span>,<span class="cm-number">5</span>,<span class="cm-number">9</span>,<span class="cm-number">11</span>

<span class="cm-keyword">mov</span> <span class="cm-builtin">rdi</span>, nums
<span class="cm-keyword">mov</span> <span class="cm-builtin">rsi</span>, <span class="cm-number">5</span>
<span class="cm-keyword">call</span> find_missing    <span class="cm-comment">; EAX &lt;- 7</span>
</code></pre>
<pre style="display: none;"><code class="language-factor"><span class="cm-keyword">{</span> <span class="cm-number">1 3</span> <span class="cm-number">5 9</span> <span class="cm-number">11</span> <span class="cm-keyword">}</span> <span class="cm-variable">find-missing</span> <span class="cm-comment">! =&gt; 7</span>
</code></pre>
<p>PS: This is a sample question of the facebook engineer challenge on interviewstreet.
I found it quite fun to solve on paper using math, derive the algo that way.
Have fun!</p>
