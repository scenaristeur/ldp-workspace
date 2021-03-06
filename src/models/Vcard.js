import Thing from './Thing.js'
//import VCardContext from '@/models/Vcard.jsonld.js'


let default_options = {
  '@id': null,
  'vcard:hasName': "",
  '@type': "vcard:VCard",
  'vcard:given-name': "",
  'vcard:family-name': "",
//  'vcard:hasPhoto': 'https://image.flaticon.com/icons/svg/149/149992.svg'

}
//https://raw.githubusercontent.com/lanthaler/vCardOntology/master/Vcard.jsonld

export default class Vcard extends Thing {
  constructor(options = default_options) {
    super()
    // assign context
  //  Object.assign(this.jsonld['@context'], VCardContext)
    // default


    // assign options
    Object.assign(this, options)

    //this.jsonld['@type'] = "vcard:VCard",
    //this.jsonld['vcard:hasName'] = "__NEW__vcard:Name__"


    // this.basic_fields = [
    //   this.picture = 'https://image.flaticon.com/icons/svg/149/149992.svg',
    //   this.name = '',
    //   this.birth = '',
    //   this.email = '',
    //   this.phone = '',
    //   this.nationality = '',
    // ]

    //   this['@context'] = {
    //     as: "https://www.w3.org/ns/activitystreams",
    //     schema: "http://schema.org/"
    //   },
    //   this['@id'] = null
    //   this['@type'] = "Vcard"
    //   this['schema:name'] = "__NEW__VCARD__"
  }
}
