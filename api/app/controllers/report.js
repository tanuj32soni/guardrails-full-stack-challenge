const Responder = require('../../lib/expressResponder')

class ReportController {
  static async add (req, res) {
    Responder.created(res, 'Report Created')
  }

  static async list (req, res) {
    Responder.success(res, 'Report History')
  }
}

module.exports = ReportController
