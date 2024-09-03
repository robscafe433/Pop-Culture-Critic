const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(
          process.env.DB_NAME,
          process.env.DB_PASSWORD,
          process.env.DB_USER,
          {
              host: 'localhost',
              // port: 3306,
              port: 5432,
              dialect: 'postgres',
          }
      );

module.exports = sequelize;
