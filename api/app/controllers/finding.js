const Responder = require('../../lib/expressResponder')

class FindingController {
  static async get (req, res) {
    Responder.success(res, 'finding')
  }
}

module.exports = FindingController
