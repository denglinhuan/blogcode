(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1025:function(t,e,a){"use strict";a.r(e);a(106);var i=a(456),l=a.n(i),s=a(548),n={name:"multiEllipsis",data:function(){return{width:250,lineClamp:2,displayValue:"-webkit-box",overflowValue:"hidden",textOverflowValue:"ellipsis",whiteSpaceValue:"nowrap",boxOrientValue:"vertical",tableAttrData:s.a,tabcolums:s.c}},watch:{width:function(){this.updateCss()},lineClamp:function(){this.updateCss()}},methods:{styleToString:function(t){var e="";for(var a in t)e+="".concat(a,": ").concat(t[a],";\n");return e},updateCss:function(){this.$refs.css.innerHTML=l.a.highlight("width: ".concat(this.width,"px;\ndisplay: -webkit-box;\noverflow: hidden;\ntext-overflow: ellipsis;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: ").concat(this.lineClamp,";"),l.a.languages.css)}},mounted:function(){this.updateCss()}},r=(a(956),a(14)),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("div",{staticClass:"effect-display-wrap",style:{width:t.width+"px",overflow:t.overflowValue,textOverflow:t.textOverflowValue,boxOrient:t.boxOrientValue,lineClamp:t.lineClamp,display:t.displayValue}},[t._v("\n      多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,line-clamp指定显示多少列,弹性和模型，word-break:break-all允许在单词内换行\n      box-sizing:border-box:增加padding与border不把它计算到里面去,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号\n    ")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{staticClass:"language-css",staticStyle:{"margin-bottom":"30px"}},[a("code",{ref:"css"})])]),t._v(" "),a("div",{staticClass:"attr-operate-wrap"},[a("div",{staticClass:"attr-inner-content"},[a("div",{staticClass:"text-width"},[t._v("宽度:")]),t._v(" "),a("el-slider",{staticClass:"slider",attrs:{min:200,max:705,"show-input":"","input-size":"mini"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),a("div",{staticClass:"attr-inner-content"},[a("div",{staticClass:"text-width"},[t._v("显示行数:")]),t._v(" "),a("el-slider",{staticClass:"slider",attrs:{min:1,max:10,"show-input":"","input-size":"mini"},model:{value:t.lineClamp,callback:function(e){t.lineClamp=e},expression:"lineClamp"}})],1)]),t._v(" "),a("div",{staticClass:"attr-table-desc"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableAttrData}},t._l(t.tabcolums,(function(t){return a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,align:"center","header-align":"center"}})})),1)],1)])}),[],!1,null,"f1627d3a",null);e.default=o.exports},510:function(t,e,a){},956:function(t,e,a){"use strict";var i=a(510);a.n(i).a}}]);