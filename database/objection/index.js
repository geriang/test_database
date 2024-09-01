const { Model } = require('objection');
const knex = require('knex')({
    client: process.env['DB_CLIENT'],
    connection: {
      host: process.env['DB_HOST'] || '127.0.0.1',
      port: process.env['DB_PORT'], 
      user: process.env['DB_USERNAME'],
      password: process.env['DB_PASSWORD'],
      database: process.env['DB_DATABASE'],
      timezone: process.env['DB_TIMEZONE'],
  // ssl : true is for connecting to external database
      ssl: false
    }
  });
// Bind all Objection.js models to the Knex instance
Model.knex(knex);

module.exports = { knex, Model};