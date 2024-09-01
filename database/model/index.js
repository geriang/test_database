const { Model } = require('objection');

class Product extends Model {
  // Define the table name that this model maps to
  static get tableName() {
    return 'product';
  }
  
  // Optional: You can define other static methods or properties here
  // For example, JSON schema, validation, or computed properties
}

module.exports = Product;