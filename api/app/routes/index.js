const initReportRoutes = require('./report')

function initRoutes (app) {
  app.use('/reports', initReportRoutes())
}

module.exports = initRoutes
