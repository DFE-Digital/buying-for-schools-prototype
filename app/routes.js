const express = require('express')
const router = express.Router()
const marked = require('marked')

// Add your routes here - above the module.exports line

// VERSION 3
// Set service name based on sub folders for different prototypes
router.get('/v3*', function(req, res, next){
  res.locals['serviceName'] = 'Schools Marketplace'
  res.locals['serviceUrl'] = '/v3/index'


  // Starts at 1 as title is pre-set to that, they have to enter a title to get to the task-list
  var completeTrue = 1

  if (req.session.data['complete-school'] == "true") {completeTrue++}
  if (req.session.data['complete-description'] == "true") {completeTrue++}
  if (req.session.data['complete-upload'] == "true") {completeTrue++}
  if (req.session.data['complete-evaluation'] == "true") {completeTrue++}

  res.locals['completeTotal'] = completeTrue

  next()
})

// Check complete tags and increase total for task list
router.get('/v3/create/task-list', function(req, res, next){


  next()
})

// Render all opportunities
router.get('/v3/opportunities/', function (req, res, next) {
  const data = req.session.data['opportunities']

  res.locals.opportunities = data
  next()
})

// Render users requirements
router.get('/v3/account', function (req, res, next) {
  const data = req.session.data['opportunities']
  // .filter(opportunity => opportunity.published === true)

  res.locals.opportunities = data
  next()
})

// Save new opportunities
router.get('/v3/create/confirmation', function (req, res, next) {
  const data = req.session.data['opportunities']
  const newItem = Object.assign({
    id: Math.floor((Math.random() * 999999)),
    title: req.session.data['title'],
    summary: req.session.data['summary'],
    budget: req.session.data['budget'],
    name: req.session.data['school-name'],
    address: {
      street: req.session.data['school-address-line-1'],
      street2: req.session.data['school-address-line-2'],
      city: req.session.data['school-address-town'],
      county: req.session.data['school-address-county'],
      postcode: req.session.data['school-address-postcode'],
    },
    date: req.session.data['closing-date-year'] + "-" + req.session.data['closing-date-month'] + "-" + req.session.data['closing-date-day'],
    evaluation: req.session.data['eval-how'],
    essential: {
      one: req.session.data['essential-1'],
      two: req.session.data['essential-2'],
      three: req.session.data['essential-3'],
      four: req.session.data['essential-4'],
      five: req.session.data['essential-5']
    },
    nice: {
      one: req.session.data['nice-1'],
      two: req.session.data['nice-2'],
      three: req.session.data['nice-3'],
      four: req.session.data['nice-4'],
      five: req.session.data['nice-5']
    },
    published: "true"
  })
  data.push(newItem)

  delete req.session.data['title']
  delete req.session.data['summary']
  delete req.session.data['budget']
  delete req.session.data['school-name']
  delete req.session.data['school-address-line-1']
  delete req.session.data['school-address-line-2']
  delete req.session.data['school-address-town']
  delete req.session.data['school-address-county']
  delete req.session.data['school-address-postcode']
  delete req.session.data['closing-date-year']
  delete req.session.data['closing-date-month']
  delete req.session.data['closing-date-day']
  delete req.session.data['eval-how']
  delete req.session.data['essential-1']
  delete req.session.data['essential-2']
  delete req.session.data['essential-3']
  delete req.session.data['essential-4']
  delete req.session.data['essential-5']
  delete req.session.data['nice-1']
  delete req.session.data['nice-2']
  delete req.session.data['nice-3']
  delete req.session.data['nice-4']
  delete req.session.data['nice-5']
  req.session.data['complete-school'] = "false"
  req.session.data['complete-description'] = "false"
  req.session.data['complete-upload'] = "false"
  req.session.data['complete-evaluation'] = "false"
  req.session.data['published'] = "true"
  next()
})





module.exports = router
