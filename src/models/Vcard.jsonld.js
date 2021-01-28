export default  {
  "@context": {
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "owl": "http://www.w3.org/2002/07/owl#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "defines": { "@reverse": "rdfs:isDefinedBy" },
    "label": { "@id": "rdfs:label", "@language": "en" },
    "comment": { "@id": "rdfs:comment", "@language": "en" },
    "subClassOf": { "@id": "rdfs:subClassOf", "@type": "@id" },
    "subPropertyOf": { "@id": "rdfs:subPropertyOf", "@type": "@id" },
    "range": { "@id": "rdfs:range", "@type": "@id" },
    "domain": { "@id": "rdfs:domain", "@type": "@id" },
    "seeAlso": { "@id": "rdfs:seeAlso", "@type": "@id" },
    "deprecated": "owl:deprecated",
    "equivalentClass": { "@id": "owl:equivalentClass", "@type": "@id" },
    "equivalentProperty": { "@id": "owl:equivalentProperty", "@type": "@id" },
    "unionOf": { "@id": "owl:unionOf", "@type": "@id", "@container": "@list" },
    "intersectionOf": { "@id": "owl:intersectionOf", "@type": "@id", "@container": "@list" },
    "onProperty": { "@id": "owl:onProperty", "@type": "@id" },
    "someValuesFrom": { "@id": "owl:someValuesFrom", "@type": "@id" },
    "minCardinality": { "@id": "owl:minCardinality", "@type": "xsd:nonNegativeInteger" },
    "maxCardinality": { "@id": "owl:maxCardinality", "@type": "xsd:nonNegativeInteger" },
    "minQualifiedCardinality": { "@id": "owl:minQualifiedCardinality", "@type": "xsd:nonNegativeInteger" },
    "onDataRange": { "@id": "owl:onDataRange", "@type": "@id" },
    "onClass": { "@id": "owl:onClass", "@type": "@id" },
    "disjointWith": { "@id": "owl:disjointWith", "@type": "@id" },
    "versionInfo": { "@id": "owl:versionInfo", "@language": "en" }
  },
  "@id": "http://www.w3.org/2006/vcard/ns",
  "@type": "owl:Ontology",
  "label": "Ontology for vCard",
  "comment": "Ontology for vCard based on RFC6350",
  "versionInfo": "Final",
  "defines": [
    {
      "@id": "vcard:Acquaintance",
      "@type": "owl:Class",
      "label": "Acquaintance",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Address",
      "@type": "owl:Class",
      "label": "Address",
      "comment": "To specify the components of the delivery address for the  object",
      "equivalentClass": {
        "@type": "owl:Class",
        "unionOf": [
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:country-name",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "maxCardinality": 1,
                "onProperty": "vcard:country-name"
              }
            ]
          },
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:locality",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "maxCardinality": 1,
                "onProperty": "vcard:locality"
              }
            ]
          },
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:postal-code",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "maxCardinality": 1,
                "onProperty": "vcard:postal-code"
              }
            ]
          },
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:region",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "maxCardinality": 1,
                "onProperty": "vcard:region"
              }
            ]
          },
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:street-address",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "maxCardinality": 1,
                "onProperty": "vcard:street-address"
              }
            ]
          }
        ]
      }
    },
    {
      "@id": "vcard:Agent",
      "@type": "owl:Class",
      "label": "Agent",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:BBS",
      "@type": "owl:Class",
      "label": "BBS",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:TelephoneType",
      "deprecated": true
    },
    {
      "@id": "vcard:Car",
      "@type": "owl:Class",
      "label": "Car",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:TelephoneType",
      "deprecated": true
    },
    {
      "@id": "vcard:Cell",
      "@type": "owl:Class",
      "label": "Cell",
      "comment": "Also called mobile telephone",
      "subClassOf": "vcard:TelephoneType"
    },
    {
      "@id": "vcard:Child",
      "@type": "owl:Class",
      "label": "Child",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Colleague",
      "@type": "owl:Class",
      "label": "Colleague",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Contact",
      "@type": "owl:Class",
      "label": "Contact",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Coresident",
      "@type": "owl:Class",
      "label": "Coresident",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Coworker",
      "@type": "owl:Class",
      "label": "Coworker",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Crush",
      "@type": "owl:Class",
      "label": "Crush",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Date",
      "@type": "owl:Class",
      "label": "Date",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Dom",
      "@type": "owl:Class",
      "label": "Dom",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:Type",
      "deprecated": true
    },
    {
      "@id": "vcard:Email",
      "@type": "owl:Class",
      "label": "Email",
      "comment": "To specify the electronic mail address for communication with the object the vCard represents. Use the hasEmail object property.",
      "deprecated": true
    },
    {
      "@id": "vcard:Emergency",
      "@type": "owl:Class",
      "label": "Emergency",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Fax",
      "@type": "owl:Class",
      "label": "Fax",
      "subClassOf": "vcard:TelephoneType"
    },
    {
      "@id": "vcard:Female",
      "@type": "owl:Class",
      "label": "Female",
      "subClassOf": "vcard:Gender"
    },
    {
      "@id": "vcard:Friend",
      "@type": "owl:Class",
      "label": "Friend",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Gender",
      "@type": "owl:Class",
      "label": "Gender",
      "comment": "Used for gender codes. The URI of the gender code must be used as the value for Gender."
    },
    {
      "@id": "vcard:Group",
      "@type": "owl:Class",
      "label": "Group",
      "comment": "Object representing a group of persons or entities.  A group object will usually contain hasMember properties to specify the members of the group.",
      "subClassOf": "vcard:Kind",
      "disjointWith": [
        "vcard:Individual",
        "vcard:Location",
        "vcard:Organization"
      ],
      "equivalentClass": {
        "@type": "owl:Class",
        "intersectionOf": [
          {
            "@type": "owl:Restriction",
            "onProperty": "vcard:hasMember",
            "someValuesFrom": "vcard:Kind"
          },
          {
            "@type": "owl:Restriction",
            "minQualifiedCardinality": "1",
            "onClass": "vcard:Kind",
            "onProperty": "vcard:hasMember"
          }
        ]
      }
    },
    {
      "@id": "vcard:Home",
      "@type": "owl:Class",
      "label": "Home",
      "comment": "This implies that the property is related to an individual's personal life",
      "subClassOf": "vcard:Type"
    },
    {
      "@id": "vcard:ISDN",
      "@type": "owl:Class",
      "label": "ISDN",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:Type",
      "deprecated": true
    },
    {
      "@id": "vcard:Individual",
      "@type": "owl:Class",
      "label": "Individual",
      "comment": "An object representing a single person or entity",
      "subClassOf": "vcard:Kind",
      "disjointWith": [
        "vcard:Location",
        "vcard:Organization"
      ]
    },
    {
      "@id": "vcard:Internet",
      "@type": "owl:Class",
      "label": "Internet",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:Type",
      "deprecated": true
    },
    {
      "@id": "vcard:Intl",
      "@type": "owl:Class",
      "label": "Intl",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:Type",
      "deprecated": true
    },
    {
      "@id": "vcard:Kin",
      "@type": "owl:Class",
      "label": "Kin",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Kind",
      "@type": "owl:Class",
      "label": "Kind",
      "comment": "The parent class for all objects",
      "equivalentClass": [
        "vcard:VCard",
        {
          "@type": "owl:Restriction",
          "minQualifiedCardinality": "1",
          "onDataRange": "xsd:string",
          "onProperty": "vcard:fn"
        }
      ]
    },
    {
      "@id": "vcard:Label",
      "@type": "owl:Class",
      "label": "Label",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:Type",
      "deprecated": true
    },
    {
      "@id": "vcard:Location",
      "@type": "owl:Class",
      "label": "Location",
      "comment": "An object representing a named geographical place",
      "subClassOf": "vcard:Kind",
      "disjointWith": "vcard:Organization"
    },
    {
      "@id": "vcard:Male",
      "@type": "owl:Class",
      "label": "Male",
      "subClassOf": "vcard:Gender"
    },
    {
      "@id": "vcard:Me",
      "@type": "owl:Class",
      "label": "Me",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Met",
      "@type": "owl:Class",
      "label": "Met",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Modem",
      "@type": "owl:Class",
      "label": "Modem",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:TelephoneType",
      "deprecated": true
    },
    {
      "@id": "vcard:Msg",
      "@type": "owl:Class",
      "label": "Msg",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:TelephoneType",
      "deprecated": true
    },
    {
      "@id": "vcard:Muse",
      "@type": "owl:Class",
      "label": "Muse",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Name",
      "@type": "owl:Class",
      "label": "Name",
      "comment": "To specify the components of the name of the object",
      "equivalentClass": {
        "@type": "owl:Class",
        "unionOf": [
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:additional-name",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "minCardinality": 0,
                "onProperty": "vcard:additional-name"
              }
            ]
          },
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:family-name",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "maxCardinality": 1,
                "onProperty": "vcard:family-name"
              }
            ]
          },
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:given-name",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "maxCardinality": 1,
                "onProperty": "vcard:given-name"
              }
            ]
          },
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:honorific-prefix",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "minCardinality": 0,
                "onProperty": "vcard:honorific-prefix"
              }
            ]
          },
          {
            "@type": "owl:Class",
            "intersectionOf": [
              {
                "@type": "owl:Restriction",
                "onProperty": "vcard:honorific-suffix",
                "someValuesFrom": "xsd:string"
              },
              {
                "@type": "owl:Restriction",
                "minCardinality": 0,
                "onProperty": "vcard:honorific-suffix"
              }
            ]
          }
        ]
      }
    },
    {
      "@id": "vcard:Neighbor",
      "@type": "owl:Class",
      "label": "Neighbor",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:None",
      "@type": "owl:Class",
      "label": "None",
      "subClassOf": "vcard:Gender"
    },
    {
      "@id": "vcard:Organization",
      "@type": "owl:Class",
      "label": "Organization",
      "comment": "An object representing an organization.  An organization is a single entity, and might represent a business or government, a department or division within a business or government, a club, an association, or the like.\n",
      "subClassOf": "vcard:Kind"
    },
    {
      "@id": "vcard:Other",
      "@type": "owl:Class",
      "label": "Other",
      "subClassOf": "vcard:Gender"
    },
    {
      "@id": "vcard:PCS",
      "@type": "owl:Class",
      "label": "PCS",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:TelephoneType",
      "deprecated": true
    },
    {
      "@id": "vcard:Pager",
      "@type": "owl:Class",
      "label": "Pager",
      "subClassOf": "vcard:TelephoneType"
    },
    {
      "@id": "vcard:Parcel",
      "@type": "owl:Class",
      "label": "Parcel",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:Type",
      "deprecated": true
    },
    {
      "@id": "vcard:Parent",
      "@type": "owl:Class",
      "label": "Parent",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Postal",
      "@type": "owl:Class",
      "label": "Postal",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:Type",
      "deprecated": true
    },
    {
      "@id": "vcard:Pref",
      "@type": "owl:Class",
      "label": "Pref",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:Type",
      "deprecated": true
    },
    {
      "@id": "vcard:RelatedType",
      "@type": "owl:Class",
      "label": "Relation Type",
      "comment": "Used for relation type codes. The URI of the relation type code must be used as the value for the Relation Type."
    },
    {
      "@id": "vcard:Sibling",
      "@type": "owl:Class",
      "label": "Sibling",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Spouse",
      "@type": "owl:Class",
      "label": "Spouse",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Sweetheart",
      "@type": "owl:Class",
      "label": "Sweetheart",
      "subClassOf": "vcard:RelatedType"
    },
    {
      "@id": "vcard:Tel",
      "@type": "owl:Class",
      "label": "Tel",
      "comment": "This class is deprecated. Use the hasTelephone object property.",
      "deprecated": true
    },
    {
      "@id": "vcard:TelephoneType",
      "@type": "owl:Class",
      "label": "Phone",
      "comment": "Used for telephone type codes. The URI of the telephone type code must be used as the value for the Telephone Type."
    },
    {
      "@id": "vcard:Text",
      "@type": "owl:Class",
      "label": "Text",
      "comment": "Also called sms telephone",
      "subClassOf": "vcard:TelephoneType"
    },
    {
      "@id": "vcard:TextPhone",
      "@type": "owl:Class",
      "label": "Text phone",
      "subClassOf": "vcard:TelephoneType"
    },
    {
      "@id": "vcard:Type",
      "@type": "owl:Class",
      "label": "Type",
      "comment": "Used for type codes. The URI of the type code must be used as the value for Type."
    },
    {
      "@id": "vcard:Unknown",
      "@type": "owl:Class",
      "label": "Unknown",
      "subClassOf": "vcard:Gender"
    },
    {
      "@id": "vcard:VCard",
      "@type": "owl:Class",
      "label": "VCard",
      "comment": "The vCard class is  equivalent to the new Kind class, which is the parent for the four explicit types of vCards (Individual, Organization, Location, Group)",
      "equivalentClass": "vcard:Kind"
    },
    {
      "@id": "vcard:Video",
      "@type": "owl:Class",
      "label": "Video",
      "subClassOf": "vcard:TelephoneType"
    },
    {
      "@id": "vcard:Voice",
      "@type": "owl:Class",
      "label": "Voice",
      "subClassOf": "vcard:TelephoneType"
    },
    {
      "@id": "vcard:Work",
      "@type": "owl:Class",
      "label": "Work",
      "comment": "This implies that the property is related to an individual's work place",
      "subClassOf": "vcard:Type"
    },
    {
      "@id": "vcard:X400",
      "@type": "owl:Class",
      "label": "X400",
      "comment": "This class is deprecated",
      "subClassOf": "vcard:Type",
      "deprecated": true
    },
    {
      "@id": "vcard:additional-name",
      "@type": "owl:DatatypeProperty",
      "label": "additional name",
      "comment": "The additional name associated with the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:adr",
      "@type": "owl:ObjectProperty",
      "label": "address",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasAddress"
    },
    {
      "@id": "vcard:agent",
      "@type": "owl:ObjectProperty",
      "label": "agent",
      "comment": "This object property has been deprecated",
      "deprecated": true
    },
    {
      "@id": "vcard:anniversary",
      "@type": "owl:DatatypeProperty",
      "label": "anniversary",
      "comment": "The date of marriage, or equivalent, of the object",
      "range":  {
        "@type": "owl:Class",
        "unionOf": [
          "xsd:dateTime",
          "xsd:gYear"
        ]
      }
    },
    {
      "@id": "vcard:bday",
      "@type": "owl:DatatypeProperty",
      "label": "birth date",
      "comment": "To specify the birth date of the object",
      "range": {
        "@type": "owl:Class",
        "unionOf": [
          "xsd:dateTime",
          "xsd:dateTimeStamp",
          "xsd:gYear"
        ]
      }
    },
    {
      "@id": "vcard:category",
      "@type": "owl:DatatypeProperty",
      "label": "category",
      "comment": "The category information about the object, also known as tags",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:class",
      "@type": "owl:DatatypeProperty",
      "label": "class",
      "comment": "This data property has been deprecated",
      "deprecated": true
    },
    {
      "@id": "vcard:country-name",
      "@type": "owl:DatatypeProperty",
      "label": "country name",
      "comment": "The country name associated with the address of the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:email",
      "@type": "owl:ObjectProperty",
      "label": "email",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasEmail"
    },
    {
      "@id": "vcard:extended-address",
      "@type": "owl:DatatypeProperty",
      "label": "extended address",
      "comment": "This data property has been deprecated",
      "deprecated": true
    },
    {
      "@id": "vcard:family-name",
      "@type": "owl:DatatypeProperty",
      "label": "family name",
      "comment": "The family name associated with the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:fn",
      "@type": "owl:DatatypeProperty",
      "label": "formatted name",
      "comment": "The formatted text corresponding to the name of the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:geo",
      "@type": "owl:ObjectProperty",
      "label": "geo",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasGeo"
    },
    {
      "@id": "vcard:given-name",
      "@type": "owl:DatatypeProperty",
      "label": "given name",
      "comment": "The given name associated with the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:hasAdditionalName",
      "@type": "owl:ObjectProperty",
      "label": "has additional name",
      "comment": "Used to support property parameters for the additional name data property"
    },
    {
      "@id": "vcard:hasAddress",
      "@type": "owl:ObjectProperty",
      "label": "has address",
      "comment": "To specify the components of the delivery address for the object",
      "range": "vcard:Address"
    },
    {
      "@id": "vcard:hasCalendarBusy",
      "@type": "owl:ObjectProperty",
      "label": "has calendar busy",
      "comment": "To specify the busy time associated with the object. (Was called FBURL in RFC6350)"
    },
    {
      "@id": "vcard:hasCalendarLink",
      "@type": "owl:ObjectProperty",
      "label": "has calendar link",
      "comment": "To specify the calendar associated with the object. (Was called CALURI in RFC6350)"
    },
    {
      "@id": "vcard:hasCalendarRequest",
      "@type": "owl:ObjectProperty",
      "label": "has calendar request",
      "comment": "To specify the calendar user address to which a scheduling request be sent for the object. (Was called CALADRURI in RFC6350)"
    },
    {
      "@id": "vcard:hasCategory",
      "@type": "owl:ObjectProperty",
      "label": "has category",
      "comment": "Used to support property parameters for the category data property"
    },
    {
      "@id": "vcard:hasCountryName",
      "@type": "owl:ObjectProperty",
      "label": "has country name",
      "comment": "Used to support property parameters for the country name data property"
    },
    {
      "@id": "vcard:hasEmail",
      "@type": "owl:ObjectProperty",
      "label": "has email",
      "comment": "To specify the electronic mail address for communication with the object",
      "range": "vcard:Email"
    },
    {
      "@id": "vcard:hasFN",
      "@type": "owl:ObjectProperty",
      "label": "has formatted name",
      "comment": "Used to support property parameters for the formatted name data property"
    },
    {
      "@id": "vcard:hasFamilyName",
      "@type": "owl:ObjectProperty",
      "label": "has family name",
      "comment": "Used to support property parameters for the family name data property"
    },
    {
      "@id": "vcard:hasGender",
      "@type": "owl:ObjectProperty",
      "label": "has gender",
      "comment": "To specify  the sex or gender identity of the object. URIs are recommended to enable interoperable sex and gender codes to be used."
    },
    {
      "@id": "vcard:hasGeo",
      "@type": "owl:ObjectProperty",
      "label": "has geo",
      "comment": "To specify information related to the global positioning of the object. May also be used as a property parameter."
    },
    {
      "@id": "vcard:hasGivenName",
      "@type": "owl:ObjectProperty",
      "label": "has given name",
      "comment": "Used to support property parameters for the given name data property"
    },
    {
      "@id": "vcard:hasHonorificPrefix",
      "@type": "owl:ObjectProperty",
      "label": "has honorific prefix",
      "comment": "Used to support property parameters for the honorific prefix data property"
    },
    {
      "@id": "vcard:hasHonorificSuffix",
      "@type": "owl:ObjectProperty",
      "label": "has honorific suffix",
      "comment": "Used to support property parameters for the honorific suffix data property"
    },
    {
      "@id": "vcard:hasInstantMessage",
      "@type": "owl:ObjectProperty",
      "label": "has messaging",
      "comment": "To specify the instant messaging and presence protocol communications with the object. (Was called IMPP in RFC6350)"
    },
    {
      "@id": "vcard:hasKey",
      "@type": "owl:ObjectProperty",
      "label": "has key",
      "comment": "To specify a public key or authentication certificate associated with the object",
      "equivalentProperty": "vcard:key"
    },
    {
      "@id": "vcard:hasLanguage",
      "@type": "owl:ObjectProperty",
      "label": "has language",
      "comment": "Used to support property parameters for the language data property"
    },
    {
      "@id": "vcard:hasLocality",
      "@type": "owl:ObjectProperty",
      "label": "has locality",
      "comment": "Used to support property parameters for the locality data property"
    },
    {
      "@id": "vcard:hasLogo",
      "@type": "owl:ObjectProperty",
      "label": "has logo",
      "comment": "To specify a graphic image of a logo associated with the object ",
      "equivalentProperty": "vcard:logo"
    },
    {
      "@id": "vcard:hasMember",
      "@type": "owl:ObjectProperty",
      "comment": "To include a member in the group this object represents. (This property can only be used by Group individuals)",
      "domain": "vcard:Group",
      "label": "has member",
      "range": "vcard:Kind"
    },
    {
      "@id": "vcard:hasName",
      "@type": "owl:ObjectProperty",
      "label": "has name",
      "comment": "To specify the components of the name of the object",
      "range": "vcard:Name",
      "equivalentProperty": "vcard:n"
    },
    {
      "@id": "vcard:hasNickname",
      "@type": "owl:ObjectProperty",
      "label": "has nickname",
      "comment": "Used to support property parameters for the nickname data property",
      "seeAlso": "http://www.w3.org/2006/vcard/ns#nickname"
    },
    {
      "@id": "vcard:hasNote",
      "@type": "owl:ObjectProperty",
      "label": "has note",
      "comment": "Used to support property parameters for the note data property"
    },
    {
      "@id": "vcard:hasOrganizationName",
      "@type": "owl:ObjectProperty",
      "label": "has organization name",
      "comment": "Used to support property parameters for the organization name data property"
    },
    {
      "@id": "vcard:hasOrganizationUnit",
      "@type": "owl:ObjectProperty",
      "label": "has organization unit name",
      "comment": "Used to support property parameters for the organization unit name data property"
    },
    {
      "@id": "vcard:hasPhoto",
      "@type": "owl:ObjectProperty",
      "label": "has photo",
      "comment": "To specify an image or photograph information that annotates some aspect of the object",
      "equivalentProperty": "vcard:photo"
    },
    {
      "@id": "vcard:hasPostalCode",
      "@type": "owl:ObjectProperty",
      "label": "has postal code",
      "comment": "Used to support property parameters for the postal code data property"
    },
    {
      "@id": "vcard:hasRegion",
      "@type": "owl:ObjectProperty",
      "label": "has region",
      "comment": "Used to support property parameters for the region data property"
    },
    {
      "@id": "vcard:hasRelated",
      "@type": "owl:ObjectProperty",
      "label": "has related",
      "comment": "To specify a relationship between another entity and the entity represented by this object"
    },
    {
      "@id": "vcard:hasRole",
      "@type": "owl:ObjectProperty",
      "label": "has role",
      "comment": "Used to support property parameters for the role data property"
    },
    {
      "@id": "vcard:hasSound",
      "@type": "owl:ObjectProperty",
      "label": "has sound",
      "comment": "To specify a digital sound content information that annotates some aspect of the object",
      "equivalentProperty": "vcard:sound"
    },
    {
      "@id": "vcard:hasSource",
      "@type": "owl:ObjectProperty",
      "label": "has source",
      "comment": "To identify the source of directory information of the object"
    },
    {
      "@id": "vcard:hasStreetAddress",
      "@type": "owl:ObjectProperty",
      "label": "has street address",
      "comment": "Used to support property parameters for the street address data property"
    },
    {
      "@id": "vcard:hasTelephone",
      "@type": "owl:ObjectProperty",
      "label": "has telephone",
      "comment": "To specify the telephone number for telephony communication with the object",
      "equivalentProperty": "vcard:tel"
    },
    {
      "@id": "vcard:hasTitle",
      "@type": "owl:ObjectProperty",
      "label": "has title",
      "comment": "Used to support property parameters for the title data property"
    },
    {
      "@id": "vcard:hasUID",
      "@type": "owl:ObjectProperty",
      "label": "has uid",
      "comment": "To specify a value that represents a globally unique identifier corresponding to the object"
    },
    {
      "@id": "vcard:hasURL",
      "@type": "owl:ObjectProperty",
      "label": "has url",
      "comment": "To specify a uniform resource locator associated with the object",
      "equivalentProperty": "vcard:url"
    },
    {
      "@id": "vcard:hasValue",
      "@type": "owl:ObjectProperty",
      "label": "has value",
      "comment": "Used to indicate the resource value of an object property that requires property parameters"
    },
    {
      "@id": "vcard:honorific-prefix",
      "@type": "owl:DatatypeProperty",
      "label": "honorific prefix",
      "comment": "The honorific prefix of the name associated with the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:honorific-suffix",
      "@type": "owl:DatatypeProperty",
      "label": "honorific suffix",
      "comment": "The honorific suffix of the name associated with the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:key",
      "@type": "owl:ObjectProperty",
      "label": "key",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasKey"
    },
    {
      "@id": "vcard:label",
      "@type": "owl:DatatypeProperty",
      "label": "label",
      "comment": "This data property has been deprecated",
      "deprecated": true
    },
    {
      "@id": "vcard:language",
      "@type": "owl:DatatypeProperty",
      "label": "language",
      "comment": "To specify the language that may be used for contacting the object. May also be used as a property parameter."
    },
    {
      "@id": "vcard:latitude",
      "@type": "owl:DatatypeProperty",
      "label": "latitude",
      "comment": "This data property has been deprecated. See hasGeo",
      "deprecated": true
    },
    {
      "@id": "vcard:locality",
      "@type": "owl:DatatypeProperty",
      "label": "locality",
      "comment": "The locality (e.g. city or town) associated with the address of the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:logo",
      "@type": "owl:ObjectProperty",
      "label": "logo",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasLogo"
    },
    {
      "@id": "vcard:longitude",
      "@type": "owl:DatatypeProperty",
      "label": "longitude",
      "comment": "This data property has been deprecated. See hasGeo",
      "deprecated": true
    },
    {
      "@id": "vcard:mailer",
      "@type": "owl:DatatypeProperty",
      "label": "mailer",
      "comment": "This data property has been deprecated",
      "deprecated": true
    },
    {
      "@id": "vcard:n",
      "@type": "owl:ObjectProperty",
      "label": "name",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasName"
    },
    {
      "@id": "vcard:nickname",
      "@type": "owl:DatatypeProperty",
      "label": "nickname",
      "comment": "The nick name associated with the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:note",
      "@type": "owl:DatatypeProperty",
      "label": "note",
      "comment": "A note associated with the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:org",
      "@type": "owl:ObjectProperty",
      "label": "organization",
      "comment": "This object property has been mapped. Use the organization-name data property.",
      "equivalentProperty": "vcard:organization-name"
    },
    {
      "@id": "vcard:organization-name",
      "@type": "owl:DatatypeProperty",
      "label": "organization name",
      "comment": "To specify the organizational name associated with the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:organization-unit",
      "@type": "owl:DatatypeProperty",
      "label": "organizational unit name",
      "comment": "To specify the organizational unit name associated with the object",
      "range": "xsd:string",
      "subPropertyOf": "vcard:organization-name"
    },
    {
      "@id": "vcard:photo",
      "@type": "owl:ObjectProperty",
      "label": "photo",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasPhoto"
    },
    {
      "@id": "vcard:post-office-box",
      "@type": "owl:DatatypeProperty",
      "label": "post office box",
      "comment": "This data property has been deprecated",
      "deprecated": true
    },
    {
      "@id": "vcard:postal-code",
      "@type": "owl:DatatypeProperty",
      "label": "postal code",
      "comment": "The postal code associated with the address of the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:prodid",
      "@type": "owl:DatatypeProperty",
      "label": "product id",
      "comment": "To specify the identifier for the product that created the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:region",
      "@type": "owl:DatatypeProperty",
      "label": "region",
      "comment": "The region (e.g. state or province) associated with the address of the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:rev",
      "@type": "owl:DatatypeProperty",
      "label": "revision",
      "comment": "To specify revision information about the object",
      "range": "xsd:dateTime"
    },
    {
      "@id": "vcard:role",
      "@type": "owl:DatatypeProperty",
      "label": "role",
      "comment": "To specify the function or part played in a particular situation by the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:sort-string",
      "@type": "owl:DatatypeProperty",
      "label": "sort as",
      "comment": "To specify the string to be used for national-language-specific sorting. Used as a property parameter only.",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:sound",
      "@type": "owl:ObjectProperty",
      "label": "sound",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasSound"
    },
    {
      "@id": "vcard:street-address",
      "@type": "owl:DatatypeProperty",
      "label": "street address",
      "comment": "The street address associated with the address of the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:tel",
      "@type": "owl:ObjectProperty",
      "label": "telephone",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasTelephone"
    },
    {
      "@id": "vcard:title",
      "@type": "owl:DatatypeProperty",
      "label": "title",
      "comment": "To specify the position or job of the object",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:tz",
      "@type": "owl:DatatypeProperty",
      "label": "time zone",
      "comment": "To indicate time zone information that is specific to the object. May also be used as a property parameter.",
      "range": "xsd:string"
    },
    {
      "@id": "vcard:url",
      "@type": "owl:ObjectProperty",
      "label": "url",
      "comment": "This object property has been mapped",
      "equivalentProperty": "vcard:hasURL"
    },
    {
      "@id": "vcard:value",
      "@type": "owl:DatatypeProperty",
      "label": "value",
      "comment": "Used to indicate the literal value of a data property that requires property parameters"
    }
  ]
}
