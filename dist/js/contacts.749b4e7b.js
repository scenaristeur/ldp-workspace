(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contacts"],{"94ef":function(t,e,a){"use strict";a("d998")},b636:function(t,e,a){var n=a("746f");n("asyncIterator")},c141:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("5530"),r=a("1da1"),c=a("d4ec"),s=a("bee2");a("a4d3"),a("e01a"),a("d3b7"),a("b636"),a("d28b"),a("3ca3"),a("ddb0");function o(t){var e;if("undefined"!==typeof Symbol){if(Symbol.asyncIterator&&(e=t[Symbol.asyncIterator],null!=e))return e.call(t);if(Symbol.iterator&&(e=t[Symbol.iterator],null!=e))return e.call(t)}throw new TypeError("Object is not async iterable")}a("96cf");var i=function(){function t(){Object(c["a"])(this,t),this["@context"]={owl:"http://www.w3.org/2002/07/owl#",as:"https://www.w3.org/ns/activitystreams",schema:"http://schema.org/"},this["@id"]=null,this["@type"]="owl:Thing"}return Object(s["a"])(t,[{key:"save",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("save",this,t),this.demo()}},{key:"demo",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,r,c,s,i,u,l,d,f,h,b,p,v,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={store:"Articles",indexes:["date"]},a=this.$openDB(e),console.log("DB",a),r={store:"SwingPlop",indexes:["date"]},c=this.$openDB(r),console.log("DB2",c),t.next=8,a.add("articles",{"@id":"boo1Bip",title:"Article 1",date:new Date("2019-01-01"),body:"Article one"});case 8:return s=a.transaction("articles","readwrite"),t.next=11,Promise.all([s.store.add({"@id":"boo2",title:"Article 2",date:new Date("2019-01-01"),body:"deuxieme "}),s.store.add({"@id":"boo3",title:"Article 3",date:new Date("2019-01-02"),body:"et trois"}),s.done]);case 11:return t.t0=console,t.next=14,a.getAllFromIndex("articles","date");case 14:t.t1=t.sent,t.t0.log.call(t.t0,t.t1),i=a.transaction("articles","readwrite"),u=i.store.index("date"),l=!0,d=!1,t.prev=20,h=o(u.iterate(new Date("2019-01-01")));case 22:return t.next=24,h.next();case 24:return b=t.sent,l=b.done,t.next=28,b.value;case 28:if(p=t.sent,l){t.next=37;break}v=p,m=Object(n["a"])({},v.value),m.body+=" And, happy new year!",v.update(m);case 34:l=!0,t.next=22;break;case 37:t.next=43;break;case 39:t.prev=39,t.t2=t["catch"](20),d=!0,f=t.t2;case 43:if(t.prev=43,t.prev=44,l||null==h.return){t.next=48;break}return t.next=48,h.return();case 48:if(t.prev=48,!d){t.next=51;break}throw f;case 51:return t.finish(48);case 52:return t.finish(43);case 53:return t.next=55,i.done;case 55:case"end":return t.stop()}}),t,this,[[20,39,43,53],[44,,48,52]])})));function e(){return t.apply(this,arguments)}return e}()}]),t}()},c93c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("div",{staticClass:"mb3 add-item"},[a("b-form-input",{staticClass:"mb3",attrs:{placeholder:"Search",variant:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("b-list-group",t._l(t.contacts,(function(e){return a("span",{key:e["@id"]},[void 0!=e["vcard:hasName"]&&e["vcard:hasName"].toLowerCase().includes(t.search.toLowerCase())?a("b-list-group-item",{staticClass:"text-dark",attrs:{variant:"secondary",button:""},on:{click:function(a){return t.open(e)}}},[a("b-avatar",{staticClass:"mr-3",attrs:{variant:"info",src:e["vcard:hasPhoto"]}}),t._v(" "+t._s(e["vcard:hasName"])+" ")],1):t._e()],1)})),0),a("b-iconstack",{staticClass:"floating-action-button",attrs:{"font-scale":"4",type:"button"},on:{click:t.editContact}},[a("b-icon",{attrs:{stacked:"",icon:"circle-fill",variant:"primary"}}),a("b-icon",{attrs:{stacked:"",icon:"plus",scale:"0.5",variant:"white"}}),a("b-icon",{attrs:{stacked:"",icon:"circle",variant:"secondary"}})],1)],1)},r=[],c=a("1da1"),s=(a("96cf"),a("d72f")),o=a("2f62"),i={name:"Contacts",components:{},data:function(){return{vcard:{},search:""}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("contacts/init"),t.$store.dispatch("contacts/findAll");case 2:case"end":return e.stop()}}),e)})))()},methods:{editContact:function(){this.vcard=new s["a"],this.$router.push({name:"EditContact",params:{vcard:this.vcard}})},open:function(t){this.$router.push({name:"Contact",params:{contact:t}})}},watch:{storage:function(){this.$store.dispatch("contacts/findAll")},contacts:function(){}},computed:Object(o["b"])({contacts:function(t){return t.contacts.contacts},storage:function(t){return t.solid.storage}})},u=i,l=(a("94ef"),a("2877")),d=Object(l["a"])(u,n,r,!1,null,null,null);e["default"]=d.exports},d72f:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a("d4ec"),r=a("257e"),c=a("262e"),s=a("2caf"),o=a("c141"),i={"@id":null,"vcard:hasName":"","@type":"vcard:VCard","vcard:given-name":"","vcard:family-name":""},u=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){var t,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return Object(n["a"])(this,a),t=e.call(this),Object.assign(Object(r["a"])(t),c),t}return a}(o["a"])},d998:function(t,e,a){}}]);
//# sourceMappingURL=contacts.749b4e7b.js.map