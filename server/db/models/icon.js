const Sequelize = require('sequelize')
const db = require('../db')

const Icon = db.define('icon', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  source: {
    type: Sequelize.STRING
  }
})

module.exports = Icon
