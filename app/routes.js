const express = require('express')
const router = express.Router()
const marked = require('marked')

// Add your routes here - above the module.exports line

// Set service name based on sub folders for different prototypes
router.get('/create-specification*', function(req, res, next){
  res.locals['serviceName'] = 'Create a school purchase specification'

  next()
})
router.get('/find-supplier*', function(req, res, next){
  res.locals['serviceName'] = 'Find a supplier for a school'

  next()
})









// SPRINT ONE

// On start check prototype options
router.get('/create-specification/start', function(req, res, next){
  const options = req.session.data['prototype-options']

  if (options == 'add-data') {
    req.session.data['multiple-schools'] = 'No'
    req.session.data['school-name'] = 'St Christopher\'s School'
    req.session.data['school-address-line-1'] = 'Building A'
    req.session.data['school-address-line-2'] = '123 School Road'
    req.session.data['school-address-town'] = 'Schooltown'
    req.session.data['school-address-county'] = 'South Schoolshire'
    req.session.data['school-address-postcode'] = 'SK0 0LL'
    req.session.data['school-pupils'] = '1000'
    req.session.data['contract-type'] = 'One-off purchase'
    req.session.data['purchase-date-day'] = '31'
    req.session.data['purchase-date-month'] = '7'
    req.session.data['purchase-date-year'] = '2019'
    req.session.data['budget'] = '10000'
    req.session.data['contract-title'] = 'We require a robust and enduring alarm system installing'
    req.session.data['contract-description'] = 'Please provide quotes for the following options:\n\n1. Install a new wired alarm system with the required number of sensors, sounders and master panel\n2. Use the existing sounders and sensors but install a new master alarm panel\n3. Install a new wireless system with the required number of sensors, sounders and master panel.'
    req.session.data['contact-name'] = 'Joe Bloggs'
    req.session.data['contact-options'] = 'Email'
    req.session.data['contact-email'] = 'joe@stchristophers.edu.uk'
    req.session.data['response-type'] = 'Responses should be sent electronically and should include:\n\n1. Confirmation that you are able to offer the required service\n2. A full breakdown of fees\n3. 2 references from other schools'
    req.session.data['response-assessment'] = 'Suppliers will be assessed against cost and their references.'
  }

  next()
})





router.post('/create-specification/requirements/dates', function (req, res){
  const type = req.session.data['contract-type']

  if (type == 'One-off purchase') {
    res.render('create-specification/requirements/purchase-date')
  } else {
    res.render('create-specification/requirements/service-dates')
  }

})



// Render markdown for contract requirements on CYA page
// router.post('/create-specification/requirements/check-your-answers', function (req, res){
//
//   req.session.data['contract-requirements-rendered'] = marked(req.session.data['contract-requirements'])
//
//   res.redirect('/create-specification/requirements/check-your-answers')
//
// })

// Render markdown for contract requirements on preview page
// router.post('/create-specification/preview/index', function (req, res){
//
//   req.session.data['contract-requirements-rendered'] = marked(req.session.data['contract-requirements'])
//
//   res.redirect('/create-specification/preview/index')
//
// })









// SPRINT TWO

// Method routing
router.post('/find-supplier/method', function (req, res){
  const budget = req.session.data['budget']

  if (budget < 10000) {
    res.render('find-supplier/method-low-spend')
  } else {
    res.render('find-supplier/method-framework')
  }

})





module.exports = router
