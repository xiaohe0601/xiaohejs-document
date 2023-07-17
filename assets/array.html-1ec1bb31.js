import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as n,b as s,d as t,e}from"./app-e62d2832.js";const r={},c={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"相关信息",-1),u=n("p",null,"作者：小何同学",-1),k=n("h3",{id:"arrayutils-flat2tree",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#arrayutils-flat2tree","aria-hidden":"true"},"#"),s(" ArrayUtils.flat2tree")],-1),m=e(`<h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><ul><li><p><code>array</code> (any[])：扁平数组</p></li><li><p><code>[options]</code> (<a href="#iflat2treeoptions">IFlat2TreeOptions</a>)：配置项</p></li></ul><h4 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h4><h5 id="iflat2treeoptions" tabindex="-1"><a class="header-anchor" href="#iflat2treeoptions" aria-hidden="true">#</a> IFlat2TreeOptions</h5><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>节点唯一标识属性名</td><td>string</td><td>-</td><td>id</td></tr><tr><td>parentKey</td><td>父节点唯一标识属性名</td><td>string</td><td>-</td><td>pid</td></tr><tr><td>processor</td><td>节点数据处理器</td><td>(item: T) =&gt; T</td><td>-</td><td><code>(item) =&gt; (item)</code></td></tr></tbody></table><h4 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h4><p><code>T[]</code>：树形结构数组</p><details class="hint-container details"><summary>使用示例（点击展开查看）</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test1&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test2&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test3&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test4&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test5&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test6&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

ArrayUtils<span class="token punctuation">.</span><span class="token function">flat2tree</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt;</span>
<span class="token comment">// [{</span>
<span class="token comment">//   id: 1,</span>
<span class="token comment">//   pid: 0,</span>
<span class="token comment">//   name: &quot;test1&quot;,</span>
<span class="token comment">//   children: [{</span>
<span class="token comment">//     id: 2,</span>
<span class="token comment">//     pid: 1,</span>
<span class="token comment">//     name: &quot;test2&quot;,</span>
<span class="token comment">//     children: [{</span>
<span class="token comment">//       id: 3,</span>
<span class="token comment">//       pid: 2,</span>
<span class="token comment">//       name: &quot;test3&quot;</span>
<span class="token comment">//     }]</span>
<span class="token comment">//   }]</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 4,</span>
<span class="token comment">//   pid: 0,</span>
<span class="token comment">//   name: &quot;test4&quot;,</span>
<span class="token comment">//   children: [{</span>
<span class="token comment">//     id: 5,</span>
<span class="token comment">//     pid: 4,</span>
<span class="token comment">//     name: &quot;test5&quot;</span>
<span class="token comment">//   }]</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 6,</span>
<span class="token comment">//   pid: 0,</span>
<span class="token comment">//   name: &quot;test6&quot;</span>
<span class="token comment">// }]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="arrayutils-tree2flat" tabindex="-1"><a class="header-anchor" href="#arrayutils-tree2flat" aria-hidden="true">#</a> ArrayUtils.tree2flat</h3>`,9),v=e(`<h4 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h4><ul><li><p><code>array</code> (any[])：树形结构数组</p></li><li><p><code>[options]</code> (<a href="#itree2flatoptions">ITree2FlatOptions</a>)：配置项</p></li></ul><h4 id="类型-1" tabindex="-1"><a class="header-anchor" href="#类型-1" aria-hidden="true">#</a> 类型</h4><h5 id="itree2flatoptions" tabindex="-1"><a class="header-anchor" href="#itree2flatoptions" aria-hidden="true">#</a> ITree2FlatOptions</h5><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>childrenKey</td><td>子节点集合属性名</td><td>string</td><td>-</td><td>children</td></tr><tr><td>processor</td><td>节点数据处理器</td><td>(item: T) =&gt; T</td><td>-</td><td><code>(item) =&gt; (item)</code></td></tr></tbody></table><h4 id="返回-1" tabindex="-1"><a class="header-anchor" href="#返回-1" aria-hidden="true">#</a> 返回</h4><p><code>T[]</code>：扁平数组</p><details class="hint-container details"><summary>使用示例（点击展开查看）</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test3&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test4&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test5&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test6&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

ArrayUtils<span class="token punctuation">.</span><span class="token function">tree2flat</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt;</span>
<span class="token comment">// [{</span>
<span class="token comment">//   id: 1,</span>
<span class="token comment">//   name: &quot;test1&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 2,</span>
<span class="token comment">//   name: &quot;test2&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 3,</span>
<span class="token comment">//   name: &quot;test3&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 4,</span>
<span class="token comment">//   name: &quot;test4&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 5,</span>
<span class="token comment">//   name: &quot;test5&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 6,</span>
<span class="token comment">//   name: &quot;test6&quot;</span>
<span class="token comment">// }]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="arrayutils-recursivetraversal" tabindex="-1"><a class="header-anchor" href="#arrayutils-recursivetraversal" aria-hidden="true">#</a> ArrayUtils.recursiveTraversal</h3>`,9),b=e(`<h4 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h4><ul><li><p><code>array</code> (any[])：树形结构数组</p></li><li><p><code>[options]</code> (<a href="#irecursivetraversaloptions">IRecursiveTraversalOptions</a>)：配置项</p></li></ul><h4 id="类型-2" tabindex="-1"><a class="header-anchor" href="#类型-2" aria-hidden="true">#</a> 类型</h4><h5 id="irecursivetraversaloptions" tabindex="-1"><a class="header-anchor" href="#irecursivetraversaloptions" aria-hidden="true">#</a> IRecursiveTraversalOptions</h5><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>childrenKey</td><td>子节点集合属性名</td><td>string</td><td>-</td><td>children</td></tr><tr><td>parent</td><td>父节点数据</td><td>any</td><td>-</td><td>-</td></tr><tr><td>processor</td><td>节点数据处理器</td><td>(item: T, parent?: T) =&gt; void</td><td>-</td><td>-</td></tr></tbody></table><details class="hint-container details"><summary>使用示例（点击展开查看）</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test3&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test4&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test5&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test6&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

ArrayUtils<span class="token punctuation">.</span><span class="token function">recursiveTraversal</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">processor</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; 依次为 test1、test2、test3、test4、test5、test6 对象本身及其父节点的引用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,6);function h(y,q){const a=o("badge");return i(),l("div",null,[n("div",c,[d,n("p",null,[s("Since："),t(a,{text:"0.0.4"})]),u]),k,t(a,{text:"0.0.4"}),s(" 扁平数组转树形结构数组"),m,t(a,{text:"0.0.4"}),s(" 树形结构数组转扁平数组"),v,t(a,{text:"0.0.4"}),s(" 递归遍历树形结构数组"),b])}const _=p(r,[["render",h],["__file","array.html.vue"]]);export{_ as default};
