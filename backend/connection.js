connection.js
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const handleError = (mongoError => {
    if(mongoError){
        console.log("handleError ", mongoError)
    }
})

const connectToDb = () => {
    const mongoURI = process.env.DB_URL ? process.env.DB_URL  : console.log("DB_URL not Found")
    mongoose.connect(mongoURI).
    catch(error => handleError(error));
}

mongoose.connection.on('error', err => {
    handleError(err);
  });

  
  module.exports = {
    connectToDb,
  }

