// import data from other JS files
const names = require('./4-names') // path to where the data is located
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
require('./7-mind-grenade')



sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)