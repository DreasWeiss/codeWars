# Find the divisors!
7 kyu
[link to kata](https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>Create a function named <code>divisors</code>/<code>Divisors</code> that takes an integer <code>n &gt; 1</code> and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (<code>null</code> in C#, empty table in COBOL) (use <code>Either String a</code> in Haskell and <code>Result&lt;Vec&lt;u32&gt;, String&gt;</code> in Rust).</p>
<h4 id="example">Example:</h4>
<pre style="display: none;"><code class="language-c"><span class="cm-variable">divisors</span>(<span class="cm-number">12</span>); <span class="cm-comment">// results in {2, 3, 4, 6}</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">25</span>); <span class="cm-comment">// results in {5}</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">13</span>); <span class="cm-comment">// results in NULL</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">divisors</span>(<span class="cm-number">12</span>); <span class="cm-comment">// should return [2,3,4,6]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">25</span>); <span class="cm-comment">// should return [5]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">13</span>); <span class="cm-comment">// should return "13 is prime"</span>
</code></pre>
<pre style="display: none;"><code class="language-elixir"><span class="cm-variable">divisors</span>(<span class="cm-number">12</span>) <span class="cm-comment"># should return [2,3,4,6]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">25</span>) <span class="cm-comment"># should return [5]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">13</span>) <span class="cm-comment"># should return "13 is prime"</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">divisors</span><span class="cm-punctuation">(</span><span class="cm-number">12</span><span class="cm-punctuation">)</span><span class="cm-punctuation">;</span> <span class="cm-comment"># should return [2,3,4,6]</span>
<span class="cm-variable">divisors</span><span class="cm-punctuation">(</span><span class="cm-number">25</span><span class="cm-punctuation">)</span><span class="cm-punctuation">;</span> <span class="cm-comment"># should return [5]</span>
<span class="cm-variable">divisors</span><span class="cm-punctuation">(</span><span class="cm-number">13</span><span class="cm-punctuation">)</span><span class="cm-punctuation">;</span> <span class="cm-comment"># should return "13 is prime"</span>
</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">divisors</span> <span class="cm-number">12</span>   <span class="cm-comment">-- should return Right [2,3,4,6]</span>
<span class="cm-variable">divisors</span> <span class="cm-number">25</span>   <span class="cm-comment">-- should return Right [5]</span>
<span class="cm-variable">divisors</span> <span class="cm-number">13</span>   <span class="cm-comment">-- should return Left "13 is prime"</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">divisors</span>(<span class="cm-number">12</span>); <span class="cm-comment">#should return [2,3,4,6]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">25</span>); <span class="cm-comment">#should return [5]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">13</span>); <span class="cm-comment">#should return "13 is prime"</span>
</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">divisors</span>(<span class="cm-number">12</span>) <span class="cm-comment"># should return [2,3,4,6]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">25</span>) <span class="cm-comment"># should return [5]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">13</span>) <span class="cm-comment"># should return "13 is prime"</span>
</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="cm-variable">divisors</span>(<span class="cm-number">12</span>); <span class="cm-comment">// should return Ok(vec![2,3,4,6])</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">25</span>); <span class="cm-comment">// should return Ok(vec![5])</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">13</span>); <span class="cm-comment">// should return Err("13 is prime")</span>
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-variable">Kata</span>.<span class="cm-variable">Divisors</span>(<span class="cm-number">12</span>) <span class="cm-operator">=&gt;</span> <span class="cm-keyword">new</span> <span class="cm-type">int</span>[] {<span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">6</span>};
<span class="cm-variable">Kata</span>.<span class="cm-variable">Divisors</span>(<span class="cm-number">25</span>) <span class="cm-operator">=&gt;</span> <span class="cm-keyword">new</span> <span class="cm-type">int</span>[] {<span class="cm-number">5</span>};
<span class="cm-variable">Kata</span>.<span class="cm-variable">Divisors</span>(<span class="cm-number">13</span>) <span class="cm-operator">=&gt;</span> <span class="cm-atom">null</span>;
</code></pre>
<pre style="display: none;"><code class="language-php"><span class="cm-variable">divisors</span>(<span class="cm-number">12</span>); <span class="cm-comment">// =&gt; [2, 3, 4, 6]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">25</span>); <span class="cm-comment">// =&gt; [5]</span>
<span class="cm-variable">divisors</span>(<span class="cm-number">13</span>); <span class="cm-comment">// =&gt; '13 is prime'</span>
</code></pre>
<pre style="display: none;"><code class="language-cobol">      Divisors num <span class="cm-builtin">=</span> <span class="cm-number">12</span> <span class="cm-builtin">=</span><span class="cm-builtin">&gt;</span> result <span class="cm-builtin">=</span> [<span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">6</span>]
      Divisors num <span class="cm-builtin">=</span> <span class="cm-number">25</span> <span class="cm-builtin">=</span><span class="cm-builtin">&gt;</span> result <span class="cm-builtin">=</span> [<span class="cm-number">5</span>]
      Divisors num <span class="cm-builtin">=</span> <span class="cm-number">13</span> <span class="cm-builtin">=</span><span class="cm-builtin">&gt;</span> result <span class="cm-builtin">=</span> [] 
</code></pre>
