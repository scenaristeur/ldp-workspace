(function(e){function t(t){for(var r,a,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({about:"about",contacts:"contacts",contact:"contact",editContact:"editContact",itemvue:"itemvue",tests:"tests"}[e]||e)+"."+{about:"df5eb3a3","chunk-2318e136":"1bd59085",contacts:"f6643a72","chunk-2d21659a":"b76ffb6f","chunk-2d226c5a":"7a600e1a",contact:"70c2d418",editContact:"4395d302",itemvue:"b185e79f",tests:"af06f147","chunk-23187bda":"8d153e9d","chunk-2d0b6714":"fa79243c","chunk-8b2b79e0":"344ac503","chunk-253d9e19":"13190c23","chunk-2d0a386e":"87117cb9","chunk-33803df4":"c0f283c5"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={contacts:1,tests:1,"chunk-8b2b79e0":1,"chunk-253d9e19":1,"chunk-33803df4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",contacts:"contacts",contact:"contact",editContact:"editContact",itemvue:"itemvue",tests:"tests"}[e]||e)+"."+{about:"31d6cfe0","chunk-2318e136":"31d6cfe0",contacts:"e6f99f97","chunk-2d21659a":"31d6cfe0","chunk-2d226c5a":"31d6cfe0",contact:"31d6cfe0",editContact:"31d6cfe0",itemvue:"31d6cfe0",tests:"a66629a4","chunk-23187bda":"31d6cfe0","chunk-2d0b6714":"31d6cfe0","chunk-8b2b79e0":"2a9fb7c3","chunk-253d9e19":"2a9fb7c3","chunk-2d0a386e":"31d6cfe0","chunk-33803df4":"decb59b3"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ldp-workspace/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",fixed:"top"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("Contacts ")]),n("SolidLoginButton"),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"/about"}},[e._v("About")])],1),null!=e.webId?n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1),n("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[e._v("EN")]),n("b-dropdown-item",{attrs:{href:"#"}},[e._v("ES")]),n("b-dropdown-item",{attrs:{href:"#"}},[e._v("RU")]),n("b-dropdown-item",{attrs:{href:"#"}},[e._v("FA")])],1)],1):e._e()],1)],1)],1),null!=e.webId?n("div",[n("br"),n("br"),n("br"),n("router-view"),n("router-link",{attrs:{to:"/tests"}},[e._v("Tests")])],1):n("div",[n("b-jumbotron",{attrs:{header:"Contacts",lead:"Contacts store your Contacts on your Solid POD in the rootFolder/contacts/ folder."}},[n("p",[e._v("For more information visit "),n("a",{attrs:{href:"https://github.com/scenaristeur/ldp-workspace",target:"_blank"}},[e._v("github repo")])]),n("SolidLoginButton")],1)],1),e._v(" webid : "+e._s(e.webId)+" "),n("SolidTrackSession")],1)},o=[],s=(n("d3b7"),n("2f62")),c={name:"App",components:{SolidLoginButton:function(){return n.e("chunk-2d226c5a").then(n.bind(null,"e9a1"))},SolidTrackSession:function(){return n.e("chunk-2d21659a").then(n.bind(null,"c1a7"))}},computed:Object(s["b"])({ldp_server:function(e){return e.ldp_store.ldp_server},webId:function(e){return e.solid.webId}})},i=c,u=(n("034f"),n("2877")),l=Object(u["a"])(i,a,o,!1,null,null,null),d=l.exports,p=n("9483");Object(p["a"])("".concat("/ldp-workspace/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("New content is available; close the app and reopen.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=n("8c4f");r["default"].use(f["a"]);var m=[{path:"/",name:"Contacts",component:function(){return Promise.all([n.e("chunk-2318e136"),n.e("contacts")]).then(n.bind(null,"c93c"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/itemvue",name:"ItemVue",component:function(){return n.e("itemvue").then(n.bind(null,"9d71"))}},{path:"/contact/:contact",name:"Contact",props:!0,component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/editContact/:vcard",name:"EditContact",props:!0,component:function(){return n.e("editContact").then(n.bind(null,"7465"))}},{path:"/tests",name:"Tests",component:function(){return n.e("tests").then(n.bind(null,"751f"))}}],h=new f["a"]({mode:"history",base:"/ldp-workspace/",routes:m}),v=h,w=(n("4160"),n("b64b"),n("8a79"),n("159b"),n("96cf"),n("1da1")),b=function(){return{ldp_server:{name:"Semapps Local Server",url:"http://localhost:3000"},app:{persons:[],workspaces:[],bases:[],tables:[],records:[],fields:[],documents:[],files:[],tasks:[],tags:[],offers:[],needs:[],things:[],skills:[],categories:[],models:[],collections:[],views:[],vcards:[],contexts:[]},models:[{value:{name:"Workspace",type:"http://purl.org/vocab/lifecycle/schema#TaskGroup",path:"workspaces"},text:"Workspace"},{value:{name:"Base",type:"https://www.w3.org/ns/activitystreams#Base",path:"bases"},text:"Base"},{value:{name:"Table",type:"https://www.w3.org/ns/activitystreams#Table",path:"tables"},text:"Table"},{value:{name:"Field",type:"https://www.w3.org/ns/activitystreams#Field",path:"fields"},text:"Field"},{value:{name:"Record",type:"https://www.w3.org/ns/activitystreams#Record",path:"records"},text:"Record"},{value:{name:"Task",type:"https://www.w3.org/ns/activitystreams#Task",path:"tasks"},text:"Task"},{value:{name:"Person",type:"https://www.w3.org/ns/activitystreams#Person",path:"persons"},text:"Person"},{value:{name:"Document",type:"https://www.w3.org/ns/activitystreams#Document",path:"documents"},text:"Document"},{value:{name:"File",type:"https://www.w3.org/ns/activitystreams#File",path:"files"},text:"File"},{value:{name:"Tag",type:"https://www.w3.org/ns/activitystreams#Tag",path:"tags"},text:"Tag"},{value:{name:"Offer",type:"https://www.w3.org/ns/activitystreams#Offer",path:"offers"},text:"Offer"},{value:{name:"Need",type:"https://www.w3.org/ns/activitystreams#Need",path:"needs"},text:"Need"},{value:{name:"Thing",type:"https://www.w3.org/ns/activitystreams#Thing",path:"things"},text:"Thing"},{value:{name:"Skill",type:"https://www.w3.org/ns/activitystreams#Skill",path:"skills"},text:"Skill"},{value:{name:"Category",type:"https://www.w3.org/ns/activitystreams#Category",path:"categories"},text:"Category"},{value:{name:"Model",type:"https://www.w3.org/ns/activitystreams#Model",path:"models"},text:"Model"},{value:{name:"Collection",type:"https://www.w3.org/ns/activitystreams#Collection",path:"collections"},text:"Collection"},{value:{name:"View",type:"https://www.w3.org/ns/activitystreams#View",path:"views"},text:"View"},{value:{name:"Vcard",type:"http://www.w3.org/2006/vcard/ns#Vcard",path:"vcards"},text:"Vcard"},{value:{name:"Context",type:"https://www.w3.org/ns/activitystreams#Context",path:"contexts"},text:"Context"}]}},g={},y={update:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.state.ldp_server.url.endsWith("/")?e.state.ldp_server.url+t+"/":e.state.ldp_server.url+"/"+t+"/",console.log("update",r),console.log(e.rootState.solid.storage),fetch(r,{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(n){console.log(n);var r={container:t,items:n["ldp:contains"]};e.commit("setItems",r)})).catch((function(e){console.log(e)}));case 4:case"end":return n.stop()}}),n)})))()},init:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object.keys(e.state.app).forEach((function(t){console.log(t),e.dispatch("update",t)}));case 1:case"end":return t.stop()}}),t)})))()}},k={setServer:function(e,t){console.log(t),e.ldp_server=t},setItems:function(e,t){console.log(t),e.app[t.container]=t.items}},x={namespaced:!0,state:b,getters:g,actions:y,mutations:k},S=(n("99af"),window.solid),C=function(){return{webId:null,storage:null}},_={},O={setWebId:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.commit("setWebId",t),null==t){n.next=12;break}return n.t0="",n.next=5,S.data[t].storage;case 5:n.t1=n.sent,r=n.t0.concat.call(n.t0,n.t1),e.commit("setStorage",r),console.log("rootstate",e.rootState.ldp_store),e.commit("ldp_store/setServer",{name:t+" storage",url:r},{root:!0}),n.next=14;break;case 12:e.commit("setStorage",null),e.commit("ldp_store/setServer",{name:"Localhost",url:"http://localhost:3000"},{root:!0});case 14:case"end":return n.stop()}}),n)})))()}},j={setWebId:function(e,t){console.log(t),e.webId=t},setStorage:function(e,t){console.log(t),e.storage=t}},T={namespaced:!0,state:C,getters:_,actions:O,mutations:j},R=(n("d81d"),n("3ca3"),n("ddb0"),n("11c1")),A=n("00e8"),E=n.n(A),P=n("7fed"),F=n.n(P),N=new F.a(E.a),I=function(){return{contacts:[]}},L={},B={findAll:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("findAll"),n=e.rootState.solid.storage+"contacts/",t.next=4,N.readFolder(n).then(function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(n.files.length,n),t.next=3,Promise.all(n.files.map(function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.readFile(t.url);case 2:return n=e.sent,e.abrupt("return",JSON.parse(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:r=t.sent,console.log(r),e.commit("setContacts",r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})))()},add:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootState.solid.storage+"contacts/",console.log("update",r,t),null==t["@id"]&&(t["@id"]=r+Object(R["v4"])()+".jsonld"),n.next=5,N.createFile(t["@id"],JSON.stringify(t),"application/json").then((function(t){console.log(t),e.dispatch("findAll")})).catch((function(e){return console.error("Error: ".concat(e))}));case 5:case"end":return n.stop()}}),n)})))()}},V={setContacts:function(e,t){console.log(t),e.contacts=t}},M={namespaced:!0,state:I,getters:L,actions:B,mutations:V};r["default"].use(s["a"]);var D=new s["a"].Store({state:{},mutations:{},actions:{},modules:{ldp_store:x,solid:T,contacts:M}}),W=n("5f5b"),J=n("b1e0"),q=(n("f9e3"),n("2dd8"),n("63f8"),n("f309"));r["default"].use(q["a"]);var z=new q["a"]({}),U=n("a164");r["default"].use(W["a"]),r["default"].use(J["a"]),r["default"].component("vueVcard",U["a"]),r["default"].config.productionTip=!1,new r["default"]({router:v,store:D,render:function(e){return e(d)},vuetify:z,created:function(){}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.7ac481d5.js.map