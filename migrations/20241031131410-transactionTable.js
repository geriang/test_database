'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  await db.createTable("transaction_table", {
    id: { type: "int", primaryKey: true, autoIncrement: true },
    product_id: { type: "int", notNull: true },
    date: { type: "datetime", notNull: true },
    enquirer_name: { type: "string", length: "100", notNull: true},
    quantity: { type: "int", notNull: true },
    unit: { type: "int", notNull: true},
    handled_by: { type: "string", length: "50", notNull: true},
    created_at: { type: "datetime", notNull: true },
    updated_at: { type: "datetime", notNull: true }
  });
  

  // https://db-migrate.readthedocs.io/en/latest/API/SQL/#addforeignkey
  await db.addForeignKey("transaction_table", "product_table", "product_table_transaction_table_id_fk", {
    "product_id": "id", 
    }, {
      onDelete: "CASCADE", 
      onUpdate: "CASCADE",
    });

  return null;
};

exports.down = async function(db) {
  await db.removeForeignKey("transaction_table", "product_table_transaction_table_id_fk");
  await db.dropTable("transaction_table"); 
  return null;
};

exports._meta = {
  "version": 1
};
