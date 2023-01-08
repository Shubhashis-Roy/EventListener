const logEvents = require('./logEvents');

const EvenEmitter = require('events');

class MyEmitter extends EvenEmitter {};

const myEmitter = new MyEmitter();

const captureEvent = (event) => {
    console.log("event.action", event)
}

myEmitter.addListener('log', captureEvent)

myEmitter.on(
    'log', 
    captureEvent
)

module.exports = { 
    captureEvent : captureEvent()
}