(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1131:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return R}});var r=n(9008),a=n(266),u=n(809),i=n.n(u),o=n(8216),s=n(5997),c=n(2809),l=n(7294),f=n(9669),p=n.n(f),h=n(129),d=n.n(h),v=n(6486),x=n.n(v),b=n(7856),m=n.n(b),y=function(t){return x().unescape(m().sanitize(null!==t&&void 0!==t?t:"",{SAFE_FOR_JQUERY:!0}))},g=function(){function t(e){(0,o.Z)(this,t),(0,c.Z)(this,"baseApiUrl",void 0),(0,c.Z)(this,"axClient",void 0),this.baseApiUrl=e,this.axClient=p().create(),this.axClient.defaults.baseURL=this.baseApiUrl,this.axClient.defaults.headers.common["Content-Type"]="application/json;charset=UTF-8",this.axClient.defaults.headers.common.Accept="application/json, text/plain, */*",this.axClient.defaults.timeout=7e3,this.axClient.defaults.withCredentials=!1,p().interceptors.response.use((function(t){return t}),(function(t){return 401===t.response.status&&console.log(401,"UnAuthorized!"),Promise.reject(t)}))}return(0,s.Z)(t,[{key:"setToken",value:function(t){null!=this.axClient&&(null==t||0==t.length?this.axClient.defaults.headers.common.Authorization="":this.axClient.defaults.headers.common.Authorization="Bearer "+t)}},{key:"get",value:function(){var t=(0,a.Z)(i().mark((function t(){var e,n,r,a,u=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=u.length>0&&void 0!==u[0]?u[0]:"",n=u.length>1&&void 0!==u[1]?u[1]:null,null!=this.axClient){t.next=4;break}return t.abrupt("return",Promise.resolve(null));case 4:return r="",null!=n&&(r=null!=(a=n)&&a.length>0?"?"+n:"?"+d().stringify(n)),t.next=8,this.axClient.get("".concat(e).concat(r)).then((function(t){return console.log("GET: ",e,t.data),t})).then((function(t){return t.data})).catch((function(t){return console.error("GET: ",e,t),t.response.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=(0,a.Z)(i().mark((function t(e,n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=this.axClient){t.next=2;break}return t.abrupt("return",Promise.resolve(null));case 2:return t.next=4,this.axClient.post("".concat(e),n).then((function(t){return console.log("POST: ",e,t.data),t})).then((function(t){return t.data})).catch((function(t){return console.error("POST: ",e,t),t.response.data}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=(0,a.Z)(i().mark((function t(e,n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=this.axClient){t.next=2;break}return t.abrupt("return",Promise.resolve(null));case 2:return t.next=4,this.axClient.patch("".concat(e),n).then((function(t){return console.log("PATCH: ",e,t.data),t})).then((function(t){return t.data})).catch((function(t){return console.error("PATCH: ",e,t),t.response.data}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=(0,a.Z)(i().mark((function t(e,n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=this.axClient){t.next=2;break}return t.abrupt("return",Promise.resolve(null));case 2:return t.next=4,this.axClient.put("".concat(e),n).then((function(t){return console.log("PUT: ",e,t.data),t})).then((function(t){return t.data})).catch((function(t){return console.error("PUT: ",e,t),t.response.data}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=(0,a.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=this.axClient){t.next=2;break}return t.abrupt("return",Promise.resolve(null));case 2:return t.next=4,this.axClient.delete("".concat(e)).then((function(t){return console.log("DELETE: ",e,t.data),t})).then((function(t){return t.data})).catch((function(t){return console.error("DELETE: ",e,t),t.response.data}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}();var w=n(5893),C=new g("https://master-7rqtwti-3hqtmcw5mgmri.ovhcloud-fr-1.webpaas.ovh.net/api/content"),j=function(){var t=(0,a.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var P=n(219),k=n(4184),O=n.n(k),E=n(4772),Z=["className","settings"];function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A=function(t){t.className;var e=t.settings,n=(0,P.Z)(t,Z),r=(0,l.useState)(),a=r[0],u=r[1],i=(0,l.useRef)();(0,l.useEffect)((function(){return o(),function(){s()}}),[]);var o=function(){if(!a){var t=new E.Z(i.current,e);t.isRtl=!0,u(t)}},s=function(){a&&(a.destroy(),u(null))};return(0,w.jsx)("div",T(T({className:O()(),style:{position:"relative"}},n),{},{ref:i}))};A.defaultProps={};var N=A,U=n(9490),S=function(t,e){var n={id:t.nid[0].value,type:t.type[0].target_id,title:t.title[0].value,body:t.body[0].value,summery:t.body[0].summery,created:t.created[0].value,changed:t.changed[0].value};return null!=e&&(n.body=e(n.body),n.title=e(n.title)),n};function D(t){return t.map((function(t){return S(t,y)})).map((function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t:S(t,y);return(0,w.jsxs)("div",{children:[(0,w.jsx)("h4",{children:e.title}),(0,w.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]},"p-"+e.id)}(t,!0)}))}var L=n(2503),R=function(){U.Zr.defaultLocale="he-IL",U.Zr.defaultZone="Israel";var t,e,n=(0,L.ZP)("/",j,{revalidateOnFocus:!1});return(0,w.jsxs)("div",{children:[(0,w.jsxs)(r.default,{children:[(0,w.jsx)("title",{children:"Next App"}),(0,w.jsx)("meta",{name:"description",content:""})]}),(0,w.jsx)(N,{children:(t=n,e=D,t.error?(0,w.jsx)("div",{children:"failed to load"}):t.data?e(t.data):(0,w.jsx)("div",{children:"loading..."}))})]})}},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1131)}])},4654:function(){}},function(t){t.O(0,[809,662,481,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);