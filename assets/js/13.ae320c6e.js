(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{498:function(t,s,v){"use strict";v.r(s);var _=v(4),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"css"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),v("p",[t._v("[toc]")]),t._v(" "),v("h2",{attrs:{id:"css-选择器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器"}},[t._v("#")]),t._v(" CSS 选择器")]),t._v(" "),v("h3",{attrs:{id:"为什么把-css-文件放在-head-中-而把-js-文件放在-body-底部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么把-css-文件放在-head-中-而把-js-文件放在-body-底部"}},[t._v("#")]),t._v(" 为什么把 CSS 文件放在 "),v("code",[t._v("<head>")]),t._v(" 中，而把 JS 文件放在 "),v("code",[t._v("<body>")]),t._v(" 底部")]),t._v(" "),v("ol",[v("li",[t._v("CSS 会"),v("strong",[t._v("阻塞页面渲染")]),t._v("，越早加载越好")]),t._v(" "),v("li",[t._v("JS 会"),v("strong",[t._v("阻塞 DOM 树的生成以及渲染")]),t._v("，越晚加载越好")])]),t._v(" "),v("h3",{attrs:{id:"css-中伪类与伪元素的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-中伪类与伪元素的区别"}},[t._v("#")]),t._v(" CSS 中伪类与伪元素的区别")]),t._v(" "),v("h4",{attrs:{id:"伪类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#伪类"}},[t._v("#")]),t._v(" 伪类")]),t._v(" "),v("p",[t._v("核心是用来"),v("strong",[t._v("选择 DOM 树之外的信息")]),t._v("，不能够被普通选择器选择的文档之外的元素，用来添加一些选择器的特殊效果。")]),t._v(" "),v("p",[t._v("由于状态的变化是非线性的，所以元素达到一个特定的状态时，它可能得到一个伪类的样式，单当状态改变时，它又会失去这个样式。")]),t._v(" "),v("p",[t._v("由此可以看出，它的功能和 "),v("code",[t._v("class")]),t._v(" 有点类似，但它是"),v("strong",[t._v("基于文档之外的抽象")]),t._v("，所以叫"),v("strong",[t._v("伪类")]),t._v("。")]),t._v(" "),v("h5",{attrs:{id:"类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),v("h4",{attrs:{id:"伪元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[t._v("#")]),t._v(" 伪元素")]),t._v(" "),v("p",[v("strong",[t._v("DOM 树没有定义的虚拟元素")]),t._v("，核心就是创建通常不存在于文档中的元素。")]),t._v(" "),v("p",[v("strong",[t._v("伪元素控制的内容和元素是没有区别的")]),t._v("，但是它本身"),v("strong",[t._v("只是基于元素的抽象")]),t._v("，并不存在于文档中，所以称为"),v("strong",[t._v("伪元素")]),t._v("，用于将特殊的效果添加到某些选择器。")]),t._v(" "),v("h5",{attrs:{id:"成员"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#成员"}},[t._v("#")]),t._v(" 成员")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("::before")]),t._v(" 、 "),v("code",[t._v("::after")])]),t._v(" "),v("li",[v("code",[t._v("::selection")])])]),t._v(" "),v("h4",{attrs:{id:"区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),v("h5",{attrs:{id:"表示方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表示方法"}},[t._v("#")]),t._v(" 表示方法")]),t._v(" "),v("ol",[v("li",[t._v("CSS2.1 之前伪类和伪元素都是单冒号 "),v("code",[t._v(":")]),t._v(" 表示")]),t._v(" "),v("li",[t._v("CSS2.1 及之后规定伪类用单冒号"),v("code",[t._v(":")]),t._v(" 表示，伪元素用 "),v("code",[t._v("::")]),t._v(" 表示")]),t._v(" "),v("li",[t._v("浏览器也支持之前的写法，但应该按照建议规范来")])]),t._v(" "),v("h5",{attrs:{id:"定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),v("ol",[v("li",[t._v("伪类即"),v("strong",[t._v("假的类")]),t._v("，是"),v("strong",[t._v("基于普通 DOM 元素⽽产⽣的不同状态")]),t._v("，他是 "),v("strong",[t._v("DOM 元素的某⼀特征")])]),t._v(" "),v("li",[t._v("伪元素即"),v("strong",[t._v("假元素")]),t._v("，"),v("strong",[t._v("创建在 DOM 树中不存在的抽象对象")]),t._v("，⽽且这些抽象对象是能够访问到的")])]),t._v(" "),v("h4",{attrs:{id:"more-相同"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#more-相同"}},[t._v("#")]),t._v(" More：相同")]),t._v(" "),v("p",[v("strong",[t._v("伪类和伪元素都不出现在源⽂件和 DOM 树中")]),t._v("，也就是说在 html 源⽂件中是看不到伪类和伪元素的。")]),t._v(" "),v("h2",{attrs:{id:"css-属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-属性"}},[t._v("#")]),t._v(" CSS 属性")]),t._v(" "),v("h3",{attrs:{id:"控制继承的属性-inherit、initial-和-unset-三者的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#控制继承的属性-inherit、initial-和-unset-三者的区别"}},[t._v("#")]),t._v(" 控制继承的属性： inherit、initial 和 unset 三者的区别")]),t._v(" "),v("h4",{attrs:{id:"initial"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#initial"}},[t._v("#")]),t._v(" initial")]),t._v(" "),v("p",[v("code",[t._v("initial")]),t._v(" 关键字用于设置 CSS 属性为他的"),v("strong",[t._v("默认值")]),t._v("，可用作于任何 CSS 样式。")]),t._v(" "),v("p",[t._v("简单来说，就"),v("strong",[t._v("是初始化到该属性浏览器默认定义的")]),t._v("值。")]),t._v(" "),v("h4",{attrs:{id:"inherit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#inherit"}},[t._v("#")]),t._v(" inherit")]),t._v(" "),v("p",[t._v("每一个 CSS 属性都有一个特性，就是这个属性必然是"),v("strong",[t._v("默认继承")]),t._v("（"),v("code",[t._v("inherited: yes")]),t._v("）或"),v("strong",[t._v("默认不继承")]),t._v("（"),v("code",[t._v("inherited: no")]),t._v("）")]),t._v(" "),v("h5",{attrs:{id:"属性的继承特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性的继承特性"}},[t._v("#")]),t._v(" 属性的继承特性")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("所有元素可继承")]),t._v("："),v("code",[t._v("visibility")]),t._v(" 和 "),v("code",[t._v("cursor")])]),t._v(" "),v("li",[v("strong",[t._v("内联元素可继承")]),t._v("："),v("code",[t._v("letter-spacing")]),t._v(" 、"),v("code",[t._v("word-spacing")]),t._v("、"),v("code",[t._v("white-space")]),t._v("、"),v("code",[t._v("line-height")]),t._v("、"),v("code",[t._v("color")]),t._v("、"),v("code",[t._v("font")]),t._v("、"),v("code",[t._v("font-family")]),t._v("、"),v("code",[t._v("font-size")]),t._v("、"),v("code",[t._v("font-style")]),t._v("、"),v("code",[t._v("font-variant")]),t._v("、"),v("code",[t._v("font-weight")]),t._v("、"),v("code",[t._v("text-decoration")]),t._v("、"),v("code",[t._v("text-transform")]),t._v("、"),v("code",[t._v("direction")])]),t._v(" "),v("li",[v("strong",[t._v("块级元素可继承")]),t._v("："),v("code",[t._v("text-indent")]),t._v(" 和 "),v("code",[t._v("text-align")])]),t._v(" "),v("li",[t._v("列表元素可继承："),v("code",[t._v("list-style")]),t._v("、"),v("code",[t._v("list-style-type")]),t._v("、"),v("code",[t._v("list-style-position")]),t._v("、"),v("code",[t._v("list-style-image")])]),t._v(" "),v("li",[t._v("表格元素可继承："),v("code",[t._v("border-collapse")])])]),t._v(" "),v("p",[t._v("例如，"),v("code",[t._v("border")]),t._v(" 是不可继承的，可以通过 "),v("code",[t._v("inherit")]),t._v(" 来进行改变：")]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid red"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* border 就继承了父级 .box 的 border 样式 */")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inherit"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("h4",{attrs:{id:"unset"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#unset"}},[t._v("#")]),t._v(" unset")]),t._v(" "),v("p",[v("code",[t._v("unset")]),t._v(" 关键字可以理解为"),v("strong",[t._v("不设置")]),t._v("。其实，它是关键字 "),v("code",[t._v("initial")]),t._v(" 和 "),v("code",[t._v("inherit")]),t._v(" 的"),v("strong",[t._v("组合")]),t._v("。")]),t._v(" "),v("p",[t._v("设置 "),v("code",[t._v("unset")]),t._v(" 会有以下几种情况：")]),t._v(" "),v("ol",[v("li",[t._v("如果该属性是"),v("strong",[t._v("默认继承属性")]),t._v("，该值等同于 "),v("strong",[t._v("inherit")])]),t._v(" "),v("li",[t._v("如果该属性是"),v("strong",[t._v("非默认继承属性")]),t._v("，那么该值等同于 "),v("strong",[t._v("initial")])]),t._v(" "),v("li",[t._v("换句话说，"),v("code",[t._v("unset")]),t._v(" 关键字会"),v("strong",[t._v("优先用 inherit 关键字的样式，其次使用 initial 关键字的样式")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);