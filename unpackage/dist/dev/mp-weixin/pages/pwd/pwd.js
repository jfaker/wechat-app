require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{28:function(e,t,n){"use strict";var a=s(n(1)),o=s(n(29));function s(e){return e&&e.__esModule?e:{default:e}}n(0).default;new a.default(o.default).$mount()},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(31),o=n.n(a),s=n(32),i=!1;var r=function(e){i||n(30)},u=n(2)(o.a,s.a,r,null,null);u.options.__file="..\\..\\..\\HBuilderProjects\\gateway\\pages\\pwd\\pwd.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] pwd.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},30:function(e,t){},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(4);(a=o)&&a.__esModule;var s=n(0).default;t.default={data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?s.showToast({icon:"none",title:"邮箱地址不合法"}):s.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}}},32:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row"},[n("text",{staticClass:"title"},[e._v("邮箱：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"请输入邮箱",eventid:"0"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"1"},on:{tap:e.findPassword}},[e._v("提交")])],1)])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};t.a=o}},[28]);
//# sourceMappingURL=../../.sourcemap/pages/pwd/pwd.js.map