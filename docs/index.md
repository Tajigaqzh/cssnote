## flex布局

## Flex简介
布局的传统解决方案，基于盒状模型，依赖display属性 + position属性 +float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。 Flex布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。
## Flex布局是什么？
Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局。
```css
.box {
    display: flex;
}
```
行内元素也可以使用Flex布局

```css
.box {
    display: inline-flex;
}

```
注意：设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。
## Flex基本概念
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
## 容器的属性
以下6个属性设置在容器上。

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content
## flex-direction属性
flex-direction属性决定主轴的方向（即项目的排列方向）
基本语法格式如下：
```css
.box {
    flex-direction:row| row-reverse | column | column-reverse;
}
```

它可能有4个值。

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。


## flex-wrap属性
默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

基本语法格式如下：

```css
.box {
    flex-wrap: nowrap | wrap | wrap-reverse;
}

```
- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

## flex-flow属性

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
```css
.box {
    flex-flow: <flex-direction> <flex-wrap>;
}
```
## justify-content属性
justify-content属性定义了项目在主轴上的对齐方式。

基本语法格式如下：
```css
.box {
    justify-content: flex-start | flex-end | center | space-between | spacearound;
}
```

对齐方式与轴的方向有关， 当主轴沿水平方向从左到右时，具体含义为 ：
- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

## align-items属性
align-items属性定义项目在交叉轴上如何对齐。

基本语法格式如下：
```css
.box {
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```

具体的对齐方式与交叉轴的方向有关， 当主轴水平时，其具体含义为 ：
- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

## align-content属性
用于控制多行项目的对齐方式，如果项目只有一行则不会起作用；注意当有多行时，定义了align-content后，align-items属性将失效。默认stretch，即在项目没设置高度，或高度为auto情况下让项目填满整个容器，与align-items类似。 align-content可能值含义如下（假设主轴为水平方向）

基本语法格式如下：
```css
.box {
    align-content: flex-start | flex-end | center | space-between | space-around |
stretch;
}
```
- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一
倍。
- stretch（默认值）：轴线占满整个交叉轴。

总结:

flex-start ，center，flex-end 与align-items属性表现一致;
space-around与justify-content保持一致，即项目之间间距为上下两端项目与容器间距两倍。

## 项目的属性
介绍完容器属性，下面介绍下项目属性。容器属性是加在容器上的，那么项目属性呢，就是写在项目上
的，就好比容器属性给ul，项目属性给li差不多一个意思。
以下6个属性设置在项目上：
- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self
## order属性
order的值是整数，默认为0，整数越小，item排列越靠前，用于决定项目排列顺序。取值越大，越排在后面，可以取负值。

基本语法格式如下：

```css
.item {
    order:<integer>
}
```
## flex-grow属性

flex-grow属性定义项目的放大比例，默认为 0 ，即如果不存在剩余空间，也不放大。

基本语法格式如下：
```css
.item {
    flex-grow: <number>; /* default 0 */
}

```
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flexgrow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
## flex-shrink属性
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 负值对该属性无效。

基本语法格式如下：

```css
.item {
    flex-shrink: <number>; /* default 1 */
}
```
## flex-basic属性
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

基本语法格式如下：

```css
.item {
    flex-basis: <length> | auto; /* default auto */
}

```

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

## flex属性
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

基本语法格式如下：
```css
.item {
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
## align-self属性
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为
auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

基本语法格式如下：
```css
.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
align-self属性允许item有自己独特的在交叉轴上的对齐方式，该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

- auto：和父元素align-self的值一致
- flex-start：顶端对齐
- flex-end：底部对齐
- center：竖直方向上居中对齐
- baseline：item第一行文字的底部对齐
- stretch：当item未设置高度时，item将和容器等高对齐


## [aaa](./start.md)