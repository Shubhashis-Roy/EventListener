eventSchema.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
        event : String,
        time : { type: Number, 
                default: (new Date()).getTime() 
            } 
    });

const eventModel = mongoose.model("Event", EventSchema);
module.exports = {
    eventModel : eventModel
}