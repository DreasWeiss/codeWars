# Clothes size number converter
7 kyu
[link to kata](https://www.codewars.com/kata/667dfbaa4570b2db26aedc8c/train/javascript)
<br/>
[my solution]('./kata.js')
<br/>
<br/>
<h2 id="description">Description</h2>
<p>You have clothes international size as text (<code>xs</code>, <code>s</code>, <code>xxl</code>).<br>Your goal is to return European number size as a number from that size .</p>
<p>Notice that there is arbitrary amount of <em>modifiers</em> (<code>x</code>), excluding <code>m</code> size, and input can be any string.</p>
<h2 id="linearity">Linearity</h2>
<p>Base size for <em>medium (<code>m</code>)</em> is <code>38</code>.<br>(then, <em>small (<code>s</code>)</em> is <code>36</code>, and <em>large (<code>l</code>)</em> is <code>40</code>)</p>
<p>The scale is linear; modifier <code>x</code> continues that by adding or subtracting <code>2</code> from resulting size.</p>
<h2 id="invalid-cases">Invalid cases</h2>
<p>Function should handle wrong/invalid sizes.</p>
<p>Valid input has any base size (<code>s</code>/<code>m</code>/<code>l</code>) and any amount of modifiers (<code>x</code>) before base size (like <code>xxl</code>).<br>Notice that you cannot apply modifier for <code>m</code> size, consider that case as invalid!<br>Anything else is disallowed and should be considered as invalid (<code>None</code> for Python, <code>0, false</code> for Go, <code>null</code> for JavaScript).</p>
<p>Invalid examples: <code>xxx</code>, <code>sss</code>, <code>xm</code>, <code>other string</code></p>
<h2 id="valid-examples">Valid Examples</h2>
<p><code>xs</code>: 34<br><code>s</code>: 36<br><code>m</code>: 38<br><code>l</code>: 40<br><code>xl</code>: 42  </p>
