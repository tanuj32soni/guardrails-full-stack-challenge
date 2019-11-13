const { of } = require('await-of')
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
    const schema = validations.listScans()
    const { error, value } = schema.validate(req.query)

    if (error) {
      return Responder.operationFailed(res, error)
    }

    const { page, count } = value

    const offset = (page - 1) * count
    const limit = count

    const attributes = ['id', 'status', 'repository_name', 'findings', 'queued_at', 'scanning_at', 'finished_at']

    const [[scans, totalScans], dbError] = await of(Promise.all([
      Report.findAll({ attributes, limit, offset }),
      Report.count()
    ]))

    if (dbError) {
      return Responder.operationFailed(res, dbError)
    }

    Responder.success(res, {
      scans,
      page,
      max_page: Math.ceil(totalScans / count),
      fetched_transactions: scans.length,
      total_transactions: totalScans
    })
  }
}

module.exports = ReportController
