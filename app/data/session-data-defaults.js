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
    {
      title: "A robust and enduring alarm system installing",
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
    }
  ]

}
