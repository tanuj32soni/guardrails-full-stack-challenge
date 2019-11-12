'use strict'

const Sequelize = require('sequelize')
const logger = require('./../lib/logger')

/**
 * Actions summary:
 *
 * createTable "reports", deps: []
 *
 **/

const info = {
  revision: 1,
  name: 'create-model-report',
  created: '2019-11-12T08:30:34.008Z',
  comment: ''
}

const migrationCommands = [{
  fn: 'createTable',
  params: [
    'reports',
    {
      id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('QUEUED', 'IN-PROGRESS', 'SUCCESS', 'FAILURE'),
        field: 'status',
        allowNull: false,
        defaultValue: 'QUEUED'
      },
      repository_name: {
        type: Sequelize.STRING,
        field: 'repository_name',
        allowNull: true
      },
      findings: {
        type: Sequelize.JSONB,
        field: 'findings',
        allowNull: false,
        defaultValue: '{ "findings": [] }'
      },
      queued_at: {
        type: Sequelize.DATE,
        field: 'queued_at',
        allowNull: false,
        defaultValue: Sequelize.Literal
      },
      scanning_at: {
        type: Sequelize.DATE,
        field: 'scanning_at',
        allowNull: true
      },
      finished_at: {
        type: Sequelize.DATE,
        field: 'finished_at',
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        field: 'updated_at',
        allowNull: false
      }
    },
    {}
  ]
}]

module.exports = {
  pos: 0,
  up: function (queryInterface, Sequelize) {
    let index = this.pos
    return new Promise(function (resolve, reject) {
      function next () {
        if (index < migrationCommands.length) {
          const command = migrationCommands[index]
          logger.info('[#' + index + '] execute: ' + command.fn)
          index++
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject)
        } else { resolve() }
      }
      next()
    })
  },
  info: info
}
