const ProductTable = require("../model/ProductTable");


exports.getAllProducts = async () => {
  try {
    const allProducts = await ProductTable.query().select(
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