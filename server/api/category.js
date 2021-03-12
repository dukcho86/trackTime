const router = require('express').Router()
const {Category} = require('../db/models')

// route to serve all category
router.get('/', async (req, res, next) => {
  try {
    const category = await Category.findAll()
    if (category) {
      res.status(200).json(category)
    } else {
      res.status(404).json('No category found in database')
    }
    res.json(category)
  } catch (err) {
    next(err)
  }
})

module.exports = router
