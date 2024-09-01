const { Model } = require('../objection/index');

class Product_Table extends Model {
  // Define the table name that this model maps to
  static get tableName() {
    return 'products';
  }
  
  // Optional: You can define other static methods or properties here
  // For example, JSON schema, validation, or computed properties
}

module.exports = Product_Table;


