const productData = require('../database/dal/productDAL');


class ProductService {

  displayAllProduct = async () => {
    const allProducts = await productData.getAllProducts()
    return allProducts
  }

  // createNewUser = (username,password,email) => {
  //   return userData.createUser(username,password,email)
  // };

  // createNewGoogleUser = (googleId, username, email, firstName, lastName) => {
  //   return userData.createGoogleUser(googleId, username, email, firstName, lastName)
  // };

  // createNewClient = (userId, nric, name, block, roadName, postalCode, floor, unit, residentStatus, country, mobile, email ) => {
  //   return clientData.createClient(userId, nric, name, block, roadName, postalCode, floor, unit, residentStatus, country, mobile, email)
  // };

  // verifyClientByUserId = (userId) => {
  //   return clientData.getClientByUserId(userId)
  // };

  // verifyUserByEmail = (email) => {
  //   return userData.getUserByEmail(email);
  // };

  // verifyUserByUsernamePw = (username, password)=>{
  //   return userData.verify(username, password);
  // };

  // getClientDashBoardData = async(client_id)=>{
  //   return paymentData.getFullDetailforDashboard(client_id)
  // };
 
  }

module.exports = ProductService;