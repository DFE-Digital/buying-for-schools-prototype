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

// On start again delete session data
router.get('/start-again', function (req, res) {
  req.session.destroy()
  res.redirect('/service/index')
})

// Check if catalogue
router.get('/service/check-category', function (req, res) {
  const type = req.session.data['type']
  const category = req.session.data['category']

  if (type == "Goods" && (category == "ICT" || category == "Office supplies")) {
    res.redirect('/service/catalogue/confirmation')
  } else if (category == "Energy and utilities") {
    res.redirect('/service/sub-category')
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
