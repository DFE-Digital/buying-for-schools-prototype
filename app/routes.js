const express = require('express')
const router = express.Router()
const marked = require('marked')

// Add your routes here - above the module.exports line

// Set service name based on sub folders for different prototypes
router.get('/create-specification*', function(req, res, next){
  res.locals['serviceName'] = 'Create a school purchase specification'
  next()
})




// Render markdown for contract requirements on CYA page
router.post('/create-specification/requirements/check-your-answers', function (req, res){

  req.session.data['contract-requirements-rendered'] = marked(req.session.data['contract-requirements'])

  res.redirect('/create-specification/requirements/check-your-answers')

})

// Render markdown for contract requirements on preview page
router.post('/create-specification/preview/index', function (req, res){

  req.session.data['contract-requirements-rendered'] = marked(req.session.data['contract-requirements'])

  res.redirect('/create-specification/preview/index')

})





module.exports = router
