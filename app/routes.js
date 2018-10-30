const express = require('express')
const router = express.Router()
const marked = require('marked')

// Add your routes here - above the module.exports line

// VERSION 3
// Set service name based on sub folders for different prototypes
router.get('/v3*', function(req, res, next){
  res.locals['serviceName'] = 'Schools Marketplace'
  res.locals['serviceUrl'] = '/v3/index'

  next()
})

// Check complete tags and increase total for task list
router.get('/v3/create/task-list', function(req, res, next){
  // Starts at 1 as title is pre-set to that, they have to enter a title to get to the task-list
  var completeTrue = 1

  if (req.session.data['complete-school'] == "true") {completeTrue++}
  if (req.session.data['complete-description'] == "true") {completeTrue++}
  if (req.session.data['complete-upload'] == "true") {completeTrue++}

  res.locals['completeTotal'] = completeTrue

  next()
})

// Render all opportunities
router.get('/v3/opportunities/', function (req, res, next) {
  const data = req.session.data['opportunities']

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
    name: req.session.data['school-name']
  })

  data.push(newItem)
  next()
})





module.exports = router
