const { Report } = require('./../models')
const validations = require('./../validations/schema')
const Responder = require('../../lib/expressResponder')
const BadRequestError = require('../errors/badRequestError')

class ReportController {
  static async add (req, res) {
    const schema = validations.createScan()
    const { error, value } = schema.validate(req.body)

    const reportDetails = value

    if (error) {
      const reason = error.details[0].message.replace(new RegExp('"', 'g'), "'")
      return Responder.operationFailed(res, new BadRequestError(reason))
    }

    const reportExists = await Report.count({ where: { repository_name: req.body.repository_name } })
    if (reportExists) {
      return Responder.operationFailed(res, new BadRequestError('Report is already Registered!'))
    }

    const report = new Report(reportDetails)

    await report.save()

    Responder.created(res, { status: 'Report Created' })
  }

  static async list (req, res) {
    Responder.success(res, 'Report History')
  }
}

module.exports = ReportController
