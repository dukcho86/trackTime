const router = require('express').Router()
const {Activity} = require('../db/models')

// route to serve up all activity
router.get('/', async (req, res, next) => {
  try {
    const activity = await Activity.findAll()
    if (activity) {
      res.status(200).json(activity)
    } else {
      res.status(404).json('No activity found in database')
    }
  } catch (err) {
    next(err)
  }
})

// route to search by Id
router.get('/:id', async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id)
    if (activity) {
      res.status(200).json(activity)
    } else {
      res.status(404).json('This activity is not found in database')
    }
  } catch (err) {
    next(err)
  }
})

// route to create new activity
router.post('/', async (req, res, next) => {
  try {
    const activity = await Activity.create(req.body)
    if (activity) {
      res.status(201).json(activity)
    } else {
      res.status(404)
    }
  } catch (err) {
    next(err)
  }
})

// route to update an existing activity
router.put('/:id', async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id)
    const updatedActivity = await activity.update(req.body)
    if (updatedActivity) {
      res.status(200).json(updatedActivity)
    } else {
      res.status(404)
    }
  } catch (err) {
    next(err)
  }
})

// route to remove activity
router.delete('/:id', async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id)
    if (activity) {
      await activity.destroy()
      res.sendStatus(204)
    } else {
      res.status(404)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
