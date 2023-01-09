logEvents.js
const mongoose = require("mongoose")

const event = require("./schema/eventSchema")


const logEvents = async (action) => {
    const foundAction = action


    if(foundAction == "on"){

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

    if(foundAction == "off"){

        // create ot construct a off object
        console.log(".....create or construct a off object")
        const eventOff = await event.eventModel.create({
            event: "off",
            time: new Date().getTime(),
        });

        // save a on document into mongodb
        await eventOff.save( (savedResult, err) => {
            if(err) {
                console.log("Err while daving on doc", err)
            }
            console.log("saved off doc into mongodb ", savedResult._id)
        });
    

    }

    if(foundAction == "trigger"){

        // create or construct a on object
        console.log("##create or construct a trigger object")
        const eventTrigger = await event.eventModel.create({
            event: "trigger",
            time: new Date().getTime(),
        });

        // save a on document into mongodb
        await eventTrigger.save( (savedResult, err) => {
            if(err) {
                console.log("Err while daving trigger doc", err)
            }
            console.log("saved trigger doc into mongodb ", savedResult._id)
        });

    }

}

module.exports = logEvents;


