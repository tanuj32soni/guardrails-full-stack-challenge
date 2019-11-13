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

function listScans () {
  return Joi.object().keys({
    page: Joi.number().default(1),
    count: Joi.number().default(10)
  })
}

function getScan () {
  return Joi.object().keys({
    scanId: Joi.number().required()
  })
}

module.exports = { createScan, listScans, getScan }
