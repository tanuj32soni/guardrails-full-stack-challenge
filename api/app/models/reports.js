const Sequelize = require('sequelize')

const ReportSchema = (sequelize) => {
  return sequelize.define('report', {
    status: {
      type: Sequelize.ENUM('QUEUED', 'IN-PROGRESS', 'SUCCESS', 'FAILURE'),
      defaultValue: 'QUEUED',
      allowNull: false
    },
    repository_name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    findings: {
      type: Sequelize.JSONB,
      defaultValue: '{ "findings": [] }',
      allowNull: false
    },
    queued_at: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    scanning_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    finished_at: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    timestamps: true,
    createdAt: false,
    updatedAt: 'updated_at'
  })
}

module.exports = ReportSchema
