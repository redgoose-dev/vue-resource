(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5387"],{"940f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"page"},[s("head-title",{attrs:{type:"h2",title:"form - select"}}),t._m(0),t._m(1),s("section",[s("head-title",{attrs:{type:"h3",title:"basic"}}),s("p",[t._v("기본적인 형태로 사용합니다.")]),s("div",{staticClass:"example"},[s("form-select",{attrs:{placeholder:"Please pick fruit."},model:{value:t.fruit,callback:function(e){t.fruit=e},expression:"fruit"}},[s("option",{attrs:{value:"apple"}},[t._v("apple")]),s("option",{attrs:{value:"banana"}},[t._v("banana")]),s("option",{attrs:{value:"mango"}},[t._v("mango")])])],1),t._m(2)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"disabled"}}),s("p",[t._v("비활성화 되었을때의 모습입니다.")]),s("div",{staticClass:"example"},[s("form-select",{attrs:{disabled:!0,placeholder:"disabled select"}})],1),t._m(3)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"multiple"}}),s("p",[t._v("여러가지 항목을 선택할 용도로 사용합니다.")]),s("div",{staticClass:"example"},[s("form-select",{attrs:{multiple:!0}},[s("option",{attrs:{value:"option1"}},[t._v("option #1")]),s("option",{attrs:{value:"option2"}},[t._v("option #2")]),s("option",{attrs:{value:"option3"}},[t._v("option #3")])])],1),t._m(4)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"size"}}),s("p",[t._v("컴포넌트의 높이 사이즈")]),s("div",{staticClass:"example"},[s("div",{staticClass:"row row-h-center row-gutter-h"},[s("div",{staticClass:"col"},[s("form-select",{attrs:{size:"small",placeholder:"small"}})],1),s("div",{staticClass:"col"},[s("form-select",{attrs:{placeholder:"basic"}})],1),s("div",{staticClass:"col"},[s("form-select",{attrs:{size:"large",placeholder:"large"}})],1)])]),t._m(5)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"inline"}}),s("p",[t._v("인라인 형식으로 사용합니다.")]),s("div",{staticClass:"example"},[s("form-select",{attrs:{inline:!0,placeholder:"inline select"}})],1),t._m(6)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"state"}}),s("p",[t._v("폼이 어떤 상태인지 표시합니다.")]),s("div",{staticClass:"example"},[s("div",{staticClass:"row row-h-center row-gutter-h"},[s("div",{staticClass:"col"},[s("form-select",{attrs:{state:"primary",placeholder:"primary"}})],1),s("div",{staticClass:"col"},[s("form-select",{attrs:{state:"success",placeholder:"success"}})],1),s("div",{staticClass:"col"},[s("form-select",{attrs:{state:"error",placeholder:"error"}})],1)])]),t._m(7)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"props"}}),t._m(8),t._m(9)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"event"}}),t._m(10),t._m(11)],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",[s("strong",[t._v("\n\t\t\t\tcomponent: "),s("a",{attrs:{href:"https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/select.vue",target:"_blank"}},[t._v("select.vue")]),s("br"),t._v("\n\t\t\t\tscss: "),s("a",{attrs:{href:"https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/select.scss",target:"_blank"}},[t._v("select.scss")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n\t\t여러 항목들중에서 하나를 선택하는 "),s("code",[t._v("<form-select/>")]),t._v(" 컴포넌트입니다."),s("br"),s("code",[t._v("slot")]),t._v("을 이용하여 "),s("code",[t._v("<option/>")]),t._v(" 엘리먼트 요소를 만들어서 사용하는 방식입니다.\n\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[t._v("\t\t\t"),s("code",[t._v('<form-select placeholder="Please pick fruit." v-model="fruit">\n\t<option value="apple">apple</option>\n\t<option value="banana">banana</option>\n\t<option value="mango">mango</option>\n</form-select>')]),t._v("\n\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[t._v("\t\t\t"),s("code",[t._v('<form-select :disabled="true"/>')]),t._v("\n\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[t._v("\t\t\t"),s("code",[t._v('<form-select :multiple="true"/>')]),t._v("\n\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[t._v("\t\t\t"),s("code",[t._v('<form-select size="small" placeholder="small"/>\n<form-select placeholder="basic"/>\n<form-select size="large" placeholder="large"/>')]),t._v("\n\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[t._v("\t\t\t"),s("code",[t._v('<form-select :inline="true"/>')]),t._v("\n\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[t._v("\t\t\t"),s("code",[t._v('<form-select state="primary"/>\n<form-select state="success"/>\n<form-select state="error"/>')]),t._v("\n\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("이 컴포넌트는 다음과 같은 "),s("code",[t._v("props")]),t._v("를 사용합니다.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),s("th",[t._v("type")]),s("th",[t._v("description")])])]),s("tbody",[s("tr",[s("th",[t._v("name")]),s("th",[t._v("string")]),s("td",[s("code",[t._v("name")]),t._v(" attribute 로 사용")])]),s("tr",[s("th",[t._v("id")]),s("th",[t._v("string")]),s("td",[s("code",[t._v("id")]),t._v(" attribute 로 사용")])]),s("tr",[s("th",[t._v("selected")]),s("th",[t._v("string, number")]),s("td",[t._v("선택된 value 값")])]),s("tr",[s("th",[t._v("required")]),s("th",[t._v("boolean")]),s("td",[t._v("필수값인지에 대한 여부")])]),s("tr",[s("th",[t._v("disabled")]),s("th",[t._v("boolean")]),s("td",[t._v("비활성화")])]),s("tr",[s("th",[t._v("inline")]),s("th",[t._v("boolean")]),s("td",[t._v("인라인 형식으로 사용")])]),s("tr",[s("th",[t._v("multiple")]),s("th",[t._v("boolean")]),s("td",[t._v("여러항목 사용")])]),s("tr",[s("th",[t._v("placeholder")]),s("th",[t._v("string")]),s("td",[t._v("컴포넌트를 설명하는 글을 넣습니다. 이것을 사용하면 값이없는 "),s("code",[t._v("option")]),t._v("이 첫번째로 만들어집니다.")])]),s("tr",[s("th",[t._v("size")]),s("th",[t._v("string")]),s("td",[t._v("컴포넌트의 사이즈 "),s("code",[t._v("small, large")])])]),s("tr",[s("th",[t._v("state")]),s("th",[t._v("string")]),s("td",[t._v("컴포넌트의 상태 "),s("code",[t._v("primary, success, error")])])]),s("tr",[s("th",[t._v("native")]),s("th",[t._v("boolean")]),s("td",[t._v("네이티브 형태의 모습으로 사용합니다.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("이 컴포넌트는 다음과 같은 "),s("code",[t._v("event")]),t._v("를 사용합니다.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),s("th",[t._v("description")])])]),s("tbody",[s("tr",[s("th",[t._v("change")]),s("td",[t._v("선택한 요소가 변경되면 호출됩니다.")])])])])}],l={name:"page",components:{"head-title":function(){return s.e("chunk-1871eea1").then(s.bind(null,"c42f"))},"form-select":function(){return s.e("chunk-4bce0794").then(s.bind(null,"90d7"))}},data:function(){return{fruit:""}}},o=l,c=s("2877"),n=Object(c["a"])(o,a,r,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0e5387.0bf438a6.js.map