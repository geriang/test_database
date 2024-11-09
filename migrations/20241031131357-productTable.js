'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */

// const formatDate = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  await db.createTable('product_table', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    product_code: { type: 'string', length: '20' },
    product_name: { type: 'string', length: '255', notNull: true },
    specific_price: { type: 'real', notNull: true },
    adhoc_price: { type: 'real', notNull: true },
    stock_count: { type: "int"},
    created_at: { type: 'datetime', notNull: true },
    updated_at: { type: 'datetime', notNull: true }
  });

  return null
};

exports.down = async function(db) {
  await db.dropTable("product_table");
  return null
};

exports._meta = {
  "version": 1
};
