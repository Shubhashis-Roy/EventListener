const express = require('express')
const cors = require('cors')
const captureEvent = require('./index')
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config()

const app = express()

app.use(express.json());
app.use(cors())

const checkHeath = (req, res) => {
      
  console.log("server is up")
  res.status(200).json({ 
    message: "Server is up...'",
})
}

const handleClicked = (req, res, next) => {
    try{

        console.log("Found ", req.body)

          console.log("--------------action----------------   ", req && req.body && req.body.action ? req.body.action : " action not found" )

          if(req && req.body && req.body.action){

            const foundAction = req.body.action
            switch(foundAction){
              case "on":
                console.log("on handler called")
                break;

              case "off":
                console.log("off handler called")
                break;

              case "trigger":
                console.log("trigger handler called")
                break;
            }
          }
    }
    catch(err){
        console.log("Err in handleClicked", err)
    }
    }

const logEvents = require('./logEvents'); 
const postEventData = (req, res) => {
  res.send(req.body);
}

app.get('/', checkHeath)
app.post("/handleEvent", handleClicked)
app.post("/postEventData", postEventData)

// Data base connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true, 
  })
  .then( () => {
    console.log("connected, mongodb");
  })
  .catch( (e) => console.log(e));
  

const port = process.env.PORT || 3000
app.listen(port, (err) => {

    if(err){
        console.log("Err in app ", err);
        process.exit()
    }
    console.log("app is running in  ", port)

})