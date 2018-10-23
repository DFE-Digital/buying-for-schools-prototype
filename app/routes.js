const express = require('express')
const router = express.Router()
const marked = require('marked')

// Add your routes here - above the module.exports line


// VERSION 1
// Set service name based on sub folders for different prototypes
router.get('/v1/find-supplier*', function(req, res, next){
  res.locals['serviceName'] = 'Find a supplier for a school'

  next()
})

// Method routing
router.post('/v1/find-supplier/method', function (req, res){
  const budget = req.session.data['budget']

  if (budget < 10000) {
    res.redirect('/v1/find-supplier/method-low-spend')
  } else {
    res.redirect('/v1/find-supplier/method-framework')
  }

})






// VERSION 2
// Set service name based on sub folders for different prototypes
router.get('/v2/find-framework*', function(req, res, next){
  res.locals['serviceName'] = 'Find a framework for a school'
  res.locals['serviceUrl'] = '/v2/find-framework/start'

  next()
})
router.get('/v2/find-supplier*', function(req, res, next){
  res.locals['serviceName'] = 'Schools contract finder'
  res.locals['serviceUrl'] = '/v2/find-supplier/start'

  next()
})

// VERSION 3
// Set service name based on sub folders for different prototypes
router.get('/v3/find-framework*', function(req, res, next){
  res.locals['serviceName'] = 'Find a framework for a school'
  res.locals['serviceUrl'] = '/v2/find-framework/start'

  next()
})
router.get('/v3/find-supplier*', function(req, res, next){
  res.locals['serviceName'] = 'Schools contract finder'
  res.locals['serviceUrl'] = '/v2/find-supplier/start'

  next()
})





module.exports = router
