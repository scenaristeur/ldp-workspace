(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-befc1884"],{1129:function(e,t,n){},4443:function(e,t,n){"use strict";n("1129")},"83b8":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("div",{staticClass:"add-item"},[n("b-form-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("br"),null!=e.selected?n("form",{staticClass:"mb-3",attrs:{action:"#",method:"post"},on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("b-form-input",{ref:"field_input",attrs:{placeholder:"Add a "+e.selected.label},on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}},model:{value:e.vcard[e.selected["@id"]],callback:function(t){e.$set(e.vcard,e.selected["@id"],t)},expression:"vcard[selected['@id']]"}})],1):e._e(),e._v(" "+e._s(e.selected)+" ")],1),n("hr"),n("br"),n("vueVcard",{attrs:{orgPost:"00000",orgStreet:"Some Street",orgRegion:"Some Region",orgCity:"Some City",orgCountry:"LRK",orgName:"OrganizationName",firstName:"John",lastName:"Doe",workPhone:"5555555555",homePhone:"5555555555"}})],1)},a=[],s=(n("4de4"),n("d81d"),n("d72f")),c={name:"VCard",data:function(){return{options:[],selected:null}},created:function(){this.vcard=new s["a"],console.log("vcard",this.vcard),this.options=this.vcard.jsonld["@context"].defines.filter((function(e){return"owl:Class"!=e["@type"]&&1!=e.deprecated})).map((function(e){return{value:e,text:e.label+" "+e["@type"]}})),this.options.unshift({value:null,text:"Add a field"}),console.log("options",this.options)},methods:{submitForm:function(){console.log(this.vcard),this.$refs.field_input.value=""}}},i=c,r=(n("4443"),n("2877")),l=Object(r["a"])(i,o,a,!1,null,null,null);t["default"]=l.exports},c141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("d4ec"),a=n("bee2"),s=function(){function e(){Object(o["a"])(this,e),this.jsonld={"@context":{owl:"http://www.w3.org/2002/07/owl#",as:"https://www.w3.org/ns/activitystreams",schema:"http://schema.org/"},"@id":null,"@type":"owl:Thing","schema:name":"__NEW__THING__"}}return Object(a["a"])(e,[{key:"save",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("save",this,e)}}]),e}()},d72f:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("d4ec"),a=n("257e"),s=n("262e"),c=n("2caf"),i=n("c141"),r={"@id":null,"vcard:hasName":"","@type":"vcard:VCard","vcard:given-name":"","vcard:family-name":"","vcard:hasPhoto":"https://image.flaticon.com/icons/svg/149/149992.svg"},l=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return Object(o["a"])(this,n),e=t.call(this),Object.assign(Object(a["a"])(e),s),e}return n}(i["a"])}}]);
//# sourceMappingURL=chunk-befc1884.74564dbd.js.map