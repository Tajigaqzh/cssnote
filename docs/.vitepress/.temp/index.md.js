import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="flex布局" tabindex="-1">flex布局 <a class="header-anchor" href="#flex布局" aria-label="Permalink to &quot;flex布局&quot;">​</a></h2><h2 id="flex简介" tabindex="-1">Flex简介 <a class="header-anchor" href="#flex简介" aria-label="Permalink to &quot;Flex简介&quot;">​</a></h2><p>布局的传统解决方案，基于盒状模型，依赖display属性 + position属性 +float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。 Flex布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。</p><h2 id="flex布局是什么" tabindex="-1">Flex布局是什么？ <a class="header-anchor" href="#flex布局是什么" aria-label="Permalink to &quot;Flex布局是什么？&quot;">​</a></h2><p>Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。</p><p>任何一个容器都可以指定为Flex布局。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">box</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><p>行内元素也可以使用Flex布局</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">box</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> inline-flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><p>注意：设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。</p><h2 id="flex基本概念" tabindex="-1">Flex基本概念 <a class="header-anchor" href="#flex基本概念" aria-label="Permalink to &quot;Flex基本概念&quot;">​</a></h2><p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</p><p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。</p><p>项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。</p><h2 id="容器的属性" tabindex="-1">容器的属性 <a class="header-anchor" href="#容器的属性" aria-label="Permalink to &quot;容器的属性&quot;">​</a></h2><p>以下6个属性设置在容器上。</p><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><h2 id="flex-direction属性" tabindex="-1">flex-direction属性 <a class="header-anchor" href="#flex-direction属性" aria-label="Permalink to &quot;flex-direction属性&quot;">​</a></h2><p>flex-direction属性决定主轴的方向（即项目的排列方向） 基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">box</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">flex-direction</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">row| row-reverse | column | column-reverse</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><p>它可能有4个值。</p><ul><li>row（默认值）：主轴为水平方向，起点在左端。</li><li>row-reverse：主轴为水平方向，起点在右端。</li><li>column：主轴为垂直方向，起点在上沿。</li><li>column-reverse：主轴为垂直方向，起点在下沿。</li></ul><h2 id="flex-wrap属性" tabindex="-1">flex-wrap属性 <a class="header-anchor" href="#flex-wrap属性" aria-label="Permalink to &quot;flex-wrap属性&quot;">​</a></h2><p>默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">box</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">flex-wrap</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> nowrap | wrap | wrap-reverse</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><ul><li>nowrap（默认）：不换行。</li><li>wrap：换行，第一行在上方。</li><li>wrap-reverse：换行，第一行在下方。</li></ul><h2 id="flex-flow属性" tabindex="-1">flex-flow属性 <a class="header-anchor" href="#flex-flow属性" aria-label="Permalink to &quot;flex-flow属性&quot;">​</a></h2><p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">box</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">flex-flow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> &lt;flex-direction&gt; &lt;flex-wrap&gt;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><h2 id="justify-content属性" tabindex="-1">justify-content属性 <a class="header-anchor" href="#justify-content属性" aria-label="Permalink to &quot;justify-content属性&quot;">​</a></h2><p>justify-content属性定义了项目在主轴上的对齐方式。</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">box</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> flex-start | flex-end | center | space-between | spacearound</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><p>对齐方式与轴的方向有关， 当主轴沿水平方向从左到右时，具体含义为 ：</p><ul><li>flex-start（默认值）：左对齐</li><li>flex-end：右对齐</li><li>center： 居中</li><li>space-between：两端对齐，项目之间的间隔都相等。</li><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul><h2 id="align-items属性" tabindex="-1">align-items属性 <a class="header-anchor" href="#align-items属性" aria-label="Permalink to &quot;align-items属性&quot;">​</a></h2><p>align-items属性定义项目在交叉轴上如何对齐。</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">box</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> flex-start | flex-end | center | baseline | stretch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><p>具体的对齐方式与交叉轴的方向有关， 当主轴水平时，其具体含义为 ：</p><ul><li>flex-start：交叉轴的起点对齐。</li><li>flex-end：交叉轴的终点对齐。</li><li>center：交叉轴的中点对齐。</li><li>baseline: 项目的第一行文字的基线对齐。</li><li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul><h2 id="align-content属性" tabindex="-1">align-content属性 <a class="header-anchor" href="#align-content属性" aria-label="Permalink to &quot;align-content属性&quot;">​</a></h2><p>用于控制多行项目的对齐方式，如果项目只有一行则不会起作用；注意当有多行时，定义了align-content后，align-items属性将失效。默认stretch，即在项目没设置高度，或高度为auto情况下让项目填满整个容器，与align-items类似。 align-content可能值含义如下（假设主轴为水平方向）</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">box</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">align-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> flex-start | flex-end | center | space-between | space-around |</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">stretch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><ul><li>flex-start：与交叉轴的起点对齐。</li><li>flex-end：与交叉轴的终点对齐。</li><li>center：与交叉轴的中点对齐。</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一 倍。</li><li>stretch（默认值）：轴线占满整个交叉轴。</li></ul><p>总结:</p><p>flex-start ，center，flex-end 与align-items属性表现一致; space-around与justify-content保持一致，即项目之间间距为上下两端项目与容器间距两倍。</p><h2 id="项目的属性" tabindex="-1">项目的属性 <a class="header-anchor" href="#项目的属性" aria-label="Permalink to &quot;项目的属性&quot;">​</a></h2><p>介绍完容器属性，下面介绍下项目属性。容器属性是加在容器上的，那么项目属性呢，就是写在项目上 的，就好比容器属性给ul，项目属性给li差不多一个意思。 以下6个属性设置在项目上：</p><ul><li>order</li><li>flex-grow</li><li>flex-shrink</li><li>flex-basis</li><li>flex</li><li>align-self</li></ul><h2 id="order属性" tabindex="-1">order属性 <a class="header-anchor" href="#order属性" aria-label="Permalink to &quot;order属性&quot;">​</a></h2><p>order的值是整数，默认为0，整数越小，item排列越靠前，用于决定项目排列顺序。取值越大，越排在后面，可以取负值。</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">item</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">order</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">&lt;integer&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><h2 id="flex-grow属性" tabindex="-1">flex-grow属性 <a class="header-anchor" href="#flex-grow属性" aria-label="Permalink to &quot;flex-grow属性&quot;">​</a></h2><p>flex-grow属性定义项目的放大比例，默认为 0 ，即如果不存在剩余空间，也不放大。</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">item</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">flex-grow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> &lt;number&gt;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">/* default 0 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><p>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flexgrow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p><h2 id="flex-shrink属性" tabindex="-1">flex-shrink属性 <a class="header-anchor" href="#flex-shrink属性" aria-label="Permalink to &quot;flex-shrink属性&quot;">​</a></h2><p>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 负值对该属性无效。</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">item</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">flex-shrink</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> &lt;number&gt;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">/* default 1 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><h2 id="flex-basic属性" tabindex="-1">flex-basic属性 <a class="header-anchor" href="#flex-basic属性" aria-label="Permalink to &quot;flex-basic属性&quot;">​</a></h2><p>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">item</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">flex-basis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> &lt;length&gt; | auto</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">/* default auto */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><p>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</p><h2 id="flex属性" tabindex="-1">flex属性 <a class="header-anchor" href="#flex属性" aria-label="Permalink to &quot;flex属性&quot;">​</a></h2><p>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">item</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> none | [ &lt;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">flex-grow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">&gt; &lt;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">flex-shrink</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">&gt;? || &lt;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">flex-basis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">&gt; ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><p>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</p><p>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</p><h2 id="align-self属性" tabindex="-1">align-self属性 <a class="header-anchor" href="#align-self属性" aria-label="Permalink to &quot;align-self属性&quot;">​</a></h2><p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为 auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p><p>基本语法格式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">item</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">align-self</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> auto | flex-start | flex-end | center | baseline | stretch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><p>align-self属性允许item有自己独特的在交叉轴上的对齐方式，该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</p><ul><li>auto：和父元素align-self的值一致</li><li>flex-start：顶端对齐</li><li>flex-end：底部对齐</li><li>center：竖直方向上居中对齐</li><li>baseline：item第一行文字的底部对齐</li><li>stretch：当item未设置高度时，item将和容器等高对齐</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
