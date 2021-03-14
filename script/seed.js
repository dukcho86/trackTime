'use strict'

const db = require('../server/db')
const {User, Category} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const categories = await Promise.all([
    Category.create({
      name: 'Sleep',
      color: '#cc99ff'
    }),
    Category.create({
      name: 'Work',
      color: '#ff0066'
    }),
    Category.create({
      name: 'Eat',
      color: '#ffff00'
    }),
    Category.create({
      name: 'Read',
      color: '#99ff33'
    }),
    Category.create({
      name: 'Study',
      color: '#3333cc'
    }),
    Category.create({
      name: 'Entertainment',
      color: '#006600'
    }),
    Category.create({
      name: 'Workout',
      color: '#00ffcc'
    }),
    Category.create({
      name: 'Housework',
      color: '#666633'
    }),
    Category.create({
      name: 'Shop',
      color: '#99ff66'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
