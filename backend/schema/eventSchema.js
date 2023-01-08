const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
    {
        Event : String,
        time : { type: Number, 
                default: (new Date()).getTime() } 
    },
    {
        collation: "Events"
    }
);

mongoose.model("Events", EventSchema);