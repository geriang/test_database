'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */

const formatDate = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  await db.createTable('products', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    productCode: { type: 'string', length: '20' },
    productName: { type: 'string', length: '255', notNull: true },
    minPrice: { type: 'real'},
    stockPrice: { type: 'real', notNull: true },
    adhocPrice: { type: 'real', notNull: true },
    uom: { type: 'string', length: '50'},
    productColour: { type: 'string', length: '50'},
    created_at: { type: 'datetime', notNull: true },
    updated_at: { type: 'datetime', notNull: true }
  });

  await db.insert('products',{
    productCode:'XPDLP3', 
    productName:'LAUNDRY PODS 3-IN-1 [50PCS/BOX]', 
    minPrice: 7.00, 
    stockPrice: 7.60, 
    adhocPrice: 8.00, 
    uom:'CAN', 
    productColour:'MULTI',
    created_at:formatDate(), 
    updated_at:formatDate()
  });

  await db.insert('products',{
    productCode:'CHEM26D', 
    productName:'ALUMINIUM OXIDE (20 KG)', 
    minPrice: 50.00, 
    stockPrice: 55.00, 
    adhocPrice: 60.00, 
    uom:'PCK', 
    productColour:'WHITE',
    created_at:formatDate(), 
    updated_at:formatDate()
  });

  await db.insert('products',{
    productCode:'WS0206', 
    productName:'WRAP SEAL WS0206 - QUICK REPAIR KIT FOR PIPE LEAKS 2" X 6"  (50MM X 1.8M)', 
    minPrice: 4.00, 
    stockPrice: 6.00, 
    adhocPrice: 10.00, 
    uom:'KIT', 
    productColour:'WHITE',
    created_at:formatDate(), 
    updated_at:formatDate()
  });
};

exports.down = async function(db) {
  return await db.dropTable('products');
};

exports._meta = {
  "version": 1
};
