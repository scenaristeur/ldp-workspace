(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editContact"],{7465:function(a,t,c){"use strict";c.r(t);var e=function(){var a=this,t=a.$createElement,c=a._self._c||t;return c("b-container",[c("div",{staticClass:"add-item"},[c("b-form-input",{attrs:{placeholder:"vcard:hasName"},model:{value:a.vcard["vcard:hasName"],callback:function(t){a.$set(a.vcard,"vcard:hasName",t)},expression:"vcard['vcard:hasName']"}}),c("b-form-input",{attrs:{placeholder:"vcard:hasEmail"},model:{value:a.vcard["vcard:hasEmail"],callback:function(t){a.$set(a.vcard,"vcard:hasEmail",t)},expression:"vcard['vcard:hasEmail']"}}),c("b-form-input",{attrs:{placeholder:"vcard:hasURL"},model:{value:a.vcard["vcard:hasURL"],callback:function(t){a.$set(a.vcard,"vcard:hasURL",t)},expression:"vcard['vcard:hasURL']"}}),c("b-form-input",{attrs:{placeholder:"vcard:hasTelephone"},model:{value:a.vcard["vcard:hasTelephone"],callback:function(t){a.$set(a.vcard,"vcard:hasTelephone",t)},expression:"vcard['vcard:hasTelephone']"}})],1),c("div",{staticStyle:{position:"fixed",bottom:"0px",left:"0px",width:"100%",color:"#fff",background:"#000"},attrs:{id:"toolbar"}},[c("b-row",[c("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},attrs:{variant:"outline-light"},on:{click:a.cancel}},[c("b-icon",{attrs:{icon:"close"}}),a._v(" Cancel ")],1),c("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},attrs:{variant:"outline-light"},on:{click:a.save}},[c("b-icon",{attrs:{icon:"ok"}}),a._v(" Save ")],1)],1)],1)])},o=[],r={name:"EditContact",props:["vcard"],created:function(){console.log("route",this.$route)},methods:{cancel:function(){this.$router.go(-1)},save:function(){this.$store.dispatch("contacts/add",this.vcard),this.$router.push({name:"Contact",params:{contact:this.vcard}})}},watch:{$route:function(a,t){console.log("from",t),console.log("to",a)}}},s=r,n=c("2877"),l=Object(n["a"])(s,e,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=editContact.4395d302.js.map