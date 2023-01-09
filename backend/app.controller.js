app.controller.js
const event = require("./schema/eventSchema")

const handleClicked = (req, res, next) => {
    try{


        console.log("Found ", req.body)
          console.log("--------------action------ ", req && req.body && req.body.action ? req.body.action : " action not found" )

          // check if req body contains a key called action
          if(req && req.body && req.body.action){

            const foundAction = req.body.action

            switch(foundAction){

              case "on":
                console.log("on handler called")

                //create a method and call eventHandler
                const saveOnEventIntoDB = async() => {
                    try{

                        // create or construct a on object
                        const eventOn = await event.eventModel.create({
                            event: "on",
                            time: new Date().getTime(),
                        });
                        console.log(eventOn);

                        // save a on document into mongodb
                        await eventOn.save( (savedResult, err) => {
                            if(err) {
                                console.log("Err while daving on doc", err)
                            }
                            console.log("saved on doc into mongodb ", savedResult._id)
                        });
                    }
                    catch(err){
                        console.log("Err in saveOnEventIntoDB", err )
                    }
                }

                saveOnEventIntoDB()
                break;

              case "off":
                console.log("off handler called")

                //create a method and call eventHandler
                  const saveOffEventIntoDB = async() => {
                    try{
                        // create or construct a on object
                        const eventOn = await event.eventModel.create({
                            event: "off",
                            time: new Date().getTime(),
                        });
                        console.log(eventOn);

                        // save a on document into mongodb
                        await eventOn.save( (savedResult, err) => {
                            if(err) {
                                console.log("Err while saving OFF event into DB", err)
                            }
                            console.log("saved OFF doc into mongodb ", savedResult)
                        });

                    } catch(err){
                        console.log("Err in saveOffEventIntoDB", err)
                    }
                  }
                  saveOffEventIntoDB()
                break;
              case "trigger":
                console.log("trigger handler called")

                //create a trigger and call your eventHandler
                  const saveTriggerEventIntoDB = async() => {
                    try{
                    // create or construct a on object
                    const eventOn = await event.eventModel.create({
                        event: "trigger",
                        time: new Date().getTime(),
                    });
                    console.log(eventOn);

                    // save a on document into mongodb
                    await eventOn.save( (savedResult, err) => {
                        if(err) {
                            console.log("Err while saving trigger doc", err)
                        }
                        console.log("saved trigger doc into mongodb ", savedResult._id)
                    });

                } catch(err){
                    console.log("Err in saveOffEventIntoDB", err)
                }
                }
                saveTriggerEventIntoDB()
                break;
            }


          }

    }
    catch(err){
        console.log("Err in handleClicked", err)
    }
}

const getAllEvents = async() => {
    try{
        console.log("getting all")
        const allSavedEvents = await event.eventModel.find({})
        return allSavedEvents
    } catch(err){
        console.log("Err in getAllEvents", err)
        return false
    }
}

const getOneEventByID = async( eventId ) => {
    try{
        const foundEvent = await event.eventModel.find({ _id: eventId })
        return foundEvent
    } catch(err){
        console.log("Err in getOneEventByID", err)
        return false
    }
}

module.exports = {
        handleClicked :  handleClicked,
        getAllEvents : getAllEvents,
        getOneEventByID : getOneEventByID
  };