const { of } = require('await-of')
const { Report } = require('./../models')
const validations = require('./../validations/schema')
const Responder = require('../../lib/expressResponder')
const BadRequestError = require('../errors/badRequestError')

class FindingController {
  static async get (req, res) {
    const schema = validations.getScan()
    const { error, value } = schema.validate(req.params)

    if (error) {
      return Responder.operationFailed(res, error)
    }

    const attributes = ['id', 'status', 'repository_name', 'findings', 'queued_at', 'scanning_at', 'finished_at']
    const [report, dbError] = await of(Report.findOne({ where: { id: value.scanId }, attributes, raw: true }))

    if (dbError) {
      return Responder.operationFailed(res, dbError)
    }

    if (!report) {
      return Responder.operationFailed(res, new BadRequestError('Report Not Found'))
    }

    Responder.success(res, report)
  }
}

module.exports = FindingController
