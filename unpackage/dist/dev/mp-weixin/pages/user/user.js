require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{33:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(34));function n(t){return t&&t.__esModule?t:{default:t}}i(0).default;new s.default(a.default).$mount()},34:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(36),a=i.n(s),n=i(37),l=!1;var r=function(t){l||i(35)},o=i(2)(a.a,n.a,r,null,null);o.options.__file="..\\..\\..\\HBuilderProjects\\gateway\\pages\\user\\user.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions."),e.default=o.exports},35:function(t,e){},36:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},a=i(3),n=i(0).default;e.default={data:function(){return{img:"/static/img/nologin.png",msg:"未登录"}},computed:s({},(0,a.mapState)(["hasLogin","forcedLogin","userImg","userName"])),methods:s({},(0,a.mapMutations)(["logout"]),{bindLogin:function(){n.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),console.log("------logout-------"),this.forcedLogin&&n.reLaunch({url:"../login/login"})}})}},37:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[t.hasLogin?i("view",{staticClass:"title"},[i("view",{staticClass:"header"},[i("image",{staticClass:"header",attrs:{src:t.userImg}})]),t._v(" "),i("view",{staticClass:"nickName"},[t._v(t._s(t.userName))])]):t._e(),t._v(" "),t.hasLogin?t._e():i("view",{staticClass:"title"},[i("view",{staticClass:"header"},[i("image",{staticClass:"header",attrs:{src:t.img}})]),t._v(" "),i("view",{staticClass:"nickName"},[t._v(t._s(t.msg))])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"0"},on:{tap:t.clearStorage}},[i("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[t._v("\n\t\t\t\t\t\t\t清除缓存\n\t\t\t\t\t\t")])]),t._v(" "),i("view",{staticClass:"btn-row"},[t.hasLogin?t._e():i("button",{staticClass:"primary",attrs:{type:"primary",eventid:"1"},on:{tap:t.bindLogin}},[t._v("登录")]),t._v(" "),t.hasLogin?i("button",{attrs:{type:"default",eventid:"2"},on:{tap:t.bindLogout}},[t._v("退出登录")]):t._e()],1)])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[e("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[this._v("\n\t\t\t\t\t\t\t个人资料\n\t\t\t\t\t\t\t"),e("text",{staticClass:"uni-badge uni-navigate-badge uni-badge-inverted"},[this._v("去填写")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[e("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[this._v("\n\t\t\t\t\t\t\t我的二维码\n\t\t\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[e("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[this._v("\n\t\t\t\t\t\t\t我的地址\n\t\t\t\t\t\t")])])}]};e.a=a}},[33]);
//# sourceMappingURL=../../.sourcemap/pages/user/user.js.map