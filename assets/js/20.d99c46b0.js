(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{504:function(t,e,s){"use strict";s.r(e);var a=s(4),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typescript-问题整理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-问题整理"}},[t._v("#")]),t._v(" TypeScript 问题整理")]),t._v(" "),s("p",[t._v("[toc]")]),t._v(" "),s("h3",{attrs:{id:"type-和-interface-的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-和-interface-的区别是什么"}},[t._v("#")]),t._v(" type 和 interface 的区别是什么")]),t._v(" "),s("h4",{attrs:{id:"interface-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interface-接口"}},[t._v("#")]),t._v(" interface 接口")]),t._v(" "),s("p",[t._v("TypeScript 的核心原则之一就是对值所具有的结构进行类型检查。而"),s("strong",[t._v("接口的作用就是为这些类型命名和为你的代码或第三方代码定义数据模型")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"type-类型别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-类型别名"}},[t._v("#")]),t._v(" type 类型别名")]),t._v(" "),s("p",[t._v("type 会给类型起一个新名字。type 有时和 interface 很像，但是"),s("strong",[t._v("可以作用于原始值（基本类型），联合类型，元组以及其他任何你需要手写的类型")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"相同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[t._v("#")]),t._v(" 相同点")]),t._v(" "),s("ol",[s("li",[t._v("都可以描述一个"),s("strong",[t._v("对象")]),t._v("或者"),s("strong",[t._v("函数")])]),t._v(" "),s("li",[t._v("都可以"),s("strong",[t._v("拓展")]),t._v("( "),s("code",[t._v("extends")]),t._v(" )：interface 和 type 都可以扩展，并且两者并不是相互独立的，也就是说 "),s("strong",[t._v("interface 可以 "),s("code",[t._v("extends")]),t._v(" type，type 也可以 "),s("code",[t._v("extends")]),t._v(" interface")]),t._v("。虽然效果差不多，但是两者语法不同。")])]),t._v(" "),s("h4",{attrs:{id:"不同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[t._v("#")]),t._v(" 不同点")]),t._v(" "),s("h5",{attrs:{id:"type-可以而-interface-不行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-可以而-interface-不行"}},[t._v("#")]),t._v(" type 可以而 interface 不行")]),t._v(" "),s("ol",[s("li",[t._v("type 可以"),s("strong",[t._v("声明基本类型别名，联合类型，元组")]),t._v("等类型")]),t._v(" "),s("li",[t._v("type 语句中还可以使用 "),s("code",[t._v("typeOf")]),t._v(" "),s("strong",[t._v("获取实例的类型进行赋值")])]),t._v(" "),s("li",[t._v("type 语句中可以"),s("strong",[t._v("使用计算属性")]),t._v("，能使用 "),s("code",[t._v("in")]),t._v(" 关键字"),s("strong",[t._v("生成映射类型")])])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当你想获取一个变量的类型时，使用 typeof")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" div "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" div\n")])])]),s("h5",{attrs:{id:"interface-可以而-type-不行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interface-可以而-type-不行"}},[t._v("#")]),t._v(" interface 可以而 type 不行")]),t._v(" "),s("ol",[s("li",[t._v("interface 可以"),s("strong",[t._v("声明合并")]),t._v("：interface 可以定义多次，并将被视为单个接口")])]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nUser 接口为 {\n  name: string\n  age: number\n  sex: string\n}\n*/")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);