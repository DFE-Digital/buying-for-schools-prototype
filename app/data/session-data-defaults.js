/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  "complete-title": "true",
  "complete-school": "false",
  "complete-description": "false",
  "complete-upload": "false",
  "complete-evaluation": "false",



  "opportunities": [
    // Review requirement with 1 response
    {
      title: "A robust and enduring alarm system installing",
      category: "Facilities management and estates",
      summary: "Install a new wired alarm system with the required number of sensors, sounders and master panel. Use the existing sounders and sensors but install a new master alarm panel. Install a new wireless system with the required number of sensors, sounders and master panel.",
      budget: "20000",
      name: "St Christophers School",
      address: {
        street: "Building A",
        street2: "123 School Road",
        city: "Schooltown",
        county: "South Schoolshire",
        postcode: "SK0 0LL"
      },
      date: "2018-11-2",
      specification: "st-christophers-alarm-specification.docx",
      supporting: "school_energy_policy.PDF",
      evaluation: [
        "Case study",
        "Presentation"
      ],
      essential: {
        one: "Have security clearance",
        two: "Provide support after installation"
      },
      nice: {
        one: "Work outside of school hours"
      },
      published: "false",
      review: "true",
      response: "1",
      responses: [
        {
          name: "Alarms R Us Limited",
          address: "123 Wake Road, SH0 KNG",
          phone: "01632 960918",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        }
      ]
    },

    // Review requirement with 0 response
    {
      title: "Value for money and reliable waste collection service",
      category: "Facilities management and estates",
      summary: "We are seeking a value for money and reliable waste collection service that includes 1 x 8yrd bin to be collected twice per week (or 2 x 8rd bins to be collected once per week (whichever is the cheaper option), 4 x 1100ltr general waste wheelie bins to be collected once per week, 1 x 1100ltr (or equivalent) plastic recycling bin to be collected once per week, and 1 x 1100ltr (or equivalent) paper and card recycling bin to be collected once per week",
      name: "Thomas Davidson College and Sixth Form",
      address: {
        street: "51  Newgate Street",
        street2: "",
        city: "Kehelland",
        county: "",
        postcode: "TR14 3UW"
      },
      date: "2018-11-1",
      specification: "specification.docx",
      evaluation: [
        "Case study",
        "Presentation"
      ],
      essential: {
        one: "Have security clearance",
        two: "Provide support after installation"
      },
      nice: {
        one: "Work outside of school hours"
      },
      published: "false",
      review: "true",
      response: "0"
    },

    // Review requirement with 18 response
    {
      title: "Caterer to provide a high quality daily catering service to the Students, School Staff and Governors.",
      category: "Facilities management and estates",
      summary: "The Contractor shall order, supply and pay for the food, beverages and all other provisions and commodities required by the Contractor in order to provide the Service specified in this Contract.",
      name: "Shermer High School",
      address: {
        street: "46  Boat Lane",
        street2: "",
        city: "Rhewl",
        county: "",
        postcode: "LL15 8WG"
      },
      date: "2018-11-1",
      specification: "specification.docx",
      evaluation: [
        "Case study",
        "Presentation"
      ],
      essential: {
        one: "Have security clearance",
        two: "Provide support after installation"
      },
      nice: {
        one: "Work outside of school hours"
      },
      published: "false",
      review: "true",
      response: "12",
      responses: [
        {
          name: "Gekko & Co",
          address: "Alpha House, Lawnswood Business Park, Leeds, LS16 6QY",
          phone: "01632 960918",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Genco",
          address: "82  Ponteland Rd, Houston, PA6 6LE",
          phone: "020 8438 6900",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Krusty Krab",
          address: "Kings Yard, Bury Lane, Rickmansworth, WD3 1DN",
          phone: "01437 768881",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Sterling Cooper",
          address: "14 Bedford Way, North Shields, NE29 6RX",
          phone: "0161 669 6438",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Soylent",
          address: "47a, Upper Bar, Newport, TF10 7AP",
          phone: "01253 7911778",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Hooli",
          address: "16-18, Hinton Road, Hereford, HR2 6BL",
          phone: "01432 261047",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Good Burger",
          address: "5 Upper Frog St, Tenby, SA70 7JD",
          phone: "01834 849690",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Wayne Enterprises",
          address: "292A Southwell Road East, Mansfield, NG21 0EB",
          phone: "01623 792944",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Stark Industries",
          address: "Rayridge House, Swinbourne Rd, Basildon, SS13 1QA",
          phone: "028 8676 5900",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Acme Corp.",
          address: "189 High St, Egham, TW20 9ED",
          phone: "01784 437611",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Wonka Industries",
          address: "Enterprise House, 411a, Warrington Road, Warrington, WA3 5SW",
          phone: "01925 764586",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        },
        {
          name: "Cyberdyne Systems",
          address: "123 Wake Road, SH0 KNG",
          phone: "0113 295 1112",
          essentialone: "All our staff have security clearance and have experience of working in schools.",
          essentialtwo: "We offer a full support for all our work. Our fittings are guarenteed for 10 years, with phone and call-out support if needed.",
          niceone: "We offer flexible working hours and are happy to arrange the project during school holidays."
        }
      ]
    },

    // Examples for supplier side
    {
      title: "Upgrade school computers",
      category: "ICT",
      summary: "We are a small primary school with 250 pupils. We want to replace our current outdated desktop computers with new machines, ideally more portable and interactive.",
      name: "Willow Park Primary",
      address: {
        street: "37  Netherpark Crescent",
        street2: "",
        city: "Stearsby",
        county: "",
        postcode: "YO6 1NJ"
      },
      date: "2019-1-12",
      specification: "specification.docx",
      evaluation: [
        "Case study",
        "Presentation"
      ],
      essential: {
        two: "Provide support after installation"
      },
      published: "false",
      review: "false"
    },
    {
      title: "Printers and scanners contract",
      category: "Printers, copiers and multi-functional devices (MFDs)",
      summary: "We want quotes for a new printer and copier contract. Must include toner and on-going support.",
      name: "Pine Hills Academy",
      address: {
        street: "114  South Crescent",
        street2: "",
        city: "Pine Hills",
        county: "",
        postcode: "LN12 7PG"
      },
      date: "2019-1-14",
      specification: "specification.docx",
      evaluation: [
        "Case study",
        "Presentation"
      ],
      essential: {
        two: "Provide support after installation"
      },
      published: "false",
      review: "false"
    },
    {
      title: "Supply teacher management",
      category: "Recruitment",
      summary: "Looking for suppliers available for hiring of all temporary and fixed term teaching staff.",
      name: "Greenfield High",
      address: {
        street: "75  Church Way",
        street2: "",
        city: "Brae",
        county: "",
        postcode: "IV24 2NU"
      },
      date: "2019-1-14",
      specification: "specification.docx",
      evaluation: [
        "Case study",
        "Presentation"
      ],
      essential: {
        two: "Provide support after installation"
      },
      published: "false",
      review: "false"
    }
  ]

}
