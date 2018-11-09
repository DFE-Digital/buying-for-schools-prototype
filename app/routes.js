const express = require('express')
const router = express.Router()
const marked = require('marked')

// Add your routes here - above the module.exports line


// Set service name
// router.get('/service*', function(req, res, next){
//   res.locals['serviceName'] = ''
//
//   next()
// })

// Check if catalogue
router.get('/service/check-catalogue', function (req, res) {
  const type = req.session.data['type']
  const category = req.session.data['category']

  if (type == "Goods" && (category == "ICT" || category == "Office supplies")) {
    res.redirect('/service/catalogue/confirmation')
  } else {
    res.redirect('/service/method')
  }

})


// Check if framework
router.get('/service/check-method', function (req, res) {
  const method = req.session.data['method']

  if (method == "Framework") {
    res.redirect('/service/framework/confirmation')
  } else {
    res.redirect('/service/budget')
  }

})





module.exports = router
