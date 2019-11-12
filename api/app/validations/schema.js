const Joi = require('@hapi/joi')

function createScan () {
  return Joi.object().keys({
    status: Joi.string().valid('QUEUED', 'IN-PROGRESS', 'SUCCESS', 'FAILURE').required(),
    repository_name: Joi.string().required(),
    findings: Joi.any().required(),
    queued_at: Joi.date().required(),
    scanning_at: Joi.date(),
    finished_at: Joi.date()
  })
}

module.exports = { createScan }
