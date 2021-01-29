//import shop from '../../api/shop'
//import ldflex from '@solid/query-ldflex/lib/exports/rdflib'
//import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
// initial state
const state = () => ({
  contacts: []
})

// getters
const getters = {}

// actions
const actions = {
  async findAll(context){
    //context.commit('setContacts', contacts_temp)
    console.log('findAll')
    if (context.rootState.solid.storage != null){
    let path = context.rootState.solid.storage+'contacts/'
    await fc.readFolder(path).then(async function(folder){
      console.log(folder.files.length, folder)
      //   let contacts = await folder.files.map(async function (f) {
      //     let contact = {'@id': f.url, content: JSON.parse(await fc.readFile(f.url))}
      // //  let content = await fc.readFile(f.url)
      //     return contact
      //   })
      let contacts = await Promise.all(
        folder.files.map(async f => {
          let contact = await fc.readFile(f.url)
          return JSON.parse(contact)
        })
      )
      contacts.sort(function (a, b) { return a['vcard:hasName'] > b['vcard:hasName']; });
      console.log(contacts)
      context.commit('setContacts', contacts)

    })
  }

  },
  async add (context, contact){
    let path = context.rootState.solid.storage+'contacts/'
    console.log('update',path, contact)

    contact['@id'] == null ? contact['@id'] = path+uuidv4()+'.jsonld' :''

    await fc.createFile(contact['@id'], JSON.stringify(contact), 'application/json' ).then((content) => {
      console.log(content)
      context.dispatch('findAll')
    })
    .catch(err => console.error(`Error: ${err}`))

    // axios.get(
    //   url,
    //   {header: {'Accept': 'application/ld+json'}}
    // ).then((response) => {
    //   console.log(response);
    //   console.log(response.data['ldp:contains'])
    //   let data = {container: container, items: response.data['ldp:contains']}
    //   context.commit('setItems', data)
    //   //  this.$store.dispatch('ldp_store/update', this.post.data.type.path)
    //   //  console.log(response.headers.get('Location'))
    // }, (error) => {
    //   console.log(error);
    // });

    // console.log(context.rootState.solid.storage)
    //
    // fetch(url,
    //   {
    //     headers: {
    //       'Accept': 'application/json',
    //       //    'Content-Type': 'application/json'
    //     },
    //
    //   })
    //   .then(response => response.json())
    //   .then(d => {
    //     console.log(d)
    //     let data = {container: container, items: d['ldp:contains']}
    //     context.commit('setItems', data)
    //
    //   })
    //   .catch(function(response){ console.log(response) })


  },
  // async init(context){
  //   Object.keys(context.state.app).forEach((k) => {
  //     console.log(k)
  //     context.dispatch('update',k)
  //   });
  //
  // }
  // async setWebId (context, webId) {
  //   //  console.log(webId)
  //   context.commit('setWebId', webId)
  //   //  context.dispatch('inbox/setWebId', webId, { root: true })
  //   if ( webId != null ){
  //     context.commit('setWebId', webId)
  //   //  console.log (ldflex)
  //    let storage =  await ldflex[webId].storage
  //     context.commit('setStorage', `${storage}`)
  //   }else{
  //     context.commit('setWebId', null)
  //     //   let storage =  await ldflex.data[webId].storage
  //     context.commit('setStorage', null)
  //   }
  // }
}

// mutations
const mutations = {

  setContacts(state, contacts){
    console.log(contacts)
    state.contacts = contacts
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
