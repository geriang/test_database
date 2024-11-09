const { Model } = require("../objection/index");

class ProductTable extends Model {
  // Define the table name that this model maps to
  static get tableName() {
    return "product_table";
  }

  static get idColumn(){
    return "id";
  }

  static get relationMappings(){
    const TransactionTable = require("./TransactionTable");

    return {
      transactions:{
        relation: Model.HasManyRelation,
        modelClass: TransactionTable,
        join: {
          from: "product_table.id",
          to: "transaction_table.product_id"
        }
      }
    }
  }
  
  
  // Optional: You can define other static methods or properties here
  // For example, JSON schema, validation, or computed properties
}

module.exports = ProductTable;


