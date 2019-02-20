const express = require('express')
const router = express.Router()
const marked = require('marked')

// Add your routes here - above the module.exports line


// On start again delete session data
router.get('/start-again', function (req, res) {
  req.session.destroy()
  res.redirect('/service/type')
})

// Check if lease
router.get('/service/category', function (req, res, next) {
  if (req.session.data['type'] == "Leasing goods") {
    res.render('service/outcome')
  } else {
    next()
  }
})

// Check if catalogue
router.get('/service/check-category', function (req, res) {
  const category = req.session.data['category']

  if (category == "Energy and utilities") {
    res.redirect('/service/sub-category')
  } else {
    res.redirect('/service/outcome')
  }

})


// Check if electricity to test multiple outcomes
router.get('/service/multi-check', function (req, res) {
  const subcategory = req.session.data['category-energy']

  if (subcategory == "Electricity") {
    res.redirect('/service/multiple-outcomes')
  } else {
    res.redirect('/service/outcome')
  }

})





module.exports = router
