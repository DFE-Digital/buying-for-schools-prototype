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
      "id": "100876",
      "title": "A robust and enduring alarm system installing",
      "summary": "Install a new wired alarm system with the required number of sensors, sounders and master panel. Use the existing sounders and sensors but install a new master alarm panel. Install a new wireless system with the required number of sensors, sounders and master panel.",
      "date": {
        "day": "11",
        "month": "12",
        "year": "2018"
      },
      "name": "St Christophers School",
      "address": {
        "street": "Building A",
        "street2": "123 School Road",
        "city": "Schooltown",
        "county": "South Schoolshire",
        "postcode": "SK0 0LL"
      }
    },

    {
      "id": "100877",
      "title": "A robust and enduring alarm system installing 2",
      "summary": "Install a new wired alarm system with the required number of sensors, sounders and master panel. Use the existing sounders and sensors but install a new master alarm panel. Install a new wireless system with the required number of sensors, sounders and master panel.",
      "date": {
        "day": "11",
        "month": "12",
        "year": "2018"
      },
      "name": "St Christophers School",
      "address": {
        "street": "Building A",
        "street2": "123 School Road",
        "city": "Schooltown",
        "county": "South Schoolshire",
        "postcode": "SK0 0LL"
      }
    }
  ]

}
