require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([8],[,,,,,function(e,t,o){"use strict";var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(e[u]=o[u])}return e},n=r(o(1)),a=r(o(7)),l=r(o(11));function r(e){return e&&e.__esModule?e:{default:e}}o(0).default;n.default.config.productionTip=!1,n.default.prototype.$store=l.default,n.default.prototype.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},a.default.mpType="app",new n.default(u({store:l.default},a.default)).$mount()},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=o(10),n=o.n(u),a=!1;var l=function(e){a||o(8)},r=o(2)(n.a,null,l,null,null);r.options.__file="..\\..\\..\\HBuilderProjects\\gateway\\App.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=r.exports},function(e,t){},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(0).default;t.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=a(o(1)),n=a(o(3));function a(e){return e&&e.__esModule?e:{default:e}}o(0).default;u.default.use(n.default);var l=new n.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:"",userImg:""},mutations:{login:function(e,t){console.log(t),e.userName=t.nickName||"新用户",e.hasLogin=!0,e.userImg=t.avatarUrl},logout:function(e){e.userName="",e.hasLogin=!1,e.userImg=""}}});t.default=l}],[5]);
//# sourceMappingURL=.sourcemap/app.js.map