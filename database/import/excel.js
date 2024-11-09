const XLSX = require("xlsx")
const Knex = require('../objection/index');
const ProductTable = require('../model/ProductTable');

function readExcelFile (filepath){
    const workbook = XLSX.readFile(filepath);
    const sheetName = workbook.SheetNames[0];
    const workSheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(workSheet)
    console.log(jsonData)
    return jsonData
}

async function importDataToDB(filePath) {
  try {
    const jsonData = readExcelFile(filePath);
    const formatDate = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

    // Loop through each row in the JSON data and insert it into the database
    for (const data of jsonData) {
      await ProductTable.query().insert({
        product_code: data.product_code, // Use your Excel column headers as object keys
        product_name: data.product_name,
        specific_price: data.specific_price,
        adhoc_price: data.adhoc_price,
        stock_count: data.stock_count,
        created_at: formatDate(),
        updated_at: formatDate()
        // Map other fields as necessary
      });
    }

    console.log('Data imported successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    await Knex.dbClient.destroy(); // Close the database connection
  }
}

importDataToDB("product.xlsx")