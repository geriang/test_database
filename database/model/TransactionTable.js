const { Model } = require("../objection/index");

class TransactionTable extends Model {
  // Define the table name that this model maps to
  static get tableName() {
    return "transaction_table";
  }

  static get idColumn(){
    return "id";
  }

  static get relationMappings(){
    const ProductTable = require("./ProductTable");

    return {
      transactions:{
        relation: Model.BelongsToOneRelation,
        modelClass: ProductTable,
        join: {
          from: "transaction_table.product_id",
          to: "product_table.id"
        }
      }
    }
  }
  
  
  // Optional: You can define other static methods or properties here
  // For example, JSON schema, validation, or computed properties
}

module.exports = TransactionTable;


