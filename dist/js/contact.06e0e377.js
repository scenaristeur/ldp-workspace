(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{b8fa:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",[e("b-card",{staticClass:"mb-2",attrs:{tag:"article"}},[e("b-dropdown",{staticClass:"m-md-2",staticStyle:{position:"absolute",top:"10px",right:"10px",width:"100"},attrs:{id:"dropdown-1",dropleft:"",size:"lg",variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("b-icon",{attrs:{icon:"menu-button-wide"}})]},proxy:!0}])},[e("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modalConfirmDelete",modifiers:{modalConfirmDelete:!0}}],attrs:{variant:"warning"}},[t._v("Delete")])],1),e("b-avatar",{staticClass:"mr-3",attrs:{variant:"info",src:t.contact["vcard:hasPhoto"],size:"6rem"}}),e("b-card-title",[t._v(t._s(t.contact["vcard:hasName"])+" "),e("a",{attrs:{href:t.contact["@id"],target:"_blank"}},[e("b-icon",{attrs:{icon:"link"}})],1)]),e("b-card-sub-title",[e("b-row",[t.contact["vcard:hasTelephone"]?e("b-col",{staticClass:"col p-3",staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.contact["vcard:hasTelephone"])),e("br"),e("b-button",{staticStyle:{"text-align":"center"},attrs:{href:"tel:"+t.contact["vcard:hasTelephone"]}},[e("b-icon",{attrs:{icon:"telephone-fill",variant:void 0!=t.contact["vcard:hasTelephone"]?"success":"danger"}})],1),e("b-button",{staticStyle:{"text-align":"center"},attrs:{href:"sms:"+t.contact["vcard:hasTelephone"]}},[e("b-icon",{attrs:{icon:"chat-left-fill",variant:void 0!=t.contact["vcard:hasTelephone"]?"success":"danger"}})],1)],1):t._e(),e("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},attrs:{href:"mailto:"+t.contact["vcard:hasEmail"]}},[e("b-icon",{attrs:{icon:"envelope-fill",variant:void 0!=t.contact["vcard:hasEmail"]?"success":"danger"}}),t._v(" "+t._s(t.contact["vcard:hasEmail"])+" ")],1),e("b-button",{staticClass:"col p-3 button",staticStyle:{"text-align":"center"},attrs:{href:t.contact["vcard:hasURL"],target:"_blank"}},[e("b-icon",{attrs:{icon:"link",variant:void 0!=t.contact["vcard:hasURL"]?"success":"danger"}}),t._v(" "+t._s(t.contact["vcard:hasURL"])+" ")],1)],1)],1),t.contact["vcard:hasAddress"]?e("b-card-text",[t._v(" Address : "),e("b-button",{staticStyle:{"text-align":"center"},attrs:{href:"https://www.google.com/maps/search/"+t.contact["vcard:hasAddress"],target:"_blank"}},[t._v(" "+t._s(t.contact["vcard:hasAddress"])+" "),e("b-icon",{attrs:{icon:"geo-alt-fill",variant:void 0!=t.contact["vcard:hasAddress"]?"success":"danger"}})],1)],1):t._e(),t.contact["vcard:adr"]?e("b-card-text",[t._v(" Address : "),e("b-button",{staticStyle:{"text-align":"center"},attrs:{href:"https://www.google.com/maps/search/"+t.contact["vcard:adr"],target:"_blank"}},[t._v(" "+t._s(t.contact["vcard:adr"])+" "),e("b-icon",{attrs:{icon:"geo-alt-fill",variant:void 0!=t.contact["vcard:adr"]?"success":"danger"}})],1)],1):t._e()],1),e("br"),e("br"),e("br"),e("br"),e("div",{staticStyle:{position:"fixed",bottom:"0px",left:"0px",width:"100%",color:"#fff",background:"#000"},attrs:{id:"toolbar"}},[e("b-row",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalQR",modifiers:{modalQR:!0}}],staticClass:"col p-3",staticStyle:{"text-align":"center"}},[e("b-icon",{attrs:{icon:"share"}}),t._v(" QR Code ")],1),e("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},on:{click:t.modify}},[e("b-icon",{attrs:{icon:"pencil-fill"}}),t._v(" Modify ")],1),e("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"}},[e("b-icon",{attrs:{icon:"share-fill"}}),t._v(" Share ")],1)],1)],1),e("b-modal",{attrs:{id:"modalQR"},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" "+t._s(t.contact["vcard:hasName"])+" ")]},proxy:!0}])},[e("vueVcard",{attrs:{orgPost:"00000",orgStreet:"Some Street",orgRegion:"Some Region",orgCity:"Some City",orgCountry:"LRK",orgName:"OrganizationName",firstName:"John",lastName:"Doe",workPhone:"5555555555",homePhone:"5555555555"}})],1),e("b-modal",{attrs:{id:"modalConfirmDelete"},on:{ok:t.deleteContact},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Are you sur you want to delete ? ")]},proxy:!0}])},[e("h1",[t._v(t._s(t.contact["vcard:hasName"]))]),e("p",{attrs:{variant:"danger"}},[t._v("!!! This can not be undone !!!")])])],1)},c=[],n={name:"Conatct",props:["contact"],methods:{modify:function(){this.$router.push({name:"EditContact",params:{vcard:this.contact}})},deleteContact:function(){this.$store.dispatch("contacts/delete",this.contact),this.$router.push({name:"Contacts"})}}},r=n,s=e("2877"),i=Object(s["a"])(r,o,c,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=contact.06e0e377.js.map