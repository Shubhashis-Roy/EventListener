app.js
const express = require('express')
const cors = require('cors')
const captureEvent = require('./index')
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config()

const app = express()

// connect to DB 
const connection = require("./connection")
connection.connectToDb()

app.use(express.json());
app.use(cors())


const checkHeath = (req, res) => {
      
  console.log("server is up")
  res.status(200).json({ 
    message: "Server is up...'",
})
}


const logEvents = require('./logEvents'); 
const postEventData = (req, res) => {
  res.send(req.body);
}

const appController = require("./app.controller")

app.get('/', checkHeath)

app.post("/handleEvent", appController.handleClicked)

app.get("/allEvents", appController.getAllEvents)

app.get("/oneEvent", appController.getOneEventByID)

app.post("/postEventData", postEventData)



mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true, 
  })
  .then( () => {
    console.log("connected, mongodb");
  })
  .catch( (e) => console.log(e));



const port = process.env.PORT || 4000
app.listen(port, (err) => {
    if(err){
        console.log("Err in app ", err);
        process.exit()
    }
    console.log("app is running in  ", port)

})