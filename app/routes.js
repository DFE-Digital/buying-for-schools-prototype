const express = require('express')
const router = express.Router()
const marked = require('marked')

// Add your routes here - above the module.exports line


// Delete session data
router.get('/', function (req, res, next) {
  req.session.destroy()
  next()
})
router.get('/service/start', function (req, res, next) {
  req.session.destroy()
  next()
})
router.get('/start-again', function (req, res) {
  req.session.destroy()
  res.redirect('/service/type')
})


// Check eligability
router.get('/service/eligability', function (req, res, next) {
  if (req.session.data['spend'] == "No") {
    res.redirect('/service/ineligable')
  } else {
    res.redirect('/service/framework-benefits')
  }
})


// Check if it should go direct to outcome or sub-categories
router.get('/service/check-category', function (req, res) {
  const category = req.session.data['category']
  const bundle = req.session.data['bundle']

  if (category == "Furniture" || category == "Office supplies" || category == "Legal" || category == "Professional") {
    res.redirect('/service/outcome')
  } else if (category == "Facilities management and estates") {
    if (bundle == null) {
      res.redirect('/service/bundle')
    } else if (bundle == "Yes") {
      res.redirect('/service/outcome')
    } else {
      res.redirect('/service/sub-category')
    }
  } else {
    res.redirect('/service/sub-category')
  }

})

// Check if it should go direct to outcome or USP
router.get('/service/check-sub-category', function (req, res) {
  const sub = req.session.data['sub-category']

  if (sub == "Software" || sub == "Hardware") {
    res.redirect('/service/catalogue')
  } else {
    res.redirect('/service/outcome')
  }

})



router.get('/service/check-catalogue', function (req, res) {
  const catalogue = req.session.data['catalogue']

  if (catalogue == "Yes") {
    res.redirect('/service/outcome')
  } else {
    res.redirect('/service/multiple-outcomes')
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
