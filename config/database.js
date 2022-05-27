const env = process.env.NODE_ENV || 'development';
const knexFile = require('../knexfile');
const knex = require('knex')(knexFile[env]);

module.exports = knex;