(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about",itemvue:"itemvue"}[e]||e)+"."+{about:"ea4f9d84","chunk-2d0a386e":"e0c31cd2","chunk-2d0c849f":"1a2d94a7","chunk-59d5d60e":"676949a2","chunk-a7985266":"a6d3d466",itemvue:"96dc8935","chunk-2d22c696":"6190a742"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-59d5d60e":1,"chunk-a7985266":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",itemvue:"itemvue"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0a386e":"31d6cfe0","chunk-2d0c849f":"31d6cfe0","chunk-59d5d60e":"2a9fb7c3","chunk-a7985266":"ed7248a4",itemvue:"31d6cfe0","chunk-2d22c696":"31d6cfe0"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view"),n("Config")],1)},a=[],u=(n("d3b7"),n("2f62")),c={name:"Home",components:{Config:function(){return n.e("chunk-2d0c849f").then(n.bind(null,"53f1"))}},computed:Object(u["b"])({ldp_server:function(e){return e.ldp_store.ldp_server}})},i=c,s=(n("034f"),n("2877")),l=Object(s["a"])(i,o,a,!1,null,null,null),d=l.exports,f=n("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("LdpServer"),n("AxiosPost"),e._l(Object.keys(e.app),(function(t,r){return n("p",{key:r},[n("b",[e._v(e._s(t))]),n("br"),n("Tableau",{attrs:{donnees:e.app[t],"data-app":""}})],1)}))],2)},m=[],v={name:"Home",components:{LdpServer:function(){return n.e("chunk-59d5d60e").then(n.bind(null,"ca01"))},AxiosPost:function(){return n.e("chunk-2d0a386e").then(n.bind(null,"030e"))},Tableau:function(){return n.e("chunk-a7985266").then(n.bind(null,"cf7b"))}},computed:Object(u["b"])({app:function(e){return e.ldp_store.app}})},b=v,g=Object(s["a"])(b,h,m,!1,null,null,null),k=g.exports;r["default"].use(p["a"]);var y=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/itemvue",name:"ItemVue",component:function(){return n.e("itemvue").then(n.bind(null,"9d71"))}}],w=new p["a"]({mode:"history",base:"/",routes:y}),_=w,j=(n("4160"),n("b64b"),n("159b"),n("96cf"),n("1da1")),O=function(){return{ldp_server:{name:"Semapps Local Server",url:"http://localhost:3000"},app:{persons:[],workspaces:[],bases:[],tables:[],records:[],fields:[],documents:[],tasks:[],tags:[],offers:[],needs:[],things:[],skills:[],categories:[],models:[],collections:[],views:[]}}},S={},A={update:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.state.ldp_server.url+"/"+t+"/",console.log("update",r),fetch(r,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(n){console.log(n);var r={container:t,items:n["ldp:contains"]};e.commit("setItems",r)})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})))()},init:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object.keys(e.state.app).forEach((function(t){console.log(t),e.dispatch("update",t)}));case 1:case"end":return t.stop()}}),t)})))()}},x={setServer:function(e,t){console.log(t),e.ldp_server=t},setItems:function(e,t){console.log(t),e.app[t.container]=t.items}},E={namespaced:!0,state:O,getters:S,actions:A,mutations:x};r["default"].use(u["a"]);var C=new u["a"].Store({state:{},mutations:{},actions:{},modules:{ldp_store:E}}),P=n("5f5b"),T=n("b1e0"),L=(n("f9e3"),n("2dd8"),n("63f8"),n("f309"));r["default"].use(L["a"]);var N=new L["a"]({});r["default"].use(P["a"]),r["default"].use(T["a"]),r["default"].config.productionTip=!1,new r["default"]({router:_,store:C,render:function(e){return e(d)},vuetify:N,created:function(){C.dispatch("ldp_store/init")}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.5f403209.js.map