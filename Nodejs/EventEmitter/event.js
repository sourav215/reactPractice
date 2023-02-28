const events = require('events');

const emitter = new events.EventEmitter();

// Event Listener
emitter.on("myEvent", ()=>{
    console.log("This is my event emitter")
})

// Event Emitter
emitter.emit("myEvent");