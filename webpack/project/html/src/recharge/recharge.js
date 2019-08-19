const layout = require('../layouts/layout.js');
const content = require('./recharge.ejs');
const pageTitle = 'top up and get free coins everyday!';
const packageId = 2;

module.exports = layout.init(pageTitle, packageId).run(content({ pageTitle }));