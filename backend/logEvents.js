const { default: mongoose } = require("mongoose")

require("./schema/eventSchema");
const eventModel = mongoose.model("Events")

const logEvents = async (action) => {
    const foundAction = action

    if(foundAction == "on"){

        // create or construct a on object
        const eventOn = await eventModel.create({
            Event,
            time,
        });
        console.log(eventOn);

        // save a on document into mongodb
        await eventOn.save();
    }

    if(foundAction == "off"){

          // create or construct a on object
          const eventOn = await eventModel.create({
            Event,
            time,
        });
        console.log(eventOn);

        // save a on document into mongodb
        await eventOn.save();
    }

    if(foundAction == "trigger"){

          // create or construct a on object
          const eventOn = await eventModel.create({
            Event,
            time,
        });
        console.log(eventOn);

        // save a on document into mongodb
        await eventOn.save();
    }
}

module.exports = logEvents;