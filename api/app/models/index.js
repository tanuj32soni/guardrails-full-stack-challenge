require('dotenv').config()

const Sequelize = require('sequelize')
const ReportSchema = require('./reports')

const dbsettings = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  pool: {
    max: 40,
    min: 0,
    idle: 10000
  },
  define: {
    underscored: true
  }
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  dbsettings
)

const Report = ReportSchema(sequelize)

module.exports = {
  Report,
  sequelize,
  Sequelize
}
