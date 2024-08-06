# Lottery Ticket
6 kyu
[link to kata](https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<p>Time to win the lottery!</p>
<p>Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot. </p>
<p>Example ticket:</p>
<pre><code class="language-javascript">[ [ <span class="cm-string">'ABC'</span>, <span class="cm-number">65</span> ], [ <span class="cm-string">'HGR'</span>, <span class="cm-number">74</span> ], [ <span class="cm-string">'BYHT'</span>, <span class="cm-number">74</span> ] ]
</code></pre>
<pre style="display: none;"><code class="language-cpp">{ { <span class="cm-string">"ABC"</span>, <span class="cm-number">65</span> }, { <span class="cm-string">"HGR"</span>, <span class="cm-number">74</span> }, { <span class="cm-string">"BYHT"</span>, <span class="cm-number">74</span> } }
</code></pre>
<pre style="display: none;"><code class="language-c">{ { <span class="cm-string">"ABC"</span>, <span class="cm-number">65</span> }, { <span class="cm-string">"HGR"</span>, <span class="cm-number">74</span> }, { <span class="cm-string">"BYHT"</span>, <span class="cm-number">74</span> } }
</code></pre>
<pre style="display: none;"><code class="language-julia">[ [ <span class="cm-string">"ABC</span><span class="cm-string">"</span>, <span class="cm-number">65</span> ], [ <span class="cm-string">"HGR</span><span class="cm-string">"</span>, <span class="cm-number">74</span> ], [ <span class="cm-string">"BYHT</span><span class="cm-string">"</span>, <span class="cm-number">74</span> ] ]
</code></pre>
<pre style="display: none;"><code class="language-rust">[ ( <span class="cm-string">"</span><span class="cm-string">ABC</span><span class="cm-string">"</span>, <span class="cm-number">65</span> ), ( <span class="cm-string">"</span><span class="cm-string">HGR</span><span class="cm-string">"</span>, <span class="cm-number">74</span> ), ( <span class="cm-string">"</span><span class="cm-string">BYHT</span><span class="cm-string">"</span>, <span class="cm-number">74</span> ) ]
</code></pre>
<p>To do this, you must first count the 'mini-wins' on your ticket.  Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.</p>
<p>Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.</p>
<p>All inputs will be in the correct format. Strings on tickets are not always the same length.</p>
