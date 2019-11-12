const express = require('express')

const ReportController = require('../controllers/report')
const FindingController = require('../controllers/finding')

function initReportRoutes () {
  const ReportRouter = express.Router()

  ReportRouter.post('/', ReportController.add)
  ReportRouter.get('/', ReportController.list)
  ReportRouter.get('/:scanId/status', FindingController.get)

  return ReportRouter
}

module.exports = initReportRoutes
