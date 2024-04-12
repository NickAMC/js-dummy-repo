// CommonJS, every fule is module by default
// Modules - Encapsulated Code (only share minimum)

// local
const secret = 'Super Secret';
// share with rest of the application
const john = 'john';
const peter = 'peter';

// make the data available to import in the app file
module.exports = {john, peter}