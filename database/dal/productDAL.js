const Product_Table = require("../model/index");

// const Product = require('../model/Product');

exports.getAllProducts = async () => {
  try {
    const allProducts = await Product_Table.query().select(
      'id',
      'productCode',
      'productName',
      'minPrice',
      'stockPrice',
      'adhocPrice',
      'uom',
      'productColour',
      'created_at',
      'updated_at'
    );
    return allProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};